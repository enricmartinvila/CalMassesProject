import { useCallback, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { ConsentMap } from "../components/ui/ConsentMap";
import { Btn, Hero, Page } from "../components/cm/Blocks";
import { Icon } from "../components/cm/Icons";
import { GuideBlocks } from "../components/guide/GuideBlocks";

export function ContactPage() {
  const { lang, content, path } = useLang();
  const t = content.contacto;
  const [copied, setCopied] = useState(false);
  const { contact, address, geo } = siteConfig;

  const addressText = `${address.line} · ${address.postalCode} · ${address.locality}`;
  const mapsDir = `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }, [contact.email]);

  const downloadVCard = useCallback(() => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Cal Masses;Alba;;;",
      "FN:Alba · Cal Masses",
      `TEL;TYPE=CELL,VOICE:${contact.phoneE164}`,
      `EMAIL;TYPE=INTERNET:${contact.email}`,
      `ADR;TYPE=WORK:;;${addressText.replaceAll(" · ", ", ")};Barcelona;;${address.postalCode};España`,
      `GEO:${geo.lat};${geo.lng}`,
      "ORG:Cal Masses",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CalMasses.vcf";
    a.click();
    URL.revokeObjectURL(url);
  }, [address.postalCode, addressText, contact.email, contact.phoneE164, geo.lat, geo.lng]);

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey="contacto"
        title={t.seo.title}
        description={t.seo.description}
        path={path("contacto")}
      />
      <Page>
        <Hero
          crumbs={[{ label: content.ui.breadcrumbHome, route: "home" }, { label: t.seo.h1 }]}
          h1={t.seo.h1}
          intro={[t.intro]}
          image={siteConfig.images.vineyard}
          actions={
            <div className="cm-actions">
              <Btn href={contact.whatsappUrl} external>
                {t.whatsappCta}
              </Btn>
            </div>
          }
        />
        <section className="cm-sec rv">
          <div className="cm-wrap cm-contact-grid">
            <div className="cm-contact-card">
              <p className="cm-eyebrow">{t.writeUs}</p>
              <h2>{contact.name}</h2>
              <ul>
                <li>
                  <Icon name="pin" />
                  <span>{addressText}</span>
                </li>
                <li>
                  <Icon name="mail" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <Icon name="phone" />
                  <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a>
                </li>
              </ul>
              <div className="cm-actions">
                <Btn href={contact.whatsappUrl} external>
                  WhatsApp
                </Btn>
                <Btn variant="ghost-dark" href={mapsDir} external>
                  {t.arrival}
                </Btn>
                <Btn variant="ghost-dark" onClick={copyEmail}>
                  {copied ? t.copied : t.copyEmail}
                </Btn>
                <Btn variant="ghost-dark" onClick={downloadVCard}>
                  {t.saveContact}
                </Btn>
              </div>
            </div>
            <div className="cm-mapbox">
              <ConsentMap />
            </div>
          </div>
        </section>
        <GuideBlocks page="contacto" />
      </Page>
    </>
  );
}
