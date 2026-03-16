"use client";

import React, { useState, useEffect, useMemo } from "react";
import Tag from "./Tag";
import { Button } from "./ui/Button";
import Link from 'next/link'

// --- Utility Functions ---

function daysWorked(startDate: string = "2022-07-11"): number {
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = today.getTime() - start.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// --- Components ---

const GradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="animate-pulse font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text inline-block">
      {children}
    </span>
  );
};

function HeroIntro() {
  const [count, setCount] = useState(0);
  const days = useMemo(() => daysWorked("2022-07-11"), []);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(days / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= days) {
        setCount(days);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [days]);

  return (
    <div className="flex flex-col items-start text-left py-4 lg:py-6">
      <div className="max-w-4xl">
        <div className="flex flex-col gap-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-0 leading-tight tracking-tighter text-foreground">
            <GradientText>Eugene Teu</GradientText>
          </h1>
          <p className="text-xl lg:text-2xl font-medium text-zinc-600 dark:text-zinc-400 -mt-1">
            Software Engineer @ <span className="text-blue-500 font-bold">Meta</span>
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl text-foreground opacity-90">
            Building software professionally for <span className="font-bold text-foreground tabular-nums">{count}</span> days.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl text-foreground opacity-90">
            <GradientText>Product Hybrid</GradientText> building at the edge of user experience and technical scale. Obsessed with the craft. Driven to build world-class.
          </p>
           <p className="text-lg lg:text-xl leading-relaxed max-w-3xl text-foreground opacity-90">
           Open to opportunities. <span className="font-bold">Let's connect.</span>
          </p>
          <div>
          <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="w-full bg-yellow-200 dark:bg-background border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-screen-xl mx-auto px-8">
        <HeroIntro />
      </div>
    </div>
  );
}

export function BlogBlurp() {
  return (
    <>
        <p className="text-3xl font-medium tracking-widest uppercase text-neutral-400 mb-5">
        Writings
        </p>
        
        <p className="text-sm font-medium tracking-widest  text-neutral-400 mb-5">
        I write sometimes
        </p>
        <div className="ml-auto text-sm ">
          <Link href="writings"><Button variant="outline">Read</Button></Link>
        </div>
      </>
    );
}

export function Experience() {

  const highlights = [
  {
    year: "2022-present",
    title: "Software Engineer at Meta",
    body: "IC3 to IC5 in 3.5 years.",
    last: false,
  },
  {
    year: "2021-2022",
    title: "Coinhall, Founding Engineer",
      body: "Had fun, learned a lot, built a lot. Left to join Facebook. Coinhall was eventually acquired",
    last: false,
  },
  {
    year: "2019-2021",
    title: "Internships at Shopee, Sprinklr",
    body: "Training in an pre AI era",
    last: true,
  }
];


  return <section className="py-4">
      {/* Section label */}
      <p className="text-3xl font-medium tracking-widest uppercase text-neutral-400 mb-5">
        Experience
      </p>



      {/* Timeline */}
      <div className="flex flex-col">
        {highlights.map((item) => (
          <div key={item.title} className="flex gap-0">
            {/* Left — dot + line */}
            <div className="flex flex-col items-center w-11 shrink-0">
              <div className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 shrink-0 mt-1.5" />
              {!item.last && (
                <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-1.5" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${!item.last ? "pb-10" : ""}`}>
              <p className="text-md text-neutral-400 mb-1">{item.year}</p>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-snug mb-1.5">
                {item.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {item.body}
            </p>

            </div>
          </div>
        ))}
      </div>
    </section>
}

const strengths = [
  {
    title: "Coding machine",
    body: "I ship fast and I ship clean. Speed without quality is just debt — I don't trade one for the other.",
  },
  {
    title: "Product hybrid",
    body: "I think in user experiences, not just systems. The best engineers know what they're building and why.",
  },
  {
    title: "Obsessed with what's new",
    body: "New technologies excite me. I'm always exploring what's next — whether that's a new framework, a new paradigm, or a new way to build.",
  },
  {
    title: "Outside the box",
    body: 'I see problems others don\'t. I look at "what ifs." and see possibilities, not just roadblocks. I find creative solutions to hard problems.',
  },
];
 
export  function Strengths() {
  return (
    <section className="py-4">
      <p className="text-3xl font-medium tracking-widest uppercase text-neutral-400 mb-8">
        Strengths
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
        {strengths.map((item) => (
          <div
            key={item.title}
            className="p-5 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 border-b border-r border-neutral-200 dark:border-neutral-800 last:border-b-0"
          >
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1.5 leading-snug">
              {item.title}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CareerHighlights() {

const highlights = [
  {
    year: "2023 — 2024",
    title: "Brought 3D to Meta.com",
    body: "Proposed an idea as a new grad, grew it into a 1.5-year team workstream with multiple projects. Owned creative direction and engineering end-to-end. Drove significant uplift in add-to-cart on Meta's commerce website across the flagships products like Quest 3 and Meta Ray-Bans.",
    badge: "Redefined expectations · IC3 → IC4",
    last: false,
  },
  {
    year: "2025",
    title: "Took a beta to general availability across Vietnam",
    body: "Took a beta-validated catalog ads onboarding idea and drove it to GA — working across multiple ads teams to successfully onboard partners across Vietnam. A lightweight solution that meaningfully expanded the addressable market for 3P SaaS platforms.",
    badge: "Significantly above expectations · IC4 → IC5",
    last: false,
  },
  {
    year: "Late 2024",
    title: "New to the team, shipped in 4 weeks",
    body: "Weeks into joining a new team, took on a high-stakes ads onboarding launch for Facebook. Rebuilt a large % of the codebase, navigated last-minute design and content pivots, and delivered on time.",
    badge: "Move fast",
    last: false,
  },
    {
    year: "End 2025",
    title: "Prototyped an AI productivity tool for MSL",
    body: "End to end productivity tool, working alongside senior level engineers (IC7/IC8) and MSL Researcher.",
    last: true,
    badge: "AI . Coding machine"
  },
];



  return (
    <section className="py-4">
      {/* Section label */}
      <p className="text-3xl font-medium tracking-widest uppercase text-neutral-400 mb-5">
        Career highlights
      </p>

      {/* Summary line */}
      <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
        Worked across multiple orgs at Meta, spanning web, iOS, and Android.
      </p>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 mb-8" />

      {/* Timeline */}
      <div className="flex flex-col">
        {highlights.map((item) => (
          <div key={item.title} className="flex gap-0">
            {/* Left — dot + line */}
            <div className="flex flex-col items-center w-11 shrink-0">
              <div className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 shrink-0 mt-1.5" />
              {!item.last && (
                <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-1.5" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${!item.last ? "pb-10" : ""}`}>
              <p className="text-md text-neutral-400 mb-1">{item.year}</p>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-snug mb-1.5">
                {item.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                {item.body}
              </p>
              {item.badge && (
                <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export function ContactButton() {
  const BOOKING_URL = "https://calendar.app.google/xxbusxeWeuJhap2E8";
 
   return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="2.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1 5.5h12" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 1v3M10 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
      Book a call
    </a>
  );

}

