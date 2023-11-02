import { Link } from "react-router-dom";

const venuesLinks = [
  {
    page: "Find a Venue",
    route: "/venues",
  },
  {
    page: "Venue Review",
    route: "",
  },
  {
    page: "Venue Booking",
    route: "",
  },
];

function VenuesDropdown() {
  return (
    <div className="w-full rounded-md bg-white text-lg font-normal text-[#6E7C99] shadow-md">
      {venuesLinks.map((link, i) => (
        <li
          key={i}
          className="flex h-12 w-full cursor-pointer items-center rounded-sm pl-4 pr-6 hover:bg-[#F4E2E6]"
        >
          <Link to={link.route}>{link.page}</Link>
        </li>
      ))}
    </div>
  );
}

export default VenuesDropdown;
