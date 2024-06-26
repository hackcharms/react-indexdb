import Curve from "./Curve";

export default function Divider({
  // label,
  id,
}: // dividerClass = "border-secondary-200",
{
  label: string;
  id: string;
  dividerClass?: string;
}) {
  return (
    <div className="relative mb-20 mt-36 flex size-full flex-col items-center justify-center">
      <span id={id}> &nbsp; </span>
      {/* <hr className={`w-full ${dividerClass} shadow-md`} /> */}
      <Curve count={((Math.random() * 5) ^ 1) + 1} />
      {/* <h1 className="text-4xl absolute bg-primary px-1 leading-7" id={id}>
        {label}
      </h1> */}
    </div>
  );
}
