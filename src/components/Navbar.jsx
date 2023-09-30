import NavLinks from "/src/components/NavLinks";
import logo from "/logo.svg";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white dark:bg-white">
      <div className="mx-auto flex w-fit flex-wrap items-center justify-evenly gap-28 p-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} className="h-10" alt="Logo" />
          <span className="self-center whitespace-nowrap font-lato text-2xl text-[40px] font-normal dark:text-black">
            Kekkonmi
          </span>
        </a>

        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-white">
            <NavLinks />
          </ul>
        </div>

        <div className="flex gap-4 bg-white">
          <button type="button" className="btn-solid w-40">
            Sign Up
          </button>
          <button type="button" className="btn-outline w-40">
            Log In
          </button>

          {/* <button
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
