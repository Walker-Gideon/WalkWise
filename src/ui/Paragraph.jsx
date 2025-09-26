export default function Paragraph({ children, classname, variant }) {
  if (variant === "primary")
    return <p className={`${classname}`}>{children}</p>;

  return <p className={`${classname}`}>{children}</p>;
}
