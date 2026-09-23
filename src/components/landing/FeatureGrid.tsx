import { isConfirmedTrue, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { PoolFactsList } from "../home/QuickFacts";

type Fact = { label: string; value: string };

/** Only confirmed siteConfig facts — never surfaces TODO_DATA to visitors. */
export function FeatureGrid() {
  const { content } = useLang();
  const f = content.ui.facts;
  const facts: Fact[] = [];

  facts.push({ label: f.guests, value: String(siteConfig.capacity.guests) });
  facts.push({ label: f.bedrooms, value: String(siteConfig.capacity.bedrooms) });

  if (!isTodo(siteConfig.capacity.beds)) {
    facts.push({ label: f.beds, value: String(siteConfig.capacity.beds) });
  }
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
  if (!isTodo(siteConfig.amenities.climateControl)) {
    facts.push({
      label: f.climate,
      value: String(siteConfig.amenities.climateControl),
    });
  }

  if (!facts.length) return null;

  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <li key={fact.label} className="border-l-2 border-[#556B2F]/30 pl-3 py-1">
          <p className="text-xs uppercase tracking-wider text-[#556B2F]">
            {fact.label}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-900">{fact.value}</p>
        </li>
      ))}
    </ul>
  );
}

export function PoolFacts() {
  return <PoolFactsList className="mt-6" />;
}
