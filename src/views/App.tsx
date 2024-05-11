import Divider from "../components/Divider";
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
        <div className="group">
          <Divider id="project" label="Project" />
          <Projects />
        </div>
      </div>
    </>
  );
};
export default App;
