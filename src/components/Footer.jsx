import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../components/Icons";
import Logo from "../assets/LogoDark.png";

const links = ["Contact", "Terms of Use", "Privacy Policy", "FAQ"];

function Footer() {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-around bg-[#E8C8CE] p-4 pt-12 md:flex-row md:gap-10 md:p-10 lg:justify-between lg:px-20">
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-14" />
      </Link>
      <div className="w-full items-center justify-between md:flex md:w-auto">
        <ul className="mt-4 flex flex-col items-center p-4 font-medium text-white dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-[91px]">
            {links.map((link, i) => (
              <li key={i}>
                <a href="#" aria-current="page">
                  <h2 className="mobileText text-[#616161] lg:text-2xl lg:font-bold">
                    {link}
                  </h2>
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>

      <div className="flex items-center justify-evenly text-[#616161]">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
