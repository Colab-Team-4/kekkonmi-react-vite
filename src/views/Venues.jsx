import Breadcrumb from "../components/Breadcrumb";
import VenueSearchDisplay from "../components/VenueSearchDisplay";
import PropTypes from "prop-types";

Venues.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
  setFilteredVenues: PropTypes.func.isRequired,
  updateSavedVenues: PropTypes.func.isRequired,
  savedVenues: PropTypes.array.isRequired,
  setSavedVenues: PropTypes.func.isRequired,
};

function Venues({
  filteredVenues,
  setFilteredVenues,
  updateSavedVenues,
  savedVenues,
  setSavedVenues,
}) {
  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb />
      <VenueSearchDisplay
        filteredVenues={filteredVenues}
        setFilteredVenues={setFilteredVenues}
        updateSavedVenues={updateSavedVenues}
        savedVenues={savedVenues}
        setSavedVenues={setSavedVenues}
      />
    </div>
  );
}

export default Venues;
