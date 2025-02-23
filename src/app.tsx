import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import Nav from "~/components/Nav";
import "./app.css";
import { ThemeProvider } from "./components/context/theme.context";
import { MetaProvider, Title } from "@solidjs/meta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Eugene Teu</Title>
          <ThemeProvider>
            <div class="bg-white dark:bg-gray-900">
              <Nav />
              <Suspense>{props.children}</Suspense>
              <Footer />
            </div>
          </ThemeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
