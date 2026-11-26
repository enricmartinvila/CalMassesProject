import { isTodo } from "../../config/siteConfig";
import { distanceLabel } from "../../config/distanceLabel";
import { useLang } from "../../hooks/useLang";
import { isDraftRoute, type RouteKey } from "../../i18n/routes";
import type { LandingDefinition, LandingSection } from "../../content/landings/types";
import type { GuidePageKey } from "../../content/guides/types";
import { useFeatureFacts } from "./FeatureGrid";
import { usePoolFacts } from "../home/QuickFacts";
import { BookActions, Btn, LinkCards, Route, Sec, Seasons, Specs, Split } from "../cm/Blocks";
import { LandingShell } from "../cm/LandingShell";

const guideKey: Partial<Record<RouteKey, GuidePageKey>> = {
  landingParaDos: "paraDos",
  landingPiscina: "piscina",
  landingBarcelona: "barcelona",
  landingBages: "bages",
  landingManresa: "manresa",
  landingMontserrat: "montserrat",
  landingEnoturismo: "enoturismo",
};

const DESTINATION: Record<string, string> = {
  montserrat: "Montserrat",
  manresa: "Manresa",
  barcelona: "Barcelona",
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Generic landing (para dos, piscina, Barcelona) in the page design. */
export function LandingPage({ landing }: { landing: LandingDefinition }) {
  const { lang, path } = useLang();
  const draft = landing.status === "draft" || isDraftRoute(landing.routeKey);
  const features = useFeatureFacts();
  const pool = usePoolFacts();
  const guide = guideKey[landing.routeKey];

  let flip = false;
  let lastSoft = false;

  const extras = (s: LandingSection) => (
    <>
      {s.h3Blocks?.length ? (
        <Seasons items={s.h3Blocks.map((b) => ({ title: b.h3, paragraphs: b.paragraphs }))} />
      ) : null}
      {s.showFeatureGrid ? <Specs items={features.map((f) => ({ ...f, value: cap(f.value) }))} /> : null}
      {s.showPoolFacts ? <Specs items={pool.map((f) => ({ ...f, value: cap(f.value) }))} /> : null}
      {s.showDistanceKey ? (
        <Route destination={DESTINATION[s.showDistanceKey]} label={distanceLabel(s.showDistanceKey, lang)} />
      ) : null}
      {s.cards?.length ? (
        <LinkCards items={s.cards.map((c) => ({ title: c.title, text: c.text, to: path(c.route), cta: c.cta }))} />
      ) : null}
      {s.cta ? (
        s.cta.route === "reservar" ? (
          <BookActions />
        ) : (
          <div className="cm-actions">
            <Btn to={path(s.cta.route)}>{s.cta.label}</Btn>
          </div>
        )
      ) : null}
    </>
  );

  const sections = landing.sections.map((s, i) => {
    if (s.image && !isTodo(s.image)) {
      const node = (
        <Split key={i} flip={flip} h2={s.h2} paragraphs={s.paragraphs} images={[s.image]}>
          {extras(s)}
        </Split>
      );
      flip = !flip;
      lastSoft = false;
      return node;
    }
    const soft = Boolean(s.cards?.length);
    lastSoft = soft;
    return (
      <Sec key={i} soft={soft} h2={s.h2} intro={s.paragraphs}>
        {extras(s)}
      </Sec>
    );
  });

  if (!guide) return null;

  return (
    <LandingShell landing={landing} guide={guide} guideStartSoft={!lastSoft} noIndex={draft}>
      {sections}
    </LandingShell>
  );
}
