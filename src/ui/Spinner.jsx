import Flex from "./Flex";

export default function Spinner({ styling, primary, secondary, spinnerWidth = "h-8 w-8" }) {
  if (primary) {
    // <div className="w-4 h-4 rounded-full animate-spin border-2 border-slate-300 border-t-slate-600" />
    return (
      <>
        <div className={`${spinnerWidth} rounded-full animate-spin border-slate-300 border-t-slate-600 ${styling}`} />
      </>
    );
  }

  if (secondary) {
    return (
      <Flex variant="center" classname={`w-full p-4 ${styling}`}>
        <div className={`${spinnerWidth} animate-spin rounded-full border-4 border-slate-300 border-t-slate-600`} />
      </Flex>
    );
  }

  return (
    <Flex variant="center" classname={`${styling ? "styling" : "absolute inset-0 h-screen w-full"}`}>
      <div className={`${spinnerWidth} animate-spin rounded-full border-4 border-slate-300 border-t-slate-600`} />
    </Flex>
  );
}
