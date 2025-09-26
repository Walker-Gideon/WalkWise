export default function Flex({ classname, children, variant, id }) {
  if (variant === "center")
    return (
      <div id={id} className={`flex items-center justify-center ${classname}`}>
        {children}
      </div>
    );

  if (variant === "between")
    return (
      <div id={id} className={`flex items-center justify-between ${classname}`}>
        {children}
      </div>
    );

  return (
    <div id={id} className={`flex ${classname}`}>
      {children}
    </div>
  );
}
