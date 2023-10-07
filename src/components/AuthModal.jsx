function AuthModal() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white py-12 sm:px-6 lg:px-8">
      <div>
        <div className="flex flex-col gap-12 bg-white px-6 py-12">
          {/* Logo */}
          <div className="">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Matrimoni
            </h2>
          </div>
          {/* End of Logo */}
          {/* Email until Terms and Condition */}
          <div className="flex flex-col gap-14 mb-16">
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
                    className="block w-full h-12 pl-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="***********"
                    className="block w-full h-12 pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
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
                  className="flex w-full btnSolid h-12 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            <hr className="border-t-2"/>
            <h3 className="font-lato font-normal text-center">
              Already have an account?{" "}
              <span className="text-blue-500">Log In</span>
            </h3>
          </div>
          {/* End of Bottom Text */}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
