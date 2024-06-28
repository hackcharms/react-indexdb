import { tcw } from "../../assets";
import { credilio } from "../../assets";
import Triangle from "./Triangle";
export default function Works() {
  return (
    <div className="relative mt-20 px-4">
      <div className="absolute -left-10 mx-auto rotate-45 duration-1000 group-hover:rotate-0 md:left-[10%]">
        <Triangle />
      </div>
      <div className="absolute -right-20 bottom-0 -rotate-12 duration-1000 group-hover:rotate-0 md:right-1/4">
        <Triangle />
      </div>
      <h1 className="text-4xl font-bold">Works</h1>
      <h3 className="text-xl"> Companies I have worked in so far.</h3>
      <div className="relative z-[1]">
        <WorkCard />
      </div>
    </div>
  );
}

function WorkCard() {
  return (
    <>
      <div className="my-10 flex flex-wrap">
        <div className="w-full self-center md:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <img
              src={credilio}
              alt="Credilio Financial Limited Logo"
              className="z-0 size-52"
            />
            <a
              href="http://credilio.in"
              className="text-2xl font-semibold text-secondary underline"
              target="_blank"
            >
              Credilio Financial Limited
            </a>
            <p className="text-sm">
              <time dateTime="2022-12-5 00:00">Dec 2022</time>
              <span className="px-2">-</span>
              <time dateTime={Date.toString()}>Present</time>
            </p>
            <p className="text-balance text-center text-lg">
              A Technology-driven personal finance platform connecting banks,
              financial advisors, and consumers
            </p>
          </div>
        </div>
        <div className="mt-4 w-full self-center md:w-1/2">
          <ul className="list-inside list-disc">
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
      <div className="my-20 flex flex-row-reverse flex-wrap">
        <div className="w-full self-center md:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <img
              src={tcw}
              alt="Credilio Financial Limited Logo"
              className="z-0 max-h-52 min-w-52 max-w-52"
            />
            <a
              href="http://thecodework.com"
              className="text-2xl font-semibold text-secondary underline"
              target="_blank"
            >
              TheCodeWork
            </a>
            <p className="text-sm">
              <time dateTime="2020-08-04 00:00">Aug 2020</time>
              <span className="px-2">-</span>
              <time dateTime="2022-12-5 00:00">Dec 2022</time>
            </p>

            <p className="text-balance text-center text-lg">
              A long-term tech & innovation partner.
            </p>
          </div>
        </div>
        <div className="mt-4 w-full self-center md:w-1/2">
          <ul>
            <li>
              <ul className="list-inside list-disc">
                <a
                  href="https://vokabul8.com"
                  className="text-lg  font-semibold underline"
                >
                  WordPuzzle Game
                </a>
                <li>
                  3 different types of Betting with different stake options with
                  real time timers.
                </li>
                <li>
                  Private and public Room feature with chatting and real time
                  synchronization using WebSocket technology.
                </li>
                <li>
                  Chatting and feeds feature with URL preview and other feed
                  features like image upload, like, comment, and thread reply.
                </li>
              </ul>
            </li>
            <li>
              <ul className="list-inside list-disc">
                <h1 className="text-lg font-semibold">E-POS</h1>
                <li>
                  APIs integration with throttling algorithms like leaky bucket.
                </li>
                <li>
                  Sync large data (approx 5-8 thousand per day) by cron jobs and
                  providing coupons based on the purchase.
                </li>
                <li>
                  Performance monitoring, Data logging and Event monitoring
                  feature using various packages..
                </li>
              </ul>
            </li>
            <li>
              <ul className="list-inside list-disc">
                <a
                  href="https://vokabul8.com"
                  className="text-lg  font-semibold underline"
                >
                  Freight management System:
                </a>
                <li>
                  Refactoring the application reduced the Query execution time
                  and Resources size by approx 10%.
                </li>
                <li>
                  Generating financial reports daily and sending an email along
                  with an excel sheet to each owner and authorities.
                </li>
                <li>
                  Generating Excel sheet for daily, monthly financial custom
                  excel designs report with Company logo and other details.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
