import { LuCopyright } from "react-icons/lu";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import SpanText from "/src/ui/SpanText";

export default function FooterRight() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <Container adjust={true}>
      <Paragraph type="xs" classname="medium:justify-end items-center flex gap-1 font-medium text-stone-500">
        <SpanText>
          <LuCopyright />
        </SpanText>
        {year} <SpanText classname="font-bold">WalkWise</SpanText>. All rights reserved.
      </Paragraph>
    </Container>
  )
}
