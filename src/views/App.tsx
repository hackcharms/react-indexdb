import ContactUs from "../components/portfolio/motion/ContactUs";
import Experience from "../components/portfolio/motion/Experience";
import Hero from "../components/portfolio/motion/Hero";
import Work from "../components/portfolio/motion/Work";
// import Starts from "../components/portfolio/Starts";
import Tech from "../components/portfolio/motion/Tech";
import About from "./About";

function App() {
  return (
    <div className="">
      <div className="">
        <Hero />
        <About />
      </div>
      <Experience />
      <Tech />
      <Work />
      <div className="relative z-0">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
