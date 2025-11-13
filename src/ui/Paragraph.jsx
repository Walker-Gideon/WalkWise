export default function Paragraph({ children, classname, type, variant }) {
  const styling = {
    xs: "text-xs medium:text-sm",
    sm: "text-sm medium:text-base",
    xl: "text-xl md:text-2xl",
    information: "min-w-sm text-sm font-medium text-slate-500", //dark:text-slate-400
  };

  if (variant === "small")
    // paragraphStyling={"dark:text-slate-300"}
    // theme={true}
    // dark:text-slate-300 for the header small text
    return <p className={`text-sm text-slate-500 ${classname}`}>{children}</p>;

  return <p className={`${classname} ${styling[type]}`}>{children}</p>;
}
