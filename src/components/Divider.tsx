import Curve from "./Curve";

export default function Divider({
  label,
  id,
  dividerClass = "border-secondary-200",
}: {
  label: string;
  id: string;
  dividerClass?: string;
}) {
  return (
    <div className="relative w-full my-10 flex flex-col items-center justify-center h-full">
      <hr className={`w-full ${dividerClass} shadow-md`} />
      <Curve />
      <h1 className="text-4xl absolute bg-primary px-1 leading-7" id={id}>
        {label}
      </h1>
    </div>
  );
}
