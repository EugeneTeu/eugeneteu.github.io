import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import {  Suspense } from "solid-js";

import Nav from "~/components/Nav";
import "./app.css";
import { ThemeProvider } from "./components/context/theme.context";
import { MetaProvider, Title } from "@solidjs/meta";
import Footer from "./components/Footer";
import PerformanceProfiler from "./components/PerformanceProfiler";
import { SessionProvider } from "@solid-mediakit/auth/client";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Eugene Teu</Title>
          <SessionProvider>
            <ThemeProvider>
              <div class="bg-white dark:bg-gray-900">
                <Nav />
                <Suspense>{props.children}</Suspense>
                <PerformanceProfiler />
                <Footer />
              </div>
            </ThemeProvider>
          </SessionProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
