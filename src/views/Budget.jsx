import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Ellipse, MoreIcon, PencilIcon, TrashIcon } from "../components/Icons";
import { KeyboardVoiceIcon, SearchIcon } from "../components/NavMobileIcons";
import { Chart } from "react-google-charts";
import EditBudgetModal from "../components/EditBudgetModal";

function Budget() {
  const initialItemValues = {
    Venue: 0,
    "Ceremony Location Fee": 0,
    Photographer: 0,
    "Food & Service": 0,
    "Reception Music": 0,
    Videographer: 0,
    "Cake(s) & Cutting": 0,
    "Ceremony Musicians": 0,
    Makeup: 0,
    Dress: 0,
  };

  const [itemValues, setItemValues] = useState(initialItemValues);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [editedCategoryName, setEditedCategoryName] = useState("");

  const handleEditItem = (item) => {
    setItemToEdit(item);
    setIsModalVisible(true);
    setSelectedItem(item);
  };

  const initialPaidValues = {
    Venue: 0,
    "Ceremony Location Fee": 0,
    Photographer: 0,
    "Food & Service": 0,
    "Reception Music": 0,
    Videographer: 0,
    "Cake(s) & Cutting": 0,
    "Ceremony Musicians": 0,
    Makeup: 0,
    Dress: 0,
  };

  const [paidValues, setPaidValues] = useState(initialPaidValues);
  const [inputValue, setInputValue] = useState("$");

  function handleInputChange2(event) {
    let value = event.target.value;

    // Remove non-numeric characters, except the decimal point
    value = value.replace(/[^0-9.]/g, "");

    // Ensure there's only one decimal point
    const parts = value.split(".");
    if (parts.length > 2) {
      parts.pop();
      value = parts.join(".");
    }

    // Format the number with commas
    const formattedValue = "$" + value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setInputValue(formattedValue);
  }

  function handleInputChange(item, value) {
    // Define an array of items that should be excluded from the total cost
    const itemsToExclude = ["Total Budget", "OtherItemToExclude"];

    const newItemValues = { ...itemValues };
    newItemValues[item] = parseFloat(value) || 0;

    // Check if the item is in the itemsToExclude array
    if (itemsToExclude.includes(item)) {
      // If the item is in the exclusion list, reset its value to 0
      newItemValues[item] = 0;
    }

    setItemValues(newItemValues);
  }

  function handlePaidInputChange(item, value) {
    const newPaidValues = { ...paidValues };
    newPaidValues[item] = parseFloat(value) || 0;
    setPaidValues(newPaidValues);
  }

  // Calculate the total cost and total paid
  const totalCost = Object.values(itemValues).reduce(
    (acc, value) => acc + value,
    0,
  );
  const totalPaid = Object.values(paidValues).reduce(
    (acc, value) => acc + value,
    0,
  );

  const data = [
    ["Category", "Cost"],
    ...Object.entries(itemValues).map(([item, cost]) => [item, cost]),
  ];

  const paidData = [
    ["Category", "Paid"],
    ...Object.entries(paidValues).map(([item, cost]) => [item, cost]),
  ];

  const options = {
    pieSliceTextStyle: {
      color: "transparent",
    },
    legend: "none",
    pieSliceBorderColor: "transparent",
    slices: {
      0: { color: "#DDAFB8" },
      1: { color: "#BFCAE0" },
      2: { color: "#E8E59C" },
      3: { color: "#9FD99D" },
      4: { color: "#E5BA93" },
      5: { color: "#828CE0" },
      6: { color: "#EC8DE3" },
      7: { color: "#8FE5B1" },
      8: { color: "#F2F56C" },
      9: { color: "#A184F3" },
      10: { color: "#020617" },
      11: { color: "#f87171" },
      12: { color: "#4ade80" },
      13: { color: "#facc15" },
      14: { color: "#fb7185" },
      15: { color: "#f472b6" },
      16: { color: "#e879f9" },
      17: { color: "#c084fc" },
      18: { color: "#a78bfa" },
      19: { color: "#818cf8" },
    },
  };
  const moreColors = [
    "bg-black",
    "bg-red-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-rose-400",
    "bg-pink-400",
    "bg-fuchsia-400",
    "bg-purple-400",
    "bg-violet-400",
    "bg-indigo-400",
  ];
  const [counter, setCounter] = useState(0);
  const addNewItem = () => {
    const newItem = {
      color: `${moreColors[counter]}`, // Replace with the desired color
      item: "Other", // Replace with the desired item name
    };

    // Update the contents state by adding the new item
    setContents([...contents, newItem]);

    // Increment the total items count
    setTotalItems(totalItems + 1);
    setCounter(counter + 1);
  };

  const [contents, setContents] = useState([
    {
      color: "bg-[#DDAFB8]",
      item: "Venue",
    },
    {
      color: "bg-[#BFCAE0]",
      item: "Ceremony Location Fee",
    },
    {
      color: "bg-[#E8E59C]",
      item: "Photographer",
    },
    {
      color: "bg-[#9FD99D]",
      item: "Food & Service",
    },
    {
      color: "bg-[#E5BA93]",
      item: "Reception Music",
    },
    {
      color: "bg-[#828CE0]",
      item: "Videographer",
    },
    {
      color: "bg-[#EC8DE3]",
      item: "Cake(s) & Cutting",
    },
    {
      color: "bg-[#8FE5B1]",
      item: "Ceremony Musicians",
    },
    {
      color: "bg-[#F2F56C]",
      item: "Makeup",
    },
    {
      color: "bg-[#A184F3]",
      item: "Dress",
    },
  ]);

  // State to keep track of the total items count
  const [totalItems, setTotalItems] = useState(
    Object.keys(initialItemValues).length,
  );

  // Function to delete a row by item name
  const deleteRow = (item) => {
    // Create a new contents array without the item to be deleted
    const newContents = contents.filter((content) => content.item !== item);
    setContents(newContents);

    // Decrement the total items count
    setTotalItems(totalItems - 1);
  };

  // Function to hide a row by item name
  const hideRow = (item) => {
    const row = document.getElementById(item);
    if (row) {
      row.style.display = "none";
    }
  };


  return (
    <div>
      <EditBudgetModal
        selectedEditItem={selectedItem}
        isVisible={isModalVisible}
        itemToEdit={itemToEdit}
        handleCloseModal={() => {
          setIsModalVisible(false);
          setItemToEdit(null);
        }}
        onDeleteRow={deleteRow}
      />
      <div className="px-[5vw] lg:px-[2vw]">
        <Breadcrumb />
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-4">
            <h1 className="text-2xl font-bold lg:text-5xl">
              Your Wedding Budget
            </h1>
            <p className="lg:text-1xl w-80 text-lg lg:w-full">
              Keep track of your spending and total budget throughout planning
            </p>
          </div>
          <button
            className="h-14 w-48 rounded bg-[#AD6E7A] font-lato text-white"
            onClick={addNewItem}
          >
            Add a Budget Item
          </button>
        </div>
        <hr className="my-10 lg:hidden" />
        {/* Pie Chart Row */}
        <div className="lg:flex">
          <div className="flex items-center justify-center lg:basis-1/2 lg:justify-end lg:pr-24">
            <PencilIcon />
            <h1 className="mx-2 text-2xl font-bold">Budget:</h1>
            <input
              type="text"
              className="ml-4 h-12 w-40 rounded border-2 border-gray-200 font-lato shadow-md focus:border-[#6E7C99] lg:h-14 lg:w-80"
              placeholder="$25,000"
              onChange={handleInputChange2}
              value={inputValue}
            />
          </div>
          <div className="my-10 flex flex-col gap-10 lg:basis-1/2 lg:flex-row lg:justify-center">
            <div className="z-10 flex flex-col items-center">
              {totalCost === 0 ? (
                <div className="relative flex h-[400px] w-[400px] items-center justify-center">
                  <div className=" absolute z-50">
                    <div className="h-[246px] w-[246px] rounded-full bg-[#F0F0F0]"></div>
                  </div>
                  <div className="absolute">
                    <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </div>
              ) : (
                <div className="relative flex h-[400px] w-[400px] items-center justify-center">
                  <div className=" invisible absolute">
                    <div className="h-[246px] w-[246px] rounded-full bg-[#F0F0F0]"></div>
                  </div>
                  <div className="absolute ">
                    <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </div>
              )}
              <h2>
                Total Cost{" "}
                <span className="font-normal">${totalCost.toFixed(2)}</span>
              </h2>
            </div>
            <div className="flex flex-col items-center">
              {totalPaid === 0 ? (
                <div className="relative flex h-[400px] w-[400px] items-center justify-center">
                  <div className=" absolute z-10">
                    <div className="h-[249px] w-[249px] rounded-full bg-[#F0F0F0]"></div>
                  </div>
                  <div className="absolute">
                    <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </div>
              ) : (
                <div className="relative flex h-[400px] w-[400px] items-center justify-center">
                  <div className=" invisible absolute">
                    <div className="h-[246px] w-[246px] rounded-full bg-[#F0F0F0]"></div>
                  </div>
                  <div className="absolute ">
                    <Chart
                      chartType="PieChart"
                      data={paidData}
                      options={options}
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </div>
              )}
              <h2>
                Amount Paid{" "}
                <span className="font-normal">${totalPaid.toFixed(2)}</span>
              </h2>
            </div>
          </div>
        </div>
        {/* End of Pie Chart Row */}
        {/* Total Items Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-5 pl-3 lg:basis-1/2">
            <h2>
              Total Items: <span className="text-[#616161]">{totalItems}</span>
            </h2>
            <h2 className="text-3xl">|</h2>
            <h2>
              Paid Items:{" "}
              <span className="text-[#616161]">
                {Object.values(paidValues).filter((value) => value > 0).length}
              </span>
            </h2>
          </div>
          <div className="lg:flex lg:basis-1/2 lg:items-center lg:justify-end lg:gap-4">
            <select className="h-14 w-full rounded border-2 border-gray-200 font-lato shadow-md focus:border-[#6E7C99] focus:outline-none focus:ring-0 lg:basis-1/4">
              <option className="text-[#9E9E9E]" value="">
                All Items
              </option>
              <option value="Full Paid Items">Full Paid Items</option>
              <option value="Unpaid Items">Unpaid Items</option>
            </select>
            <div className="my-7 flex h-14 w-full items-center justify-between rounded-md border-2 border-gray-200 px-2 py-4 shadow-md lg:basis-5/12">
              <div className="h-7 w-10 grow-0">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="search items"
                className="border-3 w-full grow border-none font-lato text-xl focus:outline-none focus:ring-0"
              />
              <div className="h-7 w-10 grow-0">
                <KeyboardVoiceIcon />
              </div>
            </div>
          </div>
        </div>
        {/* End of Total Items Row */}
        {/* Budget Inputs */}
        <div className="rounded border-2 border-gray-200 px-3 py-4">
          <div className="mb-7 hidden gap-6 font-lato text-[#616161] lg:grid lg:grid-cols-11">
            <div className="col-span-4 text-start">Item</div>
            <div className="col-span-3 text-start">Cost/Estimate</div>
            <div className="col-span-3 text-start">Paid</div>
            <div className="col-span-2"></div>
          </div>
          {contents.map((content, index) => (
            <div
              className="grid h-16 w-full grid-cols-8 gap-4 lg:grid-cols-11"
              key={index}
              id={content.item}
            >
              <div className="col-span-3 flex items-center gap-1 lg:col-span-4">
                <div className={`h-12 w-1.5 ${content.color} rounded`}></div>
                <div className="w-full break-words font-lato text-sm font-semibold lg:text-lg">
                  {content.item}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-3">
                <input
                  onChange={(e) =>
                    handleInputChange(content.item, e.target.value)
                  }
                  type="text"
                  className="inputField h-12 w-full lg:basis-5/12"
                  placeholder="$0.00"
                  value={itemValues["$" + content.item]}
                />
              </div>
              <div className="col-span-2 w-full lg:col-span-3">
                <input
                  onChange={(e) =>
                    handlePaidInputChange(content.item, e.target.value)
                  }
                  type="text"
                  className="inputField h-12 w-full"
                  placeholder="$0.00"
                  value={paidValues["$" + content.item]}
                />
              </div>
              <div className="col-span-1 flex w-full items-center justify-center gap-2">
                <div
                  className="cursor-pointer duration-300 hover:scale-105"
                  onClick={() => {
                    deleteRow(content.item);
                    hideRow(content.item);
                  }}
                >
                  <TrashIcon />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleEditItem(content.item)}
                >
                  <MoreIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End of Budget Inputs */}
        <div className="mb-28 mt-10 flex justify-center">
          <button className="h-14 w-48 rounded bg-[#AD6E7A] font-lato text-white">
            Save Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Budget;
