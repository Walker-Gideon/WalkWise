import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Image from "/src/ui/Image";
import Box from "/src/ui/Box";
import heroImages from "/src/data/heroData.js";

export default function HeroImages() {
  return (
    <Container adjust={true} classname="mt-10">
      <Container
        adjust={true}
        classname="grid auto-cols-max grid-flow-col justify-center gap-6"
      >
        {heroImages.map((image, index) => (
          <Box
            key={index}
            adjustWidth={true}
            classname={`transform transition-transform ${image.style}`}
          >
            <Paragraph
              type="sm"
              classname="mb-2 w-full text-center font-semibold lg:text-base"
            >
              {image.text}
            </Paragraph>
            <Box
              adjustWidth={true}
              classname="medium:w-40 h-auto w-30 rounded-xl border border-slate-600 shadow-md shadow-slate-600 lg:w-50"
            >
              <Image
                src={image.url}
                alt={image.text}
                classname="overflow-hidden rounded-xl object-cover"
              />
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
}
