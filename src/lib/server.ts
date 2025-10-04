import { redirect } from "@solidjs/router";
import {  useSession } from "vinxi/http";
export interface Session {
  id: number;
  email: string;
}

export const getSession = () => {
  return useSession<Session>({
    password: process.env.SESSION_SECRET!
  });
}

export const createSession = async (user: Session, redirectTo?: string) => {
  const validDest = redirectTo?.[0] === "/" && redirectTo[1] !== "/";
  const session = await getSession();
  await session.update(user);
  return redirect(validDest ? redirectTo : "/");
};


export const oauthSignIn = async (email: string, redirectTo?: string) => {
  const userSession = {
    id: 1,
    email: email
  }

  return createSession(userSession, redirectTo);
};
