import { JSXElement } from "solid-js";
import { useSession } from "~/lib/sessionContext";
import useOAuthLogin from "start-oauth/client";
export default function Logout(): JSXElement {
  return (
    <>
      <main>
        <div class="md:mx-auto md:w-fit px-3 h-screen">
          <div class="my-4">
            <LogoutWithGoogle />
          </div>
        </div>
      </main>
    </>
  );
}

const LogoutWithGoogle = () => {
  const { session, signOut } = useSession();
  const sessionC = session();

  return (
    <button
      class="flex items-center gap-2 bg-white border rounded-xl px-4 py-2 shadow hover:shadow-md"
      onClick={signOut}
    >
<span class="text-gray-700 font-medium">Sign Out</span>
    </button>
  );
};
