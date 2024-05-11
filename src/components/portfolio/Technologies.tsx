import { technologies } from "../../constants";
import Circle from "./Circle";

export default function Technologies() {
  return (
    <>
      <h3 className="text-2xl pb-8 text-secondary">
        But Not limited to it, always thrive to achieve more
      </h3>
      <div className="flex flex-wrap gap-4 justify-center ">
        {technologies.map(({ name, icon, link = "" }) => (
          <a
            href={link + "#"}
            key={name}
            className="size-40 relative px-4 text-center flex flex-col flex-wrap justify-center items-center group/tech"
          >
            <Circle
              className=" text-secondary absolute drop-shadow-secondary rotate-[55deg] group-hover/tech:rotate-[40deg] transition-all duration-500"
              radius={80}
              gap={10}
              strokeWidth={1}
            />
            <Circle
              radius={80 - 8}
              strokeWidth={1}
              gap={10}
              className="text-secondary-500 absolute rotate-[40deg] group-hover/tech:rotate-[55deg] transition-all duration-500"
            />
            <div className="absolute flex flex-col justify-center items-center">
              <img
                src={icon}
                alt={name}
                className="size-20 group-hover/tech:drop-shadow-secondary"
              />
              <h3>{name}</h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
