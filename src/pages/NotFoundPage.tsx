import { Link } from "react-router-dom";
import { DEFAULT_LANG } from "../config/siteConfig";
import { getContent } from "../content";
import { pathFor } from "../i18n/routes";
import { SeoHead } from "../components/seo/SeoHead";
import { renderText } from "../components/ui/TodoMark";

export function NotFoundPage() {
  const content = getContent(DEFAULT_LANG);
  const home = pathFor(DEFAULT_LANG, "home");

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <SeoHead
        lang={DEFAULT_LANG}
        routeKey="home"
        title={`404 | Cal Masses`}
        description={content.ui.notFound.body}
        path="/404"
        noIndex
      />
      <h1 className="text-3xl font-light text-gray-900">
        {renderText(content.ui.notFound.title)}
      </h1>
      <p className="mt-4 text-gray-600">{renderText(content.ui.notFound.body)}</p>
      <Link
        to={home}
        className="mt-8 inline-flex rounded-full bg-[#556B2F] px-6 py-3 text-white"
      >
        {content.ui.notFound.back}
      </Link>
    </div>
  );
}
