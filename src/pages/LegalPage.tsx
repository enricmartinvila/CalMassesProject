import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { TodoMark } from "../components/ui/TodoMark";
import type { RouteKey } from "../i18n/routes";

type LegalKind = "aviso" | "privacidad" | "cookies";

const routeMap: Record<LegalKind, RouteKey> = {
  aviso: "avisoLegal",
  privacidad: "privacidad",
  cookies: "cookies",
};

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { lang, content, path } = useLang();
  const page = content.legal[kind];
  const routeKey = routeMap[kind];

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={routeKey}
        title={page.seo.title}
        description={page.seo.description}
        path={path(routeKey)}
        noIndex
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light text-gray-900 mb-8">{page.seo.h1}</h1>
        <div className="prose prose-gray max-w-none">
          {page.body.startsWith("TODO_") ? (
            <TodoMark>{page.body}</TodoMark>
          ) : (
            <p>{page.body}</p>
          )}
        </div>
      </article>
    </>
  );
}
