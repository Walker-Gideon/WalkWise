import Flex from "./Flex";

export default function Spinner({
  styling = "",
  primary = false,
  secondary = false,
  spinnerWidth = "h-6 w-6",
  label,
}) {
  const baseSpinner = `${spinnerWidth} animate-spin rounded-full border-4 border-slate-300 border-t-slate-600`;

  if (primary) {
    return (
      <div
        className={`inline-flex items-center gap-3 ${styling}`}
        aria-live="polite"
      >
        <div className={baseSpinner} />
        {label ? (
          <span className="text-sm text-slate-600 dark:text-slate-200">
            {label}
          </span>
        ) : null}
      </div>
    );
  }

  if (secondary) {
    return (
      <Flex
        variant="center"
        classname={`w-full p-4 ${styling}`}
        aria-live="polite"
      >
        <div className="flex items-center gap-3">
          <div className={baseSpinner} />
          {label ? (
            <span className="text-sm text-slate-600 dark:text-slate-200">
              {label}
            </span>
          ) : null}
        </div>
      </Flex>
    );
  }

  return (
    <Flex
      variant="center"
      classname={
        styling ||
        "absolute inset-0 h-screen w-full bg-slate-50 dark:bg-slate-800"
      }
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <div className={baseSpinner} />
        {label ? (
          <span className="text-sm text-slate-600 dark:text-slate-200">
            {label}
          </span>
        ) : null}
      </div>
    </Flex>
  );
}
