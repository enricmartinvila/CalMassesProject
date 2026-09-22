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
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#556B2F]/50";

const variants = {
  primary: "bg-[#556B2F] text-white hover:bg-[#445323]",
  secondary:
    "border border-[#556B2F] text-[#556B2F] bg-white hover:bg-[#EEF2E6]",
  ghost: "text-[#556B2F] underline-offset-4 hover:underline",
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
