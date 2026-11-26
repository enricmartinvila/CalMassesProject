import type { GuideBlock, GuidePageKey } from "../../content/guides/types";
import { getGuide } from "../../content/guides";
import { useLang } from "../../hooks/useLang";
import { FaqJsonLd, LodgingJsonLd } from "../seo/JsonLd";
import { Link } from "react-router-dom";
import type { RouteKey } from "../../i18n/routes";
import { Cards, Faq, Note, Rows, Seasons, Sec, Timeline, Tips } from "../cm/Blocks";

/** Internal link for a place name that has its own page. */
const PLACE_ROUTES: Array<[RegExp, RouteKey, GuidePageKey?]> = [
  [/^Montserrat$/, "landingMontserrat", "montserrat"],
  [/^Manresa$/, "landingManresa", "manresa"],
  [/^SISU/, "sisu"],
  [/Pla de Bages/, "landingEnoturismo", "enoturismo"],
];

function PlaceName({ name, page }: { name: string; page: GuidePageKey }) {
  const { path } = useLang();
  const hit = PLACE_ROUTES.find(([re, , own]) => re.test(name) && own !== page);
  if (!hit) return <>{name}</>;
  return <Link to={path(hit[1])}>{name}</Link>;
}

const LANDINGS: GuidePageKey[] = [
  "bages", "manresa", "montserrat", "paraDos", "piscina", "barcelona", "enoturismo",
];

function Block({ block, page, soft }: { block: GuideBlock; page: GuidePageKey; soft: boolean }) {
  const common = { id: block.id, soft, eyebrow: block.eyebrow, h2: block.h2 };
  switch (block.kind) {
    case "text":
      return (
        <Sec {...common} intro={block.paragraphs}>
          {block.h3Blocks?.length ? (
            <Seasons items={block.h3Blocks.map((b) => ({ title: b.h3, paragraphs: b.paragraphs }))} />
          ) : null}
        </Sec>
      );
    case "places":
      return (
        <Sec {...common} intro={block.intro}>
          <Cards
            items={block.items.map((p) => ({
              key: p.name,
              title: <PlaceName name={p.name} page={page} />,
              text: p.text,
              pill: p.time,
            }))}
          />
          {block.note ? <Note>{block.note}</Note> : null}
        </Sec>
      );
    case "itinerary":
      return (
        <Sec {...common} intro={block.intro}>
          <Timeline steps={block.steps} />
        </Sec>
      );
    case "tips":
      return (
        <Sec {...common} intro={block.intro}>
          <Tips items={block.items} />
        </Sec>
      );
    case "facts":
      return (
        <Sec {...common} intro={block.intro}>
          <Rows rows={block.rows} />
          {block.note ? <Note>{block.note}</Note> : null}
        </Sec>
      );
    case "faq":
      return (
        <Sec {...common}>
          <FaqJsonLd items={block.items} />
          <Faq items={block.items} />
        </Sec>
      );
  }
}

/** Table-of-contents entries for pages that show a TOC. */
export function useGuideToc(page: GuidePageKey) {
  const { lang } = useLang();
  return getGuide(lang, page).map((b) => ({ id: b.id, label: b.h2 }));
}

export function GuideBlocks({ page, startSoft = true }: { page: GuidePageKey; startSoft?: boolean }) {
  const { lang } = useLang();
  const blocks = getGuide(lang, page);
  if (!blocks.length) return null;

  return (
    <>
      {LANDINGS.includes(page) && <LodgingJsonLd />}
      {blocks.map((block, i) => (
        <Block key={block.id} block={block} page={page} soft={(i % 2 === 0) === startSoft} />
      ))}
    </>
  );
}
