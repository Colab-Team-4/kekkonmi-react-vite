import { useState } from "react";
import PropTypes from "prop-types";
import {
  AccountCircleIcon,
  BeenHereIcon,
  BudgetPlannerIcon,
  CakeIcon,
  CastleIcon,
  CategoryIcon,
  CheckListsIcon,
  CircleGrayIcon,
  DarkModeIcon,
  GuestListIcon,
  HomeIcon,
  KeyboardVoiceIcon,
  ReviewsIcon,
  SeatingArrangementIcon,
  TimelineIcon,
  TrendingIcon,
} from "./NavMobileIcons";
import { SearchIcon } from "./Icons";
import "../index.css";

const settingsOptions = ["Notifications", "Turn Dark Mode On", "Location"];

function NavModal() {
  const [toggleSelect, setToggleSelect] = useState(false);

  const handleToggleMenu = () => {
    setToggleSelect(!toggleSelect);
  };

  return (
    <div className="fixed z-50 max-h-full w-[85vw] overflow-y-auto rounded-r-3xl bg-white px-[2vw] pb-7 md:hidden lg:hidden">
      {/* Search Bar */}
      <div className="my-7 flex w-full items-center justify-between rounded-md border-2 border-gray-200 px-5 py-4 shadow-md">
        <div className="h-7 w-10 grow-0">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border-3 w-full grow border-none font-lato text-xl focus:outline-none focus:ring-0"
        />
        <div className="h-7 w-10 grow-0">
          <KeyboardVoiceIcon />
        </div>
      </div>
      {/* End of Search Bar */}
      {/* Nav Items */}
      <div className="flex flex-col gap-6 px-5 text-xl text-[#616161]">
        <HomeIcon />
        <AccountCircleIcon />
        <hr />
        <div className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Planning tools
        </div>
        <CheckListsIcon />
        <BudgetPlannerIcon />
        <GuestListIcon />
        <TimelineIcon />
        <SeatingArrangementIcon />
        <hr />
        <div className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Venues
        </div>
        <CastleIcon />
        <ReviewsIcon />
        <BeenHereIcon />
        <hr />
        <div className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Inspiration
        </div>
        <CakeIcon />
        <DarkModeIcon />
        <CategoryIcon />
        <TrendingIcon />
        <hr />
        <div className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Settings
        </div>
        {/* Mapping */}
        {settingsOptions.map((settingsOption, i) => (
          <div className="flex" key={i}>
            <div className="flex basis-5/6 gap-4">
              <CircleGrayIcon />
              <div>{settingsOption}</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                onClick={handleToggleMenu}
              />
              <div className="peer absolute h-6 w-11 rounded-full bg-gray-200 transition-all duration-500 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white  peer-focus:outline-none peer-focus:ring-0 dark:border-gray-600"></div>
            </label>
          </div>
        ))}
        {/* End of Mapping */}
        <div className="flex">
          <div className="flex basis-5/6 gap-4">
            <CircleGrayIcon />
            <div>Log Out</div>
          </div>
        </div>
      </div>
      {/* End of Nav Items */}
    </div>
  );
}

export default NavModal;
