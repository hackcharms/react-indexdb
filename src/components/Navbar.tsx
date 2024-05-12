import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" border-b border-light/20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse justify-center"
        >
          <img
            src={logo}
            className="size-8 shadow-secondary drop-shadow-[2px_4px_6px_#7e7e3a]"
            alt="Hackcharms Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">
            Hackcharms
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-light-900 rounded-lg md:hidden hover:bg-light-500 focus:outline-none focus:ring-2 focus:ring-light-600 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="block py-2 px-3 text-light-500 hover:text-primary rounded hover:bg-light-900 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0  "
                  aria-current="page"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
