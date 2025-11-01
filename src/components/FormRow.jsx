import Container from "/src/ui/Container";

export default function FormRow({
  children,
  label,
  error,
  classname,
  labStyling,
  errStyling,
}) {
  return (
    <Container adjust={true} classname={classname}>
      {label && (
        <label
          htmlFor={children.props.id}
          className={`${labStyling ? `${labStyling}` : "medium:text-xs mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400"}`}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className={`${errStyling}`}>{error}</span>}
    </Container>
  );
}
