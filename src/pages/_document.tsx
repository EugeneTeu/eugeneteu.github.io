import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/user.svg" />

        <meta property="og:title" content="Eugene Teu" />
        <meta name="twitter:title" content="Eugene Teu" />

        <meta name="description" content="Eugene Teu portfolio site" />
        <meta property="og:description" content="Eugene Teu portfolio site" />
        <meta name="twitter:description" content="Eugene Teu portfolio site" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
