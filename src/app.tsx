import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import Nav from "~/components/Nav";
import "./app.css";
import { ThemeProvider } from "./components/context/theme.context";
import { MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Eugene Teu</Title>
          <ThemeProvider>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </ThemeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
