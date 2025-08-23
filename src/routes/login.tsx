import { JSXElement } from "solid-js";
import { useSession } from "~/lib/sessionContext";
import useOAuthLogin from "start-oauth/client";
export default function Login(): JSXElement {
  return (
    <>
      <main>
        <div class="md:mx-auto md:w-fit px-3 h-screen">
          <div class="my-4">
            <LoginWithGoogle />
          </div>
        </div>
      </main>
    </>
  );
}

const LoginWithGoogle = () => {
  const { session } = useSession();
  const sessionC = session();

 const login = useOAuthLogin();
 const href = login('google');

  const loginWithGoogleButton = (
    <a
      rel="external"
      href={href}
      class="flex items-center gap-2 bg-white border rounded-xl px-4 py-2 shadow hover:shadow-md"
    >
      <img src="/google-icon.svg" alt="Google" class="w-5 h-5" />
      <span class="text-gray-700 font-medium">Sign in with Google</span>
    </a>
  );


  if (sessionC == null) {
    return loginWithGoogleButton;
  }
  return <div>Hello u are logged in, not really tho</div>;
};
