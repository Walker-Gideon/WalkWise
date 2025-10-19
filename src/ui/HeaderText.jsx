export default function HeaderText({ children, classname, variant, type }) {
  const base = "text-xl text-slate-900"; //dark:text-white
  const styling = {
    primary: base + " font-bold",
    secondary: base + " font-semibold",
  };

  if (variant === "huge")
    return (
      <h1 className={`medium:text-5xl text-3xl font-bold ${classname}`}>
        {children}
      </h1>
    );

  return <h1 className={`${styling[type]} ${classname}`}>{children}</h1>;
}
