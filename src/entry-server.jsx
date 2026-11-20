/**
 * Server entry used only at build time (scripts/prerender.mjs) to emit static
 * HTML for every public route, so crawlers and link previews get real content.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import { SUPPORTED_LANGS } from "./config/siteConfig";
import { pathFor, publishedRouteKeys } from "./i18n/routes";

export const routes = SUPPORTED_LANGS.flatMap((lang) =>
  publishedRouteKeys.map((key) => pathFor(lang, key)),
);

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}
