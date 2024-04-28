import ContactUs from "../components/portfolio/ContactUs";
import Experience from "../components/portfolio/Experience";
import Hero from "../components/portfolio/Hero";
import Work from "../components/portfolio/Work";
// import Starts from "../components/portfolio/Starts";
import Tech from "../components/portfolio/Tech";
import About from "./About";

function App() {
  return (
    <div>
      <div className="bg-hero-pattern">
        <Hero />
        <About />
      </div>
      <Experience />
      <Tech />
      <Work />
      <div className="relative z-0">
        <ContactUs />
        {/* <Starts /> */}
      </div>
    </div>
  );
}

export default App;
