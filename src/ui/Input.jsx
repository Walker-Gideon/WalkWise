export default function Input({
  classname,
  required,
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
  disabled,
  onKeyDown,
}) {
  const styling = `rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-hidden`;

  if (id)
    return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className={classname}
        required={required ? required : false}
        disabled={disabled}
      />
    );

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={`${styling} ${classname}`}
      required={required ? required : false}
      disabled={disabled}
    />
  );
}
