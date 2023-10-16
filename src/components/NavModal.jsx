import { useState } from "react";
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

function NavModal({ hideNavModal }) {
  const [toggleSelect, setToggleSelect] = useState(false);

  const handleToggleMenu = (e) => {
    setToggleSelect(!toggleSelect);
    console.log(toggleSelect);
  };

  return (
    <div
      className={`fixed ${hideNavModal} z-50 max-h-full w-[85vw] overflow-y-auto rounded-r-3xl bg-white px-[2vw] pb-7 md:hidden lg:hidden`}
    >
      {/* Search Bar */}
      <div className="my-7 flex w-full items-center justify-evenly gap-2 rounded-md border-2 border-gray-200 p-1 px-3 py-4 shadow-md">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="font-lato text-xl focus:outline-none"
        />
        <KeyboardVoiceIcon />
      </div>
      {/* End of Search Bar */}
      {/* Nav Items */}
      <div className="flex flex-col gap-6 px-5 text-xl text-[#616161]">
        <HomeIcon />
        <AccountCircleIcon />
        <hr />
        <h3 className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Planning tools
        </h3>
        <CheckListsIcon />
        <BudgetPlannerIcon />
        <GuestListIcon />
        <TimelineIcon />
        <SeatingArrangementIcon />
        <hr />
        <h3 className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Venues
        </h3>
        <CastleIcon />
        <ReviewsIcon />
        <BeenHereIcon />
        <hr />
        <h3 className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Inspiration
        </h3>
        <CakeIcon />
        <DarkModeIcon />
        <CategoryIcon />
        <TrendingIcon />
        <hr />
        <h3 className="font-playFair text-2xl font-bold tracking-tight text-[#161616]">
          Settings
        </h3>
        {/* Mapping */}
        {settingsOptions.map((settingsOption, i) => (
          <div className="flex" key={i}>
            <div className="flex basis-5/6 gap-4">
              <CircleGrayIcon />
              <h3>{settingsOption}</h3>
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
            <h3>Log Out</h3>
          </div>
        </div>
      </div>
      {/* End of Nav Items */}
    </div>
  );
}

export default NavModal;
