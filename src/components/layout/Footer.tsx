import { Link } from "react-router-dom";
import { bookingHref, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";
import { Logo } from "./Header";

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

  const linkCls = "transition-colors hover:text-white";

  return (
    <footer className="bg-[#171a0e] pb-9 pt-20 text-[0.92rem] text-[#b9bca6]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <div className="mb-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link to={path("home")} className="mb-4 block text-white">
              <Logo className="!text-[1.8rem]" />
            </Link>
            <p className="max-w-xs leading-relaxed">{content.home.seo.h1}.</p>
            <p className="mt-5 text-xs leading-relaxed text-[#8d907b]">
              {siteConfig.address.line}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.locality}
            </p>
          </div>

          <FooterCol title={f.exploreTitle}>
            {brand.map((item) => (
              <li key={item.route}>
                <Link className={linkCls} to={path(item.route)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.entornoTitle}>
            {entorno.map((item) => (
              <li key={item.route}>
                <Link className={linkCls} to={path(item.route)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.stayTitle}>
            {stay.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    className={linkCls}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className={linkCls} to={item.to!}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[0.82rem]">
          <span>
            © {year} {siteConfig.brandName}
          </span>
          <div className="flex flex-wrap gap-6">
            <Link className={linkCls} to={path("avisoLegal")}>
              {f.legal}
            </Link>
            <Link className={linkCls} to={path("privacidad")}>
              {f.privacy}
            </Link>
            <Link className={linkCls} to={path("cookies")}>
              {f.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
