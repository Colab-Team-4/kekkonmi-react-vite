import PropTypes from "prop-types";

function CheckIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <path
        d="M7.93762 15.5L0.812622 8.375L2.59387 6.59375L7.93762 11.9375L19.4064 0.46875L21.1876 2.25L7.93762 15.5Z"
        fill="#4F98DC"
      />
    </svg>
  );
}

function MissingIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <mask
        id="mask0_3585_7222"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="30"
      >
        <rect width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3585_7222)">
        <path
          d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
          fill="#D32F2F"
        />
      </g>
    </svg>
  );
}

Amenities.propTypes = {
  venue: PropTypes.object.isRequired,
};
function Amenities({ venue }) {
  const venueAmenities = [
    "Ceremony Area",
    "Dressing Room",
    "Handicap Accessible",
    "Indoor Event Space",
    "Liability Insurance",
    "On-site Accommodations",
    "Reception Area",
    "Wireless Internet",
  ];
  const outdoorsFilter = ["Outdoor Event Space", "Covered Outdoor Space"];
  const amenitiesOutdoors = [...venueAmenities, ...outdoorsFilter];

  return (
    <div className="flex w-full flex-col rounded-md p-6 lg:my-14 lg:p-0">
      <div className="flex flex-col gap-10 p-2">
        <h2 className="text-3xl font-normal lg:text-4xl">Amenities</h2>
        <div className="flex flex-col gap-10 lg:grid lg:grid-flow-col lg:grid-rows-2">
          {amenitiesOutdoors.map((item, i) => (
            <div className="flex items-center" key={i}>
              <div className="flex w-14 grow-0 justify-center">
                {venue.amenities.includes(item) ||
                venue.outdoors.includes(item) ? (
                  <CheckIcon />
                ) : (
                  <MissingIcon />
                )}
              </div>
              <p className="whitespace-nowrap text-sm lg:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;
