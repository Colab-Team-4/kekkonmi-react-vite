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

function PlanningTools({ setIsNavPlanningOpen }) {
  return (
    <div className="w-full rounded-md bg-white text-lg font-normal text-[#6E7C99] shadow-md">
      {planningLinks.map((link, i) => (
        <li
          key={i}
          className="flex h-12 w-full cursor-pointer items-center rounded-sm pl-4 pr-6 duration-300 hover:bg-[#F4E2E6]"
          onClick={() => setIsNavPlanningOpen(false)}
        >
          <Link to={link.route}>{link.page}</Link>
        </li>
      ))}
    </div>
  );
}

export default PlanningTools;
