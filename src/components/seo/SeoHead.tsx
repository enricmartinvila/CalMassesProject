import { Helmet } from "react-helmet-async";
import { absoluteUrl, siteConfig, type Lang } from "../../config/siteConfig";
import { alternatePaths, type RouteKey } from "../../i18n/routes";

const localeMap: Record<Lang, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_GB",
};

type SeoHeadProps = {
  lang: Lang;
  routeKey: RouteKey;
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function SeoHead({
  lang,
  routeKey,
  title,
  description,
  path,
  image = siteConfig.images.ogDefault,
  noIndex = false,
}: SeoHeadProps) {
  const canonical = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);
  const alternates = alternatePaths(routeKey);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex,follow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="es" href={absoluteUrl(alternates.es)} />
      <link rel="alternate" hrefLang="ca" href={absoluteUrl(alternates.ca)} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl(alternates.en)} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={absoluteUrl(alternates.es)}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.brandName} />
      <meta property="og:locale" content={localeMap[lang]} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
