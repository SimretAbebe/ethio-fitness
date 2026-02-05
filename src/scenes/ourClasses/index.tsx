import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Traditional Endurance Training",
    description:
      "Embrace ancient Ethiopian running techniques that build incredible stamina and mental fortitude. Perfect for all levels seeking a unique challenge.",
    image: image1,
  },
  {
    name: "Cultural Movement & Dance",
    description:
      "Immerse yourself in vibrant Ethiopian cultural dances like Eskeseta, transforming your workout into a joyous celebration of movement and heritage and explore your culture. No experience needed!",
    image: image2,
  },
  {
    name: "Holistic Wellness & Flexibility",
    description:
      "Discover traditional Ethiopian stretches and mindfulness practices to enhance your flexibility, balance, and overall well-being. A calming yet effective session.",
    image: image3,
  },
  {
    name: "Strength from the Land",
    description:
      "Utilize bodyweight and natural movements inspired by Ethiopian daily life and ancient warrior training. Build functional strength and resilience.",
    image: image4,
  },
  {
    name: "Community Fitness Circles",
    description:
      "Join our communal workout sessions, fostering a strong sense of belonging while engaging in diverse exercises. Fitness is better together!",
    image: image5,
  },
  {
    name: "Restorative Ethiopian Practices",
    description:
      "Focus on recovery and rejuvenation with traditional Ethiopian methods. Gentle movements and guided relaxation to restore your body and mind.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
        <section id="ourclasses" className="w-full bg-mono-light py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR ETHIOPIAN CLASSES</HText>
            <p className="py-5">
              Explore our diverse range of classes, inspired by Ethiopia's rich heritage of movement and community.
              Each session is designed to foster strength, flexibility, and a deep connection to wellness.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
