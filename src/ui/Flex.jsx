export default function Flex({ classname, children, variant }) {
  if (variant === "center")
    return (
      <div className={`flex items-center justify-center ${classname}`}>
        {children}
      </div>
    );

  if (variant === "between")
    return (
      <div className={`flex items-center justify-between ${classname}`}>
        {children}
      </div>
    );

  return <div className={`flex ${classname}`}>{children}</div>;
}
