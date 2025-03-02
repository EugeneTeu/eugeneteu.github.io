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
          <div class="md:mx-auto md:w-fit px-3">
            <Divider />
            <BentoBox>{Blog()}</BentoBox>
            <Divider />
            <BentoBox>{Intro()}</BentoBox>
            <Divider />
            <BentoBox>{Experience()}</BentoBox>
            <Divider />
            <BentoBox>{Skills()}</BentoBox>
          </div>
        </div>
      </main>
    </>
  );
}
