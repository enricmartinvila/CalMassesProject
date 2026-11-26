import { siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import type { SimplePageContent } from "../content/types";
import type { RouteKey } from "../i18n/routes";
import { SeoHead } from "../components/seo/SeoHead";
import { GuideBlocks } from "../components/guide/GuideBlocks";
import { BookActions, Cta, Hero, Next, Page, Sec, Specs, Split } from "../components/cm/Blocks";
import { AlojamientoPage } from "./AlojamientoPage";

export { AlojamientoPage };

/** Hero → page sections → children → next links → closing band. */
function ContentShell({
  routeKey,
  page,
  crumb,
  image,
  children,
}: {
  routeKey: RouteKey;
  page: SimplePageContent;
  crumb: string;
  image: string;
  children?: React.ReactNode;
}) {
  const { lang, path, content } = useLang();
  const secondary =
    page.cta?.secondary && page.cta.secondaryRoute
      ? { label: page.cta.secondary, to: path(page.cta.secondaryRoute) }
      : undefined;
  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={routeKey}
        title={page.seo.title}
        description={page.seo.description}
        path={path(routeKey)}
      />
      <Page>
        <Hero
          crumbs={[{ label: content.ui.breadcrumbHome, route: "home" }, { label: crumb }]}
          h1={page.seo.h1}
          intro={page.intro}
          image={image}
          actions={<BookActions tone="hero" secondary={secondary} />}
        />
        {page.sections.map((s, i) => (
          <Sec key={s.h2} soft={i % 2 === 1} h2={s.h2} intro={s.paragraphs} />
        ))}
        {children}
        {page.design ? (
          <>
            <Next items={page.design.next.map((n) => ({ label: n.label, to: path(n.route) }))} />
            <Cta h2={page.design.closing.h2} paragraphs={[page.design.closing.paragraph]} secondary={secondary} />
          </>
        ) : null}
      </Page>
    </>
  );
}

export function FincaPage() {
  const { content } = useLang();
  const page = content.finca;
  return (
    <ContentShell routeKey="finca" page={page} crumb={content.ui.nav.finca} image={siteConfig.images.vineyard}>
      <GuideBlocks page="finca" startSoft={page.sections.length % 2 === 0} />
    </ContentShell>
  );
}

export function SisuPage() {
  const { content } = useLang();
  const page = content.sisu;
  const wine = page.existingWine;
  const d = page.design;
  const p = wine?.paragraphs ?? [];
  return (
    <ContentShell routeKey="sisu" page={page} crumb={content.ui.nav.sisu} image={siteConfig.images.wine}>
      {wine ? (
        <>
          <Split eyebrow={d?.eyebrow} h2={wine.title} paragraphs={p.slice(0, 2)} images={[siteConfig.images.wineAlt]}>
            <Specs items={d?.specs ?? []} />
          </Split>
          {p.length > 2 ? <Sec soft eyebrow={d?.tasteEyebrow} h2={d?.tasteH2} intro={p.slice(2, 5)} /> : null}
          {p.length > 5 ? <Sec h2={d?.projectH2} intro={[...p.slice(5), wine.footer]} /> : null}
        </>
      ) : null}
    </ContentShell>
  );
}
