export default function MainHeader({ classname, children }) {
  return (
    <header className="sticky top-0 z-50">
      <div className={classname}>{children}</div>
    </header>
  );
}
