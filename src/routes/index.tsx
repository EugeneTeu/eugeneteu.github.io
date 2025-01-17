import { A } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";
import { clientOnly } from "@solidjs/start";
import {
  Theme,
  ThemeProvider,
  useTheme,
} from "~/components/context/theme.context";

import {
  Blog,
  Divider,
  Experience,
  Hero,
  Intro,
  Skills,
  Socials,
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

      <main class="bg-white dark:bg-gray-900 min-h-screen">
        <div class={`pt-3 max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
          <div class="md:mx-auto md:w-fit">
            {Hero()}
            <Divider />
            <BentoBox>{Blog()}</BentoBox>
            <Divider />
            <BentoBox>{Intro()}</BentoBox>
            <Divider />
            <BentoBox>{Experience()}</BentoBox>
            <Divider />
            <BentoBox>{Skills()}</BentoBox>
            <Divider />
            <BentoBox>{Socials()}</BentoBox>
            <div class="pb-6"></div>
          </div>
        </div>
      </main>
    </>
  );
}
