import { Construction } from "lucide-solid";
import { JSXElement } from "solid-js";
import BentoBox from "~/components/BentoBox";
import { Blog } from "~/content/content";

export default function BlogHome(): JSXElement {

  return (
    <>
      <main class="sm:mx-4 mx-8 bg-white dark:bg-gray-900 pb-safe min-h-screen overflow-auto mb-10 max-w-screen-hl" >
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
