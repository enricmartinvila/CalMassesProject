import { Link } from "react-router-dom";
import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { Paragraphs, renderText } from "../ui/TodoMark";
import { CtaLink } from "../ui/CtaLink";

export function PrivacySection() {
  const { content, path } = useLang();
  const t = content.alojamiento.privacy;

  const rows = siteConfig.areas
    .map((area) => {
      const label =
        area.id === "lodging"
          ? t.areaLabels.lodging
          : area.id === "pool"
            ? t.areaLabels.pool
            : null;
      if (!label) return null;
      return {
        label,
        privacy:
          area.privacy === "private" ? t.privateLabel : t.sharedLabel,
      };
    })
    .filter(Boolean) as Array<{ label: string; privacy: string }>;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
      <div className="max-w-[46rem] space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {renderText(t.h2)}
        </h2>
        <Paragraphs items={t.paragraphs} />
      </div>

      {rows.length > 0 ? (
        <div className="mt-10 max-w-xl">
          <h3 className="text-xl font-semibold text-gray-900">{renderText(t.h3)}</h3>
          <ul className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 py-3 text-sm md:text-base"
              >
                <span className="text-gray-800">{row.label}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide ${
                    row.privacy === t.privateLabel
                      ? "bg-[#EEF2E6] text-[#556B2F]"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {row.privacy}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="mt-8">
        <Link
          to={path("finca")}
          className="text-sm font-medium text-[#556B2F] underline-offset-4 hover:underline"
        >
          {t.knowFinca}
        </Link>
      </p>
    </section>
  );
}

export function ArrivalSection() {
  const { content } = useLang();
  const t = content.alojamiento.arrival;
  const blocks: Array<{ title: string; body: string }> = [];

  if (!isTodo(siteConfig.checkIn)) {
    blocks.push({ title: t.checkIn, body: String(siteConfig.checkIn) });
  }
  if (!isTodo(siteConfig.checkOut)) {
    blocks.push({ title: t.checkOut, body: String(siteConfig.checkOut) });
  }
  if (siteConfig.amenities.selfCheckIn === true) {
    blocks.push({ title: t.selfCheckInTitle, body: t.selfCheckInBody });
  }
  if (
    siteConfig.amenities.parking.available &&
    !isTodo(siteConfig.amenities.parking.detail)
  ) {
    blocks.push({
      title: t.parkingTitle,
      body: String(siteConfig.amenities.parking.detail),
    });
  }

  return (
    <section className="bg-[#f7f7f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem] space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {renderText(t.h2)}
          </h2>
          <Paragraphs items={t.paragraphs} />
        </div>

        {blocks.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blocks.map((b) => (
              <li key={b.title} className="border-t border-[#556B2F]/30 pt-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#556B2F]">
                  {b.title}
                </h3>
                <p className="mt-3 text-base text-gray-900">{b.body}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function FitSection() {
  const { content, path } = useLang();
  const t = content.alojamiento.fit;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 max-w-[46rem]">
        {renderText(t.h2)}
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{t.yesTitle}</h3>
          <ul className="mt-5 space-y-3 text-gray-700 leading-relaxed">
            {t.yesItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#556B2F]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{t.noTitle}</h3>
          <ul className="mt-5 space-y-3 text-gray-700 leading-relaxed">
            {t.noItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {content.alojamiento.related.length > 0 ? (
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-gray-200 pt-8">
          {content.alojamiento.related.map((link) => (
            <li key={link.route}>
              <CtaLink to={path(link.route)} variant="ghost" className="!px-0">
                {link.label}
              </CtaLink>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
