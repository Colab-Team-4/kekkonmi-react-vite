import {
  CloseIcon,
  EyeIcon,
  FacebookIcon,
  FacebookIconColor,
  GmailIcon,
  InstagramIconColor,
  KeyboardCapslockIcon,
} from "../components/Icons";
import Logo from "../assets/LogoDefault.png";
import { useState, useEffect } from "react";

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
    <div className="relative z-50 flex w-full flex-col items-center justify-center bg-white p-[5vw] pt-20 lg:pt-3">
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer transition-all duration-500 hover:scale-110 lg:hidden"
        onClick={handleCloseLogin}
      >
        <CloseIcon />
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:max-w-[25vw] lg:pt-12">
        <img src={Logo} alt="Logo" className="w-40 py-2" />
        <div className="font-lato text-[#616161]">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        <div className="py-8 font-playFair text-xl font-bold text-[#676767]">
          Log In
        </div>
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5">
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-playFair text-base text-[#161616]"
            >
              Email
            </label>
            <input
              type="email"
              className="text mt-2 h-12 w-full rounded border-2 border-[#9E9E9E] px-4 focus:border-[#6E7C99] focus:outline-none"
              placeholder="Janedoe@gmail.com"
              name="email"
            />
          </div>
          {/* End of Email */}
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="font-playFair text-base text-[#161616]"
            >
              Password
            </label>
            <div className="relative mt-2 h-12 rounded border-2 border-[#9E9E9E] focus:border-[#6E7C99]">
              <input
                type={showPassword ? "text" : "password"}
                className="absolute h-10 w-full border-[#9E9E9E] pl-4 pr-28 focus:border-[#6E7C99] focus:outline-none"
                placeholder="••••••••••••"
                name="password"
              />
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={handleShowPassword}
              >
                <EyeIcon />
              </div>
              <div className="absolute right-14 top-3 cursor-pointer">
                {capsLockOn && <KeyboardCapslockIcon />}
              </div>
            </div>
          </div>
          {/* End of Password */}
        </form>
        {/* End of Form */}
        {/* Remember Me & Forgot Password? */}
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex gap-2">
            <input type="checkbox" className="border-[#6E7C99]" />
            <div className="font-lato text-xs text-[#161616]">Remember me?</div>
          </div>
          <div className="cursor-pointer font-lato text-xs text-[#6E7C99] hover:underline">
            Forgot Password?
          </div>
        </div>
        {/* End of Remember Me & Forgot Password? */}
        <button
          type="submit"
          className="my-10 h-12 w-full rounded bg-[#AD6E7A] font-lato text-xl font-bold text-[#FFFFFF] hover:bg-[#C99CA5] hover:text-[#F0F0F0]"
        >
          Log In
        </button>
        <div className="flex w-full items-center gap-5">
          <hr className="h-0.5 w-full bg-[#6E7C99] shadow-none" />
          <span className="font-playFair text-[#6E7C99]">or</span>
          <hr className="h-0.5 w-full bg-[#6E7C99]" />
        </div>
        {/* Social Media Icons */}
        <div className="flex h-44 w-[60%] items-center justify-between lg:w-full lg:gap-4">
          <div className="order-1 flex cursor-pointer items-center  justify-center lg:order-2 lg:h-14 lg:basis-1/4 lg:rounded lg:border-[1px] lg:border-[#AD6E7A]">
            <FacebookIconColor />
          </div>
          <div className="order-2 cursor-pointer lg:hidden ">
            <InstagramIconColor />
          </div>
          <div className="order-3 flex cursor-pointer items-center justify-center gap-5 rounded lg:order-1 lg:h-14 lg:basis-3/4 lg:border-[1px] lg:border-[#AD6E7A]">
            <GmailIcon />
            <div className="hidden font-lato text-lg lg:block">
              Continue with Gmail
            </div>
          </div>
        </div>
        {/* End of Social Media Icons */}
        <hr className="h-0.5 w-full bg-[#9A9A9A] shadow-none lg:hidden" />
        <div className="py-10 font-lato font-medium lg:absolute lg:-top-6 lg:right-[5vw] lg:flex lg:items-center">
          Need an account?
          <span
            className="cursor-pointer px-1 font-semibold text-[#6E7C99] hover:underline"
            onClick={handleShowRegister}
          >
            Sign Up
          </span>
          <button
            className="ml-5 hidden h-12 w-32 rounded border-2 border-[#6E7C99] text-[#676767] hover:bg-[#6E7C99] hover:text-[#FFFFFF] lg:flex lg:items-center lg:justify-center"
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
