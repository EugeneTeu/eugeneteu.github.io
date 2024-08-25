import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { Theme, ThemeProvider } from "./components/context/theme.context";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <ThemeProvider>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </ThemeProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
