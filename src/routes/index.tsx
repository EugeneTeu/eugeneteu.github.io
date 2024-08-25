import { A } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";
import {
  Theme,
  ThemeProvider,
  useTheme,
} from "~/components/context/theme.context";

import {
  Divider,
  Experience,
  Hero,
  Intro,
  RoundedAvatar,
  Skills,
  Socials,
} from "~/content/content";
import BentoBox from "~/components/BentoBox";

export default function Home(): JSXElement {
  const [state] = useTheme();

  return (
    <main class="bg-white dark:bg-gray-900 min-h-screen">
      <div>
        <div class="pt-6">
          {RoundedAvatar()}
          <Hero />
          <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
            <div class="md:mx-auto md:w-fit">
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
        </div>
      </div>
    </main>
  );
}
