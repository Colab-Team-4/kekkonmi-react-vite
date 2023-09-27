import React from "react";
import "./assets/logo.svg";

function Navbar() {
  return (
    <nav className="border-gray-200 bg-white dark:bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/src/assets/logo.svg" className="h-10" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-slate-950">
            Kekkonmi
          </span>
        </a>
        <div className="flex bg-white md:order-2">
          {/* Nav-button */}
          <button
            type="button"
            className="mr-3 rounded-lg bg-slate-950 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-slate-950 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-3"
          >
            Sign Up
          </button>
          {/* End of Nav-button */}
          {/* Nav-button */}
          <button
            type="button"
            className="mr-3 rounded-lg bg-slate-950 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-slate-950 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            Log In
          </button>
          {/* End of Nav-button */}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-white">
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-slate-950"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {/* End of Nav-item */}
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Planning Tools
              </a>
            </li>
            {/* End of Nav-item */}
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Venues
              </a>
            </li>
            {/* End of Nav-item */}
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Vendors
              </a>
            </li>
            {/* End of Nav-item */}
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Inspiration
              </a>
            </li>
            {/* End of Nav-item */}
            {/* Nav-item */}
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About Us
              </a>
            </li>
            {/* End of Nav-item */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
