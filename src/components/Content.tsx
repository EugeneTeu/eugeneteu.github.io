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
      <article className="prose prose-md  prose-normal dark:prose-invert">
        <h3>Writings</h3>
        <p>I write sometimes</p>
      </article>
      <div className="ml-auto">
        <Link href="writings"><Button variant="outline">Read</Button></Link>
      </div>
    </>
  );
}

export function Experience() {
  return (
    <article className="prose prose-md prose-normal dark:prose-invert w-full">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="flex flex-col gap-6">
        <p className="text-lg">
          I have extensive experience in the software engineering field, with
          a proven ability to deliver polished, high-quality products.
          Currently, I'm working at Meta as a Full Stack Software Engineer,
          where I continue to develop and refine my skills.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>
            <b>Meta</b>, Full Stack Software Engineer (2022-)
          </li>
          <li>
            <b>Coinhall</b>, Founding Engineer (2021-2022)
          </li>
          <li>
            <b>Sprinklr</b>, Backend Developer Intern (2021)
          </li>
          <li>
            <b>Shopee</b>, Backend Developer Intern (2021)
          </li>
          <li>
            <b>Shopee</b>, Frontend Developer Intern (2020)
          </li>
        </ul>
      </div>
      <h3 className="text-2xl font-semibold mt-8 italic">I thrive in Collaborative Environments</h3>
    </article>
  );
}

export function Skills() {
  return (
    <article className="prose prose-md prose-normal dark:prose-invert w-full">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">Web Technologies</h4>
          <div className="flex flex-wrap">
            <Tag label="ReactJS" custom="bg-blue-800" />
            <Tag label="Javascript" custom="bg-indigo-500" />
            <Tag label="HTML/CSS" custom="bg-indigo-500" />
            <Tag label="SolidJS" custom="bg-blue-500" />
            <Tag label="Relay" custom="bg-purple-800" />
            <Tag label="VueJS" custom="bg-purple-700" />
            <Tag label="Graphql" custom="bg-yellow-600" />
            <Tag label="NodeJS" custom="bg-orange-500" />
            <Tag label="ExpressJS" custom="bg-red-800" />
            <Tag label="NestJS" custom="bg-red-700" />
            <Tag label="Lucene/Elasticsearch" custom="bg-orange-800" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4">Languages</h4>
          <div className="flex flex-wrap">
            <Tag label="Typescript" custom="bg-blue-800" />
            <Tag label="Javascript" custom="bg-indigo-600" />
            <Tag label="Java" custom="bg-yellow-800" />
            <Tag label="C++" custom="bg-indigo-500" />
            <Tag label="Python" custom="bg-purple-700" />
            <Tag label="Hack/php" custom="bg-indigo-800" />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mt-8 italic">Using the newest Technologies excites me</h3>
    </article>
  );
}
