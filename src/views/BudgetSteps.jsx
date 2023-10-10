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
  const [objectCover, setObjectCover] = useState("object-bottom")

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
  }
  return (
    <div className="mt-16 flex min-h-[93vh] justify-center pl-[5vw] text-[#616161]">
      {/* Left Side */}
      <div className="order-1 flex basis-1/2 flex-col gap-12">
        <h2 className="mt-7 font-playFair text-[34px] font-medium">
          Step {step} of 2
        </h2>
        {/* Progress bar  */}
        <div className="mb-4 h-1.5 w-[500px] self-center rounded-full bg-gray-200 dark:bg-gray-200">
          <div
            className={`h-1.5 ${progress} rounded-full bg-[#6E7C99] dark:bg-[#6E7C99]`}
          ></div>
        </div>
        {/* End of Progress bar  */}
        {/* Input Box */}
        <div className="flex flex-col gap-24">
          <h2 className="font-playFair text-[34px] font-medium">{header}</h2>
          <div className="flex flex-col gap-44">
            <div className="flex flex-col gap-16">
              {/* First Line */}
              <div className="flex gap-10">
                <h3 className="font-lato text-[22px]">{inputFirst}</h3>
                <div>
                  <input
                    type="text"
                    className="h-[40px] w-[355px] rounded pl-4 font-lato text-xl ring-1 ring-[#9E9E9E]"
                    placeholder="100"
                  />
                  <h4 className="pl-4 pt-1 font-lato text-base font-normal">
                    {subFirst}
                  </h4>
                </div>
              </div>
              {/* End of First Line */}
              {/* Second Line */}
              <div className="flex gap-10">
                <h3 className="font-lato text-[22px]">{inputSecond}</h3>
                <div>
                  <input
                    type="text"
                    className="h-[40px] w-[355px] rounded pl-4 font-lato text-xl ring-1 ring-[#9E9E9E]"
                    placeholder="10,000"
                  />
                  <h4 className="pl-4 pt-1 font-lato text-base font-normal">
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
                className="h-[70px] w-[314px] bg-[#F4E2E6] font-lato text-xl font-bold"
              >
                Save
              </button>
              <button
                type="button"
                className="font-lato text-xl"
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
      <div className="order-2 basis-1/2">
        <img className={`h-full w-full object-cover ${objectCover}`} src={image} alt="" />
      </div>
    </div>
  );
}

export default BudgetSteps;
