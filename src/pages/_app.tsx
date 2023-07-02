import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eugene Teu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={spaceMono.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
