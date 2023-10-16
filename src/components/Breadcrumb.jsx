import { Link, useLocation } from "react-router-dom";
import { ArrowForward } from "./Icons";
import PropTypes from "prop-types";

Breadcrumb.propTypes = {
  venueName: PropTypes.string,
};
function Breadcrumb({ venueName }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const isVenuePage = location.pathname === `/venues/${venueName}`;

  return (
    <div className="mb-[5vh] mt-28 flex flex-col gap-4 font-lato font-normal text-[#6E7C99] lg:flex-row lg:font-playFair lg:text-[18px] lg:font-bold">
      <div className="flex items-center gap-2 overflow-hidden lg:gap-4">
        <Link to="/">Home</Link>
        <ArrowForward className="h-5 w-5" />
        <Link to="/venues" className="whitespace-nowrap">
          Find a Venue
        </Link>
        {venueName && <ArrowForward className="h-5 w-5" />}
        {venueName && isVenuePage ? (
          <span className="truncate">{venueName.replace(/-/g, " ")}</span>
        ) : venueName ? (
          <Link to={`/venues/${venueName}`} className="truncate">
            {venueName.replace(/-/g, " ")}
          </Link>
        ) : null}
      </div>
      {segments.includes("contact") || segments.includes("confirmation") ? (
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap lg:gap-4">
          <ArrowForward className="h-[18px] w-4" />
          <Link to={`/venues/${venueName}/contact`}>Contact Us</Link>
          {segments.includes("confirmation") && (
            <>
              <ArrowForward className="h-[18px] w-4" />
              <span>Confirmation</span>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Breadcrumb;
