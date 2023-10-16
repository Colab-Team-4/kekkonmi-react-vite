import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import LetterImg from "../assets/confirmation.png";

function VenueConfirmation() {
  const { venueName } = useParams();
  return (
    <div className="my-[3vh] flex h-full flex-col justify-center px-[5vw] lg:my-auto">
      {venueName ? (
        <Breadcrumb venueName={venueName} />
      ) : (
        <div className="mt-40"></div>
      )}
      <div className="my-14 flex h-full grow flex-col items-center">
        <div className="flex flex-col items-center gap-8 lg:w-[37%]">
          <img src={LetterImg} alt="Confirmation" className="w-28" />
          <h1 className="-mb-2 text-3xl font-bold leading-3">Thank You!</h1>
          <h2>We&apos;ll be in touch soon.</h2>
          <p className="mobileText text-center text-[#9E9E9E]">
            For immediate assistance, reach us at (555-555-5555) or
            Matrimoni@mail.com. Your wedding journey with us starts here, and
            we&apos;re here to help every step of the way!
          </p>
          <div className="mb-8 flex w-full flex-col items-center justify-between lg:flex-row">
            <Link
              to="/venues"
              className="btnSolid mobileText mx-auto mt-4 flex h-14 w-48 items-center justify-center py-2"
            >
              Continue to Explore
            </Link>
            <button className="btnOutline mobileText mx-auto mt-4 flex h-14 w-48 items-center justify-center py-2">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueConfirmation;
