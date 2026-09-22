type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Visible marker for missing editorial/data — never invent replacements. */
export function TodoMark({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs text-amber-900 ${className}`}
      data-todo="true"
    >
      {children}
    </span>
  );
}

export function renderText(value: string) {
  if (value.startsWith("TODO_")) {
    return <TodoMark>{value}</TodoMark>;
  }
  return value;
}

export function Paragraphs({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`space-y-4 text-base md:text-lg text-gray-700 leading-relaxed ${className}`}>
      {items.map((p, i) => {
        if (p.startsWith("TODO_")) return null;
        return <p key={i}>{renderText(p)}</p>;
      })}
    </div>
  );
}
