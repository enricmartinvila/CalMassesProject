import { isTodo } from "../../config/siteConfig";
import { SmartImage } from "../ui/SmartImage";
import { Paragraphs, renderText } from "../ui/TodoMark";
import { Breadcrumbs } from "../landing/Breadcrumbs";
import type { RouteKey } from "../../i18n/routes";

type Crumb = { label: string; route?: RouteKey };

type HeroProps = {
  variant: "panoramic" | "split" | "vineyard";
  eyebrow?: string;
  h1: string;
  intro: string[];
  image?: string;
  breadcrumb: Crumb[];
  /** Soft secondary action under intro — never primary booking. */
  softCta?: React.ReactNode;
};

/**
 * Editorial hero — destination-first, no aggressive booking CTA.
 * Missing/TODO images are omitted (never shown to visitors).
 */
export function EditorialHero({
  variant,
  eyebrow,
  h1,
  intro,
  image,
  breadcrumb,
  softCta,
}: HeroProps) {
  const hasImage = Boolean(image && !isTodo(image));
  const lead = intro[0];
  const rest = intro.slice(1);

  if (variant === "panoramic") {
    return (
      <header className="relative">
        {hasImage ? (
          <div className="relative min-h-[52vh] md:min-h-[62vh] w-full overflow-hidden">
            <SmartImage
              src={image!}
              alt=""
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
            <div className="relative z-10 mx-auto flex min-h-[52vh] md:min-h-[62vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-8 md:pb-16">
              <Breadcrumbs items={breadcrumb} variant="onDark" />
              {eyebrow ? (
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/75">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-3 max-w-[20ch] text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] tracking-tight text-white">
                {renderText(h1)}
              </h1>
              {lead ? (
                <p className="mt-5 max-w-[42rem] text-lg md:text-xl text-white/90 leading-relaxed">
                  {renderText(lead)}
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumb} variant="editorial" />
            {eyebrow ? (
              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.28em] text-[#556B2F]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 max-w-[22ch] text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] tracking-tight text-gray-900">
              {renderText(h1)}
            </h1>
            {lead ? (
              <p className="mt-5 max-w-[42rem] text-lg md:text-xl text-gray-700 leading-relaxed">
                {renderText(lead)}
              </p>
            ) : null}
          </div>
        )}

        {(rest.length > 0 || softCta) && (
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            {rest.length > 0 ? (
              <Paragraphs
                items={rest}
                className="max-w-[46rem] !text-base md:!text-lg"
              />
            ) : null}
            {softCta ? <div className="mt-6">{softCta}</div> : null}
          </div>
        )}
      </header>
    );
  }

  if (variant === "split") {
    return (
      <header className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumb} variant="editorial" />
        <div
          className={`mt-8 grid gap-10 lg:gap-14 lg:items-end ${
            hasImage ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
          }`}
        >
          <div className="max-w-[40rem]">
            {eyebrow ? (
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#556B2F]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-[2.75rem] font-light leading-[1.12] tracking-tight text-gray-900">
              {renderText(h1)}
            </h1>
            {lead ? (
              <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
                {renderText(lead)}
              </p>
            ) : null}
            {rest.length > 0 ? (
              <Paragraphs items={rest} className="mt-4 !text-base md:!text-lg" />
            ) : null}
            {softCta ? <div className="mt-6">{softCta}</div> : null}
          </div>
          {hasImage ? (
            <SmartImage
              src={image!}
              alt=""
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="w-full rounded-sm object-cover aspect-[4/5] max-h-[36rem]"
              width={1200}
              height={1500}
            />
          ) : null}
        </div>
      </header>
    );
  }

  /* vineyard */
  return (
    <header>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumb} variant="editorial" />
        {eyebrow ? (
          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.28em] text-[#556B2F]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-[22ch] text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] tracking-tight text-gray-900">
          {renderText(h1)}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-[42rem] text-lg md:text-xl text-gray-700 leading-relaxed">
            {renderText(lead)}
          </p>
        ) : null}
      </div>
      {hasImage ? (
        <div className="mt-10 md:mt-14">
          <SmartImage
            src={image!}
            alt=""
            priority
            sizes="100vw"
            className="w-full object-cover aspect-[21/9] min-h-[14rem] max-h-[28rem]"
            width={1600}
            height={686}
          />
        </div>
      ) : null}
      {(rest.length > 0 || softCta) && (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {rest.length > 0 ? (
            <Paragraphs items={rest} className="max-w-[46rem]" />
          ) : null}
          {softCta ? <div className="mt-6">{softCta}</div> : null}
        </div>
      )}
    </header>
  );
}
