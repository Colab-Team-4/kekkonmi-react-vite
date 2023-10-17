import { useState, useEffect, useRef } from "react";
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
  setExtraVenues: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
function SearchBar({
  setFilteredVenues,
  setExtraVenues,
  setHasSearched,
  toggleModal,
}) {
  const searchRef = useRef(null);
  const [lastSearch, setLastSearch] = useState("");

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
    } else {
      setFilteredVenues([]);
      setHasSearched(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;
    localStorage.setItem("lastSearch", query);
    setHasSearched(true);

    const irrelevantWords = ["venues", "in", "wedding", "venue"];
    const relevantQuery = query
      .split(" ")
      .filter((word) => !irrelevantWords.includes(word.toLowerCase()))
      .join(" ");

    const filtered = venues.filter((venue) =>
      venue.location.toLowerCase().includes(relevantQuery.toLowerCase()),
    );
    setExtraVenues(0);
    setFilteredVenues(filtered);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 flex flex-col justify-evenly gap-10 lg:flex-row lg:gap-6"
    >
      <div className="flex w-full justify-center gap-5">
        <div className="relative flex w-full flex-col items-start">
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
        <div className="relative md:hidden">
          <button
            onClick={toggleModal}
            className="btnSolid mobileText btnWeightNormal group flex h-full w-24 items-center pl-10 lg:text-[22px]"
          >
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
    <div className="-mt-4 mb-14 hidden flex-wrap gap-6 lg:flex lg:w-full lg:basis-3/5">
      <button className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 lg:px-8">
        Outdoor Venues
      </button>
      <button className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 lg:px-8">
        $ Price
      </button>
      <button className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 lg:px-8">
        Support Diversity
      </button>
      <button className="btnOutline btnWeightNormal mobileText w-fit px-2 py-3 lg:px-8">
        More Filters
      </button>
    </div>
  );
}

VenueCard.propTypes = {
  venue: PropTypes.object.isRequired,
};
function VenueCard({ venue }) {
  return (
    <div className="flex flex-col gap-6">
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
      <div className="flex items-center justify-between text-[16px] text-[#4B4B4B]">
        {venue.location}
        <Checkbox
          icon={<FavoriteBorder style={{ color: "#6E7C99" }} />}
          checkedIcon={<Favorite style={{ color: "#D32F2F" }} />}
        />
      </div>
      <h2 className="-mt-5">{venue.name}</h2>
      <p className="w-[95%] text-sm text-[#616161]">{venue.description}</p>
      <p className="text-sm text-[#616161]">
        {venue.guestCapacity} Guests{" "}
        <span className="mx-[1ch] text-black">•</span> Starts at $
        {venue.startingPrice.toLocaleString()}
      </p>
      <div className="mt-16 flex">
        <Link
          to={`/venues/${encodeURIComponent(venue.name)}`}
          className="btnOutline mx-auto w-60 py-2 text-center lg:absolute lg:bottom-0 lg:mx-0"
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
                className={`relative flex flex-col gap-6 lg:col-start-${
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
            <div className="lg:col-start-3 lg:row-start-1">
              <OtherVenues filteredVenues={filteredVenues.slice(4, 9)} />
            </div>
          )}

          {displayVenues.map((venue, i) => (
            <div
              className={`relative flex flex-col gap-6 lg:col-start-${
                ((i + 4) % 2) + 1
              } lg:row-start-${Math.floor((i + 4) / 2) + 2}`}
              key={i + startIndex}
            >
              <VenueCard venue={venue} />
            </div>
          ))}

          {filteredVenues.length > startIndex + extraVenues && (
            <div className="flex justify-center lg:col-span-2 lg:col-start-1">
              <button
                onClick={handleShowMore}
                className="btnSolid mt-8 w-64 px-2 py-3 text-[20px] lg:px-8"
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
    <div className="flex max-h-[53rem] w-full flex-col overflow-hidden shadow-lg lg:max-h-[50.5rem]">
      <h3 className="my-10 ml-4 font-playFair text-[24px] font-bold lg:whitespace-nowrap lg:text-lg">
        Other Reception Venues You Might Like
      </h3>
      <div className="my-10 grid grid-flow-row grid-cols-1 content-center gap-8 px-3">
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue, i) => (
            <Link key={i} to={`/venues/${encodeURIComponent(venue.name)}`}>
              <div className="flex gap-3 lg:gap-8">
                <img
                  className="aspect-square w-[100px] rounded-sm object-cover"
                  src={venue.coverUrl}
                  alt={venue.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderVenue;
                  }}
                />
                <div className="relative flex w-full">
                  <div className="absolute flex h-full w-full flex-col justify-around gap-1 whitespace-nowrap">
                    <h3 className="overflow-hidden text-clip font-playFair text-[16px] font-bold lg:text-sm">
                      {venue.name}
                    </h3>
                    <div className="-mb-1 flex items-center gap-2">
                      <Rating
                        readOnly
                        value={venue.rating}
                        precision={0.1}
                        style={{ color: "#323232" }}
                        size="small"
                      />
                      <span className="text-clip text-xs text-[#676767]">
                        {venue.rating}({venue.reviews})
                      </span>
                    </div>
                    <div className="text-clip text-[14px] text-[#4B4B4B]">
                      {venue.location}
                    </div>
                    <p className="-mt-1 text-clip text-xs text-[#616161]">
                      {venue.guestCapacity} Guests{" "}
                      <span className="mx-1 text-black">•</span> Starts at $
                      {venue.startingPrice.toLocaleString()}
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

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add = "overflow-hidden";
    } else {
      document.body.classList.remove = "overflow-hidden";
    }
  };

  return (
    <div className="mb-[5vw] flex w-full flex-col lg:pl-[5vw]">
      <SearchBar
        setFilteredVenues={setFilteredVenues}
        setExtraVenues={setExtraVenues}
        setHasSearched={setHasSearched}
        toggleModal={toggleModal}
      />
      <FilterButtons filteredVenues={filteredVenues} />
      <FilterModals isOpen={isOpen} toggleModal={toggleModal} />
      <VenueDisplay
        filteredVenues={filteredVenues}
        extraVenues={extraVenues}
        setExtraVenues={setExtraVenues}
        hasSearched={hasSearched}
      />
    </div>
  );
}

export default VenueSearchDisplay;
