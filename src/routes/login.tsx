import { JSXElement } from "solid-js";
import Carousel from "~/components/Carousel";
import Timeline from "~/components/timeline";
import { useSession } from "~/lib/sessionContext";

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
  if (sessionC == null) {
    return <div>TODO: implement button here</div>;
  }
  return <div>Hello u are logged in, not really tho</div>;
};
