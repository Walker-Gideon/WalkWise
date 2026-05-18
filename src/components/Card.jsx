export default function Card({ children, classname, status, bgcolor="bg-white/70 dark:bg-slate-900/70" }) {
  return (
    <div
      // if hover hover:shadow-lg
      className={`rounded-xl border border-stone-300 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 ${bgcolor} ${classname} ${status ? "p-4.5 medium:p-6" : "p-6"}`}
    >
      {children}
    </div>
  );
}
