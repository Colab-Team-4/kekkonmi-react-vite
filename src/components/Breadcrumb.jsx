import { Link } from "react-router-dom";
import { ArrowForward } from "./Icons";

function Breadcrumb() {
  return (
    <div className="mt-[10vh] mb-[5vh]">
      <nav className="flex">
        <ol className="flex items-center gap-4">
          <li>
            <h2>
              <Link to="/">Home</Link>
            </h2>
          </li>
          <li>
            <h2 className="flex items-center gap-4">
              <ArrowForward />
              Find a Venue
            </h2>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
