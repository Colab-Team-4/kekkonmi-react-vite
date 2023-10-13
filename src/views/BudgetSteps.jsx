import React, { useState } from "react";

const contents = [
  {
    step: "1",
    progress: "w-1/2",
    heading: "Do you know your estimated guest count and total budget?",
    inputLabels: ["We plan to invite", "and spend about"],
    inputType: ["number", "number"],
    placeholders: ["100", "$10,000"],
    subtext: ["Guest count", "Budget range"],
    bgImg: "/src/assets/budget1.jpg",
    imgPosition: "object-bottom",
  },
  {
    step: "2",
    progress: "w-full",
    heading: "What's your estimated date of marriage and city in mind?",
    inputLabels: [
      "We are planning to get married on",
      "and we are thinking about the city",
    ],
    inputType: ["date", "text"],
    placeholders: ["mm/dd/yyyy", "New York"],
    subtext: ["Enter the date", "Type the name of the city"],
    bgImg: "/src/assets/budget2.jpg",
    imgPosition: "object-center",
  },
];

function BudgetSteps() {
  const [counter, setCounter] = useState(0);

  const handleNextStep = () => {
    setCounter(1);
  };
  const content = contents[counter]; // Render only the first item

  return (
    <div className="mt-20 flex flex-col justify-center px-5 text-[#616161] lg:mt-16 lg:min-h-[93vh] lg:flex-row lg:pl-[5vw] lg:pr-0">
      {/* Left Side */}
      <div className="order-2 flex basis-1/2 flex-col gap-10 lg:order-1 lg:gap-12">
        <h2 className="mt-7 font-playFair text-[34px] font-medium">
          Step {content.step} of 2
        </h2>
        {/* Progress bar  */}
        <div className="mb-4 h-3 w-full self-center rounded-full bg-gray-200 dark:bg-gray-200 lg:w-[500px]">
          <div
            className={`h-3 ${content.progress} rounded-full bg-[#6E7C99] transition-all duration-500 dark:bg-[#6E7C99]`}
          ></div>
        </div>
        {/* End of Progress bar  */}
        {/* image on mobile */}
        <img
          className={`h-[450px] w-[450px] object-cover lg:hidden ${content.imgPosition}`}
          src={content.bgImg}
          alt=""
        />
        {/* end of image on mobile */}
        {/* Input Box */}
        <div className="flex flex-col gap-12 lg:gap-24 ">
          <h2 className="font-playFair text-3xl font-medium lg:text-[34px]">
            {content.heading}
          </h2>
          <div className="mb-12 flex flex-col gap-20 lg:gap-44">
            <div className="flex flex-col gap-9 lg:gap-16">
              {/* Loop through inputLabels array and generate input fields */}
              {content.inputLabels.map((label, index) => (
                <div
                  key={index}
                  className="flex justify-between lg:justify-normal lg:gap-10"
                >
                  <h3 className="mt-3 font-lato text-[22px] lg:mt-0">
                    {label}
                  </h3>
                  <div>
                    <input
                      type={content.inputType[index]}
                      className="h-14 w-52 rounded px-4 font-lato text-xl ring-1 ring-[#9E9E9E] lg:h-[40px] lg:w-[355px]"
                      placeholder={content.placeholders[index]}
                    />
                    <h4 className="pl-4 pt-1 font-lato text-sm font-normal lg:text-base">
                      {content.subtext[index]}
                    </h4>
                  </div>
                </div>
              ))}
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
                onClick={handleNextStep}
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
          className={`hidden h-full w-full object-cover lg:flex ${content.imgPosition}`}
          src={content.bgImg}
          alt=""
        />
      </div>
    </div>
  );
}

export default BudgetSteps;
