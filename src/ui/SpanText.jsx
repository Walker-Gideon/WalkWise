export default function SpanText({ classname, children, type, ...rest }) {
  const styling = {
    prime: "p-3 bg-gradient-to-r from-slate-200 to-slate-300"
  }

  return <span className={`${classname || ""} ${styling[type] || ""}`} {...rest}>{children}</span>;
}
