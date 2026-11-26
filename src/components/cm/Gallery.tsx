import { useEffect, useRef, useState } from "react";
import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SmartImage } from "../ui/SmartImage";
import { Icon } from "./Icons";

/** Photo grid; each photo opens in a lightbox with previous/next. */
export function Gallery({ images }: { images: string[] }) {
  const { lang, content } = useLang();
  const t = content.alojamiento;
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const list = images
    .filter((src) => src && !isTodo(src))
    .map((src) => ({ src, alt: siteConfig.gallery.find((g) => g.src === src)?.alt[lang] ?? "" }));

  const open = (i: number) => {
    setIndex(i);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();
  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + list.length) % list.length));

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    dlg.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  });

  if (!list.length) return null;
  const current = index === null ? null : list[index];

  return (
    <>
      <div className="cm-gallery">
        {list.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`cm-g ${i === 0 ? "cm-g1" : ""}`}
            aria-label={`${t.eyebrows.enlarge}: ${img.alt}`}
            onClick={() => open(i)}
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              sizes={i === 0 ? "(max-width: 960px) 100vw, 50vw" : "(max-width: 960px) 50vw, 25vw"}
            />
          </button>
        ))}
      </div>
      <dialog
        ref={ref}
        className="cm-lb"
        aria-label={t.gallery.seeAll}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current ? (
          <div className="cm-lb-fig">
            <button type="button" className="cm-lb-x" aria-label={t.gallery.close} onClick={close}>
              <Icon name="close" />
            </button>
            <img src={current.src} alt={current.alt} />
            {list.length > 1 ? (
              <>
                <button type="button" className="cm-lb-nav cm-lb-prev" aria-label="←" onClick={() => step(-1)}>
                  <Icon name="arrow" />
                </button>
                <button type="button" className="cm-lb-nav cm-lb-next" aria-label="→" onClick={() => step(1)}>
                  <Icon name="arrow" />
                </button>
              </>
            ) : null}
            <p>
              {current.alt} · {(index ?? 0) + 1}/{list.length}
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
