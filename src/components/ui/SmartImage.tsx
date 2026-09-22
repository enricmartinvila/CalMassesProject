type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  /** Override auto-derived responsive srcSet from /images/*-1600.webp */
  srcSet?: string;
};

const RESPONSIVE_WIDTHS = [400, 800, 1600] as const;

/**
 * Lazy by default. Use priority only for LCP.
 * Prefer pre-generated /images/* webp/avif from scripts/optimize-images.mjs.
 *
 * For `/images/{name}-{width}.webp`, builds matching webp + avif srcsets
 * so mobile does not download the 1600w file.
 */
function deriveFromOptimizedSrc(src: string, explicitSrcSet?: string) {
  const match = src.match(/^(.*\/images\/.+)-(\d+)\.webp$/i);
  if (!match) {
    const avif =
      src.includes("/images/") && src.endsWith(".webp")
        ? src.replace(/\.webp$/i, ".avif")
        : null;
    return {
      webpSrcSet: explicitSrcSet,
      avifSrcSet: explicitSrcSet
        ? explicitSrcSet.replace(/\.webp/gi, ".avif")
        : avif ?? undefined,
      avifSingle: avif,
    };
  }

  const base = match[1];
  const webpSrcSet =
    explicitSrcSet ??
    RESPONSIVE_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const avifSrcSet = webpSrcSet.replace(/\.webp/gi, ".avif");

  return { webpSrcSet, avifSrcSet, avifSingle: `${base}-${match[2]}.avif` };
}

export function SmartImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes = "100vw",
  srcSet,
}: Props) {
  const { webpSrcSet, avifSrcSet, avifSingle } = deriveFromOptimizedSrc(
    src,
    srcSet,
  );

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={webpSrcSet}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  if (!avifSrcSet && !avifSingle) return img;

  return (
    <picture>
      {avifSrcSet ? (
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      ) : (
        <source type="image/avif" srcSet={avifSingle!} />
      )}
      {webpSrcSet ? (
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      ) : null}
      {img}
    </picture>
  );
}

/** Shared hero / LCP preload hints (mirrored in index.html). */
export const HERO_LCP = {
  webp: "/images/exterior-1600.webp",
  avifSrcSet:
    "/images/exterior-400.avif 400w, /images/exterior-800.avif 800w, /images/exterior-1600.avif 1600w",
  sizes: "100vw",
} as const;
