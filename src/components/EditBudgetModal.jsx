import { useState } from "react";
import { CloseIcon, PencilIcon, TrashIcon } from "./Icons";

function EditBudgetModal({
  isVisible,
  handleCloseModal,
  selectedEditItem,
  onDeleteRow,
}) {
  const [charCounter, setCharCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(selectedEditItem);

  function onChange(e) {
    setCharCounter(e.target.value.length);
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle saving the edited text here
    // You may want to update your data or perform an API call
    setIsEditing(false);
  };
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-fit w-full rounded-lg border-2 bg-white px-[5vw] pb-12 pt-7 shadow-md lg:left-[30%] lg:top-7 lg:w-[35vw] lg:px-[2vw] ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PencilIcon />
          <h2>Edit {selectedEditItem}</h2>
        </div>
        <div className="cursor-pointer" onClick={handleCloseModal}>
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
            className="absolute left-0 z-0 h-full w-full rounded border-2 border-gray-200 pl-[20px] pt-7 font-lato text-sm ring-0 focus:ring-0"
          />
        </div>
      </div>

      <div className="mb-24 mt-14 flex flex-col items-center">
        <div className="flex w-full flex-col gap-2">
          <h1 className="pl-2 font-lato text-xl text-[#676767]">Category</h1>
          {isEditing ? (
            <div className="flex items-center justify-between">
              <input
                className="-mt-2 ml-4 border-b-2 border-l-0 border-r-0 border-t-0 pb-0 font-playFair text-2xl font-bold focus:border-black focus:ring-0"
                type="text"
                value={editedText}
                placeholder="Enter a category"
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button
                onClick={handleSaveClick}
                className="h-8 w-24 rounded-md border-2 border-[#6e7c99] bg-[#6e7c99] text-white transition-all duration-300 hover:border-2 hover:border-[#6e7c99] hover:bg-white hover:text-[#6e7c99]"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <div
                className="cursor-pointer hover:scale-105"
                onClick={handleEditClick}
              >
                <PencilIcon />
              </div>
              <h1 className="pl-2 font-playFair text-2xl font-bold">
                {editedText}
              </h1>
            </div>
          )}
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

        <div
          onClick={() => {
            onDeleteRow(selectedEditItem);
            handleCloseModal();
          }}
          className=" mt-14 flex w-fit cursor-pointer items-center justify-center gap-2 duration-300 hover:scale-105"
        >
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
