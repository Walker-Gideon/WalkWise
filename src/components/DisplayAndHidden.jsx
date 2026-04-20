export default function DisplayAndHidden({
  variant = "display",
  children,
  classname,
}) {
  if (variant === "hidden")
    return <div className={`middle:hidden block ${classname}`}>{children}</div>;

  return (
    <>
      {variant === "display" && (
        <div className={`middle:block hidden ${classname}`}>{children}</div>
      )}
    </>
  );
}
