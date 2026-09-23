import { Link } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { BreadcrumbJsonLd } from "../seo/JsonLd";
import { renderText } from "../ui/TodoMark";
import type { RouteKey } from "../../i18n/routes";

type Crumb = { label: string; route?: RouteKey };

export function Breadcrumbs({
  items,
  variant = "default",
}: {
  items: Crumb[];
  variant?: "default" | "editorial" | "onDark";
}) {
  const { path } = useLang();

  const jsonItems = items.map((item, index) => ({
    name: item.label.startsWith("TODO_") ? item.label : item.label,
    path:
      index < items.length - 1 && item.route
        ? path(item.route)
        : item.route
          ? path(item.route)
          : undefined,
  }));

  const tone =
    variant === "onDark"
      ? "text-white/60"
      : variant === "editorial"
        ? "text-gray-400"
        : "text-gray-500";
  const current =
    variant === "onDark" ? "text-white/85" : "text-gray-700";
  const hover =
    variant === "onDark"
      ? "hover:text-white"
      : "hover:text-[#556B2F] hover:underline";

  return (
    <>
      <BreadcrumbJsonLd
        items={jsonItems.map((j) => ({
          name: j.name,
          path: j.path,
        }))}
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-xs tracking-wide ${tone} ${
          variant === "default" ? "mb-8" : "mb-0"
        }`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>/</span>}
                {isLast || !item.route ? (
                  <span className={current}>{renderText(item.label)}</span>
                ) : (
                  <Link to={path(item.route)} className={hover}>
                    {renderText(item.label)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
