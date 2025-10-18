export default function Badge({ children, type, classname }) {
  const styling = {
    // dark:from-slate-600 dark:to-slate-700
    primary: "bg-gradient-to-r from-slate-200 to-slate-300",
  };
  return (
    <div className={`rounded-xl p-3 ${styling[type]} ${classname}`}>
      {children}
    </div>
  );
}
