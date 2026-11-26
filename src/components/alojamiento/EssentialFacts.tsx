import { isConfirmedTrue, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

/** Short confirmed essentials for the stats band. */
export function useEssentialFacts(): string[] {
  const { content } = useLang();
  const l = content.alojamiento.essentialLabels;
  const a = siteConfig.amenities;
  return [
    siteConfig.entirePlace && l.entirePlace,
    l.guests,
    l.bedrooms,
    l.beds,
    l.bathrooms,
    a.kitchen && l.kitchen,
    a.pool.available && a.pool.confirmedForGuests && l.pool,
    isConfirmedTrue(a.wifi) && l.wifi,
  ].filter(Boolean) as string[];
}
