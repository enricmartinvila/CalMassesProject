import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type Fact = { label: string; value: string };

/** Confirmed facts only — never surfaces TODO_DATA. */
export function QuickFacts({ className = "" }: { className?: string }) {
  const { content } = useLang();
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
  if (!isTodo(siteConfig.amenities.parking)) {
    facts.push({ label: f.parking, value: String(siteConfig.amenities.parking) });
  }
  if (!isTodo(siteConfig.amenities.wifi)) {
    facts.push({ label: f.wifi, value: String(siteConfig.amenities.wifi) });
  }
  facts.push({
    label: f.location,
    value: `${siteConfig.address.locality}, ${siteConfig.address.region}`,
  });

  return (
    <ul
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4 ${className}`}
    >
      {facts.map((fact) => (
        <li
          key={fact.label}
          className="border-l-2 border-[#556B2F]/40 pl-3 py-1"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-[#556B2F]">
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
  const { content } = useLang();
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
  if (!isTodo(siteConfig.amenities.wifi)) {
    rows.push({ label: f.wifi, value: String(siteConfig.amenities.wifi) });
  }
  if (!isTodo(siteConfig.amenities.parking)) {
    rows.push({
      label: f.parking,
      value: String(siteConfig.amenities.parking),
    });
  }
  if (siteConfig.amenities.pool.available) {
    rows.push({
      label: f.pool,
      value: String(siteConfig.amenities.pool.privateOrShared),
    });
  }
  if (siteConfig.amenities.jacuzzi === true) {
    rows.push({ label: f.jacuzzi, value: "✓" });
  }

  if (!rows.length) return null;

  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {rows.map((r) => (
        <li
          key={r.label}
          className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-2 text-sm"
        >
          <span className="text-gray-600">{r.label}</span>
          <span className="font-medium text-gray-900 text-right">{r.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function PoolFactsList({ className = "" }: { className?: string }) {
  const { content } = useLang();
  const pool = siteConfig.amenities.pool;
  const labels = content.ui.poolLabels;
  const rows: Fact[] = [];

  if (!isTodo(pool.privateOrShared)) {
    rows.push({ label: labels.use, value: String(pool.privateOrShared) });
  }
  if (!isTodo(pool.season)) {
    rows.push({ label: labels.season, value: String(pool.season) });
  }
  if (!isTodo(pool.hours)) {
    rows.push({ label: labels.hours, value: String(pool.hours) });
  }
  if (!isTodo(pool.rules)) {
    rows.push({ label: labels.rules, value: String(pool.rules) });
  }
  if (!isTodo(pool.type)) {
    rows.push({ label: labels.type, value: String(pool.type) });
  }

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
