import { Tilt } from "react-tilt";
import { technologies } from "../../constants";
import SectionWrapper from "../HigherOrder/SectionWrapper";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
// import { BallCanvas } from "./canvas/";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ icon, name }, index) => (
        <Tilt key={name}>
          <motion.div
            variants={fadeIn("right", "spring", 0.25 * index, 1)}
            className=" flex flex-col justify-center items-center rounded-xl text-center bg-opacity-0 px-4 py-2 shadow-lg ring-1 ring-secondary/20 backdrop-blur-lg"
          >
            <img src={icon} alt={name} className="size-28 object-contain p-1" />
            <h1 className="text-center font-mono text-lg font-bold tracking-wide text-secondary-400">
              {name}
            </h1>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
