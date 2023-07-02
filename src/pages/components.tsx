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
        <>test page wrappeer</>
      </PageWrapper>
    </>
  );
}
