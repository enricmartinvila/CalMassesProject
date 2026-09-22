import { isTodo } from "../../config/siteConfig";
import { TodoMark } from "../ui/TodoMark";

export function FaqAccordion({
  title,
  items,
}: {
  title: string;
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
        {title.startsWith("TODO_") ? <TodoMark>{title}</TodoMark> : title}
      </h2>
      <div className="divide-y divide-gray-200 border-y border-gray-200">
        {items.map((item, i) => (
          <details key={i} className="group py-4">
            <summary className="cursor-pointer list-none font-medium text-gray-900 flex items-center justify-between gap-4">
              <span>
                {item.question.startsWith("TODO_") ? (
                  <TodoMark>{item.question}</TodoMark>
                ) : (
                  item.question
                )}
              </span>
              <span className="text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm md:text-base">
              {isTodo(item.answer) || item.answer.startsWith("TODO_") ? (
                <TodoMark>{item.answer}</TodoMark>
              ) : (
                item.answer
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
