import {
  isConfirmedTrue,
  siteConfig,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type Item = { key: string; label: string };

/** Compact icon + label row — confirmed essentials only. */
export function EssentialFacts() {
  const { content } = useLang();
  const labels = content.alojamiento.essentialLabels;
  const items: Item[] = [];

  if (siteConfig.entirePlace) {
    items.push({ key: "entire", label: labels.entirePlace });
  }
  items.push({ key: "guests", label: labels.guests });
  items.push({ key: "bedrooms", label: labels.bedrooms });
  items.push({ key: "beds", label: labels.beds });
  items.push({ key: "bathrooms", label: labels.bathrooms });
  if (siteConfig.amenities.kitchen) {
    items.push({ key: "kitchen", label: labels.kitchen });
  }
  if (
    siteConfig.amenities.pool.available &&
    siteConfig.amenities.pool.confirmedForGuests
  ) {
    items.push({ key: "pool", label: labels.pool });
  }
  if (isConfirmedTrue(siteConfig.amenities.wifi)) {
    items.push({ key: "wifi", label: labels.wifi });
  }

  return (
    <ul
      aria-label={content.alojamiento.essentialsAria}
      className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4"
    >
      {items.map((item) => (
        <li key={item.key} className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#556B2F]/35 text-[#556B2F]"
            aria-hidden
          >
            <EssentialIcon name={item.key} />
          </span>
          <span className="text-sm font-medium text-gray-900 leading-snug">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function EssentialIcon({ name }: { name: string }) {
  const common = "h-4 w-4";
  switch (name) {
    case "entire":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" />
        </svg>
      );
    case "guests":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3 19c0-2.8 2.7-5 6-5s6 2.2 6 5" />
          <path d="M14 19c0-1.8 1.6-3.3 3.5-3.3S21 17.2 21 19" />
        </svg>
      );
    case "bedrooms":
    case "beds":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 18V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9" />
          <path d="M3 14h18" />
          <path d="M7 12V9" />
        </svg>
      );
    case "bathrooms":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3Z" />
          <path d="M7 12V6a2 2 0 0 1 2-2h1" />
        </svg>
      );
    case "kitchen":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
          <path d="M8 13v8" />
          <path d="M16 3v18" />
          <path d="M14 7h4" />
        </svg>
      );
    case "pool":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 16c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
          <path d="M6 8h2v6H6zM16 6h2v8h-2z" />
        </svg>
      );
    case "wifi":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12.5a9 9 0 0 1 14 0" />
          <path d="M8.5 15.5a4.5 4.5 0 0 1 7 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return <span className="h-1.5 w-1.5 rounded-full bg-current" />;
  }
}
