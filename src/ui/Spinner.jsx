import Flex from "./Flex";

export default function Spinner({ styling, secondary }) {
  if (secondary) {
    return (
      <Flex variant="center" classname={"w-full p-4"}>
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" />
      </Flex>
    );
  }

  return (
    <Flex variant="center" classname={`${styling ? "styling" : "absolute inset-0 h-screen w-full"}`}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" />
    </Flex>
  );
}
