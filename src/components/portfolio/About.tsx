import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";
import { Tilt } from "react-tilt";
import { services } from "../../constants";
import SectionWrapper from "../HigherOrder/SectionWrapper";
type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};
function ServiceCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt className="xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
        className="w-full bg-gradient-to-tr from-blue-500 to-red-500 p-[1px] rounded-lg shadow shadow-slate-500"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-primary-600 bg-opacity-70 rounded-xl p-3 flex flex-col justify-center items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
function About() {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "", 0.1, 1)}
        className="mt-4 text-lg leading-5 max-w-3xl text-secondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        laudantium sed iusto ab enim unde, veniam placeat error cum voluptas
        illum eius, delectus architecto aperiam! Temporibus ducimus atque facere
        aliquid.
      </motion.p>
      <Services />
    </>
  );
}
function Services() {
  return (
    <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
      {services.map((service, index) => {
        return <ServiceCard {...service} index={index} key={index} />;
      })}
    </div>
  );
}

export default SectionWrapper(About, "About");
