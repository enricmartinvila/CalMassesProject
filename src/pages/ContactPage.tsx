import { useCallback, useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { BreadcrumbJsonLd } from "../components/seo/JsonLd";
import { ConsentMap } from "../components/ui/ConsentMap";
import { renderText } from "../components/ui/TodoMark";
import { WhatsIcon } from "../assets/whatsapp_icon";

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
      <BreadcrumbJsonLd
        items={[
          { name: content.ui.breadcrumbHome, path: path("home") },
          { name: t.seo.h1, path: path("contacto") },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 space-y-4 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">
            {renderText(t.seo.h1)}
          </h1>
          <p className="text-gray-700 leading-relaxed">{renderText(t.intro)}</p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#556B2F]/20 bg-white p-6 md:p-8 shadow-md">
            <p className="text-lg font-semibold">{contact.name}</p>
            <ul className="mt-6 space-y-4 text-gray-800">
              <li className="flex gap-3">
                <MapPinIcon className="h-6 w-6 shrink-0" />
                <span>{addressText}</span>
              </li>
              <li className="flex gap-3 items-center">
                <EnvelopeIcon className="h-6 w-6 shrink-0" />
                <a className="hover:underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <PhoneIcon className="h-6 w-6 shrink-0" />
                <a className="hover:underline" href={`tel:${contact.phoneE164}`}>
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-semibold text-white"
              >
                <WhatsIcon className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={mapsDir}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#556B2F] px-4 py-3 font-semibold text-[#556B2F]"
              >
                <MapPinIcon className="h-5 w-5" />
                {t.arrival}
              </a>
              <button
                type="button"
                onClick={downloadVCard}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#556B2F] px-4 py-3 font-semibold text-[#556B2F]"
              >
                {t.saveContact}
              </button>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#556B2F] px-4 py-3 font-semibold text-[#556B2F]"
              >
                {copied ? t.copied : t.copyEmail}
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#556B2F]/20 shadow-md min-h-[320px]">
            <ConsentMap />
            <div className="absolute inset-x-0 bottom-0 bg-[#EEF2E6] px-4 py-3 text-sm font-medium text-[#556B2F]">
              {addressText}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
