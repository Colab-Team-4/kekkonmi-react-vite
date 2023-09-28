import React from "react";

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
        <div className="footer-items flex items-center w-7/12">
            <ul className="flex justify-evenly items-center w-full text-lg font-semibold text-white">
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
        {/* End of Footer Items */}
        {/* Footer Icons */}
        <div className="footer-icons flex justify-evenly items-center w-2/12 text-white text-2xl">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
        {/* End of Footer Icons */}

      </div>
    </div>
  );
}

export default Footer;
