import { Link } from "react-router-dom";
import Circle from "./Circle";
import CircleAnimation from "../Animation/Circle";
export default function Hero() {
  return (
    <div className="relative flex flex-wrap w-full justify-center md:justify-start">
      <div className="my-10">
        <div className="relative flex justify-center items-center min-width-[300px] group">
          <Circle
            radius={150}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="absolute rotate-[55deg] group-hover:rotate-[40deg] transition-all duration-500"
          />
          <Circle
            radius={150 - 10}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="absolute rotate-[40deg] group-hover:rotate-[55deg] transition-all duration-500"
          />
          <img
            src="/public/Zubair.png"
            className="size-[290px] rounded-full group-hover:drop-shadow-light transition-all duration-500"
          />
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 items-center p-2 pl-10">
        <div>
          <h1 className="text-5xl font-bold">
            Zubair Ahmad <span className="text-xl">(Hackcharms)</span>
          </h1>
          <p className="text-2xl pt-2 pl-2 text-light-600/80">
            I Represent Data simplicity and clearly.
          </p>
          <p className="text-xl pt-2 pl-2">
            From full-stack development to crafting reusable UI components, I
            thrive in diverse technical environments, always seeking new
            challenges to push the boundaries of what's possible,
            <Link to="/about" className="text-secondary underline px-1">
              know more
            </Link>
          </p>
        </div>
        <div className="absolute top-1/3 right-[10%] text-primary-500/50">
          <CircleAnimation />
        </div>
      </div>
    </div>
  );
}
