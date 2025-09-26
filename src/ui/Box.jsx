export default function Box({ children, classname }) {
  return (
    <div
      className={`w-full ${classname ? `${classname}` : `medium:max-w-5xl max-w-xs bg-red-500`}`}
    >
      {children}
    </div>
  );
}
