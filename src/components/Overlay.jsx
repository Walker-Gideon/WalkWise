import Group from "/src/ui/Group";

export default function Overlay({ children, classname, button, onclick }) {
  const styling =
    "fixed inset-0 z-50 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm";

  if (button)
    return (
      <div
        role="button"
        onClick={onclick}
        className={`${styling} ${classname}`}
      >
        {children}
      </div>
    );

  return <Group classname={`${styling} ${classname}`}>{children}</Group>;
}
