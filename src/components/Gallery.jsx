import { useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

Gallery.propTypes = {
  venue: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleImageLoad: PropTypes.func.isRequired,
  handleImageError: PropTypes.func.isRequired,
};
function Gallery({ venue, isLoading, handleImageLoad, handleImageError }) {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll
    ? venue.galleryUrls
    : venue.galleryUrls.slice(0, 4);

  return (
    <>
      <h2 className="my-8 lg:text-4xl lg:font-normal">Gallery</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        {displayedImages.map((url, i) => (
          <div key={i}>
            <img
              src={url}
              alt={venue.name}
              loading="lazy"
              className={`aspect-square w-full rounded-md object-cover ${
                isLoading ? "hidden" : ""
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            <div
              className={`aspect-square w-full rounded-md object-cover ${
                isLoading ? "" : "hidden"
              }`}
            >
              <Skeleton
                variant="rectangular"
                className="aspect-square rounded-md object-cover"
                width={"100%"}
                height={"auto"}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btnOutline mobileText btnWeightNormal mb-24 mt-14 w-48 p-3 text-sm"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
}

export default Gallery;
