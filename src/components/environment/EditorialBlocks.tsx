import { Link } from "react-router-dom";
import { isTodo } from "../../config/siteConfig";
import { SmartImage } from "../ui/SmartImage";
import { Paragraphs, renderText } from "../ui/TodoMark";

export function EditorialSection({
  id,
  h2,
  paragraphs,
  children,
  spacing = "default",
}: {
  id?: string;
  h2?: string;
  paragraphs?: string[];
  children?: React.ReactNode;
  spacing?: "tight" | "default" | "loose";
}) {
  const pad =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
        ? "py-20 md:py-28"
        : "py-16 md:py-24";

  return (
    <section id={id} className={`scroll-mt-28 ${pad}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {h2 ? (
          <h2 className="max-w-[40rem] text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {renderText(h2)}
          </h2>
        ) : null}
        {paragraphs?.length ? (
          <Paragraphs
            items={paragraphs}
            className={`max-w-[46rem] ${h2 ? "mt-5" : ""}`}
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function ImageTextSplit({
  id,
  h2,
  paragraphs,
  image,
  imageSide = "right",
  aspect = "4/3",
  children,
  spacing = "default",
}: {
  id?: string;
  h2: string;
  paragraphs?: string[];
  image?: string;
  imageSide?: "left" | "right";
  aspect?: "4/3" | "4/5" | "16/10";
  children?: React.ReactNode;
  spacing?: "tight" | "default" | "loose";
}) {
  const hasImage = Boolean(image && !isTodo(image));
  const pad =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
        ? "py-20 md:py-28"
        : "py-16 md:py-24";
  const aspectClass =
    aspect === "4/5"
      ? "aspect-[4/5]"
      : aspect === "16/10"
        ? "aspect-[16/10]"
        : "aspect-[4/3]";

  return (
    <section id={id} className={`scroll-mt-28 ${pad}`}>
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-14 lg:items-center ${
          hasImage ? "lg:grid-cols-2" : ""
        }`}
      >
        <div
          className={`max-w-[46rem] space-y-5 ${
            hasImage && imageSide === "left" ? "lg:order-2" : ""
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            {renderText(h2)}
          </h2>
          {paragraphs?.length ? <Paragraphs items={paragraphs} /> : null}
          {children}
        </div>
        {hasImage ? (
          <SmartImage
            src={image!}
            alt=""
            className={`w-full rounded-sm object-cover ${aspectClass} ${
              imageSide === "left" ? "lg:order-1" : ""
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}
      </div>
    </section>
  );
}

export function FullWidthImage({
  src,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  if (!src || isTodo(src)) return null;
  return (
    <div className={`w-full ${className}`}>
      <SmartImage
        src={src}
        alt=""
        className="w-full object-cover aspect-[21/9] min-h-[12rem] max-h-[26rem]"
        sizes="100vw"
      />
    </div>
  );
}

export function NumberedList({
  items,
}: {
  items: Array<{ title: string; text: string; href?: string; cta?: string }>;
}) {
  return (
    <ol className="mt-10 max-w-[46rem] space-y-10">
      {items.map((item, i) => (
        <li key={`${item.title}-${i}`} className="grid gap-3 sm:grid-cols-[3.5rem_1fr]">
          <span className="text-sm font-medium tracking-[0.18em] text-[#556B2F]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {renderText(item.title)}
            </h3>
            <p className="mt-2 text-base text-gray-700 leading-relaxed">
              {renderText(item.text)}
            </p>
            {item.href && item.cta ? (
              <Link
                to={item.href}
                className="mt-3 inline-block text-sm font-medium text-[#556B2F] underline-offset-4 hover:underline"
              >
                {item.cta}
              </Link>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function EditorialNote({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-10 max-w-[40rem] border-l-2 border-[#556B2F]/40 pl-5 py-1">
      {label ? (
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#556B2F]">
          {label}
        </p>
      ) : null}
      <div className={`text-base md:text-lg text-gray-800 leading-relaxed ${label ? "mt-2" : ""}`}>
        {children}
      </div>
    </aside>
  );
}
