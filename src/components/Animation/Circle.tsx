export default function CircleAnimation({
  radius = 100,
  strokeWidth = 2,
  count = 10,
  className = "",
}) {
  const padding = radius;
  const originX = radius * 1.5;
  const originY = radius * 1.25;
  const gap = "5px";
  const size = (radius + 2 + strokeWidth + padding) * 2;
  return (
    <svg
      width={size}
      height={size}
      style={{ "--gap": gap, "--origin": `${originX}px ${originY}px` }}
      className={className}
      viewBox={`-${strokeWidth + padding} -${
        strokeWidth + padding
      } ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <circle
            cx={radius + 2}
            cy={radius + 2}
            r={radius}
            key={index}
            fill="transparent"
            className="circle-animate"
            style={{ "--index": index }}
            strokeWidth={strokeWidth}
            stroke="currentColor"
          />
        ))}
    </svg>
  );
}
