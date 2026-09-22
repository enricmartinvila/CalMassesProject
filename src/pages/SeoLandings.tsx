import { getLandings } from "../content/landings";
import { useLang } from "../hooks/useLang";
import { LandingPage } from "../components/landing/LandingPage";
import type { LandingsBundle } from "../content/landings/types";

type Key = keyof LandingsBundle;

function LandingByKey({ name }: { name: Key }) {
  const { lang } = useLang();
  const landing = getLandings(lang)[name];
  return <LandingPage landing={landing} />;
}

export function LandingBagesPage() {
  return <LandingByKey name="bages" />;
}
export function LandingManresaSeoPage() {
  return <LandingByKey name="manresa" />;
}
export function LandingMontserratSeoPage() {
  return <LandingByKey name="montserrat" />;
}
export function LandingParaDosPage() {
  return <LandingByKey name="paraDos" />;
}
export function LandingPiscinaPage() {
  return <LandingByKey name="piscina" />;
}
export function LandingBarcelonaPage() {
  return <LandingByKey name="barcelona" />;
}
export function LandingEnoturismoSeoPage() {
  return <LandingByKey name="enoturismo" />;
}
