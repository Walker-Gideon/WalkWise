export default function Badge({ children, type, classname }) {
  const base = "rounded-xl";
  const styling = {
    primary:
      base +
      " bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700",
    secondary: base + " bg-slate-300 group-hover:bg-slate-200", //dark:bg-slate-500
    icons: "bg-stone-300 rounded-full", //dark:bg-slate-700
  };
  return <div className={`p-3 ${styling[type]} ${classname}`}>{children}</div>;
}
