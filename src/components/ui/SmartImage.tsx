type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
};

/**
 * Lazy by default. Use priority only for LCP.
 * Prefer pre-generated /images/* webp/avif from scripts/optimize-images.mjs.
 */
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
  const avif =
    src.includes("/images/") && src.endsWith(".webp")
      ? src.replace(/\.webp$/i, ".avif")
      : null;

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  if (!avif) return img;

  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={src} type="image/webp" />
      {img}
    </picture>
  );
}
