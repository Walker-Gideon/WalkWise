import { Link } from "react-scroll";
import useNavigateToAction from "/src/hook/useNavigateToAction";

const base =
  "cursor-pointer rounded-sm transition-colors duration-300 whitespace-nowrap py-2.5 px-4 text-[0.8rem] font-semibold disabled:cursor-not-allowed disabled:opacity-50";

const unifiedStyling = {
  // from ui/Button (type)
  border: "border text-slate-800",
  danger: "bg-red-500 text-white hover:bg-red-400",
  colors: "bg-slate-500 text-white hover:bg-slate-600 disabled:hover:bg-slate-500",
  customize: "font-medium text-sm border p-2 rounded-sm",
  back: "w-10 rounded-md hover:bg-slate-100 flex items-center justify-center p-1 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-900 transition-colors duration-300",
  
  // from layout/Button (variant)
  primary: "bg-slate-500 text-white hover:bg-slate-600 disabled:hover:bg-slate-500",
  ghost: "font-medium text-sm border p-2 rounded-sm",
  group: "group flex cursor-pointer flex-col items-center space-y-3 rounded-xl bg-slate-50 p-5 medium:p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-md dark:bg-slate-700/50 dark:hover:bg-slate-700",
  text: "cursor-pointer",
};

export default function Button({
  ariaLabel,
  children,
  disabled = false,
  to,
  classname,    // ui/Button compat
  className,    // layout/Button compat
  type,         // ui/Button styling type OR layout/Button html type
  onclick,      // ui/Button compat
  onClick,      // layout/Button compat
  links,        // ui/Button compat
  scrollTo,     // layout/Button compat
  group,        // ui/Button compat
  variant,      // ui/Button secondary or layout/Button styling
  submit,       // ui/Button compat
}) {
  const navigateTo = useNavigateToAction();

  // Consolidate handlers
  const handleClick = to ? () => navigateTo(to) : (onClick || onclick);
  
  // Consolidate classnames
  const finalClassName = `${classname || ""} ${className || ""}`.trim();

  // Consolidate HTML button type
  const htmlType = submit ? "submit" : (type === "button" || type === "submit" || type === "reset" ? type : "button");

  // Determine styling variant string
  let styleKey = "";
  if (unifiedStyling[type]) styleKey = type;
  if (unifiedStyling[variant]) styleKey = variant;

  const styling = unifiedStyling[styleKey] ?? "";

  // Scroll links (links || scrollTo)
  const targetScroll = scrollTo || (links && to);
  if (targetScroll) {
    return (
      <Link to={targetScroll} smooth={true} spy={true} duration={500} offset={-100}>
        <button aria-label={ariaLabel} className={`${base} ${styling} ${finalClassName}`}>
          {children}
        </button>
      </Link>
    );
  }

  // Handle special variants without base class
  if (variant === "secondary" || type === "buttonText" || styleKey === "text" || styleKey === "back") {
    return (
      <button
        type={htmlType}
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={`cursor-pointer ${styling} ${finalClassName}`}
      >
        {children}
      </button>
    );
  }

  // Group button (legacy prop `group` or variant="group")
  if (group || styleKey === "group") {
    return (
      <button
        type={htmlType}
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={`group flex cursor-pointer flex-col items-center space-y-3 rounded-xl bg-slate-50 p-5 medium:p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-md dark:bg-slate-700/50 dark:hover:bg-slate-700 ${finalClassName}`}
      >
        {children}
      </button>
    );
  }

  // Standard Button
  return (
    <button
      type={htmlType}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`${styling} ${base} ${finalClassName}`}
    >
      {children}
    </button>
  );
}
