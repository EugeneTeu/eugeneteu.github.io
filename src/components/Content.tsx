import { A } from "@solidjs/router";
import { createMemo, createSignal, For, JSXElement } from "solid-js";

import CountUp from "~/components/CountUp";
import HeroLogo from "~/components/HeroLogo";
import Tag from "~/components/Tag";
import { Button } from "~/components/ui/Button";
import { PostMetaData, posts } from "~/data/posts";

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

  const contactMeComponent = (
    <div class="not-prose flex justify-start flex-wrap items-center">
      <Button
        class="text-black dark:text-white mr-2"
        variant="default"
        onClick={onClickOpenMailTo}
      >
        {"Email me"}
      </Button>
      <a href="https://www.linkedin.com/in/eugeneteu">
        <img alt="linkedin" class="w-8 h-8 mx-2" src="/linkedin.svg" />
      </a>
      <a href="https://github.com/EugeneTeu">
        <img alt="github" class="w-8 h-8 mx-2" src="/github.svg" />
      </a>
    </div>
  );

  return (
    <div class="lg:mt-16">
      <article class="prose prose-md prose-normal dark:prose-invert">
        <div class="max-w-[400px]">
          <h1 class="lg:text-[3.5rem] mb-0">
            <GradientText>Eugene Teu</GradientText>
          </h1>
          <h2 class="mt-1">Software Engineer based in Singapore</h2>
          <h3 class="mt-1">
            I currently work @ <span class="font-bold text-blue-500">Meta</span>
          </h3>
          <HeroLogo />
          <div class="mt-2">{contactMeComponent}</div>
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
        <h3>
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
    <article class="prose prose-md prose-normal dark:prose-invert">
      <h2>Blog</h2>
      <p>I write sometimes.</p>
      {getPaginatedBlogLinks()}
    </article>
  );
}

export function BlogBlurp() {
  return (
    <div class="flex p-4 w-full rounded-md border align-items-center">
      <article class="prose prose-md  prose-normal dark:prose-invert">
          <h3>Writings</h3>
          <p>I write sometimes</p>
      </article>
      <div class="ml-auto">
        <A href="writings">
          <Button variant="outline">Read</Button>
        </A>
      </div>
    </div>
  );
}

function formatDate(inputDate: string): string {
  // Create a new Date object from the input string
  const date = new Date(inputDate);

  // Define an array with the abbreviated month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month, day, and year from the date object
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Return the formatted date string
  return `${month} ${day}, ${year}`;
}

// paginate in the future
function getBlogLinks() {
  const sortedPosts = posts.sort((a, b) => {
    //date is YYYY-MM-DD
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <For each={sortedPosts} fallback={<></>}>
      {(post) => {
        const { slug, title, description, date } = post;
        return (
          <div>
            <a class="no-underline" href={`/blog/${slug}`}>
              <div class="rounded hover:animate-pulse">
                <h3 class="text-xl font-bold mb-0">{title}</h3>
                <h4>{formatDate(date)}</h4>
                <p class="mt-0">{description}</p>
              </div>
            </a>
            <div class="block my-3 w-full h-[2px] bg-gradient-to-b dark:bg-yellow-200 bg-black left-[50%]" />
          </div>
        );
      }}
    </For>
  );
}

function getPaginatedBlogLinks() {
  const PAGE_SIZE = 3;

  // State to manage the current page
  const [currentPage, setCurrentPage] = createSignal(1);

  // Sort posts once when the component mounts or allPosts changes
  const sortedPosts = createMemo(() => {
    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  });

  // Calculate the posts to display on the current page
  const paginatedPosts = createMemo(() => {
    const start = (currentPage() - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return sortedPosts().slice(start, end);
  });

  // Calculate total number of pages
  const totalPages = createMemo(() => {
    return Math.ceil(sortedPosts().length / PAGE_SIZE);
  });

  const goToNextPage = () => {
    if (currentPage() < totalPages()) {
      setCurrentPage(currentPage() + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage() > 1) {
      setCurrentPage(currentPage() - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <For each={paginatedPosts()} fallback={<p>No blog posts found.</p>}>
        {(post) => {
          const { slug, title, description, date } = post;
          return (
            <div>
              <A class="no-underline" href={`/blog/${slug}`}>
                <div class="rounded hover:animate-pulse">
                  <h3 class="text-xl font-bold mb-0">{title}</h3>
                  <h4>{formatDate(date)}</h4>
                  <p class="mt-0">{description}</p>
                </div>
              </A>
              <div class="block w-full h-[2px] bg-gradient-to-b dark:bg-yellow-200 bg-black left-[50%] mt-auto" />
            </div>
          );
        }}
      </For>

      {/* Pagination Controls */}
      <div class="flex justify-end items-center space-x-2 my-3">
        {/* Page number buttons */}
        <For each={Array.from({ length: totalPages() }, (_, i) => i + 1)}>
          {(pageNumber) => (
            <button
              onClick={() => goToPage(pageNumber)}
              class={`px-4 py-2 rounded-md ${
                currentPage() === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {pageNumber}
            </button>
          )}
        </For>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
      <article class="prose prose-md  prose-normal dark:prose-invert">
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
    <article class="prose prose-md  prose-normal dark:prose-invert">
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
    <article class="prose prose-md  prose-normal dark:prose-invert">
      <h2>Experience</h2>
      <div class="flex flex-col">
        <div class="basis-full">
          <p>
            I have extensive experience in the software engineering field, with
            a proven ability to deliver polished, high-quality products.
            Currently, I'm working at Meta as a Full Stack Software Engineer,
            where I continue to develop and refine my skills.
          </p>
        </div>
        <div class="basis-full">
          <ul>
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
      </div>
      <h3>I thrive in Collaborative Environments</h3>
    </article>
  );
}

export function Intro() {
  return (
    <article class="prose prose-md  prose-normal dark:prose-invert">
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
