import { Link, useLocation } from "react-router-dom";
import { ArrowForward } from "./Icons";

function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="mb-[5vh] mt-[10vh] text-[#6E7C99]">
      <nav className="flex">
        <ol className="flex items-center gap-4">
          <li>
            <h2>
              <Link to="/">Home</Link>
            </h2>
          </li>
          {segments.map((segment, i) => (
            <li key={i}>
              <h2 className="flex items-center gap-4">
                <ArrowForward />
                {segment === "venues" ? (
                  <Link to="/venues">Find a Venue</Link>
                ) : (
                  segment.replace(/-/g, " ")
                )}
              </h2>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
