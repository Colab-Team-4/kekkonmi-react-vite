import { Link, useLocation } from "react-router-dom";
import { ArrowForward } from "./Icons";

function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="mb-[5vh] mt-28 flex font-lato text-[16px] font-normal text-[#6E7C99] lg:font-playFair lg:text-[18px] lg:font-bold">
      <ol className="flex items-center gap-2 overflow-hidden lg:gap-4">
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        {segments.map((segment, i) => (
          <li key={i}>
            <div className="flex items-center gap-2 whitespace-nowrap lg:gap-4">
              <ArrowForward />
              {segment === "venues" ? (
                <Link to="/venues">Find a Venue</Link>
              ) : (
                segment.replace(/-/g, " ")
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumb;
