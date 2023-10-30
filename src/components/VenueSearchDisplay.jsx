import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SearchIcon, FilterIcon } from "./Icons";
import venues from "../data/venueData.json";
import placeholderVenue from "../assets/placeholderVenue.jpg";
import { Rating } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FilterModals from "./FilterModals";

SearchBar.propTypes = {
  setFilteredVenues: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  totalSelectedOptions: PropTypes.number.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  lastSearch: PropTypes.string.isRequired,
  setLastSearch: PropTypes.func.isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
  setSelectedRadio: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};
function SearchBar({
  setFilteredVenues,
  setHasSearched,
  openModal,
  totalSelectedOptions,
  setIsOpen,
  lastSearch,
  setLastSearch,
  setSelectedOptions,
  setSelectedRadio,
  resetFilters,
}) {
  const searchRef = useRef(null);

  useEffect(() => {
    const savedSearch = localStorage.getItem("lastSearch");
    if (savedSearch) {
      setLastSearch(savedSearch);

      const irrelevantWords = ["venues", "in", "wedding", "venue"];
      const relevantQuery = savedSearch
        .split(" ")
        .filter((word) => !irrelevantWords.includes(word.toLowerCase()))
        .join(" ");

      const filtered = venues.filter((venue) =>
        venue.location.toLowerCase().includes(relevantQuery.toLowerCase()),
      );

      setFilteredVenues(filtered);
      setHasSearched(true);
      setIsOpen(false);
    } else {
      setFilteredVenues([]);
      setHasSearched(false);
      setIsOpen(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchRef.current.value.trim();

    if (!query) {
      return;
    }
    setLastSearch(query);
    localStorage.setItem("lastSearch", query);
    setHasSearched(true);

    setSelectedOptions({});
    setSelectedRadio(null);

    const categoriesToReset = [
      "Guest Capacity",
      "Venue Types",
      "Venue Amenities",
      "Venue Vendors",
      "Affiliations",
      "Price",
      "Diversity",
      "Outdoors",
    ];

    // Reset each category
    categoriesToReset.forEach((category) => resetFilters(category));

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
      <div className="flex w-full">
        <div className="relative z-10 flex w-full flex-col">
          <div className="absolute left-0 flex h-full items-center pl-3">
            <SearchIcon />
          </div>
          <input
            ref={searchRef}
            type="search"
            id="venueSearch"
            placeholder="Venues in New York"
            className="inputText mobileText w-full py-3 pl-16 pr-2 lg:text-[22px]"
            defaultValue={lastSearch}
          />
        </div>
        <div className="relative z-10 ml-4 lg:ml-auto lg:hidden">
          <button
            type="button"
            onClick={openModal}
            className="btnNavSolid btnWeightNormal group flex h-full w-24 items-center justify-center whitespace-nowrap rounded-md pl-6 text-xs text-white duration-300 hover:bg-[#BFCAE0] hover:text-[#616161] lg:text-[22px]"
          >
            <div className="absolute left-0 pl-3">
              <FilterIcon className="fill-current text-white group-hover:text-[#616161]" />
            </div>
            Filters ({totalSelectedOptions})
          </button>
        </div>
      </div>
      <div className="z-10 flex justify-between gap-4 lg:gap-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btnSolid mobileText w-40 lg:w-60 lg:text-xl"
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
  setFilteredVenues: PropTypes.func,
  outdoorOpen: PropTypes.bool.isRequired,
  setOutdoorOpen: PropTypes.func.isRequired,
  priceOpen: PropTypes.bool.isRequired,
  setPriceOpen: PropTypes.func.isRequired,
  diversityOpen: PropTypes.bool.isRequired,
  setDiversityOpen: PropTypes.func.isRequired,
  filtersOpen: PropTypes.bool.isRequired,
  setFiltersOpen: PropTypes.func.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
  selectedRadio: PropTypes.string,
  setSelectedRadio: PropTypes.func.isRequired,
  getModalTransition: PropTypes.func.isRequired,
  filteredVenues: PropTypes.array.isRequired,
  filterVenues: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  resetKey: PropTypes.number.isRequired,
  hasSearched: PropTypes.bool.isRequired,
};
function FilterButtons({
  setFilteredVenues,
  outdoorOpen,
  setOutdoorOpen,
  priceOpen,
  setPriceOpen,
  diversityOpen,
  setDiversityOpen,
  filtersOpen,
  setFiltersOpen,
  selectedOptions,
  setSelectedOptions,
  selectedRadio,
  setSelectedRadio,
  getModalTransition,
  filteredVenues,
  filterVenues,
  resetFilters,
  resetKey,
  hasSearched,
}) {
  const countOptions = (categories) => {
    return categories.reduce((count, category) => {
      let categoryCount = selectedOptions[category]
        ? selectedOptions[category].length
        : 0;

      if (category === "Guest Capacity" && selectedRadio) {
        categoryCount += 1;
      }

      return count + categoryCount;
    }, 0);
  };

  return (
    <div className="z-20 -mt-4 mb-14 hidden flex-wrap gap-6 lg:flex lg:w-full lg:basis-3/5">
      <div className="relative">
        <button
          disabled={
            filteredVenues.length === 0 ||
            (filteredVenues.length === 0 &&
              hasSearched &&
              countOptions(["Outdoors"]) === 0)
          }
          onClick={() => setOutdoorOpen(true)}
          className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 disabled:cursor-not-allowed disabled:border-[#9E9E9E] disabled:text-[#9E9E9E] disabled:hover:bg-white lg:px-8"
        >
          Outdoor Venues ({countOptions(["Outdoors"])})
        </button>
        <div
          className={`absolute mt-1 w-56 overflow-hidden rounded-md ${
            outdoorOpen ? "z-50" : ""
          }`}
        >
          <FilterModals
            isOpen={outdoorOpen}
            closeModal={() => setOutdoorOpen(false)}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            modalType="outdoor"
            modalTransition={getModalTransition("outdoor")}
            setFilteredVenues={setFilteredVenues}
            filterVenues={filterVenues}
            resetFilters={resetFilters}
            resetKey={resetKey}
          />
        </div>
      </div>
      <div className="relative">
        <button
          disabled={
            filteredVenues.length === 0 ||
            (filteredVenues.length === 0 &&
              hasSearched &&
              countOptions(["Price"]) === 0)
          }
          onClick={() => setPriceOpen(true)}
          className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 disabled:cursor-not-allowed disabled:border-[#9E9E9E] disabled:text-[#9E9E9E] disabled:hover:bg-white lg:px-8"
        >
          $ Price ({countOptions(["Price"])})
        </button>
        <div
          className={`absolute mt-1 w-52 overflow-hidden rounded-md ${
            priceOpen ? "z-50" : ""
          }`}
        >
          <FilterModals
            isOpen={priceOpen}
            closeModal={() => setPriceOpen(false)}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            modalType="price"
            modalTransition={getModalTransition("price")}
            setFilteredVenues={setFilteredVenues}
            filterVenues={filterVenues}
            resetFilters={resetFilters}
            resetKey={resetKey}
          />
        </div>
      </div>
      <div className="relative">
        <button
          disabled={
            filteredVenues.length === 0 ||
            (filteredVenues.length === 0 &&
              hasSearched &&
              countOptions(["Diversity"]) === 0)
          }
          onClick={() => setDiversityOpen(true)}
          className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 disabled:cursor-not-allowed disabled:border-[#9E9E9E] disabled:text-[#9E9E9E] disabled:hover:bg-white lg:px-8"
        >
          Support Diversity ({countOptions(["Diversity"])})
        </button>
        <div
          className={`absolute mt-1 w-72 overflow-hidden rounded-md ${
            diversityOpen ? "z-50" : ""
          }`}
        >
          <FilterModals
            isOpen={diversityOpen}
            closeModal={() => setDiversityOpen(false)}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            modalType="diversity"
            modalTransition={getModalTransition("diversity")}
            setFilteredVenues={setFilteredVenues}
            filterVenues={filterVenues}
            resetFilters={resetFilters}
            resetKey={resetKey}
          />
        </div>
      </div>
      <div className="relative">
        <button
          disabled={
            filteredVenues.length === 0 ||
            (filteredVenues.length === 0 &&
              hasSearched &&
              countOptions([
                "Guest Capacity",
                "Venue Types",
                "Venue Amenities",
                "Venue Vendors",
                "Affiliations",
              ]) === 0)
          }
          onClick={() => setFiltersOpen(true)}
          className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 disabled:cursor-not-allowed disabled:border-[#9E9E9E] disabled:text-[#9E9E9E] disabled:hover:bg-white lg:px-8"
        >
          More Filters (
          {countOptions([
            "Guest Capacity",
            "Venue Types",
            "Venue Amenities",
            "Venue Vendors",
            "Affiliations",
          ])}
          )
        </button>
        <div
          className={`absolute mt-1 w-[32rem] overflow-hidden rounded-md ${
            filtersOpen ? "z-50" : "hidden"
          }`}
        >
          <FilterModals
            isOpen={filtersOpen}
            closeModal={() => setFiltersOpen(false)}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            modalType="desktop"
            modalTransition={getModalTransition("filters")}
            setFilteredVenues={setFilteredVenues}
            filterVenues={filterVenues}
            resetFilters={resetFilters}
            resetKey={resetKey}
          />
        </div>
      </div>
    </div>
  );
}

VenueCard.propTypes = {
  venue: PropTypes.object.isRequired,
};
function VenueCard({ venue }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-md pb-6 duration-300 hover:bg-[#F4E2E6] lg:z-10">
      <img
        className="aspect-square w-full rounded-md object-cover"
        src={venue.coverUrl}
        alt={venue.name}
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderVenue;
        }}
      />
      <div className="flex items-center justify-between pl-4 text-[16px] text-[#4B4B4B]">
        {venue.location}
        <Checkbox
          icon={<FavoriteBorder style={{ color: "#6E7C99" }} />}
          checkedIcon={<Favorite style={{ color: "#D32F2F" }} />}
        />
      </div>
      <h2 className="-mt-5 pl-4">{venue.name}</h2>
      <p className="w-[95%] pl-4 text-sm text-[#616161]">{venue.description}</p>
      <p className="pl-4 text-sm text-[#616161]">
        {venue.guestCapacity} Guests{" "}
        <span className="mx-[1ch] text-black">•</span> Starts at $
        {venue.startingPrice.toLocaleString()}
      </p>
      <div className="z-10 mt-16 flex pl-4">
        <Link
          to={`/venues/${encodeURIComponent(venue.name)}`}
          className="btnOutline mx-auto w-60 py-2 text-center lg:absolute lg:bottom-4 lg:mx-0"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}

VenueDisplay.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
  extraVenues: PropTypes.number.isRequired,
  setExtraVenues: PropTypes.func.isRequired,
  hasSearched: PropTypes.bool.isRequired,
};
function VenueDisplay({
  filteredVenues,
  extraVenues,
  setExtraVenues,
  hasSearched,
}) {
  const [startIndex, setStartIndex] = useState(9);

  const handleShowMore = () => {
    setExtraVenues((prevExtraVenues) => prevExtraVenues + 2);
    setStartIndex((prevStartIndex) => prevStartIndex + 2);
  };

  const displayVenues = filteredVenues.slice(
    startIndex,
    startIndex + extraVenues,
  );

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
      {!hasSearched || filteredVenues.length === 0 ? (
        <div className="col-span-3 row-span-6 place-self-center text-center text-[#9E9E9E] lg:text-lg">
          Sorry, no venues here; let&apos;s refine your search together.
        </div>
      ) : (
        <>
          {filteredVenues.length !== 3 ? (
            filteredVenues.slice(0, 4).map((venue, i) => (
              <div
                className={`relative order-1 flex flex-col gap-6 lg:col-start-${
                  (i % 2) + 1
                } lg:row-start-${Math.floor(i / 2) + 1}`}
                key={i}
              >
                <VenueCard venue={venue} />
              </div>
            ))
          ) : (
            <>
              {filteredVenues.slice(0, 2).map((venue, i) => (
                <div
                  className={`relative flex flex-col gap-6 lg:col-start-${
                    (i % 2) + 1
                  } lg:row-start-${Math.floor(i / 2) + 1}`}
                  key={i}
                >
                  <VenueCard venue={venue} />
                </div>
              ))}
              <div className="lg:relative lg:col-start-3 lg:row-start-1 lg:block">
                <VenueCard venue={filteredVenues[2]} />
              </div>
            </>
          )}

          {filteredVenues.length > 3 && (
            <div className="order-3 lg:col-start-3 lg:row-start-1">
              <OtherVenues filteredVenues={filteredVenues.slice(4, 9)} />
            </div>
          )}

          {displayVenues.map((venue, i) => (
            <div
              className={`relative order-2 flex flex-col gap-6 lg:col-start-${
                ((i + 4) % 2) + 1
              } lg:row-start-${Math.floor((i + 4) / 2) + 2}`}
              key={i + startIndex}
            >
              <VenueCard venue={venue} />
            </div>
          ))}

          {filteredVenues.length > startIndex + extraVenues && (
            <div className="order-2 flex justify-center lg:col-span-2 lg:col-start-1">
              <button
                onClick={handleShowMore}
                className="btnSolid z-10 mt-8 w-64 px-2 py-3 text-[20px] lg:px-8"
              >
                Show more
              </button>
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
    <div className="flex h-[101%] w-full flex-col overflow-hidden rounded-md shadow-lg lg:h-fit lg:pb-4">
      <h3 className="my-10 ml-4 font-playFair text-[24px] font-bold lg:whitespace-nowrap lg:text-lg">
        Other Reception Venues You Might Like
      </h3>
      <div className="grid grid-flow-row grid-cols-1 content-center gap-2 px-3">
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue, i) => (
            <Link
              key={i}
              to={`/venues/${encodeURIComponent(venue.name)}`}
              className="z-10 rounded-md px-2 py-4 duration-300 hover:bg-[#F4E2E6]"
            >
              <div className="flex gap-3 lg:gap-8">
                <img
                  className="aspect-square w-[6.5rem] rounded-sm object-cover"
                  src={venue.coverUrl}
                  alt={venue.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderVenue;
                  }}
                />
                <div className="relative flex w-full">
                  <div className="absolute flex h-full w-full flex-col justify-around gap-1 overflow-hidden text-clip whitespace-nowrap">
                    <h3 className="font-playFair text-[16px] font-bold lg:text-sm">
                      {venue.name}
                    </h3>
                    <div className="-mb-1 flex items-center gap-2">
                      <Rating
                        readOnly
                        value={venue.rating}
                        precision={0.1}
                        size="small"
                      />
                      <span className="text-xs text-[#676767]">
                        {venue.rating}({venue.reviews})
                      </span>
                    </div>
                    <div className="text-[14px] text-[#4B4B4B]">
                      {venue.location}
                    </div>
                    <p className="-mt-1 text-xs text-[#616161] lg:flex lg:flex-wrap">
                      {venue.guestCapacity} Guests{" "}
                      <span className="ml-1 mr-2 text-black">•</span>
                      <span className="block lg:inline-block">
                        Starts at ${venue.startingPrice.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
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

VenueSearchDisplay.propTypes = {
  setFilteredVenues: PropTypes.func.isRequired,
  filteredVenues: PropTypes.array.isRequired,
};
function VenueSearchDisplay({ setFilteredVenues, filteredVenues }) {
  const [extraVenues, setExtraVenues] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [outdoorOpen, setOutdoorOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [diversityOpen, setDiversityOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [lastSearch, setLastSearch] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const resetFilters = (category) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = { ...prevSelected };
      delete newSelected[category];
      return newSelected;
    });
    if (category === "Guest Capacity") {
      setSelectedRadio(null);
    }
    setResetKey((prevKey) => prevKey + 1);
  };

  const totalSelectedOptions = useMemo(() => {
    const optionCount = Object.values(selectedOptions).reduce(
      (acc, curr) => acc + curr.length,
      0,
    );
    const radioCount = selectedRadio ? 1 : 0;
    return optionCount + radioCount;
  }, [selectedOptions, selectedRadio]);

  const getModalTransition = (modalType) => {
    switch (modalType) {
      case "outdoor":
        return outdoorOpen
          ? "transition-all opacity-1 duration-300 ease-in-out"
          : "transition-all opacity-0 duration-300 ease-out collapse";
      case "price":
        return priceOpen
          ? "transition-all opacity-1 duration-300 ease-in-out"
          : "transition-all opacity-0 duration-300 ease-out collapse";
      case "diversity":
        return diversityOpen
          ? "transition-all opacity-1 duration-300 ease-in-out"
          : "transition-all opacity-0 duration-300 ease-out collapse";
      case "filters":
        return filtersOpen
          ? "transition-all opacity-1 duration-300 ease-in-out"
          : "transition-all opacity-0 duration-300 ease-out collapse";
      default:
        return isOpen
          ? "translate-y-0 transition-all duration-500 ease-in-out opacity-1"
          : "translate-y-[100vh] transition-all duration-500 ease-out collapse opacity-0";
    }
  };

  const applyFiltersAndSearch = (searchQuery) => {
    let searchFiltered = venues.filter((venue) =>
      venue.location.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    let finalFiltered = searchFiltered.filter((venue) => {
      let isValid = true;

      if (selectedRadio) {
        isValid = venue.guestCapacity === selectedRadio;
      }

      if (selectedOptions["Venue Types"]) {
        isValid = selectedOptions["Venue Types"].some((option) =>
          venue.venueType.includes(option),
        );
      }

      if (selectedOptions["Venue Amenities"]) {
        isValid = selectedOptions["Venue Amenities"].some((option) =>
          venue.amenities.includes(option),
        );
      }

      if (selectedOptions["Venue Vendors"]) {
        isValid = selectedOptions["Venue Vendors"].some((option) =>
          venue.vendors.includes(option),
        );
      }

      if (selectedOptions["Affiliations"]) {
        isValid = selectedOptions["Affiliations"].some((option) =>
          venue.affiliations.includes(option),
        );
      }

      if (selectedOptions["Price"]) {
        isValid = selectedOptions["Price"].some(
          (option) => venue.pricing === option,
        );
      }

      if (selectedOptions["Diversity"]) {
        isValid = selectedOptions["Diversity"].some((option) =>
          venue.diversity.includes(option),
        );
      }

      if (selectedOptions["Outdoors"]) {
        isValid = selectedOptions["Outdoors"].some((option) =>
          venue.outdoors.includes(option),
        );
      }

      return isValid;
    });

    setExtraVenues(0);
    setFilteredVenues(finalFiltered);
  };

  const filterVenues = () => {
    const allArraysEmpty = Object.values(selectedOptions).some(
      (arr) => arr.length === 0,
    );

    if (
      (Object.keys(selectedOptions).length === 0 && !selectedRadio) ||
      (hasSearched && allArraysEmpty)
    ) {
      const irrelevantWords = ["venues", "in", "wedding", "venue"];
      const relevantQuery = lastSearch
        .split(" ")
        .filter((word) => !irrelevantWords.includes(word.toLowerCase()))
        .join(" ");

      const filtered = venues.filter((venue) =>
        venue.location.toLowerCase().includes(relevantQuery.toLowerCase()),
      );

      setFilteredVenues(filtered.length ? filtered : venues);
      setExtraVenues(0);
    } else {
      applyFiltersAndSearch(lastSearch);
    }
  };

  return (
    <div className="mb-[5vw] flex w-full flex-col lg:pl-[5vw]">
      <SearchBar
        setFilteredVenues={setFilteredVenues}
        setHasSearched={setHasSearched}
        openModal={() => setIsOpen(true)}
        closeModal={() => setIsOpen(false)}
        totalSelectedOptions={totalSelectedOptions}
        setIsOpen={setIsOpen}
        lastSearch={lastSearch}
        setLastSearch={setLastSearch}
        setSelectedOptions={setSelectedOptions}
        setSelectedRadio={setSelectedRadio}
        resetFilters={resetFilters}
      />
      <FilterButtons
        outdoorOpen={outdoorOpen}
        setOutdoorOpen={setOutdoorOpen}
        priceOpen={priceOpen}
        setPriceOpen={setPriceOpen}
        diversityOpen={diversityOpen}
        setDiversityOpen={setDiversityOpen}
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
        getModalTransition={getModalTransition}
        filteredVenues={filteredVenues}
        filterVenues={filterVenues}
        resetFilters={resetFilters}
        resetKey={resetKey}
        hasSearched={hasSearched}
      />
      <VenueDisplay
        filteredVenues={filteredVenues}
        extraVenues={extraVenues}
        setExtraVenues={setExtraVenues}
        hasSearched={hasSearched}
      />
      <div
        className={`absolute left-0 right-0 top-0 lg:hidden ${
          isOpen ? "z-50" : ""
        }`}
      >
        <FilterModals
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          modalType="mobile"
          modalTransition={getModalTransition()}
          setFilteredVenues={setFilteredVenues}
          filterVenues={filterVenues}
          resetFilters={resetFilters}
          resetKey={resetKey}
        />
      </div>
    </div>
  );
}

export default VenueSearchDisplay;
