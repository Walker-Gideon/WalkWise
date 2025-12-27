import Flex from "./Flex";

export default function Spinner({ classname = "absolute inset-0 h-screen w-full" }) {
  return (
    <Flex variant="center" classname={classname}>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-600" />
    </Flex>
  );
}
