import { useEffect, useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import { SmartImage } from "../ui/SmartImage";

/** Loads one visible image; others mount only when selected (LCP-friendly). */
export function HeroGallery() {
  const images = siteConfig.images.heroGallery;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearTimeout(t);
  }, [index, images.length]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
      <SmartImage
        src={images[index]}
        alt=""
        className="h-full w-full object-cover"
        priority={index === 0}
        sizes="(max-width: 768px) 100vw, 900px"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

      <button
        type="button"
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white"
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white"
        onClick={() => setIndex((i) => (i + 1) % images.length)}
      >
        ›
      </button>

      <div className="absolute bottom-3 flex w-full justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-4 bg-[#556B2F]" : "w-2 bg-white/70"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
