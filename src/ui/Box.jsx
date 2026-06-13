export default function Box({ children, classname, adjustWidth, ...rest }) {
  return (
    <div
      className={`${classname || ""} ${adjustWidth ? "" : "medium:max-w-5xl maxmid:max-w-4xl w-full max-w-sm"}`}
      {...rest}
    >
      {children}
    </div>
  );
}