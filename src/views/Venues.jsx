import Breadcrumb from "../components/Breadcrumb";
import VenueSearchDisplay from "../components/VenueSearchDisplay";

function Venues() {
  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb />
      <VenueSearchDisplay />
    </div>
  );
}

export default Venues;
