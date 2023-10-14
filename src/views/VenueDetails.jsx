import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PropTypes from "prop-types";
import placeholderVenue from "../assets/placeholderVenue.jpg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

DetailsCard.propTypes = {
  venue: PropTypes.object.isRequired,
};
function DetailsCard({ venue }) {
  return (
    <div className="mb-20 mt-8 flex flex-col gap-8">
      <img
        src={venue.coverUrl}
        alt={venue.name}
        className="aspect-square w-full rounded-md object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderVenue;
        }}
      />
      <div className="flex flex-col">
        <div className="flex">
          <h2 className="text-xl">{venue.name}</h2>
          <Checkbox
            icon={<FavoriteBorder style={{ color: "#6E7C99" }} />}
            checkedIcon={<Favorite style={{ color: "#D32F2F" }} />}
          />
        </div>
        <div className="text-sm text-[#9E9E9E]">
          {venue.streetAddress}, {venue.location}, {venue.zipCode}
        </div>
      </div>
      <p className="text-sm text-[#616161]">{venue.detailedDesc}</p>
      <Link
        to={`/venues/${venue.name.split(" ").join("-")}/contact`}
        className="btnSolid mx-auto w-60 py-2 text-center lg:absolute lg:bottom-0 lg:mx-0"
      >
        Request Quote
      </Link>
    </div>
  );
}

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
      <DetailsCard venue={venueDetails} />
    </div>
  );
}

export default VenueDetails;
