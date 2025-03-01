import { A } from "@solidjs/router";
import { Component, JSXElement, onCleanup, onMount } from "solid-js";
import { clientOnly } from "@solidjs/start";
import {
  Theme,
  ThemeProvider,
  useTheme,
} from "~/components/context/theme.context";

import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import Draggable from "gsap/Draggable";

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
import Footer from "~/components/Footer";

function List({
  ref,
  children,
}: {
  ref: (el: HTMLLIElement) => void;
  children: JSXElement;
}): JSXElement {
  return (
    <li
      ref={ref}
      class="list-none p-0 m-0 w-12 h-12 text-center bg-[#9d7cce]  grid place-items-center rounded-lg"
    >
      {children}
    </li>
  );
}

export default function Timeline(): JSXElement {
  let containerRef: HTMLLIElement | undefined;

  onMount(() => {
    let hasEntered = false;
    let hasLeft = false;
    if (containerRef) {
      containerRef.addEventListener("mouseenter", () => {
        if (containerRef) {
          if (!hasEntered) {
            gsap.to(containerRef, {
              translateX: "160%",
              duration: 5,
              ease: "elastic",
            });
            hasEntered = true;
          }
        }
      });

      containerRef.addEventListener("mouseleave", () => {
        if (containerRef) {
          if (!hasLeft) {
            gsap.to(containerRef, {
              translateX: "-160%",
              duration: 5,
              ease: "elastic",
            });
          }
          hasLeft = true;
        }
      });
    }
  });

  return (
    <>
      <main>
        <div class={`pt-3 max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
          <div class="md:mx-auto md:w-fit h-screen">
            <div class="h-screen w-full overflow-hidden .gallery">
              <ul class="cards absolute w-28 h-28">
                <List ref={(el) => (containerRef = el)}>0</List>
              </ul>
            </div>
            <div class="drag-proxy"></div>
          </div>
        </div>
      </main>
    </>
  );
}
