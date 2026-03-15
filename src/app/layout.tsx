import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import PerformanceProfiler from "@/components/PerformanceProfiler";

export const metadata: Metadata = {
  title: "Eugene Teu",
  description: "Software Engineer & Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen flex flex-col font-mono"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme={undefined}
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <PerformanceProfiler />
        </ThemeProvider>
      </body>
    </html>
  );
}
