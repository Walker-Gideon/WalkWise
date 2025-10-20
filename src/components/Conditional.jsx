export default function Conditional({ children, condition }) {
  if (!condition) return null;
  return <>{children}</>;
}
