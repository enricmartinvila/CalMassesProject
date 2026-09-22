import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { BreadcrumbJsonLd } from "../components/seo/JsonLd";
import { BookingWidget } from "../components/booking/BookingWidget";
import { CtaLink } from "../components/ui/CtaLink";
import { renderText } from "../components/ui/TodoMark";
import { siteConfig } from "../config/siteConfig";

export function ReservarPage() {
  const { lang, content, path } = useLang();
  const t = content.reservar;

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey="reservar"
        title={t.seo.title}
        description={t.seo.description}
        path={path("reservar")}
      />
      <BreadcrumbJsonLd
        items={[
          { name: content.ui.breadcrumbHome, path: path("home") },
          { name: t.seo.h1, path: path("reservar") },
        ]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">
            {renderText(t.seo.h1)}
          </h1>
          <p className="text-gray-700 leading-relaxed">{renderText(t.intro)}</p>
        </header>

        <BookingWidget />

        <div className="flex flex-wrap gap-3">
          <CtaLink href={`mailto:${siteConfig.contact.email}`} variant="secondary">
            {content.ui.cta.contact}
          </CtaLink>
          <CtaLink href={siteConfig.contact.whatsappUrl} external variant="ghost">
            WhatsApp
          </CtaLink>
        </div>
      </section>
    </>
  );
}
