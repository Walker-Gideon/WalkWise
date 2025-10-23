export default function TextArea({
  id,
  name,
  rows,
  value,
  onChange,
  resize,
  classname,
  placeholder,
  disabled,
}) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      className={`${resize ? "resize-none" : ""} ${classname}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
