import { JSXElement } from "solid-js";
import Carousel from "~/components/Carousel";
import SignInButton from "~/components/SignInButton";
import Timeline from "~/components/timeline";

export default function Home(): JSXElement {
  return (
    <>
      <main>
        <div class="md:mx-auto md:w-fit px-3 h-screen">
          <SignInButton />
        </div>
      </main>
    </>
  );
}
