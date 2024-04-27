import { Link } from "react-router-dom";

export default function Footer(){
    return (
      <footer className="bg-transparent border border-primary text-primary shadow m-4 dark:bg-gray-800 flex-grow-0 relative">
        <span className="border-primary bg-primary-900 absolute -top-[0.3125rem] -right-[0.3125rem] w-3 h-3 border rounded-full" />
        <span className="border-primary bg-primary-900 absolute -bottom-[0.3125rem] -right-[0.3125rem] w-3 h-3 border rounded-full" />
        <span className="border-primary bg-primary-800 absolute -top-[0.3125rem] -left-[0.3125rem] w-3 h-3 border rounded-full" />
        <span className="border-primary bg-primary-800 absolute -bottom-[0.3125rem] -left-[0.3125rem] w-3 h-3 border rounded-full" />
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm  sm:text-center">
            © {new Date().getFullYear() + " "}
            <Link to="/" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
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