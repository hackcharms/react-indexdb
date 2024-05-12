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
          <Divider id="works" label="About" />
          <About />
        </div>
        <div className="group">
          <Divider id="technologies" label="Technologies" />
          <Technologies />
        </div>
        <div className="group">
          <Divider id="works" label="Works" />
          <Works />
        </div>
        <div className="group relative">
          <Star className="absolute text-primary-200/20 size-96" />
          <Divider id="project" label="Project" />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
