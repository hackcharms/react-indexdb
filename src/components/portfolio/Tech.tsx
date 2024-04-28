import { technologies } from "../../constants";
import SectionWrapper from "../HigherOrder/SectionWrapper";
// import { BallCanvas } from "./canvas/";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 bg-hero-pattern">
      {technologies.map(({ icon, name }) => (
        <div
          key={name}
          className="rounded-xl bg-primary/20 bg-opacity-20 px-4 py-2 shadow-lg ring-1 ring-secondary/20 backdrop-blur-lg"
        >
          <img src={icon} alt={name} className="size-28 object-contain" />
          <h1 className="text-center font-mono text-lg font-bold tracking-wide text-secondary-400">
            {name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
