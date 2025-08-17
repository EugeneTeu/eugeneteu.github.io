import { useAuth } from "@solid-mediakit/auth/client";
import { JSXElement, Match } from "solid-js";
import Carousel from "~/components/Carousel";
import SignInButton from "~/components/SignInButton";
import Timeline from "~/components/timeline";

export default function Home(): JSXElement {
  const auth = useAuth();


  return (
    <>
      <main>
        <div class="md:mx-auto md:w-fit px-3 h-screen">
          <Match when={auth.status() === 'unauthenticated'}>

            <SignInButton />
          </Match>
          <Match when={auth.status() === 'authenticated'}>
            <div>You are signed in</div>
          </Match>
        </div>
      </main>
    </>
  );
}
