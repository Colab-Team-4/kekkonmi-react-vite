import { useState } from "react";
import PropTypes from "prop-types";

Gallery.propTypes = {
  venue: PropTypes.object.isRequired,
};
function Gallery({ venue }) {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll
    ? venue.galleryUrls
    : venue.galleryUrls.slice(0, 4);

  return (
    <>
      <h2 className="my-8 lg:text-4xl lg:font-normal">Gallery</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4 lg:grid-rows-1">
        {displayedImages.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={venue.name}
            loading="lazy"
            className="aspect-square w-full rounded-md object-cover"
          />
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
