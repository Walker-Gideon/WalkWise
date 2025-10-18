export default function Paragraph({ children, classname, type, variant }) {
  const styling = {
    xs: "text-xs medium:text-sm",
    sm: "text-sm medium:text-base",
    xl: "text-xl md:text-2xl",
  };

  if (variant === "small")
    return <p className={`text-sm text-slate-500 ${classname}`}>{children}</p>;

  return <p className={`${classname} ${styling[type]}`}>{children}</p>;
}
