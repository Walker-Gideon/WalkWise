export default function Box({ children, classname, adjustWidth }) {
  return (
    <div
      className={`w-full ${classname} ${adjustWidth ? `${adjustWidth}` : `medium:max-w-5xl max-w-sm`}`}
    >
      {children}
    </div>
  );
}
