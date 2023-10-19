import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { MoreIcon, PencilIcon, TrashIcon } from "../components/Icons";
import { KeyboardVoiceIcon, SearchIcon } from "../components/NavMobileIcons";
import { Chart } from "react-google-charts";

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

  function handleInputChange(item, value) {
    const newItemValues = { ...itemValues };
    newItemValues[item] = parseFloat(value) || 0;
    setItemValues(newItemValues);
  }

  function handlePaidInputChange(item, value) {
    const newPaidValues = { ...paidValues };
    newPaidValues[item] = parseFloat(value) || 0;
    setPaidValues(newPaidValues);
  }

  // Calculate the total cost and total paid
  const totalCost = Object.values(itemValues).reduce((acc, value) => acc + value, 0);
  const totalPaid = Object.values(paidValues).reduce((acc, value) => acc + value, 0);

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
    },
  };

  const contents = [
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
  ];

  return (
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
        <button className="h-14 w-48 rounded bg-[#AD6E7A] font-lato text-white">
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
            onChange={(e) => handleInputChange("Total Budget", e.target.value)}
          />
        </div>
        <div className="my-10 flex flex-col gap-10 lg:basis-1/2 lg:flex-row lg:justify-center">
          <div className="flex flex-col items-center">
            <div>
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </div>
            <h2>
              Total Cost <span className="font-normal">${totalCost.toFixed(2)}</span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Chart
                chartType="PieChart"
                data={paidData}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </div>
            <h2>
              Amount Paid <span className="font-normal">${totalPaid.toFixed(2)}</span>
            </h2>
          </div>
        </div>
      </div>
      {/* End of Pie Chart Row */}
      {/* Total Items Row */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex gap-5 pl-3 lg:basis-1/2">
          <h2>
            Total Items: <span className="text-[#616161]">10</span>
          </h2>
          <h2 className="text-3xl">|</h2>
          <h2>
            Paid Items: <span className="text-[#616161]">{Object.values(paidValues).filter(value => value > 0).length}</span>
          </h2>
        </div>
        <div className="lg:flex lg:basis-1/2 lg:items-center lg:justify-end lg:gap-4">
          <select className="h-14 w-full rounded border-2 border-gray-200 font-lato shadow-md focus:border-[#6E7C99] focus:outline-none focus:ring-0 lg:basis-1/4">
            <option className="text-[#9E9E9E]" value="">
              All Items
            </option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
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
      <div className="rounded border-2 border-gray-200 px-2 py-4">
        {contents.map((content, index) => (
          <div className="flex h-16 w-full items-center justify-between" key={index}>
            <div className="flex items-center gap-1">
              <div className={`h-12 w-1.5 ${content.color}`}></div>
              <div className="w-24 font-lato font-semibold">{content.item}</div>
            </div>
            <div className="flex gap-4">
              <input
                onChange={(e) => handleInputChange(content.item, e.target.value)}
                type="text"
                className="inputField h-12 w-24 lg:basis-5/12"
                placeholder="$10,000"
                value={itemValues[content.item]}
              />
              <input
                onChange={(e) => handlePaidInputChange(content.item, e.target.value)}
                type="text"
                className="inputField h-12 w-24"
                placeholder="$0.00"
                value={paidValues[content.item]}
              />
            </div>
            <div className="flex w-14 items-center gap-3">
              <TrashIcon />
              <MoreIcon />
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
  );
}

export default Budget;
