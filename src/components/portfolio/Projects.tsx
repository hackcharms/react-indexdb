import { askMe, vue3Toaster } from "../../assets";
import { projects } from "../../constants";

export default function Projects({}) {
  return (
    <div className="relative">
      <h1 className="text-4xl px-4 font-bold">Projects</h1>
      <h3 className="text-lg my-2 pl-4">
        Apart from working for Companies a Have worked on these projects
      </h3>
      <ProjectCard />
    </div>
  );
}

function ProjectCard({}) {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-wrap  mt-10 py-10 ${
            index % 2 == 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 self-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={project.image}
                alt={`${project.name} image`}
                className="size-52"
              />

              <a
                href={project.demo || project.git}
                className="text-secondary underline text-2xl font-semibold"
                target="_blank"
              >
                {project.name}
              </a>
              <p className="text-center text-balance text-lg">
                A lightweight and fully customizable toast notification package
                that seamlessly blends into your design.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 self-center">
            {Array.isArray(project.description) ? (
              project.description.map((el, _index) => <p key={_index}>{el}</p>)
            ) : (
              <p>{project.description}</p>
            )}
            <div className="text-center my-4">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="px-2 py-1 border rounded-lg border-primary-50 mx-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
