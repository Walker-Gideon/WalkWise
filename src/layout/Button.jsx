import { Link } from "react-scroll";
import useNavigateToAction from "/src/hook/useNavigateToAction";

const base =
  "cursor-pointer rounded-sm transition-colors duration-300 whitespace-nowrap py-2.5 px-4 text-[0.8rem] font-semibold disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-slate-500 text-white hover:bg-slate-600 disabled:hover:bg-slate-500",
  danger: "bg-red-500 text-white hover:bg-red-400",
  border: "border text-slate-800",
  ghost: "font-medium text-sm border p-2 rounded-sm",
  back: "w-10 rounded-md hover:bg-slate-100 flex items-center justify-center p-1 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-900 transition-colors duration-300",
  group: "group flex cursor-pointer flex-col items-center space-y-3 rounded-xl bg-slate-50 p-5 medium:p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-md dark:bg-slate-700/50 dark:hover:bg-slate-700",
  text: "cursor-pointer",
};

export default function Button({
  ariaLabel,
  children,
  disabled = false,
  to,
  className,
  variant = "primary",
  type = "button",      // actual HTML button type: "button" | "submit" | "reset"
  onClick,
  scrollTo,             // renamed from `links` — clearer intent
}) {
  const navigateTo = useNavigateToAction();

  const handleClick = to ? () => navigateTo(to) : onClick;

  // Scroll link wrapper — separate concern, clearly named
  if (scrollTo) {
    return (
      <Link to={scrollTo} smooth={true} spy={true} duration={500} offset={-100}>
        <button
          aria-label={ariaLabel}
          className={`${base} ${variants[variant] ?? ""} ${className ?? ""}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  // Variants that don't use `base` (they define their own full layout)
  const skipBase = variant === "group" || variant === "text" || variant === "back";

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`
        ${skipBase ? "" : base}
        ${variants[variant] ?? ""}
        ${className ?? ""}
      `.trim()}
    >
      {children}
    </button>
  );
}