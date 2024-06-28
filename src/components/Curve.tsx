import { useMemo } from "react";

export default function Curve({ dividerClass = "", m = 30, count = 5 }) {
  function randomX() {
    return Math.random() * 20 + Math.random() * 10;
  }
  function randomM() {
    return Math.random() * 10 + m - 10;
  }
  const curveCount = 7;
  function curve() {
    return `c ${randomM()} -${randomM()} ${randomM()} ${randomM()} ${30 * 2} 0`;
  }
  const dynamicClass = useMemo(
    () => `text-secondary-${((Math.random() * 8) ^ 1) + 1}00`,
    []
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0.339746 422 19.32"
      className={` absolute w-full ${dividerClass} duration-100`}
    >
      {Array(count)
        .fill("el")
        .map((_, index) => (
          <path
            d={`M ${randomX()} 10 ${Array(curveCount).fill(curve()).join(" ")}`}
            stroke="currentColor"
            key={index}
            strokeWidth="1"
            fill="transparent"
            className={`transition-all duration-[3s] ease-in-out [stroke-dasharray:200%] [stroke-dashoffset:200%] group-hover:[stroke-dashoffset:0] ${dynamicClass}`}
          />
        ))}
    </svg>
  );
}
