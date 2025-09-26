export default function Container({ id, children, classname, adjust }) {
  if (adjust)
    return (
      <div id={id} className={`w-full ${classname}`}>
        {children}
      </div>
    );

  return <div className={`h-screen w-full ${classname}`}>{children}</div>;
}
