export default function Label({ children, classname, htmlfor }) {
  return (
    <label htmlFor={htmlfor} className={classname}>
      {children}
    </label>
  );
}
