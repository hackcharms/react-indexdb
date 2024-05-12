import { outlineStarPath, polygonPath } from "../utils/polygon";

export default function Star({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 -10 250 250"
      className={className}
    >
      <path
        d={
          outlineStarPath(120, 120, 100, 5) +
          ", " +
          polygonPath(120, 120, 100, 5)
        }
        strokeOpacity={0.1}
        fill="transparent"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={
          outlineStarPath(120, 120, 100, 5) +
          ", " +
          polygonPath(120, 120, 100, 5)
        }
        fill="transparent"
        strokeWidth="3"
        strokeOpacity={0.51}
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeDasharray={1000}
        className="animate-triangle"
      />
      {/* <polygon
        points="100,10 40,197.5 190,78 10,78 160,197"
        fill="transparent"
        strokeWidth="3"
        strokeOpacity={0.1}
        stroke="currentColor"
      /> */}
      {/* <polygon
        points="100,10 40,197.5 190,78 10,78 160,197"
        fill="transparent"
        stroke="currentColor"
        strokeDasharray={960}
        className="animate-triangle"
      /> */}
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}
