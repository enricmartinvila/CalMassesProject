import { Link } from "react-router-dom";
import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";
import { Icon } from "../cm/Icons";
import { Logo } from "./Header";

export function Footer() {
  const { content, path } = useLang();
  const year = new Date().getFullYear();
  const f = content.ui.footer;
  const { contact } = siteConfig;

  const finca: Array<[RouteKey, string]> = [
    ["alojamiento", content.ui.nav.alojamiento],
    ["finca", f.laFinca],
    ["sisu", content.ui.nav.sisu],
    ["contacto", content.ui.nav.contacto],
  ];
  const entorno: Array<[RouteKey, string]> = [
    ["landingBages", content.ui.nav.entornoBages],
    ["landingMontserrat", content.ui.nav.entornoMontserrat],
    ["landingManresa", content.ui.nav.entornoManresa],
    ["landingEnoturismo", content.ui.nav.entornoEnoturismo],
    ["landingParaDos", f.paraDos],
    ["landingPiscina", f.withPool],
    ["landingBarcelona", "Barcelona"],
  ];

  const a = "no-underline hover:text-white hover:underline";

  return (
    <footer className="bg-[#232b14] pt-16 text-[#d8d3bd]">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-[18px] pb-11 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link to={path("home")} className="text-white no-underline">
            <Logo accent="text-[#e9d8a6]" />
          </Link>
          <p className="mt-3.5 max-w-[42ch] text-[0.95rem]">{f.tagline}</p>
          <p className="mt-3.5 grid gap-2">
            <a className={`${a} inline-flex items-center gap-2.5`} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              WhatsApp
            </a>
            <a className={`${a} inline-flex items-center gap-2.5`} href={`mailto:${contact.email}`}>
              <Icon name="mail" />
              {contact.email}
            </a>
            <a className={`${a} inline-flex items-center gap-2.5`} href={`tel:${contact.phoneE164}`}>
              <Icon name="phone" />
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
        <FooterCol title={f.laFinca}>
          {finca.map(([k, l]) => (
            <li key={k}>
              <Link className={a} to={path(k)}>
                {l}
              </Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title={f.entornoTitle}>
          {entorno.map(([k, l]) => (
            <li key={k}>
              <Link className={a} to={path(k)}>
                {l}
              </Link>
            </li>
          ))}
        </FooterCol>
      </div>
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-2.5 border-t border-white/15 px-[18px] pb-6 pt-5 text-[0.85rem] sm:px-6">
        <span>
          © {year} {siteConfig.brandName}
          {!isTodo(siteConfig.registrationNumber) && <> · {siteConfig.registrationNumber}</>}
        </span>
        <span className="flex flex-wrap gap-x-[18px] gap-y-1">
          <Link className={a} to={path("avisoLegal")}>
            {f.legal}
          </Link>
          <Link className={a} to={path("privacidad")}>
            {f.privacy}
          </Link>
          <Link className={a} to={path("cookies")}>
            {f.cookies}
          </Link>
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#e9d8a6]">{title}</h2>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}
