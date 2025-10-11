import { Link } from "react-scroll";
import useNavigateToAction from "/src/hook/useNavigateToAction";

export default function Button({
  children,
  disabled,
  to,
  classname,
  type,
  links,
  onclick,
}) {
  const navigateTo = useNavigateToAction();
  const base =
    "cursor-pointer rounded-sm transition-colors duration-300 whitespace-nowrap py-2 px-4 text-[0.8rem] font-semibold disabled:cursor-not-allowed disabled:bg-gray-400";
  const styling = {
    // hover:border-slate-400 border-stone-300
    border: `border text-slate-800`,
    colors: `bg-slate-500 text-white hover:bg-slate-600`,
  };

  /* I will be changing the primary button
    .primaryButton {
        @apply bg-slate-500 px-4 hover:bg-slate-600 focus:ring-slate-300;
    }

    .button {
    @apply medium:text-[0.74rem] cursor-pointer rounded-sm border text-[0.7rem] whitespace-nowrap transition-colors duration-300;
  }

  .primaryButton {
    @apply cursor-pointer rounded-sm bg-slate-500 px-4 py-2 text-[0.8rem] whitespace-nowrap text-white transition-colors duration-300 hover:bg-slate-600 focus:ring-slate-300;
  }
    */
  if (links)
    return (
      <Link to={to} smooth={true} spy={true} duration={500} offset={-100}>
        <button className={`${base} ${styling[type]} ${classname}`}>
          {children}
        </button>
      </Link>
    );

  return (
    <button
      disabled={disabled}
      onClick={to ? () => navigateTo(to) : onclick}
      className={`${styling[type]} ${base} ${classname}`}
    >
      {children}
    </button>
  );
}
