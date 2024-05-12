export default function Circle({
  radius = 50,
  dashes = 2,
  gap = 2,
  strokeWidth = 2,
  className = "",
}) {
  const dashArea = (2 * Math.PI * radius) / dashes - gap;
  const size = (radius + 2 + strokeWidth) * 2;
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox={`-${strokeWidth} -${strokeWidth} ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={radius + 2}
        cy={radius + 2}
        strokeDasharray={`${dashArea} ${gap}`}
        r={radius}
        fill="transparent"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
