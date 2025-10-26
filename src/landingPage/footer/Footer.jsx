import Logo from "/src/components/Logo";
import SpanText from "/src/ui/SpanText";
import FooterRight from "./FooterRight";
import Flex from "/src/ui/Flex";
import Box from "/src/ui/Box";

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 px-4 py-4 md:px-8 lg:px-30">
      <Flex
        classname={
          "flex-col gap-4 medium:flex-row medium:items-center justify-between"
        }
      >
        <Box
          adjustWidth={true}
          classname={
            "flex items-center gap-1 font-bold text-slate-950 uppercase"
          }
        >
          <Logo show={true} />
          <SpanText
            classname={`medium:text-base text-sm font-bold text-slate-500`}
          >
            walkwise
          </SpanText>
        </Box>

        <FooterRight />
      </Flex>
    </footer>
  );
}
