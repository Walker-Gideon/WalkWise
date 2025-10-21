export default function Header({ children, classname, type }) {
  const styling = {
    padding: "px-6 py-4",
  };

  return (
    <header className={`${classname} ${styling[type]}`}>{children}</header>
  );
}
