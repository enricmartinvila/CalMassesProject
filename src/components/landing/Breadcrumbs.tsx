import { Link } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { BreadcrumbJsonLd } from "../seo/JsonLd";
import { renderText } from "../ui/TodoMark";
import type { RouteKey } from "../../i18n/routes";

type Crumb = { label: string; route?: RouteKey };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
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

  return (
    <>
      <BreadcrumbJsonLd
        items={jsonItems.map((j) => ({
          name: j.name,
          path: j.path,
        }))}
      />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {isLast || !item.route ? (
                  <span className="text-gray-800">{renderText(item.label)}</span>
                ) : (
                  <Link
                    to={path(item.route)}
                    className="hover:text-[#556B2F] hover:underline"
                  >
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
