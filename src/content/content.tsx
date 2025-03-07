import { For, JSXElement } from "solid-js";
import BentoBox from "~/components/BentoBox";

import CountUp from "~/components/CountUp";
import HeroLogo from "~/components/HeroLogo";
import Tag from "~/components/Tag";
import { Button } from "~/components/ui/Button";
import { posts } from "~/data/posts";

export function Divider() {
  return <div class="animate-fadeIn my-6"></div>;
}

const GradientText = ({ children }: { children: JSXElement }) => {
  return (
    <span class="animate-pulse font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
      {children}
    </span>
  );
};

function HeroIntro() {
  const onClickOpenMailTo = () => {
    window.location.href =
      "mailto:eugeneteu@gmail.com?subject=Hello there&body=Is this Eugene Teu";
  };

  return (
    <div class="lg:mt-16 mt-4">
      <article class="prose prose-md prose-normal dark:prose-invert">
        <div class="max-w-[400px]">
          <h1 class="lg:text-[3.5rem] mb-0">
            <GradientText>Eugene Teu</GradientText>
          </h1>
          <h2 class="mt-1">Software Engineer based in Singapore</h2>
          <h3 class="mt-1">
            I currently work @ <span class="animate-pulse font-bold">Meta</span>
          </h3>
          <HeroLogo />
          <div class="mt-2">
            <Button variant="default" onClick={onClickOpenMailTo}>
              {"Email me"}
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

function daysWorked(startDate: string = "2022-07-11"): number {
  const start = new Date(startDate);
  const today = new Date();

  // Calculate the difference in milliseconds
  const diffTime = today.getTime() - start.getTime();

  // Convert milliseconds to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

function CountDownComponent() {
  const days = daysWorked("2022-07-11");
  const dayWorked = CountUp({
    start: 0,
    end: days,
    timer: 5,
  });

  return (
    <div class="lg:mt-[25%]">
      <article class="prose prose-md prose-normal dark:prose-invert">
        <h3 class="">
          I've been building software professionally for{" "}
          <span class="animate-pulse">{dayWorked() + ""}</span> days
        </h3>
        <h4 class="">
          I'm a <GradientText>Product Hybrid</GradientText> who thrives where
          users and products collide—turning ideas into real, impactful
          experiences.
        </h4>
        <h3 class="">I'm driven to be world-class in everything I build.</h3>
      </article>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <div class={`lg:min-h-[50vh] flex w-full`}>
        <div
          class={`border-solid px-8 py-5 lg:py-10 w-full min-h-full dark:bg-black bg-yellow-200`}
        >
          <div class="max-w-screen-xl mx-auto h-full">
            <div class="flex flex-col lg:flex-row h-full align-top relative">
              <div class="lg:basis-2/3">{HeroIntro()}</div>
              <div class="block lg:hidden my-3 w-full h-[2px] bg-gradient-to-b dark:bg-yellow-200 bg-black left-[50%]"></div>
              <div class="hidden lg:block w-[2px] absolute mx-1 h-full bg-gradient-to-b dark:bg-yellow-200 bg-black left-[50%]"></div>
              <div class="lg:basis-1/3">{CountDownComponent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Blog() {
  return (
    <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <h2>Blog</h2>
      <p>I write sometimes.</p>
      {getBlogLinks()}
    </article>
  );
}

function parseDate(date: string) {
  return new Date(
    parseInt(date.slice(4)),
    parseInt(date.slice(2, 4)),
    parseInt(date.slice(0, 2))
  );
}

// paginate in the future
function getBlogLinks() {
  const sortedPosts = posts.sort((a, b) => {
    //date is DDMMYYYY
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return (
    <ul>
      <For each={sortedPosts} fallback={<></>}>
        {(post) => {
          const { slug, vanity } = post;
          return (
            <li>
              <a
                class="dark:animate-textPulse mt-2 underline"
                href={`/blog/${slug}`}
              >
                {vanity}
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

export function Socials() {
  return (
    <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
      <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
        <h2>Socials</h2>
        <div class="not-prose flex justify-center">
          <a href="https://www.linkedin.com/in/eugeneteu">
            <img alt="linkedin" class="w-16 h-16 mx-2" src="/linkedin.svg" />
          </a>
          <a href="https://github.com/EugeneTeu">
            <img alt="github" class="w-16 h-16 mx-2" src="/github.svg" />
          </a>
        </div>
        <h4>© 2024 Eugene Teu. All rights reserved.</h4>
      </article>
    </div>
  );
}

export function Skills() {
  return (
    <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <h2>Skills</h2>
      <div class="not-prose  sd:flex-col md:flex-row">
        <div class="basis-1 md:basis-1/2">
          <h4>Web Technologies</h4>
          <ul>
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
          </ul>
        </div>
        <div class="basis-1 md:basis-1/2">
          <h4>Languages</h4>
          <Tag label="Typescript" custom="bg-blue-800" />
          <Tag label="Javascript" custom="bg-indigo-600" />
          <Tag label="Java" custom="bg-yellow-800" />
          <Tag label="C++" custom="bg-indigo-500" />
          <Tag label="Python" custom="bg-purple-700" />
          <Tag label="Hack/php" custom="bg-indigo-800" />
        </div>
      </div>
      <h3>Using the newest Technologies excites me</h3>
    </article>
  );
}

export function Experience() {
  return (
    <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <div class="flex flex-col md:flex-row">
        <div class="basis-full md:basis-1/2">
          <h2>Experience</h2>
          <p>
            I have extensive experience in the software engineering field, with
            a proven ability to deliver polished, high-quality products.
            Currently, I'm working at Meta as a Full Stack Software Engineer,
            where I continue to develop and refine my skills.
          </p>
        </div>
        <div class="basis-full md:basis-1/2">
          <ul>
            <BentoBox
              backgroundDark="dark:bg-gray-700"
              backgroundLight="bg-gray-100"
            >
              <div class="px-6">
                <li>
                  <b>Meta</b>, Full Stack Software Engineer (2022-)
                </li>
              </div>
            </BentoBox>
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
      </div>
      <h3>I thrive in Collaborative Environments</h3>
    </article>
  );
}

export function Intro() {
  return (
    <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <h2>About</h2>
      <p>
        I'm Eugene Teu, a full-time Software Engineer based in sunny Singapore.
        I hold a Bachelor of Computing in Computer Science from the National
        University of Singapore, which I earned in 2022.
      </p>
      <h3>I specialise in Full Stack Web Development</h3>
    </article>
  );
}

export function RoundedAvatar() {
  return (
    <div class="w-full flex">
      <div class="mx-auto">
        <img
          alt="profile picture of eugene teu"
          class="dark:animate-pulseWhite animate-pulseBlack object-cover p-1 w-32 h-32 rounded-full ring-2 dark:ring-gray-700"
          src="./profile-2.jpg"
        />
      </div>
    </div>
  );
}
