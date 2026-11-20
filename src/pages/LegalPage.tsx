import { isTodo, siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { legalBodies, legalLabels, type LegalKind } from "../content/legal";
import type { RouteKey } from "../i18n/routes";

const routeMap: Record<LegalKind, RouteKey> = {
  aviso: "avisoLegal",
  privacidad: "privacidad",
  cookies: "cookies",
};

function Identification() {
  const { lang } = useLang();
  const l = legalLabels[lang];
  const a = siteConfig.address;
  const rows: Array<[string, string]> = [];
  if (!isTodo(siteConfig.legal.holderName)) rows.push([l.holder, siteConfig.legal.holderName]);
  if (!isTodo(siteConfig.legal.taxId)) rows.push([l.taxId, siteConfig.legal.taxId]);
  rows.push([l.address, `${a.line}, ${a.postalCode} ${a.locality} (${a.region})`]);
  rows.push([l.email, siteConfig.contact.email]);
  rows.push([l.phone, siteConfig.contact.phoneDisplay]);
  if (!isTodo(siteConfig.registrationNumber)) rows.push([l.registration, siteConfig.registrationNumber]);

  return (
    <section>
      <h2 className="mb-3 text-2xl">{l.identification}</h2>
      <dl className="divide-y divide-line border-y border-line">
        {rows.map(([k, v]) => (
          <div key={k} className="flex flex-wrap justify-between gap-2 py-2.5 text-[0.95rem]">
            <dt className="text-muted">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { lang, content, path } = useLang();
  const page = content.legal[kind];
  const routeKey = routeMap[kind];
  const sections = legalBodies[lang][kind];

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={routeKey}
        title={page.seo.title}
        description={page.seo.description}
        path={path(routeKey)}
        noIndex
      />
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-7">
        <h1 className="mb-10 text-4xl font-light">{page.seo.h1}</h1>
        <div className="space-y-10 leading-relaxed">
          {kind === "aviso" && <Identification />}
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="mb-3 text-2xl">{s.h}</h2>
              <div className="space-y-3 text-muted">
                {s.p.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
