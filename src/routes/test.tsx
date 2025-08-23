import { JSXElement } from "solid-js";
import Carousel from "~/components/Carousel";
import Timeline from "~/components/timeline";
import { useSession } from "~/lib/sessionContext";

export default function Home(): JSXElement {
  return (
    <>
      <main>
        <div class="md:mx-auto md:w-fit px-3 h-screen">
          {/* <Timeline /> */}
          <div class="my-4" />
          {/* <Carousel /> */}
          <div class="my-4">
            <LoginState />
          </div>
        </div>
      </main>
    </>
  );
}

const LoginState = () => {
  const { session } = useSession();
  const sessionC = session();
  if (sessionC == null) {
    return <div>null session</div>;
  }
  return <div>Hello</div>;
};
