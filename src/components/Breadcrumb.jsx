import { Link, useLocation } from "react-router-dom";
import { ArrowForward } from "./Icons";
import PropTypes from "prop-types";

Breadcrumb.propTypes = {
  venueName: PropTypes.string,
  flowName: PropTypes.string,
};
function Breadcrumb({ venueName, flowName }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const isVenuePage = location.pathname === `/venues/${venueName}`;
  const decodedVenueName = decodeURIComponent(venueName || "");

  return (
    <div className="z-10 mb-[5vh] mt-28 flex flex-col gap-4 font-lato font-normal text-[#6E7C99] lg:flex-row lg:font-playFair lg:text-base lg:font-bold">
      <div className="flex items-center gap-2 overflow-hidden lg:gap-4">
        <Link to="/">Home</Link>
        <ArrowForward className="h-4 w-4" />
        <Link to="/venues" className="whitespace-nowrap">
          {flowName ? flowName : "Find a Venue "}
        </Link>
        {decodedVenueName && <ArrowForward className="h-4 w-4" />}
        {decodedVenueName && isVenuePage ? (
          <span className="truncate">{decodedVenueName}</span>
        ) : decodedVenueName ? (
          <Link to={`/venues/${decodedVenueName}`} className="truncate">
            {decodedVenueName}
          </Link>
        ) : null}
      </div>
      {segments.includes("contact") || segments.includes("confirmation") ? (
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap lg:gap-4">
          <ArrowForward className="h-[16px] w-4" />
          <Link to={`/venues/${venueName}/contact`}>Contact Us</Link>
          {segments.includes("confirmation") && (
            <>
              <ArrowForward className="h-[16px] w-4" />
              <span>Confirmation</span>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Breadcrumb;
