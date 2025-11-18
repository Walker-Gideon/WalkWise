export default function Card({ children, classname }) {
  return (
    <div
      // if hover hover:shadow-lg
      className={`rounded-xl border border-stone-300 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/70 ${classname}`}
    >
      {children}
    </div>
  );
}
