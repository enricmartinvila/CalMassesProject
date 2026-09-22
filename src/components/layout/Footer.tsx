import { Link } from "react-router-dom";
import { bookingHref, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";

export function Footer() {
  const { content, path } = useLang();
  const year = new Date().getFullYear();
  const f = content.ui.footer;

  const brand: Array<{ route: RouteKey; label: string }> = [
    { route: "alojamiento", label: content.ui.nav.alojamiento },
    { route: "finca", label: f.laFinca },
    { route: "sisu", label: content.ui.nav.sisu },
    { route: "contacto", label: content.ui.nav.contacto },
  ];

  const entorno: Array<{ route: RouteKey; label: string }> = [
    { route: "landingBages", label: content.ui.nav.entornoBages },
    { route: "landingManresa", label: content.ui.nav.entornoManresa },
    { route: "landingMontserrat", label: content.ui.nav.entornoMontserrat },
    { route: "landingEnoturismo", label: content.ui.nav.entornoEnoturismo },
  ];

  const stay: Array<{ label: string; to?: string; href?: string }> = [
    { label: f.paraDos, to: path("landingParaDos") },
    { label: f.piscina, to: path("landingPiscina") },
    {
      label: content.ui.cta.availability,
      href: bookingHref(),
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-[#f7f7f4] text-gray-700">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-gray-900">{f.brandTitle}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {brand.map((item) => (
              <li key={item.route}>
                <Link className="hover:underline" to={path(item.route)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{f.entornoTitle}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {entorno.map((item) => (
              <li key={item.route}>
                <Link className="hover:underline" to={path(item.route)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{f.stayTitle}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {stay.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    className="hover:underline"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className="hover:underline" to={item.to!}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{f.legal}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link className="hover:underline" to={path("avisoLegal")}>
                {f.legal}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={path("privacidad")}>
                {f.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={path("cookies")}>
                {f.cookies}
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs text-gray-500 leading-relaxed">
            {siteConfig.address.line}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.locality}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {year} {siteConfig.brandName}
      </div>
    </footer>
  );
}
