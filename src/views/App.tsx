import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Star from "../components/Star";
import { Hero, About, Technologies } from "../components/portfolio";
import Projects from "../components/portfolio/Projects";
import Works from "../components/portfolio/Works";
const App = () => {
  return (
    <>
      <div className="">
        <Hero />
        <div className="group">
          <Divider id="about" label="About" />
          <About />
        </div>
        <div className="group">
          <Divider id="technologies" label="Technologies" />
          <Technologies />
        </div>
        <div className="group overflow-hidden">
          <Divider id="works" label="Works" />
          <Works />
        </div>
        <div className="group relative overflow-hidden">
          <Star className="absolute top-10 left-1/2 text-primary-200/20 size-1/3 group-hover:rotate-45 duration-1000" />
          <Divider id="project" label="Project" />
          <Projects />
        </div>
        <span id="social-links"> &nbsp; </span>
        <Footer />
      </div>
    </>
  );
};
export default App;
