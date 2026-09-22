import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";

export function Footer() {
  const { content, path } = useLang();
  const year = new Date().getFullYear();

  const discover: Array<{ route: RouteKey; label: string }> = [
    { route: "landingBages", label: content.ui.footer.discoverBages },
    { route: "landingManresa", label: content.ui.footer.discoverManresa },
    { route: "landingMontserrat", label: content.ui.footer.discoverMontserrat },
    { route: "landingParaDos", label: content.ui.footer.discoverParaDos },
    { route: "landingEnoturismo", label: content.ui.footer.discoverEnoturismo },
  ];

  return (
    <footer className="border-t border-gray-200 bg-[#f7f7f4] text-gray-700">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-gray-900">{siteConfig.brandName}</p>
          <p className="mt-2 text-sm leading-relaxed">
            {siteConfig.address.line}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.locality}
            <br />
            {siteConfig.address.region}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            {content.ui.footer.discoverTitle}
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {discover.map((d) => (
              <li key={d.route}>
                <Link className="hover:underline" to={path(d.route)}>
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{content.ui.nav.contacto}</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a className="hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a className="hover:underline" href={`tel:${siteConfig.contact.phoneE164}`}>
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">{content.ui.footer.legal}</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link className="hover:underline" to={path("avisoLegal")}>
                {content.ui.footer.legal}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={path("privacidad")}>
                {content.ui.footer.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={path("cookies")}>
                {content.ui.footer.cookies}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {year} {siteConfig.brandName}
      </div>
    </footer>
  );
}
