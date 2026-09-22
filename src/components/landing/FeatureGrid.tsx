import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type Fact = { label: string; value: string };

/** Only confirmed siteConfig facts — never surfaces TODO_DATA to visitors. */
export function FeatureGrid() {
  const { content } = useLang();
  const facts: Fact[] = [];

  facts.push({
    label: content.ui.facts.guests,
    value: String(siteConfig.capacity.guests),
  });
  facts.push({
    label: content.ui.facts.bedrooms,
    value: String(siteConfig.capacity.bedrooms),
  });

  if (!isTodo(siteConfig.capacity.beds)) {
    facts.push({ label: "Cama", value: String(siteConfig.capacity.beds) });
  }
  if (!isTodo(siteConfig.capacity.bathrooms)) {
    facts.push({ label: "Baño", value: String(siteConfig.capacity.bathrooms) });
  }
  if (siteConfig.amenities.kitchen) {
    facts.push({ label: content.ui.facts.kitchen, value: "✓" });
  }
  if (siteConfig.amenities.pool.available) {
    facts.push({ label: content.ui.facts.pool, value: "✓" });
  }
  if (!isTodo(siteConfig.amenities.parking)) {
    facts.push({
      label: content.ui.facts.parking,
      value: String(siteConfig.amenities.parking),
    });
  }
  if (!isTodo(siteConfig.amenities.wifi)) {
    facts.push({ label: "Wi-Fi", value: String(siteConfig.amenities.wifi) });
  }
  if (!isTodo(siteConfig.amenities.climateControl)) {
    facts.push({
      label: "Climatización",
      value: String(siteConfig.amenities.climateControl),
    });
  }

  if (!facts.length) return null;

  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((f) => (
        <li
          key={f.label}
          className="rounded-2xl border border-[#556B2F]/15 bg-white px-4 py-3"
        >
          <p className="text-xs uppercase tracking-wider text-[#556B2F]">
            {f.label}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-900">{f.value}</p>
        </li>
      ))}
    </ul>
  );
}

/** Pool detail rows — omit TODO values from visible UI. */
export function PoolFacts() {
  const pool = siteConfig.amenities.pool;
  const rows: Array<{ label: string; value: string }> = [];

  if (!isTodo(pool.type)) rows.push({ label: "Tipo de piscina", value: String(pool.type) });
  if (!isTodo(pool.privateOrShared)) {
    rows.push({ label: "Uso privado o compartido", value: String(pool.privateOrShared) });
  }
  if (!isTodo(pool.season)) rows.push({ label: "Temporada", value: String(pool.season) });
  if (!isTodo(pool.hours)) rows.push({ label: "Horarios", value: String(pool.hours) });
  if (!isTodo(pool.rules)) rows.push({ label: "Normas", value: String(pool.rules) });

  if (!rows.length) return null;

  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2">
      {rows.map((r) => (
        <div
          key={r.label}
          className="rounded-2xl border border-[#556B2F]/15 bg-white px-4 py-3"
        >
          <dt className="text-xs uppercase tracking-wider text-[#556B2F]">
            {r.label}
          </dt>
          <dd className="mt-1 text-base text-gray-900">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
