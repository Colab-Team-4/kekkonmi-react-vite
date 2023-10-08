import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { SearchIcon, FilterIcon } from "./Icons";
import venues from "../data/venueData.json";
import placeholderVenue from "../assets/placeholderVenue.jpg";
import { Rating } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

SearchBar.propTypes = {
  setFilteredVenues: PropTypes.func.isRequired,
};
function SearchBar({ setFilteredVenues }) {
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;

    const irrelevantWords = ["venues", "in", "wedding", "venue"];
    const relevantQuery = query
      .split(" ")
      .filter((word) => !irrelevantWords.includes(word.toLowerCase()))
      .join(" ");

    const filtered = venues.filter((venue) =>
      venue.location.toLowerCase().includes(relevantQuery.toLowerCase()),
    );

    setFilteredVenues(filtered);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 flex flex-col justify-evenly gap-10 lg:flex-row lg:gap-6"
    >
      <div className="flex justify-center gap-5">
        <div className="relative flex flex-col items-start">
          <div className="absolute left-0 flex h-full items-center pl-3">
            <SearchIcon />
          </div>
          <input
            ref={searchRef}
            type="search"
            id="venueSearch"
            placeholder="Venues in New York"
            className="inputText mobileText py-3 pl-16 pr-2 lg:w-[50.67rem] lg:text-[22px]"
          />
        </div>
        <div className="relative md:hidden">
          <button className="btnSolid mobileText btnWeightNormal group flex h-full w-24 items-center pl-10 lg:text-[22px]">
            <div className="absolute left-0 pl-3">
              <FilterIcon className="fill-current text-white group-hover:text-black" />
            </div>
            Filters
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-4 lg:gap-6">
        <button
          className="btnSolid mobileText w-40 lg:w-60 lg:text-xl"
          type="submit"
        >
          Search
        </button>
        <button className="btnOutline mobileText w-40 py-2 lg:w-60 lg:text-xl">
          Save Search
        </button>
      </div>
    </form>
  );
}

FilterButtons.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
};
function FilterButtons({ filteredVenues }) {
  return (
    <div className="-mt-4 mb-14 flex flex-wrap gap-6 lg:w-[52rem]">
      <button className="btnOutline btnWeightNormal w-fit px-2 py-3 lg:px-8">
        Outdoor Venues
      </button>
      <button className="btnOutline btnWeightNormal w-fit px-2 py-3 lg:px-8">
        $ Price
      </button>
      <button className="btnOutline btnWeightNormal w-fit px-2 py-3 lg:px-8">
        Support Diversity
      </button>
      <button className="btnOutline btnWeightNormal w-fit px-2 py-3 lg:px-8">
        More Filters
      </button>
    </div>
  );
}

VenueDisplay.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
};
function VenueDisplay({ filteredVenues }) {
  return (
    <div className="lg:grid-template-rows:[min-content min-content] lg:grid-template-columns:[100% 100% auto] grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3 lg:grid-rows-2">
      {filteredVenues.length === 0 ? (
        <div className="col-span-3 row-span-6 place-self-center text-center text-[#9E9E9E] lg:text-lg">
          Sorry, no venues here; let&apos;s refine your search together.
        </div>
      ) : (
        <>
          {filteredVenues.slice(0, 4).map((venue, i) => (
            <div
              className={`relative flex w-full flex-col gap-6 ${
                i === 2 && filteredVenues.length === 3
                  ? "lg:col-start-3"
                  : i >= 2
                  ? "lg:row-start-2"
                  : ""
              }`}
              key={i}
            >
              <img
                className="aspect-square w-full rounded-md object-cover"
                src={venue.coverUrl}
                alt={venue.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderVenue;
                }}
              />
              <div className="flex items-center justify-between text-[16px] text-[#4B4B4B]">
                {venue.location}
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <h2 className="-mt-5">{venue.name}</h2>
              <p className="text-sm text-[#616161]">{venue.description}</p>
              <p className="text-sm text-[#616161]">
                {venue.guestCapacity} Guests{" "}
                <span className="mx-[1ch] text-black">•</span> Starts at $
                {venue.startingPrice.toLocaleString()}
              </p>
              <div className="mt-16 flex">
                <button className="btnOutline w-60 py-2 lg:absolute lg:bottom-0">
                  Request Quote
                </button>
              </div>
            </div>
          ))}

          {filteredVenues.length >= 4 && (
            <div className="col-span-1 w-full lg:col-start-3 lg:row-span-2">
              <OtherVenues filteredVenues={filteredVenues} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

OtherVenues.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
};
function OtherVenues({ filteredVenues }) {
  return (
    <div className="flex w-full flex-col overflow-hidden shadow-lg lg:max-h-[100rem]">
      <h3 className="mx-auto my-10 px-3 font-playFair text-[24px] font-bold lg:whitespace-nowrap lg:text-[22px]">
        Other Reception Venues You Might Like
      </h3>
      <div className="my-10 grid grid-flow-row grid-cols-1 gap-8 pl-3 lg:px-6">
        {filteredVenues.length > 4 ? (
          filteredVenues.slice(4).map((venue, i) => (
            <div className="flex gap-3 lg:gap-8" key={i}>
              <img
                className="aspect-square w-[100px] rounded-sm object-cover"
                src={venue.coverUrl}
                alt={venue.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderVenue;
                }}
              />
              <div className="flex w-full pr-3">
                <div className="-mr-3 flex w-full min-w-0 flex-col gap-1 truncate whitespace-nowrap">
                  <h3 className="font-playFair text-[16px] font-bold lg:text-[18px]">
                    {venue.name}
                  </h3>
                  <div className="-mb-1 -ml-1 flex items-center gap-4">
                    <Rating readOnly value={venue.rating} precision={0.1} />
                    <span className="text-sm text-[#676767]">
                      {venue.rating}({venue.reviews})
                    </span>
                  </div>
                  <div className="text-[14px] text-[#4B4B4B]">
                    {venue.location}
                  </div>
                  <p className="text-xs text-[#616161]">
                    {venue.guestCapacity} Guests{" "}
                    <span className="mx-[1ch] text-black">•</span> Starts at $
                    {venue.startingPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mobileText flex h-[37rem] items-center text-center text-[#9E9E9E]">
            No other venues found, but don&apos;t worry, we&apos;ll keep
            searching for your perfect spot.
          </div>
        )}
      </div>
    </div>
  );
}

function VenueSearchDisplay() {
  const [filteredVenues, setFilteredVenues] = useState([]);

  return (
    <div className="mb-[5vw] flex w-full flex-col lg:px-[5vw]">
      <SearchBar setFilteredVenues={setFilteredVenues} />
      <FilterButtons filteredVenues={filteredVenues} />
      <VenueDisplay filteredVenues={filteredVenues} />
    </div>
  );
}

export default VenueSearchDisplay;
