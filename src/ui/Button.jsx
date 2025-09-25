import useNavigateToAction from "../hook/useNavigateToAction";

export default function Button({ children, disabled, to, classname, colors }) {
  const navigateTo = useNavigateToAction();
  const styling =
    "cursor-pointer rounded-sm transition-colors duration-300 whitespace-nowrap py-2 px-4 text-[0.8rem] font-semibold disabled:cursor-not-allowed disabled:bg-gray-400";

  /* I will be changing the primary button
    .primaryButton {
        @apply bg-slate-500 px-4 hover:bg-slate-600 focus:ring-slate-300;
    }
    */

  return (
    <button
      disabled={disabled}
      onClick={() => navigateTo(to)}
      className={`${colors ? `bg-slate-500 text-white hover:bg-slate-600` : `border text-slate-800`} ${styling} ${classname}`}
    >
      {children}
    </button>
  );
}
