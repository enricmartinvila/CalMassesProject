import type { LandingDefinition } from "../../content/landings/types";
import type { GuidePageKey } from "../../content/guides/types";
import { useLang } from "../../hooks/useLang";
import { SeoHead } from "../seo/SeoHead";
import { GuideBlocks, useGuideToc } from "../guide/GuideBlocks";
import { BookActions, Cta, Hero, Next, Page, Toc } from "./Blocks";

/**
 * Common frame for every landing: hero, guide TOC, the page's own
 * sections (children), practical guide blocks, related pages and CTA.
 */
export function LandingShell({
  landing,
  guide,
  eyebrow,
  heroImage,
  toc,
  children,
  guideStartSoft = true,
  noIndex = false,
}: {
  landing: LandingDefinition;
  guide: GuidePageKey;
  eyebrow?: string;
  heroImage?: string;
  /** Ids/labels of the page's own sections; guide blocks are appended. */
  toc?: Array<{ id: string; label: string }>;
  children: React.ReactNode;
  guideStartSoft?: boolean;
  noIndex?: boolean;
}) {
  const { lang, path, content } = useLang();
  const guideToc = useGuideToc(guide);
  const sec = landing.hero.ctaSecondary;
  const finalSec = landing.finalCta.secondary;

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={landing.routeKey}
        title={landing.seo.title}
        description={landing.seo.description}
        path={path(landing.routeKey)}
        noIndex={noIndex}
      />
      <Page>
        <Hero
          crumbs={landing.breadcrumb}
          eyebrow={eyebrow}
          h1={landing.hero.h1}
          intro={landing.hero.intro}
          image={heroImage ?? landing.hero.image}
          actions={
            <BookActions
              tone="hero"
              secondary={sec ? { label: sec.label, to: path(sec.route) } : undefined}
            />
          }
        />
        {toc ? <Toc items={[...toc, ...guideToc]} /> : null}
        {children}
        <GuideBlocks page={guide} startSoft={guideStartSoft} />
        <Next items={landing.related.map((l) => ({ label: l.label, to: path(l.route) }))} />
        <Cta
          h2={landing.finalCta.h2}
          paragraphs={landing.finalCta.paragraphs}
          secondary={
            finalSec
              ? { label: finalSec.label, to: path(finalSec.route) }
              : { label: content.ui.cta.seeAccommodation, to: path("alojamiento") }
          }
        />
      </Page>
    </>
  );
}
