import { redirect } from "@solidjs/router";
import { createMiddleware } from "@solidjs/start/middleware";

const INTERNAL_ROUTE_WHITELIST = ["/test", "/blog"];

function redirectOnDevOnlyRoute(urL: URL) {
  const isDevDomain =
    urL.hostname === "localhost" || process.env.NODE_ENV === "development";
  const path = urL.pathname;

  if (INTERNAL_ROUTE_WHITELIST.includes(path) && !isDevDomain) {
    return redirect("/", 302);
  }
}

export default createMiddleware({
  onRequest: (event) => {
    const url = new URL(event.request.url);
    return redirectOnDevOnlyRoute(url);
  },
});
