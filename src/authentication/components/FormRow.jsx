export default function FormRow({ children, errorsField, errorMessage, classname }) {
  return (
    <div className={`flex flex-col gap-1 ${classname}`}>
      <div>
        {children}
      </div>
      {errorsField && <span className="text-xs text-red-500 ml-1">{errorMessage}</span>}
    </div>
  );
}