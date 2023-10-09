import { CloseIcon, KeyboardCapslock, Logo1, VisibilityOff } from "./Icons";

function AuthModal() {
  const closeIcon = () => {
    let registerModal = document.getElementById("registerModal");
    registerModal.classList.add("hidden");
  };

  function showPassword() {
    let password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else if (password.type === "text") {
      password.type = "password";
    }
  }

  document.addEventListener("keydown", function (event) {
    let capslockPassword = document.getElementById("capslockPassword");
    let capsIsOn = event.getModifierState("CapsLock");
    capsIsOn
      ? capslockPassword.classList.remove("hidden")
      : capslockPassword.classList.add("hidden");
  });

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white py-12 sm:px-6 lg:px-8">
      <div>
        <div className="flex flex-col bg-white px-6">
          {/* Close Icon */}
          <div
            className="absolute right-8 top-7 cursor-pointer"
            id="closeIcon"
            onClick={closeIcon}
          >
            <CloseIcon />
          </div>
          {/* End of Close Icon */}
          {/* Logo */}
          <div className="flex w-52 self-center">
            <Logo1 />
          </div>
          {/* End of Logo */}
          {/* Email until Terms and Condition */}
          <div className="mb-20 flex flex-col gap-14">
            {/* Form */}
            <form action="#" method="POST" className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Janedoe@gmail.com"
                    className="block h-12 w-full rounded-md  border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="••••••••••"
                    className="block h-12 w-full rounded-md border-0 py-1.5 pl-3 pr-32 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div
                    className="absolute right-16 top-2.5 w-7"
                    id="capslockPassword"
                  >
                    <KeyboardCapslock />
                  </div>
                  <div
                    id="eyeIcon"
                    className="absolute right-5 top-2.5 w-7 cursor-pointer"
                    onClick={showPassword}
                  >
                    <VisibilityOff />
                  </div>
                </div>
              </div>
              {/* End of Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block text-sm leading-6 text-gray-900"
                  >
                    Remember me?
                  </label>
                </div>
                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btnSolid flex h-12 w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* End Form */}
            {/* Terms and Condition */}
            <div className="flex gap-5">
              <input type="checkbox" />
              <p className="text-xs">
                By selecting "Agree and Continue," you acknowledge and accept
                our terms and conditions, granting permission to access and
                utilize our services through the mobile app.
              </p>
            </div>
            {/* End of Terms and Condition */}
          </div>
          {/* End of Email until Terms and Condition */}
          {/* Bottom Text */}
          <div className="flex flex-col justify-center gap-14">
            <hr className="border-t-2" />
            <h3 className="text-center font-lato font-normal">
              Already have an account?{" "}
              <span className="text-blue-500">
                <a href="#">Log In</a>
              </span>
            </h3>
          </div>
          {/* End of Bottom Text */}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
