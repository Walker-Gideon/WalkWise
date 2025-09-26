import Container from "/src/ui/Container";
import Paragraph from "/src/ui/Paragraph";
import Image from "/src/ui/Image";
import Box from "/src/ui/Box";
import hero1 from "/src/assets/hero1.png";
import hero2 from "/src/assets/hero2.png";
import hero3 from "/src/assets/hero3.png";

const images = [
  {
    text: "Create Notes",
    url: hero1,
    style: "-rotate-12",
  },
  {
    text: "Create Flashcards",
    url: hero2,
    style: "mt-6",
  },
  {
    text: "Schedule Flashcards",
    url: hero3,
    style: "rotate-12",
  },
];

export default function HeroImages() {
  return (
    <Container adjust={true} classname="mt-10">
      <Container
        adjust={true}
        classname="grid auto-cols-max grid-flow-col justify-center gap-6"
      >
        {images.map((image, index) => (
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
