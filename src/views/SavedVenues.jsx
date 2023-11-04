import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import { TrashIcon } from "../components/Icons";
import { VenueCard } from "../components/VenueSearchDisplay";
import placeholderVenue from "../assets/placeholderVenue.jpg";
import NoneSaved from "../assets/NoneSaved.png";

SavedVenues.propTypes = {
  savedVenues: PropTypes.array.isRequired,
  setSavedVenues: PropTypes.func.isRequired,
  updateSavedVenues: PropTypes.func.isRequired,
};

function SavedVenues({ savedVenues, setSavedVenues, updateSavedVenues }) {
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const loadedSavedVenues =
      JSON.parse(localStorage.getItem("savedVenues")) || [];
    setSavedVenues(loadedSavedVenues);
  }, [setSavedVenues]);

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  const handleImageError = (e) => {
    setLoadedImages((prevCount) => prevCount + 1);
    e.target.onerror = null;
    e.target.src = placeholderVenue;
  };

  return (
    <div className="flex flex-col px-[5vw]">
      <Navbar />
      <Breadcrumb flowName="Saved" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold lg:text-3xl">Your Saved Venues</h1>
        <button className="group flex h-10 w-20 items-center justify-center rounded-md bg-[#D2DDF3] text-[#616161] duration-300 hover:bg-[#6E7C99] hover:text-white">
          <TrashIcon />
        </button>
      </div>
      <p className="w-60 text-base">
        Revisit Your Saved Venues and Rediscover Your Interests.
      </p>
      {savedVenues.length > 0 ? (
        savedVenues.map((venue) => (
          <VenueCard
            key={venue.name}
            venue={venue}
            isLoading={loadedImages < savedVenues.length}
            handleImageLoad={handleImageLoad}
            handleImageError={handleImageError}
            updateSavedVenues={updateSavedVenues}
          />
        ))
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold lg:text-3xl">Oops!</h1>
          <p className="text-base">
            No saved searches found - Your love story is one a kind, and your
            wedding planning begins now.
          </p>
          <img src={NoneSaved} alt="No Saved Venues" />
          <button className="btnSolid mobileText w-full h-10">
            Start Exploring
          </button>
        </div>
      )}
    </div>
  );
}

export default SavedVenues;
