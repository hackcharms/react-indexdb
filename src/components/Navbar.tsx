import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" border-b border-light/20 ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="/"
          className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="size-8 shadow-secondary drop-shadow-[2px_4px_6px_#7e7e3a]"
            alt="Hackcharms Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary">
            Hackcharms
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-light-900 hover:bg-light-500 focus:outline-none focus:ring-2 focus:ring-light-600 md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!isOpen ? "hidden" : ""}
         w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <a
                  href={`${path}`}
                  className="block rounded px-3 py-2 text-light-500 hover:bg-light-900 hover:text-primary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-secondary  "
                  aria-current="page"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
