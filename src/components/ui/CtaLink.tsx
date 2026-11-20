import { Link } from "react-router-dom";
import { isTodo } from "../../config/siteConfig";

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d5a2a]/50";

const variants = {
  primary: "bg-[#4d5a2a] text-white hover:bg-[#2f3819]",
  secondary:
    "border border-[#4d5a2a] text-[#4d5a2a] bg-white hover:bg-[#e8ebd9]",
  ghost: "text-[#4d5a2a] underline-offset-4 hover:underline",
};

export function CtaLink({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const label = typeof children === "string" && children.startsWith("TODO_")
    ? children
    : children;

  if (href) {
    const isTodoUrl = isTodo(href) || href === "#reservar";
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(isTodoUrl ? { "data-todo": "TODO_DATA_BOOKING_URL" } : {})}
      >
        {label}
      </a>
    );
  }

  if (!to) return <span className={classes}>{label}</span>;

  return (
    <Link to={to} className={classes}>
      {label}
    </Link>
  );
}
