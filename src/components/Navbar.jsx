import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { HamburgerIcon, AccountIcon } from "./Icons";
import Logo from "../assets/LogoDefault.png";

const links = [
  { page: "Home", route: "/" },
  { page: "Planning Tools", route: "" },
  { page: "Venues", route: "/venues" },
  { page: "Vendors", route: "" },
  { page: "Inspiration", route: "" },
  { page: "About Us", route: "" },
];

Navbar.propTypes = {
  handleShowNavModal: PropTypes.func.isRequired,
  handleShowRegister: PropTypes.func.isRequired,
  handleShowLogin: PropTypes.func.isRequired,
};
function Navbar({ handleShowNavModal, handleShowRegister, handleShowLogin }) {
  const location = useLocation().pathname;
  const activeLink = "underline";

  return (
    <nav className="fixed top-0 z-40 w-11/12 self-center whitespace-nowrap rounded-md border-gray-200 bg-white shadow-md dark:bg-white lg:w-full lg:shadow-none">
      <div className="relative flex items-center justify-between px-[5vw] py-4">
        <button className="md:hidden" onClick={handleShowNavModal}>
          <HamburgerIcon />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-48" />
        </Link>
        <button className="md:hidden" onClick={handleShowLogin}>
          <AccountIcon />
        </button>
        <div
          className="hidden w-full items-center justify-between md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-white">
            <div className="flex gap-10">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.route}
                    className={`text-lg text-[#6E7C99] underline-offset-8 hover:underline ${
                      location === link.route ? activeLink : ""
                    }`}
                  >
                    {link.page}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="hidden bg-white lg:flex lg:gap-4">
          <button
            type="button"
            className="btnSolid btnNavSolid mobileText w-24 py-2"
            onClick={handleShowRegister}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btnOutline mobileText w-24 py-2"
            onClick={handleShowLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
