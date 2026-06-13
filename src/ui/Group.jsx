export default function Group({ children, classname, ...rest }) {
  return <div className={classname} {...rest}>{children}</div>;
}
