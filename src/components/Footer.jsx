import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LogoWhite,
} from "../components/Icons";

const links = ["Contact", "Terms of Use", "Privacy Policy", "FAQ"];

function Footer() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-around bg-black p-4 pt-12 md:flex-row md:gap-10 md:p-10 lg:px-20">
      <a href="/" className="flex items-center gap-2">
        <LogoWhite className="h-10" />
        <span className="self-center whitespace-nowrap font-playFair text-2xl text-[22px] font-normal tracking-widest text-white">
          MATRIMONEY
        </span>
      </a>
      <div className="w-full items-center justify-between md:flex md:w-auto">
        <ul className="mt-4 flex flex-col items-center p-4 font-medium text-white dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-[91px]">
            {links.map((link, i) => (
              <li key={i}>
                <a href="#" aria-current="page">
                  <h2 className="footer-links lg:text-2xl">{link}</h2>
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>

      <div className="flex items-center justify-evenly text-white">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
