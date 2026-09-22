import { CtaLink } from "../ui/CtaLink";
import { Paragraphs, renderText } from "../ui/TodoMark";

type Cta = {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
};

type Props = {
  h2: string;
  paragraphs: string[];
  primary: Cta;
  secondary?: Cta;
};

export function BookingCTA({ h2, paragraphs, primary, secondary }: Props) {
  return (
    <section className="rounded-3xl bg-[#556B2F] px-6 py-10 md:px-10 text-white">
      <div className="max-w-[46rem] space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold">{renderText(h2)}</h2>
        <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{renderText(p)}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <CtaLink
            to={primary.to}
            href={primary.href}
            external={primary.external}
            className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
          >
            {primary.label}
          </CtaLink>
          {secondary && (
            <CtaLink
              to={secondary.to}
              href={secondary.href}
              external={secondary.external}
              variant="secondary"
              className="!border-white !text-white hover:!bg-white/10"
            >
              {secondary.label}
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
