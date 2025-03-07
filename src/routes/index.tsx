import { JSXElement } from "solid-js";
import {
  Blog,
  Divider,
  Experience,
  Hero,
  Intro,
  Skills,
} from "~/content/content";
import BentoBox from "~/components/BentoBox";
import { Meta, Title } from "@solidjs/meta";

export default function Home(): JSXElement {
  const blogSection = <BentoBox>{Blog()}</BentoBox>;
  const introSection = <BentoBox>{Intro()}</BentoBox>;
  const experienceSection = <BentoBox>{Experience()}</BentoBox>;
  const skillSection = <BentoBox>{Skills()}</BentoBox>;

  return (
    <>
      <Title>Eugene Teu</Title>
      <Meta
        name="description"
        content="Explore Eugene Teu's portfolio of innovative projects, software
        engineering solutions, and insightful articles on modern web and
        software development."
      />
      <main>
        <div class={`mx-auto`}>
          <div class="">{Hero()}</div>
          <div class="mx-auto w-fit px-3 flex flex-col xl:hidden">
            {blogSection}
            {introSection}
            {experienceSection}
            {skillSection}
          </div>
          <div class="hidden xl:block">
            <div class="mx-auto w-fit px-3">
              <div class="flex flex-row gap-2 mb-8">
                <div class="flex-1">{introSection}</div>
                <div class="flex-1">{blogSection}</div>
              </div>
              {experienceSection}
              {skillSection}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
