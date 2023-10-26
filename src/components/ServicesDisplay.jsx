import { Link } from "react-router-dom";
import ServiceOne from "../assets/Services1.png";
import ServiceTwo from "../assets/Services2.png";
import ServiceThree from "../assets/Services3.png";

const services = [
  {
    heading: "Find your Inspiration",
    body: "Explore a variety of wedding experiences, from destination weddings in stunning locales to intimate elopements with your closest loved ones, all designed to make your special day truly unforgettable.",
    button: "Explore Now",
    image: ServiceOne,
  },
  {
    heading: "Plan your Budget",
    body: "Budget Bliss: Simplify wedding finances with real-time tracking, payment schedules, and personalized suggestions. Stress-free wedding planning, now at your fingertips.",
    button: "Plan Now",
    image: ServiceTwo,
  },
  {
    heading: "Create your Checklist",
    body: "Organize your wedding seamlessly with real-time task tracking, deadlines, and personalized to-dos. Effortless wedding planning, now in your pocket.",
    button: "Create Now",
    image: ServiceThree,
  },
];

function ServicesDisplay() {
  return (
    <div className="px-[5vw] lg:-mt-10">
      <h1 className="mb-10 text-2xl font-semibold lg:text-4xl lg:font-normal">
        Services
      </h1>
      <div className="relative grid h-fit grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div className="flex flex-col gap-4" key={i}>
            <img
              className="mb-4 w-full rounded-md object-cover lg:aspect-video"
              src={service.image}
              alt={service.heading}
            />
            <h2>{service.heading}</h2>
            <p className="text-base">{service.body}</p>
            <div className="mx-auto mb-10 mt-6 flex lg:mx-0 lg:mt-12">
              <Link to={service.route}>
                <button className="btnOutline mx-auto h-14 w-56 py-2 text-black duration-300 lg:absolute lg:bottom-0 lg:ml-0 lg:font-bold lg:text-[#616161]">
                  {service.button}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesDisplay;
