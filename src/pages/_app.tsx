import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const robotoMono = Roboto_Mono({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-Roboto_Mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eugene Teu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`${robotoMono.variable}`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
