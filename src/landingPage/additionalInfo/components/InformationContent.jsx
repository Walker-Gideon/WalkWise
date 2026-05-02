import { motion } from "motion/react";
import { fadeIn } from "/src/utils/variants";

import Box from "/src/ui/Box";
import Image from "/src/ui/Image";
import Container from "/src/ui/Container";
import InformationTextContent from "./InformationTextContent";

export default function InformationContent({
  url,
  icon,
  title,
  index,
  alt,
  points,
  subtitle,
}) {
  return (
    <motion.div
      variants={index === 0 ? fadeIn("left", 0.2) : index === 1 ? fadeIn("right", 0.2) : index === 2 ? fadeIn("left", 0.2) : fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={"w-full px-2 py-4 md:px-6 md:py-0 lg:px-15"}
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
            alt={alt}
            classname={"w-full rounded-2xl object-scale-down shadow-lg shadow-slate-600"} 
          />
        </Box>
      </Container>
    </motion.div>
  );
}
