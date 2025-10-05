import { JSXElement, onMount } from "solid-js";
import {
  Blog,
  BlogBlurp,
  Divider,
  Experience,
  Hero,
  Intro,
  Skills,
} from "~/components/Content";
import BentoBox from "~/components/BentoBox";
import { Meta, Title } from "@solidjs/meta";

export default function Home(): JSXElement {
  const blogSection = <BentoBox>{BlogBlurp()}</BentoBox>;
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
          <div class="mx-auto w-fit px-3 flex flex-col animate-fadeInPageTransition">
            {blogSection}
            {experienceSection}
            {skillSection}
          </div>
        </div>
      </main>
    </>
  );
}
