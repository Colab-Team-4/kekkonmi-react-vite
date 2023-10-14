import { useState } from "react";
import {
  AccountCircleIcon,
  BeenHereIcon,
  BudgetPlannerIcon,
  CakeIcon,
  CastleIcon,
  CategoryIcon,
  CheckListsIcon,
  DarkModeIcon,
  GuestListIcon,
  HomeIcon,
  KeyboardVoiceIcon,
  ReviewsIcon,
  SeatingArrangementIcon,
  TimelineIcon,
  TrendingIcon,
} from "./NavMobileIcons";
import { FacebookIcon, SearchIcon } from "./Icons";

function NavModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-0 z-10 max-h-full w-[90vw] overflow-y-auto rounded-r-3xl border-2 border-black bg-white px-[2vw] md:hidden lg:hidden">
      <div className="my-7 flex w-full items-center justify-evenly rounded-md border-2 border-gray-200 p-1 py-4 shadow-md">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="basis-4/5 text-2xl focus:outline-none"
        />
        <KeyboardVoiceIcon />
      </div>

      <div className="flex flex-col gap-6 px-5 text-xl text-[#616161]">
            <HomeIcon />
        <div className="flex">
          <AccountCircleIcon />
          <h3 className="font-lato">Profile</h3>
        </div>
        <hr />
        <h3>Planning Tools</h3>
        <div className="flex">
          <CheckListsIcon />
          <h3>Checklists</h3>
        </div>
        <div className="flex">
          <BudgetPlannerIcon />
          <h3>Budget Planner</h3>
        </div>
        <div className="flex">
          <GuestListIcon />
          <h3>Guest List</h3>
        </div>
        <div className="flex">
          <TimelineIcon />
          <h3>Timeline</h3>
        </div>
        <div className="flex">
          <SeatingArrangementIcon />
          <h3>Seating Arrangement</h3>
        </div>
        <hr />
        <h3>Venues</h3>
        <div className="flex">
          <CastleIcon />
          <h3>Find a Venue</h3>
        </div>
        <div className="flex">
          <ReviewsIcon />
          <h3>Venue Revue</h3>
        </div>
        <div className="flex">
          <BeenHereIcon />
          <h3>Venue Booking</h3>
        </div>
        <hr />
        <h3>Inspiration</h3>
        <div className="flex">
          <CakeIcon />
          <h3>Real Wedding</h3>
        </div>
        <div className="flex">
          <DarkModeIcon />
          <h3>Theme Style</h3>
        </div>
        <div className="flex">
          <CategoryIcon />
          <h3>DIY Ideas</h3>
        </div>
        <div className="flex">
          <TrendingIcon />
          <h3>Trends</h3>
        </div>
      </div>
    </div>
  );
}

export default NavModal;
