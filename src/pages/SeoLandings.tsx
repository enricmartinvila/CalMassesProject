import { getLandings } from "../content/landings";
import { useLang } from "../hooks/useLang";
import { LandingPage } from "../components/landing/LandingPage";
import { MontserratGuide } from "../components/environment/guides/MontserratGuide";
import { ManresaGuide } from "../components/environment/guides/ManresaGuide";
import { BagesGuide } from "../components/environment/guides/BagesGuide";
import { EnoturismoGuide } from "../components/environment/guides/EnoturismoGuide";
import type { LandingsBundle } from "../content/landings/types";

type Key = keyof LandingsBundle;

function LandingByKey({ name }: { name: Key }) {
  const { lang } = useLang();
  const landing = getLandings(lang)[name];

  if (name === "montserrat") return <MontserratGuide landing={landing} />;
  if (name === "manresa") return <ManresaGuide landing={landing} />;
  if (name === "bages") return <BagesGuide landing={landing} />;
  if (name === "enoturismo") return <EnoturismoGuide landing={landing} />;

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
