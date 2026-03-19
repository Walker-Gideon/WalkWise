export default function Group({ children, classname, status }) {
  if (status) {
    return (
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 medium:gap-6 ${classname}`}>{children}</div>
    );
  }
  
  return <div className={classname}>{children}</div>;
}
