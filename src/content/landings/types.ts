import type { RouteKey } from "../i18n/routes";
import type { PageSeo } from "./types";

export type LandingCard = {
  title: string;
  text: string;
  cta: string;
  route: RouteKey;
};

export type LandingLink = {
  label: string;
  route: RouteKey;
};

export type LandingSection = {
  h2: string;
  paragraphs?: string[];
  h3Blocks?: Array<{ h3: string; paragraphs: string[] }>;
  showFeatureGrid?: boolean;
  showPoolFacts?: boolean;
  showDistanceKey?: "montserrat" | "manresa" | "barcelona";
  cards?: LandingCard[];
  cta?: { label: string; route: RouteKey };
  /** Placeholder block — never invent wineries. */
  showWineriesTodo?: boolean;
  image?: string;
};

export type LandingDefinition = {
  routeKey: RouteKey;
  status: "published" | "draft";
  seo: PageSeo;
  breadcrumb: Array<{ label: string; route?: RouteKey }>;
  hero: {
    eyebrow?: string;
    h1: string;
    intro: string[];
    image?: string;
    ctaPrimary: { label: string; route: RouteKey };
    ctaSecondary?: { label: string; route: RouteKey };
  };
  sections: LandingSection[];
  finalCta: {
    h2: string;
    paragraphs: string[];
    primary: { label: string; route: RouteKey };
    secondary?: { label: string; route: RouteKey };
  };
  related: LandingLink[];
  internalLinks: LandingLink[];
};

export type LandingsBundle = {
  bages: LandingDefinition;
  manresa: LandingDefinition;
  montserrat: LandingDefinition;
  paraDos: LandingDefinition;
  piscina: LandingDefinition;
  barcelona: LandingDefinition;
  enoturismo: LandingDefinition;
};
