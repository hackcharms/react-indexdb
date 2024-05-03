import { Link } from "react-router-dom";
import Circle from "./Circle";
export default function Hero() {
  return (
    <div className="flex flex-wrap w-full justify-center md:justify-start">
      <div className="my-10">
        <div className="relative min-width-[300px]">
          <Circle
            radius={150}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="text-secondary-500 absolute top-0 right-0 rotate-[45deg]"
          />
          <Circle
            radius={150 - 10}
            dashes={2}
            gap={10}
            strokeWidth={2}
            className="text-secondary-500 absolute top-[10px] right-[10px] rotate-[40deg]"
          />
          <img
            src="/public/Zubair.png"
            className="size-[290px] rounded-full drop-shadow-[2px_4px_6px_#7e7e3a]"
          />
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 items-center p-2">
        <div>
          <h1 className="text-5xl">
            Zubair Ahmad <span className="text-xl">(Hackcharms)</span>
          </h1>
          <p className="text-2xl pt-2 pl-2 text-secondary">
            I Represent Data simplicity and clearly.
          </p>
          <p className="text-xl pt-2 pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod
            distinctio doloribus magnam minus hic eius iusto. Itaque,
            consectetur ullam enim optio temporibus odit pariatur exercitationem
            at, illum accusantium hic est laboriosam veniam repellendus sunt,
            <Link to="/about" className="text-secondary underline px-1">
              more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
