import { vue3Toaster } from "../../assets";

export default function Projects({}) {
  return (
    <div className="relative">
      <h1 className="mt-20 text-4xl text-secondary"> Projects</h1>
      <h3 className="text-lg my-2 pl-4">
        Apart from working for Companies a Have worked on these projects
      </h3>
      <svg
        width="300"
        height="300"
        className="absolute scale-50 top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E7E3A"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1back)"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        ></path>
      </svg>
      <svg
        width="300"
        height="300"
        className="absolute scale-50 rotate-180 right-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E7E3A"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1back)"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
        ></path>
      </svg>
      <ProjectCard />
    </div>
  );
}

function ProjectCard({}) {
  return (
    <>
      <div className="flex flex-wrap my-10">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={vue3Toaster}
              alt="Credilio Financial Limited Logo"
              className="size-52"
            />
            <a
              href="http://credilio.in"
              className="text-secondary underline text-2xl font-semibold"
              target="_blank"
            >
              Vue3 Toaster
            </a>
            <p className="text-center text-balance text-lg">
              A Technology-driven personal finance platform connecting banks,
              financial advisors, and consumers
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <ul>
            <li>
              Spearheaded a project restructuring initiative using composable
              components and best practices, resulting in a 20% improvement in
              code maintainability and a more accessible user experience.
            </li>
            <li>
              Optimized page load times by leveraging a deep understanding of
              lifecycle hooks, rendering, asynchronous components, virtual
              scrolling, debouncing, throttles, etc.
            </li>
            <li>
              Implemented the access based on roles and policy to restrict
              unauthorized access.
            </li>
            <li>
              Dynamic theme support to adopt and blend with partner platforms
              and multiple native supports like image, text sharing, clipboard,
              etc.
            </li>
            <li>
              Assisted the partners integration of our web page in their
              application and led a group of 3-4 developers.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap flex-row-reverse my-20">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={vue3Toaster}
              alt="Credilio Financial Limited Logo"
              className="size-52"
            />
            <a
              href="http://credilio.in"
              className="text-secondary underline text-2xl font-semibold"
              target="_blank"
            >
              Credilio Financial Limited
            </a>
            <p className="text-center text-balance text-lg">
              A Technology-driven personal finance platform connecting banks,
              financial advisors, and consumers
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <ul>
            <li>
              Spearheaded a project restructuring initiative using composable
              components and best practices, resulting in a 20% improvement in
              code maintainability and a more accessible user experience.
            </li>
            <li>
              Optimized page load times by leveraging a deep understanding of
              lifecycle hooks, rendering, asynchronous components, virtual
              scrolling, debouncing, throttles, etc.
            </li>
            <li>
              Implemented the access based on roles and policy to restrict
              unauthorized access.
            </li>
            <li>
              Dynamic theme support to adopt and blend with partner platforms
              and multiple native supports like image, text sharing, clipboard,
              etc.
            </li>
            <li>
              Assisted the partners integration of our web page in their
              application and led a group of 3-4 developers.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
