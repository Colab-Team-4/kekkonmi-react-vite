import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PropTypes from "prop-types";

VenueDetails.propTypes = {
  filteredVenues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
function VenueDetails({ filteredVenues }) {
  const { venueName } = useParams();
  const cleanedUpVenueName = venueName.replace(/-/g, " ");

  const venueDetails = filteredVenues.find(
    (venue) => venue.name === cleanedUpVenueName,
  );

  if (!venueDetails) {
    return <div>Venue not found</div>;
  }

  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb />
    </div>
  );
}

export default VenueDetails;
