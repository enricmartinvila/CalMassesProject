import { useMemo, useState } from "react";
import {
  isTodo,
  siteConfig,
  type GalleryCategoryId,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SmartImage } from "../ui/SmartImage";
import { emphasize } from "../ui/TodoMark";

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
  eyebrow,
  emphasis,
  categories,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  emphasis?: string;
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

  const tabLabel = (key: GalleryCategoryId | "all") =>
    key === "all" ? tabs.all : tabs[key];

  return (
    <section className={`py-20 md:py-[110px] ${className}`}>
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2 className="h2-display">{emphasize(title, emphasis)}</h2>}

        {visibleTabs.length > 1 && (
          <div className="mb-10 mt-8 flex flex-wrap gap-2.5">
            {visibleTabs.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
                className={`rounded-full border-[1.5px] px-5 py-2 text-[0.88rem] font-medium transition ${
                  active === key
                    ? "border-brand bg-brand text-white"
                    : "border-line hover:border-brand"
                }`}
              >
                {tabLabel(key)}
              </button>
            ))}
          </div>
        )}

        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <li
              key={img.src}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-[14px] bg-line/40"
            >
              <SmartImage
                src={img.src}
                alt={img.alt[lang]}
                className={`w-full object-cover transition-transform duration-[600ms] group-hover:scale-105 ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
