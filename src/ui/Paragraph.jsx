export default function Paragraph({ children, classname, type }) {
  const styling = {
    xs: "text-xs medium:text-sm",
    sm: "text-sm medium:text-base",
    xl: "text-xl md:text-2xl"
  };

  return <p className={`${classname} ${styling[type]}`}>{children}</p>;
}
