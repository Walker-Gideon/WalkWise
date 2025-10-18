export default function Card({ children, classname }) {
  return (
    <div
      // if hover hover:shadow-lg
      /* dark:border-slate-700 dark:bg-slate-800/70 */
      className={`rounded-xl border border-stone-300 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 ${classname}`}
    >
      {children}
    </div>
  );
}
