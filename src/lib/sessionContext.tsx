import { createContext, useContext, type ParentProps } from "solid-js";
import {
  type AccessorWithLatest,
  useLocation,
  createAsync,
  useAction,
} from "@solidjs/router";

import type { Session } from "./server";
import { logout, querySession } from ".";

const Context = createContext<{
  session: AccessorWithLatest<Session | null | undefined>;
  signedIn: () => boolean;
  signOut: () => Promise<never>;
}>();

export default function SessionContext(props: ParentProps) {
  const location = useLocation();
  const session = createAsync(() => querySession(location.pathname), {
    deferStream: true,
  });
  const signOut = useAction(logout);
  const signedIn = () => Boolean(session()?.id);

  return (
    <Context.Provider
      value={{
        session,
        signedIn,
        signOut,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useSession() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useSession must be used within Session context");
  return context;
}
