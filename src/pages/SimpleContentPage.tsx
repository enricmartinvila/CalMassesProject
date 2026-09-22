import type { SimplePageContent } from "../content/types";
import type { RouteKey } from "../i18n/routes";
import { bookingHref, isTodo, siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { BreadcrumbJsonLd } from "../components/seo/JsonLd";
import { CtaLink } from "../components/ui/CtaLink";
import { Paragraphs, renderText } from "../components/ui/TodoMark";
import { SmartImage } from "../components/ui/SmartImage";

type Props = {
  routeKey: RouteKey;
  content: SimplePageContent;
  breadcrumbName: string;
  image?: string;
  children?: React.ReactNode;
};

export function SimpleContentPage({
  routeKey,
  content,
  breadcrumbName,
  image,
  children,
}: Props) {
  const { lang, path, content: bundle } = useLang();

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={routeKey}
        title={content.seo.title}
        description={content.seo.description}
        path={path(routeKey)}
      />
      <BreadcrumbJsonLd
        items={[
          { name: bundle.ui.breadcrumbHome, path: path("home") },
          { name: breadcrumbName, path: path(routeKey) },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-8">
          {renderText(content.seo.h1)}
        </h1>

        {image && (
          <SmartImage
            src={image}
            alt=""
            className="mb-10 w-full rounded-3xl object-cover aspect-[16/9]"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        )}

        <div className="mb-10">
          <Paragraphs items={content.intro} />
        </div>

        {content.sections.map((section) => (
          <section key={section.h2} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {renderText(section.h2)}
            </h2>
            <Paragraphs items={section.paragraphs} />
          </section>
        ))}

        {children}

        {content.cta && (
          <div className="mt-10 flex flex-wrap gap-3">
            {content.cta.primaryRoute === "reservar" &&
            !isTodo(siteConfig.booking.url) ? (
              <CtaLink href={bookingHref()} external>
                {bundle.ui.cta.availability}
              </CtaLink>
            ) : (
              <CtaLink
                to={
                  content.cta.primaryRoute
                    ? path(content.cta.primaryRoute)
                    : undefined
                }
              >
                {content.cta.primary}
              </CtaLink>
            )}
            {content.cta.secondary && (
              <CtaLink
                to={
                  content.cta.secondaryRoute
                    ? path(content.cta.secondaryRoute)
                    : undefined
                }
                variant="secondary"
              >
                {content.cta.secondary}
              </CtaLink>
            )}
          </div>
        )}
      </article>
    </>
  );
}
