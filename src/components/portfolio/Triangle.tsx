import { polygonPath } from "../../utils/polygon";

export default function Triangle({ strokeOpacity = 0.2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 -4 260 260"
      className="size-96"
    >
      <path
        d={polygonPath(120, 120, 100, 3)}
        stroke="currentColor"
        strokeOpacity={strokeOpacity}
        strokeWidth="4"
        strokeDasharray={1000}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="transparent"
        className="animate-triangle"
      />
      <path
        d={polygonPath(120, 120, 100, 3)}
        stroke="currentColor"
        strokeOpacity={0.05}
        strokeWidth="4"
        strokeDasharray={1000}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="transparent"
      />
    </svg>
  );
}
