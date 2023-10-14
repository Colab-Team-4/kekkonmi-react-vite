import Breadcrumb from "../components/Breadcrumb";
import VenueSearchDisplay from "../components/VenueSearchDisplay";
import PropTypes from "prop-types";

Venues.propTypes = {
  filteredVenues: PropTypes.array.isRequired,
  setFilteredVenues: PropTypes.func.isRequired,
};

function Venues({ filteredVenues, setFilteredVenues }) {
  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb />
      <VenueSearchDisplay
        filteredVenues={filteredVenues}
        setFilteredVenues={setFilteredVenues}
      />
    </div>
  );
}

export default Venues;
