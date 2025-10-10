export default function Form({ onsubmit, classname, children }) {
  return (
    <form onSubmit={onsubmit} className={classname}>
      {children}
    </form>
  );
}
