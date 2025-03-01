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
import Timeline from "~/components/timeline";

export default function Home(): JSXElement {
  return <Timeline />;
}
