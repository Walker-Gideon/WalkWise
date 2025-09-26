export default function Box({ children, classname, adjustWidth }) {
  return (
    <div
      className={`${classname} ${adjustWidth ? `${adjustWidth}` : `medium:max-w-5xl maxmid:max-w-4xl w-full max-w-sm`}`}
    >
      {children}
    </div>
  );
}
