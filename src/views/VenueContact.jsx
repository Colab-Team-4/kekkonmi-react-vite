import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";

function VenueContact() {
  const { venueName } = useParams();
  return (
    <div className="flex flex-col px-[5vw]">
      <Breadcrumb venueName={venueName} />
      <Contact venueName={venueName} />
    </div>
  );
}

export default VenueContact;
