export default function HeaderText({ children, classname, variant }) {
  if (variant === "huge")
    return (
      <h1 className={`medium:text-5xl text-3xl font-bold ${classname}`}>
        {children}
      </h1>
    );

  return <h1 className={`${classname}`}>{children}</h1>;
}
