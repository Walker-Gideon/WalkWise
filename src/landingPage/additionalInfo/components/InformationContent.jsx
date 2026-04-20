import Box from "/src/ui/Box";
import Image from "/src/ui/Image";
import Container from "/src/ui/Container";
import InformationTextContent from "./InformationTextContent";

export default function InformationContent({
  url,
  icon,
  title,
  index,
  points,
  subtitle,
}) {
  return (
    <Container
      adjust={true}
      classname={"px-2 py-4 md:px-6 md:py-0 lg:px-15"}
    >
      <Container 
        adjust={true} 
        classname={"flex flex-col-reverse gap-8 md:grid md:h-100 md:grid-cols-2 md:items-center lg:gap-20"}
      >
        <InformationTextContent 
          icon={icon} 
          index={index} 
          title={title} 
          points={points} 
          subtitle={subtitle} 
        />

        <Box 
          adjustWidth={true} 
          classname={`object-cover ${index === 1 ? `md:order-1` : ``} ${index === 3 ? `md:order-1` : ``}`}
        >
          <Image 
            src={url} 
            alt="image"
            classname={"w-full rounded-2xl object-scale-down shadow-lg shadow-slate-600"} 
          />
        </Box>
      </Container>
    </Container>
  );
}
