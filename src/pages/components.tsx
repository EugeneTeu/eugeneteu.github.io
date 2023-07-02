import BentoBox from "@/components/BentoBox/BentoBox.react";
import Container from "@/components/Container.react";
import PageWrapper from "@/components/PageWrapper.react";
import Head from "next/head";

export default function Components() {
  return (
    <>
      <Head>
        <title>Eugene Teu Components</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageWrapper>
        <>
          <div className="mx-5 mt-5 w-100%">
            <h1>Bento box component</h1>
            <div className="mx-auto w-fit">
              <BentoBox>
                <>
                  <article className="mx-auto prose prose-md  prose-normal dark:prose-invert">
                    <div className="text-center">
                      <h1 className="mb-0">Eugene Teu</h1>
                      <h4 className="mt-1">Software Engineer</h4>
                      <h4 className="mt-1">Web Developer</h4>
                    </div>
                  </article>
                </>
              </BentoBox>
            </div>
          </div>
        </>
      </PageWrapper>
    </>
  );
}
