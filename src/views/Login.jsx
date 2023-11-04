import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CloseIcon, EyeIcon, KeyboardCapslockIcon } from "../components/Icons";
import FacebookIconColor from "../assets/fb.png";
import GmailIcon from "../assets/gmail.png";
import Logo from "../assets/LogoDefault.png";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
  auth,
  facebookProvider,
  googleProvider,
  socialMediaAuth,
} from "../Firebase";

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};
function Login({ handleLogin, handleRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  const handleSocialClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  return (
    <div className="lg-my-0 relative z-50 flex w-screen flex-col items-center justify-center bg-white p-[5vw] pt-14 lg:w-full lg:rounded-lg lg:border lg:border-black lg:pb-3 lg:pt-0">
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer transition-all duration-500 hover:scale-110 lg:hidden"
        onClick={handleLogin}
      >
        <CloseIcon />
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:max-w-[28vw]">
        <img
          src={Logo}
          alt="Logo"
          className="w-36 py-2 lg:mt-16 lg:w-32 lg:py-0"
        />
        <div className="text-center font-lato text-sm text-[#616161]">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        <div className="py-4 font-playFair text-lg font-bold text-[#676767] lg:py-3 lg:text-base">
          Log In
        </div>
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5 lg:mt-2 lg:gap-2">
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-playFair text-base font-semibold text-[#161616] lg:text-xs"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="inputText mobileText mt-2 h-12 w-full pl-4 lg:h-10 lg:text-xs"
              placeholder="Janedoe@gmail.com"
              name="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          {/* End of Email */}
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="font-playFair text-base font-semibold text-[#161616] lg:text-xs"
            >
              Password
            </label>
            <div className="relative mt-2 h-12 rounded border-none">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="inputText mobileText absolute h-12 w-full pl-4 pr-28 lg:h-10 lg:text-xs"
                placeholder="••••••••••••"
                name="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-3 cursor-pointer lg:top-2"
                onClick={handleShowPassword}
              >
                <EyeIcon />
              </div>
              <div className="absolute right-14 top-3 cursor-pointer lg:top-2">
                {capsLockOn && <KeyboardCapslockIcon />}
              </div>
            </div>
          </div>
          {/* End of Password */}
        </form>
        {/* End of Form */}
        {/* Remember Me & Forgot Password? */}
        <div className="mt-3 flex w-full items-center justify-between lg:mt-0">
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
            <div className="font-lato text-sm text-black lg:text-xs">
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
          onClick={loginUser}
          className="my-10 h-12 w-full rounded bg-[#AD6E7A] font-lato text-lg font-bold text-[#FFFFFF] duration-300 hover:bg-[#C99CA5] hover:text-[#F0F0F0] lg:my-3 lg:mt-5 lg:h-10 lg:text-base lg:font-normal"
        >
          Log In
        </button>
        <div className="flex w-full items-center gap-5 lg:mt-5">
          <hr className="h-0.5 w-full bg-[#6E7C99] shadow-none" />
          <span className="font-playFair text-sm text-[#6E7C99]">or</span>
          <hr className="h-0.5 w-full bg-[#6E7C99]" />
        </div>
        {/* Social Media Icons */}
        <div className="flex h-28 w-full items-center justify-evenly gap-4 lg:my-5 lg:h-20">
          <div
            className="flex h-12 basis-3/4 cursor-pointer items-center justify-center gap-5 rounded border border-[#AD6E7A]"
            onClick={() => handleSocialClick(googleProvider)}
          >
            <img src={GmailIcon} alt="Gmail Logo" className="w-6" />
            <div className="font-lato text-sm">Continue with Gmail</div>
          </div>
          <div
            className="flex h-12 basis-1/4 cursor-pointer items-center justify-center rounded border border-[#AD6E7A]"
            onClick={() => handleSocialClick(facebookProvider)}
          >
            <img src={FacebookIconColor} alt="Facebook Logo" className="w-5" />
          </div>
        </div>
        {/* End of Social Media Icons */}
        <hr className="mt-12 h-0.5 w-full bg-[#F0F0F0] shadow-none lg:hidden" />
        <div className="mt-8 flex w-full justify-center font-lato font-medium lg:absolute lg:-top-4 lg:items-center lg:justify-end lg:pr-4 lg:text-xs">
          <div className="text-sm lg:text-sm">
            Need an account?
            <span
              className="ml-1 cursor-pointer font-semibold text-[#6E7C99] hover:underline lg:text-sm"
              onClick={handleRegister}
            >
              Sign Up
            </span>
          </div>
          <button
            className="ml-5 hidden h-9 w-24 items-center justify-center rounded border border-[#6e7c99] text-xs text-[#676767] shadow-md duration-300 hover:bg-[#6E7C99] hover:text-[#FFFFFF] lg:flex"
            onClick={handleLogin}
          >
            Cancel
          </button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
