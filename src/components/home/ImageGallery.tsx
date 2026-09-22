import { useMemo, useState } from "react";
import {
  isTodo,
  siteConfig,
  type GalleryCategoryId,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SmartImage } from "../ui/SmartImage";
import { renderText } from "../ui/TodoMark";

const ORDER: Array<GalleryCategoryId | "all"> = [
  "all",
  "exterior",
  "piscina",
  "finca",
  "alojamiento",
  "sisu",
];

export function ImageGallery({
  title,
  categories,
  className = "",
}: {
  title?: string;
  /** Limit to specific categories when used on a page. */
  categories?: GalleryCategoryId[];
  className?: string;
}) {
  const { lang, content } = useLang();
  const tabs = content.ui.galleryTabs;
  const [active, setActive] = useState<GalleryCategoryId | "all">(
    categories?.length === 1 ? categories[0] : "all",
  );

  const images = useMemo(() => {
    let list = siteConfig.gallery.filter((img) => !isTodo(img.src));
    if (categories?.length) {
      list = list.filter((img) => categories.includes(img.category));
    }
    if (active !== "all") {
      list = list.filter((img) => img.category === active);
    }
    return list;
  }, [active, categories]);

  const visibleTabs = ORDER.filter((key) => {
    if (key === "all") return !categories || categories.length > 1;
    if (categories?.length) return categories.includes(key);
    return siteConfig.gallery.some((img) => img.category === key);
  });

  const tabLabel = (key: GalleryCategoryId | "all") => {
    if (key === "all") return tabs.all;
    return tabs[key];
  };

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 max-w-[46rem]">
            {renderText(title)}
          </h2>
        )}

        {visibleTabs.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {visibleTabs.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === key
                    ? "bg-[#556B2F] text-white"
                    : "border border-[#556B2F]/30 text-[#556B2F] hover:bg-[#EEF2E6]"
                }`}
              >
                {tabLabel(key)}
              </button>
            ))}
          </div>
        )}

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img) => (
            <li key={img.src} className="overflow-hidden rounded-2xl bg-gray-100">
              <SmartImage
                src={img.src}
                alt={img.alt[lang]}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
