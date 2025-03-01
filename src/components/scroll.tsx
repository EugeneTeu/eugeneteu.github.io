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

gsap.registerPlugin(ScrollTrigger, Draggable);
let iteration = 0;

const spacing = 0.1;
const snapTime = gsap.utils.snap(spacing); // we'll use this to snapTime the playhead on the seamlessLoop
const cards = gsap.utils.toArray(".cards li");
const animateFunc = (element: Element) => {
  const tl = gsap.timeline();
  tl.fromTo(
    element,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      zIndex: 100,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: "power1.in",
      immediateRender: false,
    }
  ).fromTo(
    element,
    { xPercent: 400 },
    { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
    0
  );
  return tl;
};

const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
const playhead = { offset: 0 };
const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
const scrub = gsap.to(playhead, {
  // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
  offset: 0,
  onUpdate() {
    seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
  },
  duration: 0.5,
  ease: "power3",
  paused: true,
});

const trigger = ScrollTrigger.create({
  markers: true,
  start: 0,
  onUpdate(self) {
    let scroll = self.scroll();
    if (scroll > self.end - 1) {
      wrap(1, 2);
    } else if (scroll < 1 && self.direction < 0) {
      wrap(-1, self.end - 2);
    } else {
      scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
      scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
    }
  },
  end: "+=3000",
  pin: ".gallery",
});

const progressToScroll = (progress: number) =>
  gsap.utils.clamp(
    1,
    trigger.end - 1,
    gsap.utils.wrap(0, 1, progress) * trigger.end
  );
const wrap = (iterationDelta: number, scrollTo: number) => {
  iteration += iterationDelta;
  trigger.scroll(scrollTo);
  trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
};

// when the user stops scrolling, snap to the closest item.
ScrollTrigger.addEventListener("scrollEnd", () =>
  scrollToOffset(scrub.vars.offset)
);

// feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
function scrollToOffset(offset: number) {
  // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
  let snappedTime = snapTime(offset),
    progress =
      (snappedTime - seamlessLoop.duration() * iteration) /
      seamlessLoop.duration(),
    scroll = progressToScroll(progress);
  if (progress >= 1 || progress < 0) {
    return wrap(Math.floor(progress), scroll);
  }
  trigger.scroll(scroll);
}

function buildSeamlessLoop(
  items: [],
  spacing: number,
  animateFunc: (element: Element) => gsap.core.Timeline
) {
  let rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
    seamlessLoop = gsap.timeline({
      // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
      paused: true,
      repeat: -1, // to accommodate infinite scrolling/looping
      onRepeat() {
        // works around a super rare edge case bug that's fixed GSAP 3.6.1
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      },
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
      },
    }),
    cycleDuration = spacing * items.length,
    dur; // the duration of just one animateFunc() (we'll populate it in the .forEach() below...

  // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
  items
    .concat(items)
    .concat(items)
    .forEach((item, i) => {
      let anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur = anim.duration();
    });

  // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
  seamlessLoop.fromTo(
    rawSequence,
    {
      time: cycleDuration + (dur ? dur / 2 : 0),
    },
    {
      time: "+=" + cycleDuration,
      duration: cycleDuration,
      ease: "none",
    }
  );
  return seamlessLoop;
}

function List({ children }: { children: JSXElement }): JSXElement {
  return (
    <li class="list-none p-0 m-0 w-56 h-72 text-center leading-[18rem] text-2xl font-sans bg-[#9d7cce] absolute top-0 left-0 rounded-lg">
      {children}
    </li>
  );
}

export default function Scroll(): JSXElement {
  if (typeof window == "undefined") {
    return;
  }

  onMount(() => {
    trigger;
  });

  return (
    <>
      <main>
        <div class={`pt-3 max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
          <div class="md:mx-auto md:w-fit h-screen">
            <div class="h-screen w-full overflow-hidden .gallery">
              <ul class="cards absolute w-[14rem] h-[18rem] top-[40%] left-[50%] tra">
                <List>0</List>
                <List>1</List>
                <List>2</List>
                <List>3</List>
                <List>4</List>
                <List>5</List>
              </ul>
              {/* <div class="actions">
                <button class="prev">Prev</button>
                <button class="next">Next</button>
              </div> */}
            </div>
            <div class="drag-proxy"></div>
          </div>
        </div>
      </main>
    </>
  );
}
