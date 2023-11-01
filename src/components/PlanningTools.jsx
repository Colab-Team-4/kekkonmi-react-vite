import { Link } from "react-router-dom";

const planningLinks = [
  {
    page: "Budget Planner",
    route: "/budgeting",
  },
  {
    page: "Checklist",
    route: "",
  },
  {
    page: "Guest List",
    route: "",
  },
  {
    page: "Timeline",
    route: "",
  },
  {
    page: "Seating Arrangement",
    route: "",
  },
];

function PlanningTools({ setIsNavDropdownOpen }) {
  return (
    <div className="w-full rounded-md bg-white py-2 text-lg font-normal text-[#6E7C99] shadow-md">
      {planningLinks.map((link, i) => (
        <li
          key={i}
          className="w-full rounded-sm py-1 pl-4 pr-6 duration-100 hover:scale-105"
          onClick={() => setIsNavDropdownOpen(false)}
        >
          <Link to={link.route}>{link.page}</Link>
        </li>
      ))}
    </div>
  );
}

export default PlanningTools;
