import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

export type Spec = { label: string; value: string; wide?: boolean };

/** Which areas are private or shared, from the confirmed area list. */
export function usePrivacyRows(): Spec[] {
  const { content } = useLang();
  const t = content.alojamiento.privacy;
  return siteConfig.areas.flatMap((area) => {
    const label =
      area.id === "lodging" ? t.areaLabels.lodging : area.id === "pool" ? t.areaLabels.pool : null;
    if (!label) return [];
    return [{ label, value: area.privacy === "private" ? t.privateLabel : t.sharedLabel }];
  });
}

/** Check-in, check-out, parking and self check-in — confirmed values only. */
export function useArrivalSpecs(): Spec[] {
  const { content } = useLang();
  const t = content.alojamiento.arrival;
  const specs: Spec[] = [];
  if (!isTodo(siteConfig.checkIn)) specs.push({ label: t.checkIn, value: String(siteConfig.checkIn) });
  if (!isTodo(siteConfig.checkOut)) specs.push({ label: t.checkOut, value: String(siteConfig.checkOut) });
  const parking = siteConfig.amenities.parking;
  if (parking.available && !isTodo(parking.detail)) {
    specs.push({ label: t.parkingTitle, value: String(parking.detail) });
  }
  if (siteConfig.amenities.selfCheckIn === true) {
    specs.push({ label: t.selfCheckInTitle, value: t.selfCheckInBody, wide: true });
  }
  return specs;
}
