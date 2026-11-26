import {
  isConfirmedTrue,
  isTodo,
  poolPrivacyLabel,
  siteConfig,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type Fact = { label: string; value: string };

/** Confirmed facts only — never surfaces TODO_DATA. */
export function QuickFacts({
  className = "",
  variant = "list",
}: {
  className?: string;
  /** "band" = dark strip under the home hero. */
  variant?: "list" | "band";
}) {
  const { lang, content } = useLang();
  const f = content.ui.facts;
  const facts: Fact[] = [];

  facts.push({ label: f.guests, value: String(siteConfig.capacity.guests) });
  facts.push({ label: f.bedrooms, value: String(siteConfig.capacity.bedrooms) });

  if (!isTodo(siteConfig.capacity.bathrooms)) {
    facts.push({ label: f.bathrooms, value: String(siteConfig.capacity.bathrooms) });
  }
  if (siteConfig.amenities.kitchen) {
    facts.push({ label: f.kitchen, value: "✓" });
  }
  if (siteConfig.amenities.pool.available) {
    facts.push({ label: f.pool, value: "✓" });
  }
  if (
    siteConfig.amenities.parking.available &&
    !isTodo(siteConfig.amenities.parking.detail)
  ) {
    facts.push({
      label: f.parking,
      value: String(siteConfig.amenities.parking.detail),
    });
  }
  if (isConfirmedTrue(siteConfig.amenities.wifi)) {
    facts.push({ label: f.wifi, value: "✓" });
  }
  facts.push({
    label: f.location,
    value: `${siteConfig.address.locality}, ${siteConfig.address.region}`,
  });

  if (variant === "band") {
    // Short values only: long strings break the one-row grid.
    const free = lang === "en" ? "Free" : lang === "ca" ? "Gratuït" : "Gratis";
    const band = facts.map((fact) => {
      if (fact.label === f.parking) return { ...fact, value: free };
      if (fact.label === f.location) return { ...fact, value: siteConfig.address.region };
      if (fact.label === f.wifi && isConfirmedTrue(siteConfig.amenities.jacuzzi)) {
        return { label: f.jacuzzi, value: "✓" };
      }
      return fact;
    });
    return (
      <ul
        className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 ${className}`}
      >
        {band.map((fact) => (
          <li
            key={fact.label}
            className="min-w-0 border-b border-white/10 px-3 py-7 text-center lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <p className="font-serif text-[1.45rem] leading-tight text-white">
              {fact.value}
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.15em] opacity-70">
              {fact.label}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4 ${className}`}
    >
      {facts.map((fact) => (
        <li
          key={fact.label}
          className="border-l-2 border-[#4d5a2a]/40 pl-3 py-1"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-[#4d5a2a]">
            {fact.label}
          </p>
          <p className="mt-1 text-base font-medium text-gray-900 leading-snug">
            {fact.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Service list for accommodation section / page. */
export function ServiceFacts({ className = "" }: { className?: string }) {
  const { lang, content } = useLang();
  const f = content.ui.facts;
  const rows: Fact[] = [];

  if (!isTodo(siteConfig.capacity.bedrooms)) {
    rows.push({
      label: f.bedrooms,
      value: String(siteConfig.capacity.bedrooms),
    });
  }
  if (!isTodo(siteConfig.capacity.bathrooms)) {
    rows.push({
      label: f.bathrooms,
      value: String(siteConfig.capacity.bathrooms),
    });
  }
  if (siteConfig.amenities.kitchen) {
    rows.push({ label: f.kitchen, value: "✓" });
  }
  if (!isTodo(siteConfig.amenities.climateControl)) {
    rows.push({
      label: f.climate,
      value: String(siteConfig.amenities.climateControl),
    });
  }
  if (isConfirmedTrue(siteConfig.amenities.wifi)) {
    rows.push({ label: f.wifi, value: "✓" });
  }
  if (
    siteConfig.amenities.parking.available &&
    !isTodo(siteConfig.amenities.parking.detail)
  ) {
    rows.push({
      label: f.parking,
      value: String(siteConfig.amenities.parking.detail),
    });
  }
  if (siteConfig.amenities.pool.available) {
    const privacy = poolPrivacyLabel(lang);
    rows.push({
      label: f.pool,
      value: privacy ?? "✓",
    });
  }
  if (isConfirmedTrue(siteConfig.amenities.jacuzzi)) {
    rows.push({ label: f.jacuzzi, value: "✓" });
  }

  if (!rows.length) return null;

  return (
    <ul className={`grid gap-x-10 sm:grid-cols-2 ${className}`}>
      {rows.map((r) => (
        <li
          key={r.label}
          className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 text-[0.95rem]"
        >
          <span className="text-muted">{r.label}</span>
          <span className="font-medium text-right">{r.value}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pool values are stored in Spanish in siteConfig; translated here. */
const POOL_VALUES: Record<string, { ca: string; en: string }> = {
  verano: { ca: "estiu", en: "summer" },
  "sin horario fijo": { ca: "sense horari fix", en: "no fixed hours" },
  "sentido común": { ca: "sentit comú", en: "common sense" },
  "exterior de agua salada": { ca: "exterior d'aigua salada", en: "outdoor saltwater" },
};

function poolValue(value: unknown, lang: string): string {
  const v = String(value);
  if (lang === "es") return v;
  return POOL_VALUES[v]?.[lang as "ca" | "en"] ?? v;
}

/** Confirmed pool facts as label/value rows (TODO values are skipped). */
export function usePoolFacts(): Fact[] {
  const { lang, content } = useLang();
  const pool = siteConfig.amenities.pool;
  const labels = content.ui.poolLabels;
  const rows: Fact[] = [];

  const privacy = poolPrivacyLabel(lang);
  if (privacy) rows.push({ label: labels.use, value: privacy });
  const add = (label: string, value: unknown) => {
    if (!isTodo(value)) rows.push({ label, value: poolValue(value, lang) });
  };
  add(labels.season, pool.season);
  add(labels.hours, pool.hours);
  add(labels.rules, pool.rules);
  add(labels.type, pool.type);
  add(labels.loungers, pool.loungers);
  add(labels.shade, pool.shade);
  add(labels.distance, pool.distanceFromLodging);
  return rows;
}

export function PoolFactsList({ className = "" }: { className?: string }) {
  const rows = usePoolFacts();
  if (!rows.length) return null;

  return (
    <ul className={`space-y-2 text-sm text-gray-700 ${className}`}>
      {rows.map((r) => (
        <li key={r.label}>
          <span className="font-medium text-gray-900">{r.label}:</span> {r.value}
        </li>
      ))}
    </ul>
  );
}
