import {
  isConfirmedTrue,
  isTodo,
  poolPrivacyLabel,
  siteConfig,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

export type ServiceCategory = { title: string; items: string[] };

/** Confirmed amenities grouped by area — empty groups are dropped. */
export function useServiceCategories(): ServiceCategory[] {
  const { lang, content } = useLang();
  const t = content.alojamiento.services;
  const a = siteConfig.amenities;
  const cats: ServiceCategory[] = [];
  const push = (title: string, items: Array<string | false | null | undefined>) => {
    const list = items.filter(Boolean) as string[];
    if (list.length) cats.push({ title, items: list });
  };

  push(t.categories.kitchen, [a.kitchen && t.items.kitchen]);
  push(t.categories.comfort, [
    isConfirmedTrue(a.wifi) && t.items.wifi,
    isConfirmedTrue(a.airConditioning) && t.items.airConditioning,
    isConfirmedTrue(a.heating) && t.items.heating,
  ]);
  const privacy = poolPrivacyLabel(lang);
  push(t.categories.exterior, [
    a.pool.available &&
      a.pool.confirmedForGuests &&
      (privacy ?? t.items.pool),
  ]);
  push(t.categories.practical, [
    a.parking.available && !isTodo(a.parking.detail) && t.items.parking,
    isConfirmedTrue(a.washer) && t.items.washer,
    isConfirmedTrue(a.dryer) && t.items.dryer,
    isConfirmedTrue(a.selfCheckIn) && t.items.selfCheckIn,
  ]);
  push(t.categories.bedroomBath, [
    isConfirmedTrue(a.linens) && t.items.linens,
    isConfirmedTrue(a.towels) && t.items.towels,
    isConfirmedTrue(a.hairDryer) && t.items.hairDryer,
    isConfirmedTrue(a.jacuzzi) && t.items.jacuzzi,
  ]);
  return cats;
}

export function useBedroomFacts(): string[] {
  const { content } = useLang();
  const items = content.alojamiento.services.items;
  const c = siteConfig.capacity;
  const a = siteConfig.amenities;
  return [
    !isTodo(c.beds) && content.alojamiento.essentialLabels.beds,
    !isTodo(c.bedType) && String(c.bedType),
    !isTodo(c.bedSize) && String(c.bedSize),
    isConfirmedTrue(a.linens) && items.linens,
    isConfirmedTrue(a.airConditioning) && items.airConditioning,
    isConfirmedTrue(a.heating) && items.heating,
  ].filter(Boolean) as string[];
}

export function useBathroomFacts(): string[] {
  const { content } = useLang();
  const items = content.alojamiento.services.items;
  const a = siteConfig.amenities;
  return [
    isConfirmedTrue(a.jacuzzi) && items.jacuzzi,
    isConfirmedTrue(a.towels) && items.towels,
    isConfirmedTrue(a.hairDryer) && items.hairDryer,
  ].filter(Boolean) as string[];
}
