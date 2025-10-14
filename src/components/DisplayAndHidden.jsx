export default function DisplayAndHidden({
  variant = "display",
  children,
  classname,
}) {
  if (variant === "hidden")
    return <div className={`medium:hidden block ${classname}`}>{children}</div>;

  return (
    <>
      {variant === "display" && (
        <div className={`medium:block hidden ${classname}`}>{children}</div>
      )}
    </>
  );
}
