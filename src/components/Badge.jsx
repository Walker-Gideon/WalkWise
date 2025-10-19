export default function Badge({ children, type, classname }) {
  const styling = {
    // dark:from-slate-600 dark:to-slate-700
    primary: "bg-gradient-to-r from-slate-200 to-slate-300",
    secondary: "bg-slate-300 group-hover:bg-slate-200", //dark:bg-slate-500
  };
  return (
    <div className={`rounded-xl p-3 ${styling[type]} ${classname}`}>
      {children}
    </div>
  );
}
