import { Link } from "react-router-dom";
const services = [
  {
    heading: "Find your Inspiration",
    body: "Explore a variety of wedding experiences, from destination weddings in stunning locales to intimate elopements with your closest loved ones, all designed to make your special day truly unforgettable.",
    button: "Explore Now",
    image: "/src/assets/ServicesImage1.png",
  },
  {
    heading: "Plan your Budget",
    body: "Budget Bliss: Simplify wedding finances with real-time tracking, payment schedules, and personalized suggestions. Stress-free wedding planning, now at your fingertips.",
    button: "Plan Now",
    image: "/src/assets/ServicesImage2.png",
    route: "/budgeting",
  },
  {
    heading: "Create your Checklist",
    body: "Organize your wedding seamlessly with real-time task tracking, deadlines, and personalized to-dos. Effortless wedding planning, now in your pocket.",
    button: "Create Now",
    image: "/src/assets/ServicesImage3.png",
  },
];

function ServicesDisplay() {
  return (
    <div className="px-[5vw] lg:-mt-10">
      <h1 className="mb-10 text-4xl font-semibold">Services</h1>
      <div className="relative grid h-fit grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div className="flex flex-col gap-4" key={i}>
            <img
              className="mb-4 h-72 w-full rounded-md object-cover lg:h-96"
              src={service.image}
              alt={service.heading}
            />
            <h2>{service.heading}</h2>
            <p className="text-lg">{service.body}</p>
            <div className="mx-auto mb-10 mt-6 flex lg:mx-0 lg:mt-12">
              <Link to={service.route}>
                <button className="btnOutlineHome mx-auto py-2 text-black duration-300 lg:font-bold lg:text-[#616161]">
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
