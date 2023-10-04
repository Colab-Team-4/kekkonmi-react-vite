import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LogoWhite,
} from "/src/components/Icons";

const links = ["Contact", "Terms of Use", "Privacy Policy", "FAQ"];

function Footer() {
  return (
    <div className="mx-auto flex h-[15vh] w-full items-center justify-evenly gap-28 bg-black p-4">
      <a href="/" className="flex items-center gap-2">
        <LogoWhite className="h-10" />
        <span className="self-center whitespace-nowrap font-playFair text-2xl text-[40px] font-normal tracking-widest text-white">
          MATRIMONEY
        </span>
      </a>
      <div className="hidden w-full items-center justify-between md:flex md:w-auto">
        <ul className="mt-4 flex flex-col bg-black p-4 font-medium text-white dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          <div className="flex gap-24">
            {links.map((link, i) => (
              <li key={i}>
                <a href="#" aria-current="page">
                  <h2>{link}</h2>
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
