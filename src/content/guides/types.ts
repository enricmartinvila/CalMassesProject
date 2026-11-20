/**
 * Practical, page-specific content blocks (places with travel times,
 * itineraries, tips, facts, FAQ). Rendered by components/guide/GuideBlocks.
 * Rule: only verifiable information — no filler, no invented facts.
 */
export type GuidePlace = { name: string; time?: string; text: string };
export type GuideStep = { when: string; title: string; text: string };
export type GuideTip = { title: string; text: string };

export type GuideBlock =
  | { kind: "text"; id: string; eyebrow?: string; h2: string; paragraphs: string[]; h3Blocks?: Array<{ h3: string; paragraphs: string[] }> }
  | { kind: "places"; id: string; eyebrow?: string; h2: string; intro?: string[]; items: GuidePlace[]; note?: string }
  | { kind: "itinerary"; id: string; eyebrow?: string; h2: string; intro?: string[]; steps: GuideStep[] }
  | { kind: "tips"; id: string; eyebrow?: string; h2: string; intro?: string[]; items: GuideTip[] }
  | { kind: "facts"; id: string; eyebrow?: string; h2: string; intro?: string[]; rows: Array<[string, string]>; note?: string }
  | { kind: "faq"; id: string; eyebrow?: string; h2: string; items: Array<{ question: string; answer: string }> };

export type GuidePageKey =
  | "bages"
  | "manresa"
  | "montserrat"
  | "paraDos"
  | "piscina"
  | "barcelona"
  | "enoturismo"
  | "alojamiento"
  | "finca"
  | "contacto";

export type GuideBundle = Partial<Record<GuidePageKey, GuideBlock[]>>;
