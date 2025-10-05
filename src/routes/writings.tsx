import { JSXElement } from "solid-js";
import { Blog } from "~/components/Content";

export default function Writings(): JSXElement {

  return (
    <>
      <main class="sm:mx-4 mx-8 pb-safe min-h-screen overflow-auto mb-10 max-w-screen-hl" >
        <div
          class={`flex pt-4 pb-4 flex-center justify-items-center align-item-center`}
        ><div class={`mx-auto min-w-[30vw]`}>
          {
            Blog()
          }
          </div>
        </div>
      </main>
    </>
  );
}
