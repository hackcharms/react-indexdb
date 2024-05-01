import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { styles } from "../../../constants/styles";
import { Tilt } from "react-tilt";
import { services } from "../../../constants";
import SectionWrapper from "../../HigherOrder/SectionWrapper";
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
        className="w-full rounded-lg bg-gradient-to-tr from-blue-500 to-red-500 p-px shadow shadow-slate-500"
      >
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450,
          // }}
          className="flex flex-col items-center justify-center rounded-xl bg-motion-primary-600 bg-opacity-70 p-3"
        >
          <img src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-balance text-lg">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
function About() {
  const experienceInYear = new Date().getFullYear() - 2021;
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-lg leading-5 text-motion-secondary-200"
      >
        Results-driven Software Developer with over {experienceInYear} years of
        experience implementing diverse applications and solutions using
        frontend and backend technologies like
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          JavaScript
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          TypeScript
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          Vue.js
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          React.js
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          Nuxt.js
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          MySQL
        </a>
        ,
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          PHP
        </a>
        , and
        <a
          href="#"
          className="pl-1 font-semibold text-motion-secondary hover:underline "
        >
          Laravel
        </a>
        . Proven ability to refactor and optimize code to improve performance
        and maintainability. Seeking challenging opportunities to leverage my
        extensive development expertise and deliver impactful results.
      </motion.p>
      <Services />
    </>
  );
}
function Services() {
  return (
    <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
      {services.map((service, index) => {
        return <ServiceCard {...service} index={index} key={index} />;
      })}
    </div>
  );
}

export default SectionWrapper(About, "about");
