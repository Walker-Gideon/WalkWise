export default function HeaderText({ children, classname, variant, type }) {
  const base = "text-slate-900"; //dark:text-white
  const styling = {
    primary: base + " text-xl font-bold",
    secondary: base + " text-base font-semibold",
  };

  if (variant === "header")
    return (
      <h1
        // hidden dark:text-white
        className={`medium:mb-2 medium:block text-xl font-bold text-slate-900 ${classname}`}
      >
        {children}
      </h1>
    );

  if (variant === "huge")
    return (
      <h1 className={`medium:text-5xl text-3xl font-bold ${classname}`}>
        {children}
      </h1>
    );

  if (variant === "secondary")
    return (
      // dark:text-slate-50
      <h2 className={`text-base font-semibold ${classname}`}>{children}</h2>
    );

  return <h1 className={`${styling[type]} ${classname}`}>{children}</h1>;
}
