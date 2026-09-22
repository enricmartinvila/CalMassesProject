import { siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SimpleContentPage } from "./SimpleContentPage";
import { SmartImage } from "../components/ui/SmartImage";
import { Paragraphs, renderText } from "../components/ui/TodoMark";

export function AlojamientoPage() {
  const { content } = useLang();
  return (
    <SimpleContentPage
      routeKey="alojamiento"
      content={content.alojamiento}
      breadcrumbName={content.ui.nav.alojamiento}
      image={siteConfig.images.heroLcp}
    />
  );
}

export function FincaPage() {
  const { content } = useLang();
  return (
    <SimpleContentPage
      routeKey="finca"
      content={content.finca}
      breadcrumbName={content.ui.nav.finca}
      image={siteConfig.images.vineyard}
    />
  );
}

export function SisuPage() {
  const { content } = useLang();
  const wine = content.sisu.existingWine;

  return (
    <SimpleContentPage
      routeKey="sisu"
      content={content.sisu}
      breadcrumbName={content.ui.nav.sisu}
      image={siteConfig.images.wine}
    >
      {wine && (
        <section className="mt-12 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {renderText(wine.title)}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <SmartImage
              src={siteConfig.images.wineAlt}
              alt=""
              className="w-full rounded-3xl object-cover aspect-[4/3]"
            />
            <div>
              <Paragraphs items={wine.paragraphs} />
              <p className="mt-4 text-xs tracking-wide text-[#556B2F]">
                {wine.footer}
              </p>
            </div>
          </div>
        </section>
      )}
    </SimpleContentPage>
  );
}
