import React from "react";
import { Hero, Experience, Skills, BlogBlurp, CareerHighlights } from "@/components/Content";
import BentoBox from "@/components/BentoBox";


export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20">
      <Hero />
      <div className="max-w-screen-xl mx-auto w-full px-4 lg:px-8 flex flex-col gap-4 mt-8">
        <BentoBox>
          <CareerHighlights />
        </BentoBox>
        <BentoBox>
          <Experience />
        </BentoBox>
        <BentoBox>
          <BlogBlurp />
        </BentoBox>
        <BentoBox>
          <Skills />
        </BentoBox>
      </div>
    </div>
  );
}
