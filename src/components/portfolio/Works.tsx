import { tcw } from "../../assets";
import { credilio } from "../../assets";
export default function Works({}) {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-secondary"> Works</h1>
      <h3 className="text-xl pl-4"> Companies I have worked in so far.</h3>
      <div>
        <WorkCard />
      </div>
    </div>
  );
}

function WorkCard() {
  return (
    <>
      <div className="flex flex-wrap my-10">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={credilio}
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
      <div className="flex flex-wrap flex-row-reverse my-20">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={credilio}
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
