// export default function HomePage() {
//   const [clicked, setClicked] = useState < boolean > false;
//   return (
//     <>
//       {RoundedAvatar()}
//       <FadeInWrapper>
//         <Hero />
//       </FadeInWrapper>
//       {/* {RoundedAvatar()} */}
//       <div className={`max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto mt-6`}>
//         <div className="md:mx-auto md:w-fit">
//           <BentoBox>
//             <FadeInWrapper>{Intro()}</FadeInWrapper>
//           </BentoBox>
//           <Divider />
//           <BentoBox>
//             <FadeInWrapper>{Experience()}</FadeInWrapper>
//           </BentoBox>
//           <Divider />
//           <BentoBox>
//             <FadeInWrapper>{Skills()}</FadeInWrapper>
//           </BentoBox>
//           <Divider />
//           <BentoBox>
//             <FadeInWrapper>{Socials()}</FadeInWrapper>
//           </BentoBox>
//           <div className="pb-6"></div>
//         </div>
//       </div>
//     </>
//   );
// }

export function Divider() {
  return <div className="animate-fadeIn my-6"></div>;
}

export function Hero() {
  return (
    <>
      <div className={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
        <article className="mx-auto prose prose-md prose-normal dark:prose-invert">
          <div className="text-center">
            <h1 className="mb-1">Eugene Teu</h1>
            <h2 className="mt-2">Software Engineer</h2>
          </div>
        </article>
      </div>
    </>
  );
}

export function Socials() {
  return (
    <div className={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
      <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
        <h1>Socials</h1>
        <div className="not-prose flex justify-center">
          <a href="https://www.linkedin.com/in/eugeneteu">
            <img
              alt="linkedin"
              className="w-16 h-16 mx-2"
              src="/linkedin.svg"
            />
          </a>
          <a href="https://github.com/EugeneTeu">
            <img alt="github" className="w-16 h-16 mx-2" src="/github.svg" />
          </a>
        </div>
        <h4>© 2024 Eugene Teu. All rights reserved.</h4>
      </article>
    </div>
  );
}

export function Skills() {
  return (
    <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <h1>Skills</h1>
      <div className="not-prose  sd:flex-col md:flex-row">
        <div className="basis-1 md:basis-1/2">
          <h4>Web Technologies</h4>
          <ul>
            <li label="ReactJS" custom="bg-blue-800" />
            <li label="Javascript" custom="bg-indigo-500" />
            <li label="HTML/CSS" custom="bg-indigo-500" />
            <li label="SolidJS" custom="bg-blue-500" />
            <li label="Relay" custom="bg-purple-800" />
            <li label="VueJS" custom="bg-purple-700" />
            <li label="Graphql" custom="bg-yellow-600" />
            <li label="NodeJS" custom="bg-orange-500" />
            <li label="ExpressJS" custom="bg-red-800" />
            <li label="NestJS" custom="bg-red-700" />
            <li label="Lucene/Elasticsearch" custom="bg-orange-800" />
          </ul>
        </div>
        <div className="basis-1 md:basis-1/2">
          <h4>Languages</h4>
          <li label="Typescript" custom="bg-blue-800" />
          <li label="Javascript" custom="bg-indigo-600" />
          <li label="Java" custom="bg-yellow-800" />
          <li label="C++" custom="bg-indigo-500" />
          <li label="Python" custom="bg-purple-700" />
          <li label="Hack/php" custom="bg-indigo-800" />
        </div>
      </div>
      <h3>Using the newest Technologies excites me</h3>
    </article>
  );
}

export function Experience() {
  return (
    <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-1/2">
          <h1>Experience</h1>
          <p>
            I have extensive experience in the software engineering field and
            have a proven ability in delivering polished products.
          </p>
          <p>
            I am currently working at Meta as a full stack software engineer
          </p>
        </div>
        <div className="basis-full md:basis-1/2">
          <ul>
            <div
              backgroundDark="dark:bg-gray-700"
              backgroundLight="bg-gray-100"
            >
              <div className="px-6">
                <li>
                  <b>Meta</b>, Full Stack Software Engineer (2022-)
                </li>
              </div>
            </div>
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
    <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
      <h1>About</h1>
      <p>
        Hello there, my name is Eugene Teu and I am currently a full time
        Software Engineer based in sunny Singapore
      </p>
      <p>
        I graduated in 2022 with a Bachelor Of Computing (Computer Science) from
        the National University Of Singapore
      </p>
      <h3>I specialise in Full Stack Web Development</h3>
    </article>
  );
}

export function RoundedAvatar() {
  return (
    <div className="w-full flex mt-6">
      <div className="mx-auto">
        <img
          alt="profile picture of eugene teu"
          className="dark:animate-pulseWhite animate-pulseBlack object-cover p-1 w-32 h-32 rounded-full ring-2 dark:ring-gray-700"
          src="/profile-2.jpg"
        />
      </div>
    </div>
  );
}
