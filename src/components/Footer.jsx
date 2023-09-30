import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "/src/components/Icons";
function Footer() {
  const logo = "/src/assets/logoWhite.svg";
  return (
    <div className="footer bg-black">
      <div className="footer-center flex justify-between px-20 py-8">
        {/* Footer Logo */}
        <div className="footer-logo w-3/12">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} className="h-7" alt="Logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Kekkonmi
            </span>
          </a>
        </div>
        {/* End of Footer Logo */}
        {/* Footer Items */}
        <div className="footer-items flex w-7/12 items-center">
          <ul className="flex w-full items-center justify-evenly text-lg font-semibold text-white">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#" >Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        {/* End of Footer Items */}
        {/* Footer Icons */}
        <div className="footer-icons flex w-2/12 items-center justify-evenly text-2xl text-white">
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
        {/* End of Footer Icons */}
      </div>
    </div>
  );
}

export default Footer;
