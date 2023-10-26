import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CloseIcon, EyeIcon, KeyboardCapslockIcon } from "../components/Icons";
import FacebookIconColor from "../assets/fb.png";
import GmailIcon from "../assets/gmail.png";
import Logo from "../assets/LogoDefault.png";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

Login.propTypes = {
  handleCloseLogin: PropTypes.func.isRequired,
  handleShowRegister: PropTypes.func.isRequired,
};
function Login({ handleCloseLogin, handleShowRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    const handleCapsLock = (event) => {
      const capsLockStatus = event.getModifierState("CapsLock");
      setCapsLockOn(capsLockStatus);
    };

    document.addEventListener("keydown", handleCapsLock);

    return () => {
      document.removeEventListener("keydown", handleCapsLock);
    };
  }, []);

  return (
    <div className="relative z-50 flex w-full  flex-col items-center justify-center border border-black bg-white p-[5vw] pt-20 lg:mx-auto lg:rounded-lg lg:pt-0">
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer transition-all duration-500 hover:scale-110 lg:hidden"
        onClick={handleCloseLogin}
      >
        <CloseIcon />
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:max-w-[28vw] lg:pt-16">
        <img src={Logo} alt="Logo" className="w-44 py-2 lg:w-36" />
        <div className="mb-7 text-center font-lato text-[#616161] lg:text-sm">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        {/* ASK AMMARA TO REMOVE THIS */}
        {/* <div className="py-8 font-playFair text-xl font-bold text-[#676767] lg:hidden">
          Log In
        </div> */}
        {/* ASK AMMARA TO REMOVE THIS */}
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5 lg:gap-2">
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-playFair text-base text-[#161616] lg:text-sm lg:font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="inputText mobileText mt-2 h-10 w-full px-4 lg:h-10"
              placeholder="Janedoe@gmail.com"
              name="email"
            />
          </div>
          {/* End of Email */}
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="font-playFair text-base text-[#161616] lg:text-sm lg:font-semibold"
            >
              Password
            </label>
            <div className="relative mt-2 h-12 rounded border-none">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="inputText mobileText absolute h-10 w-full pl-4 pr-28 lg:h-10"
                placeholder="••••••••••••"
                name="password"
              />
              <div
                className="absolute right-4 top-2 cursor-pointer"
                onClick={handleShowPassword}
              >
                <EyeIcon />
              </div>
              <div className="absolute right-14 top-2 cursor-pointer">
                {capsLockOn && <KeyboardCapslockIcon />}
              </div>
            </div>
          </div>
          {/* End of Password */}
        </form>
        {/* End of Form */}
        {/* Remember Me & Forgot Password? */}
        <div className="flex h-7 w-full items-center justify-between">
          <div className="-ml-3 flex items-center">
            <Checkbox
              icon={
                <CheckBoxOutlineBlankOutlinedIcon
                  style={{ color: "#6E7C99" }}
                />
              }
              checkedIcon={
                <CheckBoxOutlinedIcon style={{ color: "#6E7C99" }} />
              }
            />
            <div className="font-lato text-sm text-[#6E7C99] lg:text-xs">
              Remember me?
            </div>
          </div>
          <div className="cursor-pointer font-lato text-xs text-[#6E7C99] hover:underline">
            Forgot Password?
          </div>
        </div>
        {/* End of Remember Me & Forgot Password? */}
        <button
          type="submit"
          className="my-10 h-12 w-full rounded bg-[#AD6E7A] font-lato text-xl font-bold text-[#FFFFFF] duration-300 hover:bg-[#C99CA5] hover:text-[#F0F0F0] lg:my-5 lg:h-8 lg:text-base lg:font-normal"
        >
          Log In
        </button>
        <div className="flex w-full items-center gap-5">
          <hr className="h-0.5 w-full bg-[#6E7C99] shadow-none" />
          <span className="font-playFair text-sm text-[#6E7C99]">or</span>
          <hr className="h-0.5 w-full bg-[#6E7C99]" />
        </div>
        {/* Social Media Icons */}
        <div className="flex h-28 w-[60%] items-center justify-evenly lg:h-20 lg:w-full lg:gap-4">
          <div className="flex cursor-pointer items-center justify-center lg:order-2 lg:h-12 lg:basis-1/4 lg:rounded lg:border lg:border-[#AD6E7A]">
            <img
              src={FacebookIconColor}
              alt="Facebook Logo"
              className="lg:w-5"
            />
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-5 rounded lg:order-1 lg:h-12 lg:basis-3/4 lg:border lg:border-[#AD6E7A]">
            <img src={GmailIcon} alt="Gmail Logo" className="lg:w-5" />
            <div className="hidden font-lato lg:block lg:text-sm">
              Continue with Gmail
            </div>
          </div>
        </div>
        {/* End of Social Media Icons */}
        <hr className="h-0.5 w-full bg-[#9A9A9A] shadow-none lg:hidden" />
        <div className="py-10 font-lato font-medium lg:absolute lg:-top-6 lg:right-[2vw] lg:flex lg:items-center lg:text-xs">
          Need an account?
          <span
            className="cursor-pointer px-1 font-semibold text-[#6E7C99] hover:underline"
            onClick={handleShowRegister}
          >
            Sign Up
          </span>
          <button
            className="ml-5 hidden h-12 w-32 rounded border-2 border-[#6e7c99] text-[#676767] duration-300 hover:bg-[#6E7C99] hover:text-[#FFFFFF] lg:ml-3 lg:flex lg:h-8 lg:w-24 lg:items-center lg:justify-center lg:text-xs"
            onClick={handleCloseLogin}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
