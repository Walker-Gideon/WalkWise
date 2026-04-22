import { Link } from "react-scroll";
import useNavigateToAction from "/src/hook/useNavigateToAction";

export default function Button({
  ariaLabel,
  children,
  disabled,
  to,
  classname,
  type,
  links,
  onclick,
  group, // used in the dashboard action
  variant,
  submit, //for form submition
}) {
  const navigateTo = useNavigateToAction();
  const base =
    "cursor-pointer rounded-sm transition-colors duration-300 whitespace-nowrap py-2.5 px-4 text-[0.8rem] font-semibold disabled:cursor-not-allowed disabled:opacity-50";
  const styling = {
    border: `border text-slate-800`,
    danger: `bg-red-500 text-white hover:bg-red-400`,
    colors: `bg-slate-500 text-white hover:bg-slate-600 disabled:hover:bg-slate-500`,
    customize: `font-medium text-sm border p-2 rounded-sm`,
    back: "w-10 rounded-md hover:bg-slate-100 flex items-center justify-center p-1 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-900 transition-colors duration-300",
  };

  if (links)
    return (
      <Link to={to} smooth={true} spy={true} duration={500} offset={-100}>
        <button aria-label={ariaLabel} className={`${base} ${styling[type]} ${classname}`}>
          {children}
        </button>
      </Link>
    );

  if (variant === "secondary")
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={to ? () => navigateTo(to) : onclick}
        className={`cursor-pointer ${styling[type]} ${classname}`}
      >
        {children}
      </button>
    );

  if (group)
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={to ? () => navigateTo(to) : onclick}
        className="group flex cursor-pointer flex-col items-center space-y-3 rounded-xl bg-slate-50 p-5 medium:p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-md dark:bg-slate-700/50 dark:hover:bg-slate-700"
      >
        {children}
      </button>
    );

  if (submit)
    return (
      <button
        type="submit"
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={to ? () => navigateTo(to) : onclick}
        className={`${styling[type]} ${base} ${classname}`}
      >
        {children}
      </button>
    );

  if(type === "buttonText")
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={to ? () => navigateTo(to) : onclick}
        className={`cursor-pointer ${classname}`}
      >
        {children}
      </button>
  );

  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={to ? () => navigateTo(to) : onclick}
      className={`${styling[type]} ${base} ${classname}`}
    >
      {children}
    </button>
  );
}
