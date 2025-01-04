import BentoBox from "~/components/BentoBox";
import Tag from "~/components/Tag";

export function Divider() {
  return <div class="animate-fadeIn my-6"></div>;
}

export function Hero() {
  return (
    <>
      <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
        <article class="mx-auto prose prose-md prose-normal dark:prose-invert">
          <div class="text-center">
            <h1 class="mb-1">Eugene Teu</h1>
            <h2 class="mt-2 mb-0">Software Engineer</h2>
            <a class="dark:animate-textPulse mt-2 underline " href="/blog/2024">
              2024 year in review
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export function Socials() {
  return (
    <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
      <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
        <h1>Socials</h1>
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
      <h1>Skills</h1>
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
          <h1>Experience</h1>
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
      <h1>About</h1>
      <p>
        Hello! I'm Eugene Teu, a full-time Software Engineer based in sunny
        Singapore. I hold a Bachelor of Computing in Computer Science from the
        National University of Singapore, which I earned in 2022.
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
