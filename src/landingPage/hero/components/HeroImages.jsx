import { motion } from "motion/react";

import Box from "/src/ui/Box";
import Image from "/src/ui/Image";
import Container from "/src/ui/Container";

import heroData from "/src/data/heroData.js";

export default function HeroImages() {
  return (
    <Container adjust={true} classname="mt-18 medium:mt-20">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={
          "px-2 sm:px-4 grid auto-cols-max grid-flow-col justify-center gap-2 sm:gap-3 medium:gap-5 middle:gap-10 lg:gap-14"
        }
      >
        {heroData.map((image, index) => (
          <Box
            key={index}
            adjustWidth={true}
            classname={`transform transition-transform ${image.style}`}
          >
            <Box
              adjustWidth={true}
              classname={
                "h-auto rounded-xl border border-slate-600 shadow-lg shadow-slate-600 w-20 sm:w-24 medium:w-32 middle:w-38 lg:w-44"
              }
            >
              <Image
                src={image.url}
                alt={image.text}
                classname={"overflow-hidden rounded-xl object-contain w-full"}
              />
            </Box>
          </Box>
        ))}
      </motion.div>
    </Container>
  );
}
