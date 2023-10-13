import { useState } from "react";

function BudgetSteps() {
  const [step, setStep] = useState("1");
  const [progress, setProgress] = useState("w-1/2");
  const [header, setHeader] = useState(
    "Do your know your estimated guest count and total budget?",
  );
  const [inputFirst, setInputFirst] = useState("We plan to invite");
  const [inputSecond, setInputSecond] = useState("and spend about");
  const [subFirst, setSubFirst] = useState("Numbers of your guest");
  const [subSecond, setSubSecond] = useState("Budget Range");
  const [image, setImage] = useState("/src/assets/budget1.jpg");
  const [objectCover, setObjectCover] = useState("object-bottom");
  const [placeHolderFirst, setPlaceHolderFirst] = useState("100");
  const [placeHolderSecond, setPlaceHolderSecond] = useState("$10,000");
  const [datePicker, setDatePicker] = useState("number");
  const [budgetRange, setBudgetRange] = useState("number");

  function nextPage() {
    setStep("2");
    setProgress("w-full");
    setHeader("What's your estimated date of marriage and city in mind?");
    setInputFirst("We are planning to get married on");
    setInputSecond("and we are thinking about the city");
    setSubFirst("Enter the date");
    setSubSecond("Type the name of the city");
    setImage("/src/assets/budget2.jpg");
    setObjectCover("object-center");
    setPlaceHolderSecond("NY");
    setDatePicker("date");
    setBudgetRange("text");
  }
  return (
    <div className="mt-20 flex flex-col justify-center px-5 text-[#616161] lg:mt-16 lg:min-h-[93vh] lg:flex-row lg:pl-[5vw] lg:pr-0 ">
      {/* Left Side */}
      <div className="order-2 flex basis-1/2 flex-col gap-10 lg:order-1 lg:gap-12">
        <h2 className="mt-7 font-playFair text-[34px] font-medium">
          Step {step} of 2
        </h2>
        {/* Progress bar  */}
        <div className="mb-4 h-3 w-full self-center rounded-full bg-gray-200 dark:bg-gray-200 lg:w-[500px]">
          <div
            className={`h-3 ${progress} rounded-full bg-[#6E7C99] transition-all duration-500 dark:bg-[#6E7C99]`}
          ></div>
        </div>
        {/* End of Progress bar  */}
        {/* image on mobile */}
        <img
          className={`h-[450px] w-[450px] object-cover lg:hidden ${objectCover}`}
          src={image}
          alt=""
        />
        {/* end of image on mobile */}
        {/* Input Box */}
        <div className="flex flex-col gap-12 lg:gap-24 ">
          <h2 className="font-playFair text-3xl font-medium lg:text-[34px]">
            {header}
          </h2>
          <div className="mb-12 flex flex-col gap-20 lg:gap-44">
            <div className="flex flex-col gap-9 lg:gap-16">
              {/* First Line */}
              <div className="flex justify-between lg:justify-normal lg:gap-10">
                <h3 className="mt-3 font-lato text-[22px] lg:mt-0">
                  {inputFirst}
                </h3>
                <div>
                  <input
                    type={datePicker}
                    className="h-14 w-52 rounded px-4 font-lato text-xl ring-1 ring-[#9E9E9E] lg:h-[40px] lg:w-[355px]"
                    placeholder={placeHolderFirst}
                  />
                  <h4 className="pl-4 pt-1 font-lato text-sm font-normal lg:text-base">
                    {subFirst}
                  </h4>
                </div>
              </div>
              {/* End of First Line */}
              {/* Second Line */}
              <div className="flex justify-between lg:justify-normal lg:gap-10">
                <h3 className="mt-3 font-lato text-[22px] lg:mt-0">
                  {inputSecond}
                </h3>
                <div>
                  <input
                    type={budgetRange}
                    className="h-14 w-52 rounded pl-4 pr-3 font-lato text-xl ring-1 ring-[#9E9E9E] lg:h-[40px] lg:w-[355px]"
                    placeholder={placeHolderSecond}
                  />
                  <h4 className="pl-4 pt-1 font-lato text-sm font-normal lg:text-base">
                    {subSecond}
                  </h4>
                </div>
              </div>
              {/* End of Second Line */}
            </div>
            {/* Buttons */}
            <div className="flex gap-[91px]">
              <button
                type="button"
                className="btnSolid h-12 w-48 rounded bg-[#AD6E7A] font-lato text-sm font-medium text-white lg:h-[70px] lg:w-[314px] lg:bg-[#F4E2E6] lg:text-xl lg:font-bold lg:text-[#616161]"
              >
                Save
              </button>
              <button
                type="button"
                className="text font-lato lg:text-xl"
                onClick={nextPage}
              >
                Skip this step
              </button>
            </div>
            {/* End of Buttons */}
          </div>
        </div>
        {/* End Input Box */}
      </div>
      {/* End of Left Side */}
      <div className="order-1 basis-1/2 lg:order-2">
        <img
          className={`hidden h-full w-full object-cover lg:flex ${objectCover}`}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}

export default BudgetSteps;
