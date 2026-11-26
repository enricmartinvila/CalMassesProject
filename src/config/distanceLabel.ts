import { siteConfig, type Lang } from "./siteConfig";

type DistanceKey = keyof typeof siteConfig.distances;

/**
 * siteConfig.distances holds the confirmed values in Spanish
 * ("aprox. 20 km / 25 min en coche"); this only translates the words
 * around the numbers.
 */
export function distanceLabel(key: DistanceKey, lang: Lang): string {
  const raw = String(siteConfig.distances[key]);
  if (lang === "ca") return raw.replace(/en coche$/, "en cotxe");
  if (lang === "en") return raw.replace(/^aprox\./, "approx.").replace(/en coche$/, "by car");
  return raw;
}
