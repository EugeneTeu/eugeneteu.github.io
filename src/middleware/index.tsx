import { redirect } from "@solidjs/router";
import { createMiddleware } from "@solidjs/start/middleware";

const INTERNAL_ROUTE_WHITELIST = ["/test"];

function redirectOnDevOnlyRoute(urL: URL) {
  const isDevDomain = urL.hostname === "localhost";
  const path = urL.pathname;

  if (INTERNAL_ROUTE_WHITELIST.includes(path) && !isDevDomain) {
    throw redirect(urL.hostname);
  }
}

export default createMiddleware({
  onRequest: (event) => {
    const url = new URL(event.request.url);
    redirectOnDevOnlyRoute(url);
  },
});
