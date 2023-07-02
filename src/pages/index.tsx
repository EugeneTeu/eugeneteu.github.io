import Head from "next/head";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import {
  ThemeContextProvider,
  useTheme,
} from "@/components/context/theme.context";
import Header from "@/components/Header.react";
import HomePage from "@/components/content/HomePage.react";
import PageWrapper from "@/components/PageWrapper.react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeContextProvider>
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    </ThemeContextProvider>
  );
}
