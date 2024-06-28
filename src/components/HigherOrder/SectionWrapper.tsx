import {
  //  Variants,
  motion,
} from "framer-motion";
// import { staggerContainer } from "../../utils/motion";
import { styles } from "../../constants/styles";
import { JSXElementConstructor } from "react";
function SectionWrapper(
  Component: JSXElementConstructor<unknown>,
  idName: string
) {
  return function HOC() {
    return (
      <motion.section
        // variants={staggerContainer() as Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span
          // className="hash-span"
          id={idName}
        >
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
}
export default SectionWrapper;
