import { Link } from "react-router-dom";
import { isTodo } from "../../config/siteConfig";
import { emphasize } from "../ui/TodoMark";

export function FaqSection({
  title,
  items,
  eyebrow,
  emphasis,
  lead,
  contact,
}: {
  title: string;
  items: Array<{ question: string; answer: string }>;
  eyebrow?: string;
  emphasis?: string;
  lead?: string;
  contact?: { to: string; label: string };
}) {
  const visible = items.filter(
    (item) =>
      !isTodo(item.answer) &&
      !item.answer.startsWith("TODO_") &&
      !item.question.startsWith("TODO_"),
  );

  if (!visible.length) return null;

  return (
    <section className="bg-paper py-20 md:py-[110px]">
      <div className="mx-auto grid max-w-[1180px] gap-11 px-5 sm:px-7 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h2 className="h2-display mb-6">{emphasize(title, emphasis)}</h2>
          {lead && <p className="max-w-[560px] text-[1.15rem] text-muted">{lead}</p>}
          {contact && (
            <Link to={contact.to} className="link-underline mt-6">
              {contact.label} →
            </Link>
          )}
        </div>
        <div>
          {visible.map((item, i) => (
            <details key={i} className="group border-b border-line py-[22px]">
              <summary className="flex cursor-pointer list-none justify-between gap-5 text-[1.05rem] font-medium">
                <span>{item.question}</span>
                <span className="shrink-0 text-2xl leading-none text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3.5 max-w-[560px] text-[0.97rem] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
