import Container from "/src/ui/Container";

export default function FormRow({
  children,
  label,
  error,
  labStyling,
  errStyling,
}) {
  return (
    <Container>
      {label && (
        <label htmlFor={children.props.id} className={`${labStyling}`}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={`${errStyling}`}>{error}</span>}
    </Container>
  );
}
