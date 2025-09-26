import Flex from "/src/ui/Flex";

export default function Hero() {
  return (
    <div id="home">
      <Flex variant="center" classname={"bg-green-50 h-screen w-full px-4"}>
        <div className="medium:max-w-md w-full max-w-xs bg-red-500 p-6">
          Hero
        </div>
      </Flex>
    </div>
  );
}
