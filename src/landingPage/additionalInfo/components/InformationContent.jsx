import InformationTextContent from "./InformationTextContent";
import Container from "/src/ui/Container";
import Image from "/src/ui/Image";
import Box from "/src/ui/Box";

export default function InformationContent({
  index,
  icon,
  title,
  subtitle,
  points,
  url,
}) {
  return (
    <Container
      adjust={true}
      classname={`px-2 py-4 md:px-6 md:py-0 lg:px-15`}
    >
      <Container adjust={true} classname="flex flex-col-reverse gap-8 md:grid md:h-100 md:grid-cols-2 md:items-center lg:gap-20">
        <InformationTextContent index={index} icon={icon} title={title} subtitle={subtitle} points={points} />

        <Box adjustWidth={true} classname={`object-cover ${index === 1 ? `md:order-1` : ``} ${index === 3 ? `md:order-1` : ``}`}>
          <Image src={url} alt="image"
          classname="w-full rounded-2xl object-scale-down shadow-md shadow-slate-600" />
        </Box>
      </Container>
    </Container>
  );
}
