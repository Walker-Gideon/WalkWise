export default function Container({ id, children, classname, adjust, ...rest }) {
  if (adjust)
    return (
      <div id={id} className={`w-full ${classname || ""}`} {...rest}>
        {children}
      </div>
    );

  return <div className={`h-dvh w-full ${classname || ""}`} {...rest}>{children}</div>;
}
