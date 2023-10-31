import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PropTypes from "prop-types";
import placeholderVenue from "../assets/placeholderVenue.jpg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";
import VendorIcons from "../components/VendorIcons";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";

DetailsCard.propTypes = {
  venue: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleImageLoad: PropTypes.func.isRequired,
  handleImageError: PropTypes.func.isRequired,
};
function DetailsCard({ venue, isLoading, handleImageLoad, handleImageError }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowFullDescription(true);
      } else {
        setShowFullDescription(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedDescription = showFullDescription
    ? venue.detailedDesc
    : `${venue.detailedDesc.substring(0, 300)}...`;

  return (
    <div className="mb-20 mt-8 flex flex-col gap-8 lg:flex-row">
      <img
        src={venue.coverUrl}
        alt={venue.name}
        loading="lazy"
        className={`aspect-square rounded-md object-cover lg:w-1/2 lg:basis-1/2 ${
          isLoading ? "hidden" : ""
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div
        className={`aspect-square lg:w-1/2 lg:basis-1/2 ${
          isLoading ? "" : "hidden"
        }`}
      >
        <Skeleton
          variant="rectangular"
          className="aspect-square rounded-sm object-cover"
          width={"100%"}
          height={"auto"}
        />
      </div>
      <div className="lg:justify- flex basis-1/2 flex-col lg:h-full">
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal lg:text-3xl">{venue.name}</h2>
            <Checkbox
              icon={<FavoriteBorder style={{ color: "#6E7C99" }} />}
              checkedIcon={<Favorite style={{ color: "#D32F2F" }} />}
            />
          </div>
          <div className="w-full text-sm text-[#9E9E9E]">
            {venue.streetAddress}, {venue.location}, {venue.zipCode}
          </div>
        </div>
        <p className="mt-6 grow text-sm text-[#616161]">
          <span className="mb-[1ch] inline-block whitespace-pre-line">
            {displayedDescription}
          </span>
          <span
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-[#4C63D2] hover:cursor-pointer hover:underline lg:hidden"
          >
            {showFullDescription ? "show less" : "show more"}
          </span>
        </p>
        <Link
          to={`/venues/${encodeURIComponent(venue.name)}/contact`}
          className="btnSolid mx-auto mt-8 flex h-14 w-60 items-center justify-center py-2"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}

VenueDetails.propTypes = {
  filteredVenues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
function VenueDetails({ filteredVenues }) {
  const { venueName } = useParams();
  const [isDetailsLoading, setIsDetailsLoading] = useState(true);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);
  const [loadedDetailImages, setLoadedDetailImages] = useState(0);
  const [loadedGalleryImages, setLoadedGalleryImages] = useState(0);

  useEffect(() => {
    setLoadedDetailImages(0);
    setLoadedGalleryImages(0);
  }, [filteredVenues.length]);

  useEffect(() => {
    if (loadedDetailImages >= 1) {
      setIsDetailsLoading(false);
    }
  }, [loadedDetailImages]);

  useEffect(() => {
    if (loadedGalleryImages >= 4) {
      setIsGalleryLoading(false);
    }
  }, [loadedGalleryImages]);

  const handleDetailsImageLoad = () => {
    setLoadedDetailImages((prev) => prev + 1);
  };

  const handleDetailsImageError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderVenue;
  };

  const handleGalleryImageLoad = () => {
    setLoadedGalleryImages((prev) => prev + 1);
  };

  const handleGalleryImageError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderVenue;
  };

  const cleanedUpVenueName = decodeURIComponent(venueName);
  const venueInfo = filteredVenues.find(
    (venue) => venue.name === cleanedUpVenueName,
  );

  if (!venueInfo) {
    return <div>Venue not found</div>;
  }

  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb venueName={venueName} />
      <DetailsCard
        venue={venueInfo}
        isLoading={isDetailsLoading}
        handleImageLoad={handleDetailsImageLoad}
        handleImageError={handleDetailsImageError}
      />
      <VendorIcons venue={venueInfo} />
      <Amenities venue={venueInfo} />
      <Gallery
        venue={venueInfo}
        isLoading={isGalleryLoading}
        setIsLoading={setIsGalleryLoading}
        handleImageLoad={handleGalleryImageLoad}
        handleImageError={handleGalleryImageError}
      />
    </div>
  );
}

export default VenueDetails;
