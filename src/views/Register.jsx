import { CloseIcon, EyeIcon, KeyboardCapslockIcon } from "../components/Icons";
import Logo from "../assets/LogoDefault.png";
import { useState, useEffect } from "react";

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
    type: "password",
    name: "password",
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
function Register({ handleCloseRegister }) {
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
      className={`relative z-50 flex w-full flex-col items-center justify-center bg-white p-[5vw] pt-20 lg:pt-3`}
    >
      <div
        className="absolute right-0 top-8 mr-6 cursor-pointer"
        onClick={handleCloseRegister}
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col items-center justify-center lg:max-w-[30vw]">
        <img src={Logo} alt="Logo" className="w-40 py-2" />
        <div className="font-lato text-[#616161]">
          Crafting Love Stories, One Perfect Day at a Time
        </div>
        <div className="py-8 font-playFair text-xl font-bold text-[#676767]">
          Sign Up
        </div>
        {/* Form */}
        <form action="" className="flex w-full flex-col gap-5">
          <div className="inline-flex flex-wrap justify-between gap-3">
            {contents.map((content, i) => (
              <div key={i} className={`w-full ${content.inputTextWidth}`}>
                <label
                  htmlFor={content.name}
                  className="font-playFair text-base text-[#161616]"
                >
                  {content.label}
                </label>
                <input
                  type={content.type}
                  className="text mt-2 h-12 w-full rounded border-2 border-[#9E9E9E] px-2 focus:border-[#6E7C99] focus:outline-none"
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
                className="font-playFair text-base text-[#161616]"
              >
                {password.label}
              </label>
              <div className="relative mt-2 h-12 rounded border-2 border-[#9E9E9E] focus:border-[#6E7C99]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="absolute h-10 w-full border-[#9E9E9E] pl-2 pr-28 focus:border-[#6E7C99] focus:outline-none"
                  placeholder={password.placeholder}
                  name={password.name}
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
          ))}
        </form>
        {/* End of Form */}
        <button
          type="submit"
          className="my-10 h-12 w-full rounded bg-[#AD6E7A] font-lato text-xl font-bold text-[#FFFFFF] hover:bg-[#C99CA5] hover:text-[#F0F0F0]"
        >
          Sign Up
        </button>
        {/* Terms and Conditions */}
        <div className="flex gap-8 px-2 py-6">
          <input type="checkbox" className="border-[#6E7C99] text-indigo-600" />
          <div className="font-lato text-sm text-[#9E9E9E]">
            By selecting "Agree and Continue," you acknowledge and accept our
            terms and conditions, granting permission to access and utilize our
            services through the mobile app.
          </div>
        </div>
        {/* End of Terms and Conditions */}
        <hr className="h-[1px] w-full bg-[#9A9A9A]" />
        <div className="py-10 font-lato font-medium">
          Already have an account?{" "}
          <span className="text-[#6E7C99]">Log In</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
