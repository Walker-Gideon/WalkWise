export default function Card({ children, classname,statusStyling, status }) {
  return (
    <div
      // if hover hover:shadow-lg
      className={`rounded-xl border border-stone-300 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/70 ${classname} ${status ? "p-4.5 medium:p-6" : "p-6"} ${statusStyling ? "hover:shadow-lg flex items-center justify-between" : ""}`}
    >
      {children}
    </div>
  );
}
