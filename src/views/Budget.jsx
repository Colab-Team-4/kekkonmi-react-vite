import Breadcrumb from "../components/Breadcrumb";
import { MoreIcon, PencilIcon, TrashIcon } from "../components/Icons";
import { KeyboardVoiceIcon, SearchIcon } from "../components/NavMobileIcons";

const contents = [
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
  {
    color: "bg-[#DDAFB8]",
    item: "Venue",
    cost: "$10,000",
    paid: "$0.00",
  },
];

function Budget() {
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
          />
        </div>
        <div className="my-10 flex flex-col gap-10 lg:basis-1/2 lg:flex-row lg:justify-center lg:gap-40">
          <div className="flex flex-col items-center gap-6">
            <img src="/public/ellipse.svg" alt="" />
            <h2>
              Total Cost <span className="font-normal">$15,000</span>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img src="/public/ellipse.svg" alt="" />
            <h2>
              Amount Paid <span className="font-normal">$0.00</span>
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
            Paid Items: <span className="text-[#616161]">0</span>
          </h2>
        </div>
        <div className="lg:flex lg:basis-1/2 lg:items-center lg:justify-end  lg:gap-4">
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
        {contents.map((content, i) => (
          <div className="flex h-16 w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="h-12 w-1.5 rounded bg-[#DDAFB8]"></div>
              <div className="font-lato font-semibold ">Venue</div>
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="inputField w-24 h-12 lg:basis-5/12"
                placeholder="$10,000"
              />
              <input
                type="text"
                className="inputField w-24 h-12"
                placeholder="$0.00"
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
      <div className="flex justify-center mt-10 mb-28">
      <button className="h-14 w-48 rounded bg-[#AD6E7A] font-lato text-white">
        Save Search
      </button>
      </div>
    </div>
  );
}

export default Budget;
