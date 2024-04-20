import ComputerCanvas from "./canvas/Computer";

function Hero() {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 max-w-7xl top-10 px-7">
        <div className="flex item-start">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 bg-primary rounded-full" />
            <div className="w-1 h-32 bg-gradient-to-b from-primary via-transparent to-primary" />
            <div className="w-5 h-5 bg-primary rounded-full" />
          </div>
          <div className="px-4">
            <h1 className="text-[5rem] text-secondary">
              Hi, Im <span className="text-primary">Ansari Zubair</span>
            </h1>
            <p className="text-xl text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quas laboriosam cupiditate corrupti.
            </p>
          </div>
        </div>
      </div>
      <ComputerCanvas />
    </div>
  );
}

export default Hero;
