import { useState } from "react";
import { CloseIcon, TrashIcon } from "./Icons";

function EditBudgetModal() {
  const [charCounter, setCharCounter] = useState(0);

  function onChange(e) {
    setCharCounter(e.target.value.length);
  }
  return (
    <div className="fixed left-0 top-0 z-50 h-fit w-full rounded-lg border-2 bg-white px-[5vw] pb-12 pt-7 shadow-md lg:left-[30%] lg:top-7 lg:w-[35vw] lg:px-[2vw]">
      <div className="flex items-center justify-between">
        <h2>Edit Photographer Fee</h2>
        <div className="cursor-pointer">
          <CloseIcon />
        </div>
      </div>
      <hr className="my-11" />
      <input
        type="text"
        placeholder="Amount Paid"
        className="mb-5 h-14 w-full rounded border-2 border-gray-200 placeholder:text-[#9E9E9E] focus:border-[#6E7C99] focus:outline-none focus:ring-0"
      />
      <div className="relative flex h-14 justify-center">
        <p className="absolute left-3 top-2 z-30 text-xs">Item Cost/Estimate</p>
        <div>
          <h3 className="text-md absolute left-3 top-[26px] z-30 font-lato">
            $
          </h3>
          <input
            type="text"
            className="absolute left-0 z-0 h-full w-full rounded border-2 border-gray-200 pl-[19px] pt-7 font-lato text-sm ring-0 focus:ring-0"
          />
        </div>
      </div>

      <div className="mb-24 mt-14 flex flex-col items-center">
        <div className="w-full">
          <h1 className="pl-2 font-lato text-xl text-[#676767]">Category</h1>
          <h1 className="pl-2 font-playFair text-2xl font-bold">Photography</h1>
        </div>
        <div className="flex w-full flex-col">
          <textarea
            onChange={onChange}
            maxlength="1000"
            name=""
            id=""
            cols="30"
            rows="5"
            className="mt-6 w-full rounded border-2 border-gray-200 text-sm placeholder:text-[#9E9E9E] focus:border-[#6E7C99] focus:outline-none focus:ring-0"
            placeholder="Add notes about payments, dates, options, etc."
          ></textarea>
          <div className="mt-1 self-end font-lato text-sm text-[#616161]">
            {charCounter}/1000
          </div>
        </div>

        <div className=" mt-14 flex w-fit cursor-pointer items-center justify-center gap-2 duration-300 hover:scale-105">
          <TrashIcon />
          <div className="font-lato text-sm text-[#161616]">Remove Item</div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-4">
        <button className="btnBudgetSolid h-14 basis-1/2">Reset</button>
        <button className="btnBudgetSolid h-14 basis-1/2">Save</button>
      </div>
    </div>
  );
}

export default EditBudgetModal;
