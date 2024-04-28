import { Link } from "react-router-dom";

export default function Footer(){
    return (
      <footer className="relative m-4 grow-0 border border-primary bg-transparent text-primary shadow dark:bg-gray-800">
        <span className="absolute -right-[0.3125rem] -top-[0.3125rem] size-3 rounded-full border border-primary bg-primary-900" />
        <span className="absolute -bottom-[0.3125rem] -right-[0.3125rem] size-3 rounded-full border border-primary bg-primary-900" />
        <span className="absolute -left-[0.3125rem] -top-[0.3125rem] size-3 rounded-full border border-primary bg-primary-800" />
        <span className="absolute -bottom-[0.3125rem] -left-[0.3125rem] size-3 rounded-full border border-primary bg-primary-800" />
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm  sm:text-center">
            © {new Date().getFullYear() + " "}
            <Link to="/" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}