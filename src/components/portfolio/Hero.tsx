import { motion } from "framer-motion";
import ComputerCanvas from "./canvas/Computer";

function Hero() {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 max-w-7xl top-10 px-7">
        <div className="flex item-start">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 border-[0.25rem] border-primary rounded-full" />
            <div className="w-1 h-64 bg-gradient-to-b from-primary via-transparent to-primary" />
            <div className="w-5 h-5 border-[0.25rem] border-primary rounded-full" />
          </div>
          <div className="px-4">
            <h1 className="text-[5rem] text-secondary">
              Hi, Im <span className="text-primary">Ansari Zubair</span>
            </h1>
            <p className="text-xl text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quas laboriosam cupiditate corrupti.
            </p>
          </div>
        </div>
      </div>
      <ComputerCanvas />
      <div className="absolute z-10 bottom-30 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-8 h-16 rounded-full p-1 border-2 border-primary flex justify-center ">
            <motion.div
              animate={{
                y: [0, 60, -30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
              className="w-3 h-3 rounded-full bg-light transition-transform "
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
