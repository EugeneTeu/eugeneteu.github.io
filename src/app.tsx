import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { Theme, ThemeProvider } from "./components/context/theme.context";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Router
      root={(props) => (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </ThemeProvider>
        </QueryClientProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
