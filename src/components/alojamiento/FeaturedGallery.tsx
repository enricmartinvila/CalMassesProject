import { useEffect, useMemo, useState } from "react";
import {
  isTodo,
  siteConfig,
  type GalleryCategoryId,
} from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SmartImage } from "../ui/SmartImage";

const LIGHTBOX_ORDER: GalleryCategoryId[] = [
  "alojamiento",
  "exterior",
  "piscina",
  "finca",
];

export function FeaturedGallery() {
  const { lang, content } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryCategoryId | "all">("all");

  const featured = useMemo(() => {
    return siteConfig.alojamientoFeatured
      .map((item) => {
        const full = siteConfig.gallery.find((g) => g.src === item.src);
        if (!full || isTodo(full.src)) return null;
        return full;
      })
      .filter(Boolean) as typeof siteConfig.gallery;
  }, []);

  const lightboxImages = useMemo(() => {
    let list = siteConfig.gallery.filter(
      (img) =>
        !isTodo(img.src) &&
        LIGHTBOX_ORDER.includes(img.category as GalleryCategoryId),
    );
    if (active !== "all") {
      list = list.filter((img) => img.category === active);
    }
    return list;
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const tabLabel = (key: GalleryCategoryId | "all") => {
    if (key === "all") return content.ui.galleryTabs.all;
    return content.ui.galleryTabs[key];
  };

  return (
    <section id="espacios" className="scroll-mt-24">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {featured.map((img, index) => (
          <li
            key={img.src}
            className={
              index === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
            }
          >
            <button
              type="button"
              onClick={() => {
                setActive(img.category);
                setOpen(true);
              }}
              className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#556B2F]"
            >
              <SmartImage
                src={img.src}
                alt={img.alt[lang]}
                className={`w-full object-cover transition duration-300 group-hover:scale-[1.02] ${
                  index === 0 ? "aspect-[16/10] md:aspect-[4/3]" : "aspect-[4/3]"
                }`}
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <button
          type="button"
          onClick={() => {
            setActive("all");
            setOpen(true);
          }}
          className="text-sm font-medium text-[#556B2F] underline-offset-4 hover:underline"
        >
          {content.alojamiento.gallery.seeAll}
        </button>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={content.alojamiento.gallery.seeAll}
          className="fixed inset-0 z-50 flex flex-col bg-black/90"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-white sm:px-6">
            <div className="flex flex-wrap gap-2">
              {(["all", ...LIGHTBOX_ORDER] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={`rounded-full px-3 py-1.5 text-xs sm:text-sm transition ${
                    active === key
                      ? "bg-white text-gray-900"
                      : "border border-white/40 text-white/90 hover:bg-white/10"
                  }`}
                >
                  {tabLabel(key)}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-full border border-white/40 px-3 py-1.5 text-sm text-white hover:bg-white/10"
            >
              {content.alojamiento.gallery.close}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-8 sm:px-6">
            <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lightboxImages.map((img) => (
                <li key={img.src} className="overflow-hidden rounded-xl bg-black">
                  <SmartImage
                    src={img.src}
                    alt={img.alt[lang]}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
