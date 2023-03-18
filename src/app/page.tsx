"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Header } from "./components";
import { HomePage } from "./content";
import { ThemeContextProvider, useTheme } from "./context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode } = useTheme();
  return (
    <div className={`${mode}`}>
      <div className="bg-white dark:bg-gray-900">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}
