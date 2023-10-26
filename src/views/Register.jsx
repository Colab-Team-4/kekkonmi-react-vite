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
function Register({ handleCloseRegister, handleShowLogin }) {
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
      className={`z-50 my-2 flex w-full flex-col items-center justify-center border border-black bg-white p-[5vw] pt-20 lg:my-0 lg:h-[600px] lg:rounded-lg lg:pt-0`}
    >
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer lg:hidden"
        onClick={handleCloseRegister}
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-16 lg:max-w-[34vw]">
        <div className="w-full py-10 font-lato font-medium lg:absolute lg:top-0 lg:mt-1 lg:flex lg:items-center lg:justify-end lg:pr-5 lg:pt-3 lg:text-xs">
          <div>
            Already have an account?{" "}
            <span
              className="ml-1 cursor-pointer font-semibold text-[#6E7C99] hover:underline"
              onClick={handleShowLogin}
            >
              Log In
            </span>
          </div>
          <button
            className="ml-5 hidden h-12 w-32 rounded border-2 border-[#6E7C99] text-[#676767] duration-300 hover:bg-[#6E7C99] hover:text-[#FFFFFF] lg:ml-3 lg:flex lg:h-8 lg:w-24 lg:items-center lg:justify-center lg:text-xs"
            onClick={handleCloseRegister}
          >
            Cancel
          </button>
        </div>
        <img src={Logo} alt="Logo" className="w-40 py-2 lg:mt-[30px] lg:w-36" />
        <div className="text-center font-lato text-[#616161] lg:text-sm">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        {/* ASK AMMARA TO REMOVE THIS */}
        {/* <div className="py-8 font-playFair text-xl font-bold text-[#676767]">
          Sign Up
        </div> */}
        {/* ASK AMMARA TO REMOVE THIS */}
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5 lg:mt-4 lg:gap-1">
          <div className="inline-flex flex-wrap justify-between gap-3 lg:gap-1">
            {contents.map((content, i) => (
              <div key={i} className={`w-full ${content.inputTextWidth}`}>
                <label
                  htmlFor={content.name}
                  className="font-playFair text-base text-[#161616] lg:text-sm lg:font-semibold"
                >
                  {content.label}
                </label>
                <input
                  id={content.name}
                  type={content.type}
                  className="inputText mobileText mt-2 h-12 w-full pl-4 lg:h-10"
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
                className="font-playFair text-base text-[#161616] lg:text-sm lg:font-semibold"
              >
                {password.label}
              </label>
              <div className="relative mt-2 h-12 rounded border-none">
                <input
                  id={password.name}
                  type={showPassword ? "text" : "password"}
                  className="inputText mobileText absolute h-12 w-full pl-4 pr-28 lg:h-10"
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
          className="my-10 h-12 w-full rounded bg-[#AD6E7A] font-lato text-xl font-bold text-[#FFFFFF] duration-300 hover:bg-[#C99CA5] hover:text-[#F0F0F0] lg:my-3 lg:h-10 lg:text-base lg:font-normal"
        >
          Sign Up
        </button>
        {/* Terms and Conditions */}
        <div className="-ml-6 flex w-full items-center justify-between gap-1 py-6 lg:py-2">
          <Checkbox
            icon={
              <CheckBoxOutlineBlankOutlinedIcon style={{ color: "#6E7C99" }} />
            }
            checkedIcon={<CheckBoxOutlinedIcon style={{ color: "#6E7C99" }} />}
          />
          <div className="font-lato text-[9px] text-[#9E9E9E]">
            By selecting "Agree and Continue," you acknowledge and accept our
            terms and conditions, granting permission to access and utilize our
            services through the mobile app.
          </div>
        </div>
        {/* End of Terms and Conditions */}
        <hr className="h-[1px] w-full bg-[#9A9A9A] lg:hidden" />
      </div>
    </div>
  );
}

export default Register;
