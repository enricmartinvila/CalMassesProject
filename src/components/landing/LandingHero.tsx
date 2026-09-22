import { CtaLink } from "../ui/CtaLink";
import { Paragraphs, renderText } from "../ui/TodoMark";
import { SmartImage } from "../ui/SmartImage";
import { isTodo } from "../../config/siteConfig";

type Cta = {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
};

type Props = {
  eyebrow?: string;
  h1: string;
  intro: string[];
  image?: string;
  primary: Cta;
  secondary?: Cta;
};

export function LandingHero({
  eyebrow,
  h1,
  intro,
  image,
  primary,
  secondary,
}: Props) {
  const missingImage = !image || isTodo(image);

  return (
    <header className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6 max-w-[46rem]">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-[#556B2F]">
            {renderText(eyebrow)}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-tight tracking-tight text-gray-900">
          {renderText(h1)}
        </h1>
        <Paragraphs items={intro} />
        <div className="flex flex-wrap gap-3 pt-2">
          <CtaLink
            to={primary.to}
            href={primary.href}
            external={primary.external}
          >
            {primary.label}
          </CtaLink>
          {secondary && (
            <CtaLink
              to={secondary.to}
              href={secondary.href}
              external={secondary.external}
              variant="secondary"
            >
              {secondary.label}
            </CtaLink>
          )}
        </div>
      </div>

      {missingImage ? (
        <div
          className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50 text-xs font-mono text-gray-500"
          data-todo-image={image || "TODO_IMAGE"}
          aria-hidden
        />
      ) : (
        <SmartImage
          src={image!}
          alt=""
          className="w-full rounded-3xl object-cover aspect-[16/10] shadow-lg"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}
    </header>
  );
}
