export default function Paragraph({ children, classname, type }) {
  const styling = {
    xs: "text-xs medium:text-sm",
    sm: "text-sm medium:text-base",
  };

  return <p className={`${classname} ${styling[type]}`}>{children}</p>;
}
