import { Link } from "react-router-dom";
import Circle from "./Circle";
import CircleAnimation from "../Animation/Circle";
export default function Hero() {
  return (
    <div className="relative flex w-full flex-wrap justify-center md:justify-start">
      <div className="my-10">
        <div className="group relative flex min-w-[300px] items-center justify-center overflow-hidden p-2">
          <Circle
            radius={150}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="absolute rotate-[55deg] transition-all duration-500 group-hover:rotate-[40deg]"
          />
          <Circle
            radius={150 - 10}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="absolute rotate-[40deg] transition-all duration-500 group-hover:rotate-[55deg]"
          />
          <img
            src="/Zubair.png"
            alt="Zubair profile pic"
            className="size-[290px] rounded-full transition-all duration-500 group-hover:drop-shadow-light"
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-2 pl-10 md:w-1/2">
        <div>
          <h1 className="text-5xl font-bold">
            Zubair Ahmad <span className="text-xl">(Hackcharms)</span>
          </h1>
          <p className="pl-2 pt-2 text-2xl text-light-600/80">
            I Represent Data simplicity and clearly.
          </p>
          <p className="pl-2 pt-2 text-xl">
            From full-stack development to crafting reusable UI components, I
            thrive in diverse technical environments, always seeking new
            challenges to push the boundaries of what's possible,
            <Link to="#about" className="px-1 text-secondary underline">
              know more
            </Link>
          </p>
        </div>
        <div className="absolute -bottom-1/2 right-[10%] text-primary-500/50 md:top-1/3">
          <CircleAnimation />
        </div>
      </div>
    </div>
  );
}
