import Container from "/src/ui/Container";

export default function FormRow({
  children,
  label,
  error,
  classname,
  labStyling,
  errStyling,
  errorsField, // from Auth FormRow
  errorMessage, // from Auth FormRow
}) {
  const displayError = error || (errorsField ? errorMessage : null);
  const errorStyle = errStyling || "text-xs text-red-500 ml-1";

  return (
    <Container adjust={true} classname={`flex flex-col gap-1 ${classname || ""}`}>
      {label && (
        <label
          htmlFor={children?.props?.id}
          className={`${labStyling ? `${labStyling}` : "medium:text-xs block text-sm font-medium text-slate-500 dark:text-slate-400"}`}
        >
          {label}
        </label>
      )}
      {children}
      {displayError && <span className={`${errorStyle}`}>{displayError}</span>}
    </Container>
  );
}
