import { CloseIcon, EyeIcon, KeyboardCapslockIcon } from "../components/Icons";
import Logo from "../assets/LogoDefault.png";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const contents = [
  {
    label: "First Name",
    placeholder: "Jane",
    type: "text",
    name: "firstName",
    inputTextWidth: "lg:w-[48%]",
  },
  {
    label: "Last Name",
    placeholder: "Doe",
    type: "text",
    name: "lastName",
    inputTextWidth: "lg:w-[48%]",
  },
  {
    label: "Email",
    placeholder: "JaneDoe@gmail.com",
    type: "email",
    name: "email",
    inputTextWidth: "lg:w-full",
  },
];
const passwords = [
  {
    label: "Password",
    placeholder: "••••••••••••",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "••••••••••••",
    type: "password",
    name: "confirmPassword",
  },
];
function Register({ handleRegister, handleLogin }) {
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
    <div
      className={`z-50 flex w-full flex-col items-center justify-center bg-white p-[5vw] pt-14 lg:rounded-lg lg:border lg:border-black lg:pb-3 lg:pt-0`}
    >
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer lg:hidden"
        onClick={handleRegister}
      >
        <CloseIcon />
      </div>
      <div className="relative flex flex-col items-center justify-center lg:max-w-[28vw]">
        <img
          src={Logo}
          alt="Logo"
          className="w-36 py-2 lg:mt-16 lg:w-32 lg:py-0"
        />
        <div className="text-center font-lato text-sm text-[#616161]">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        <div className="py-4 font-playFair text-lg font-bold text-[#676767] lg:py-3 lg:text-base">
          Sign Up
        </div>
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5 lg:mt-2 lg:gap-2">
          <div className="inline-flex flex-wrap justify-between gap-3 lg:gap-2">
            {contents.map((content, i) => (
              <div key={i} className={`w-full ${content.inputTextWidth}`}>
                <label
                  htmlFor={content.name}
                  className="font-playFair text-base font-semibold text-[#161616] lg:text-xs"
                >
                  {content.label}
                </label>
                <input
                  id={content.name}
                  type={content.type}
                  className="inputText mobileText mt-2 h-12 w-full pl-4 lg:h-10 lg:text-xs"
                  placeholder={content.placeholder}
                  name={content.name}
                />
              </div>
            ))}
          </div>
          {passwords.map((password, i) => (
            <div key={i}>
              <label
                htmlFor={password.name}
                className="font-playFair text-base font-semibold text-[#161616] lg:text-xs"
              >
                {password.label}
              </label>
              <div className="relative mt-2 h-12 rounded border-none">
                <input
                  id={password.name}
                  type={showPassword ? "text" : "password"}
                  className="inputText mobileText absolute h-12 w-full pl-4 pr-28 lg:h-10 lg:text-xs"
                  placeholder={password.placeholder}
                  name={password.name}
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
          ))}
        </form>
        {/* End of Form */}
        <button
          type="submit"
          className="mt-7 h-12 w-full rounded bg-[#AD6E7A] font-lato text-lg font-bold tracking-wider text-[#FFFFFF] duration-300 hover:bg-[#C99CA5] hover:text-[#F0F0F0] lg:my-3 lg:mt-5 lg:h-10 lg:text-base lg:font-normal"
        >
          Sign Up
        </button>
        {/* Terms and Conditions */}
        <div className="-ml-6 flex w-full items-center justify-between gap-1 py-6 lg:mb-4 lg:py-0 lg:pt-4 ">
          <Checkbox
            icon={
              <CheckBoxOutlineBlankOutlinedIcon style={{ color: "#6E7C99" }} />
            }
            checkedIcon={<CheckBoxOutlinedIcon style={{ color: "#6E7C99" }} />}
          />
          <div className="font-lato text-[11px] text-[#9E9E9E]">
            By selecting "Agree and Continue," you acknowledge and accept our
            terms and conditions, granting permission to access and utilize our
            services through the mobile app.
          </div>
        </div>
        {/* End of Terms and Conditions */}
        <hr className="h-[1px] w-full bg-[#F0F0F0] lg:hidden" />
      </div>
      <div className="mt-8 flex w-full justify-center font-lato font-medium lg:absolute lg:-top-4 lg:items-center lg:justify-end lg:pr-4 lg:text-xs">
        <div className="text-sm">
          Already have an account?{" "}
          <span
            className="ml-1 cursor-pointer font-semibold text-[#6E7C99] hover:underline lg:text-sm"
            onClick={handleLogin}
          >
            Log In
          </span>
        </div>
        <button
          className="ml-5 hidden h-9 w-24 items-center justify-center rounded border border-[#6E7C99] text-xs text-[#676767] shadow-md duration-300 hover:bg-[#6E7C99] hover:text-[#FFFFFF] lg:flex"
          onClick={handleRegister}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Register;
