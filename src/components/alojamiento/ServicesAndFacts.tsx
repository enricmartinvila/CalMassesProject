import {
  isConfirmedTrue,
  isTodo,
  poolPrivacyLabel,
  siteConfig,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type ServiceItem = { label: string };

type Category = {
  title: string;
  items: ServiceItem[];
};

export function ServicesGrid() {
  const { lang, content } = useLang();
  const t = content.alojamiento.services;
  const a = siteConfig.amenities;

  const categories: Category[] = [];

  const kitchen: ServiceItem[] = [];
  if (a.kitchen) kitchen.push({ label: t.items.kitchen });
  if (kitchen.length) {
    categories.push({ title: t.categories.kitchen, items: kitchen });
  }

  const comfort: ServiceItem[] = [];
  if (isConfirmedTrue(a.wifi)) comfort.push({ label: t.items.wifi });
  if (isConfirmedTrue(a.airConditioning)) {
    comfort.push({ label: t.items.airConditioning });
  }
  if (isConfirmedTrue(a.heating)) comfort.push({ label: t.items.heating });
  if (comfort.length) {
    categories.push({ title: t.categories.comfort, items: comfort });
  }

  const exterior: ServiceItem[] = [];
  if (a.pool.available && a.pool.confirmedForGuests) {
    const privacy = poolPrivacyLabel(lang);
    exterior.push({
      label: privacy ? `${t.items.pool} · ${privacy}` : t.items.pool,
    });
  }
  if (exterior.length) {
    categories.push({ title: t.categories.exterior, items: exterior });
  }

  const practical: ServiceItem[] = [];
  if (a.parking.available && !isTodo(a.parking.detail)) {
    practical.push({ label: t.items.parking });
  }
  if (isConfirmedTrue(a.washer)) practical.push({ label: t.items.washer });
  if (isConfirmedTrue(a.dryer)) practical.push({ label: t.items.dryer });
  if (isConfirmedTrue(a.selfCheckIn)) {
    practical.push({ label: t.items.selfCheckIn });
  }
  if (practical.length) {
    categories.push({ title: t.categories.practical, items: practical });
  }

  const bedroomBath: ServiceItem[] = [];
  if (isConfirmedTrue(a.linens)) bedroomBath.push({ label: t.items.linens });
  if (isConfirmedTrue(a.towels)) bedroomBath.push({ label: t.items.towels });
  if (isConfirmedTrue(a.hairDryer)) {
    bedroomBath.push({ label: t.items.hairDryer });
  }
  if (isConfirmedTrue(a.jacuzzi)) bedroomBath.push({ label: t.items.jacuzzi });
  if (bedroomBath.length) {
    categories.push({ title: t.categories.bedroomBath, items: bedroomBath });
  }

  if (!categories.length) return null;

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <div key={cat.title}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#556B2F]">
            {cat.title}
          </h3>
          <ul className="mt-4 space-y-2">
            {cat.items.map((item) => (
              <li
                key={item.label}
                className="border-b border-gray-100 pb-2 text-sm text-gray-800"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Confirmed kitchen equipment chips — hidden until items are confirmed. */
export function KitchenEquipmentList() {
  return null;
}

export function BedroomFacts() {
  const { content } = useLang();
  const facts: string[] = [];

  if (!isTodo(siteConfig.capacity.beds)) {
    facts.push(content.alojamiento.essentialLabels.beds);
  }
  if (!isTodo(siteConfig.capacity.bedType)) {
    facts.push(String(siteConfig.capacity.bedType));
  }
  if (!isTodo(siteConfig.capacity.bedSize)) {
    facts.push(String(siteConfig.capacity.bedSize));
  }
  if (isConfirmedTrue(siteConfig.amenities.linens)) {
    facts.push(content.alojamiento.services.items.linens);
  }
  if (isConfirmedTrue(siteConfig.amenities.airConditioning)) {
    facts.push(content.alojamiento.services.items.airConditioning);
  }
  if (isConfirmedTrue(siteConfig.amenities.heating)) {
    facts.push(content.alojamiento.services.items.heating);
  }

  if (!facts.length) return null;

  return (
    <ul className="flex flex-wrap gap-2 pt-2">
      {facts.map((f) => (
        <li
          key={f}
          className="rounded-full border border-[#556B2F]/25 px-3 py-1 text-sm text-gray-800"
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

export function BathroomFacts() {
  const { content } = useLang();
  const facts: string[] = [];
  const a = siteConfig.amenities;

  if (isConfirmedTrue(a.jacuzzi)) {
    facts.push(content.alojamiento.services.items.jacuzzi);
  }
  if (isConfirmedTrue(a.towels)) {
    facts.push(content.alojamiento.services.items.towels);
  }
  if (isConfirmedTrue(a.hairDryer)) {
    facts.push(content.alojamiento.services.items.hairDryer);
  }

  if (!facts.length) return null;

  return (
    <ul className="flex flex-wrap gap-2 pt-2">
      {facts.map((f) => (
        <li
          key={f}
          className="rounded-full border border-[#556B2F]/25 px-3 py-1 text-sm text-gray-800"
        >
          {f}
        </li>
      ))}
    </ul>
  );
}
