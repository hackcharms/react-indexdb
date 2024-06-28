import { technologies } from "../../constants";
import Circle from "./Circle";

export default function Technologies() {
  return (
    <>
      <h1 className="px-4 text-4xl font-bold">
        Technologies I have worked so far
      </h1>
      <h3 className="pb-8 pl-6 text-2xl">
        But Not limited to it, always thrive to achieve more
      </h3>
      <div className="flex flex-wrap justify-center gap-4 overflow-hidden pb-2">
        {technologies.map(({ name, icon }) => (
          <div
            key={name}
            className="group/tech relative flex size-40 flex-col flex-wrap items-center justify-center px-4 text-center"
          >
            <Circle
              className=" absolute rotate-[55deg] text-secondary/50 drop-shadow-secondary transition-all duration-500 group-hover/tech:rotate-[40deg]"
              radius={80}
              gap={10}
              strokeWidth={1}
            />
            <Circle
              radius={80 - 8}
              strokeWidth={1}
              gap={10}
              className="absolute rotate-[40deg] text-secondary/60 transition-all duration-500 group-hover/tech:rotate-[55deg]"
            />
            <div className="absolute flex flex-col items-center justify-center">
              <img
                src={icon}
                alt={name}
                className="size-20 group-hover/tech:drop-shadow-secondary"
              />
              <h3>{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
