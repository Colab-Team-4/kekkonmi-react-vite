import { Link } from "react-router-dom";
const services = [
  {
    heading: "Find your Inspiration",
    body: "Explore a variety of wedding experiences, from destination weddings in stunning locales to intimate elopements with your closest loved ones, all designed to make your special day truly unforgettable.",
    button: "Explore Now",
    image:
      "/src/assets/ServicesImage1.png",
  },
  {
    heading: "Plan your Budget",
    body: "Budget Bliss: Simplify wedding finances with real-time tracking, payment schedules, and personalized suggestions. Stress-free wedding planning, now at your fingertips.",
    button: "Plan Now",
    image:
    "/src/assets/ServicesImage2.png",
    route: "/budgeting",
  },
  {
    heading: "Create your Checklist",
    body: "Organize your wedding seamlessly with real-time task tracking, deadlines, and personalized to-dos. Effortless wedding planning, now in your pocket.",
    button: "Create Now",
    image:
    "/src/assets/ServicesImage3.png",
  },
];

function ServicesDisplay() {
  return (
    <div className="px-[5vw]">
      <h1 className="mb-2 text-4xl lg:mb-8">Services</h1>
      <div className="relative grid h-fit grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div className="flex flex-col gap-4" key={i}>
            <img
              className="rounded-md aspect-video object-cover"
              src={service.image}
              alt={service.heading}
            />
            <h2>{service.heading}</h2>
            <p className="text-sm">{service.body}</p>
            <div className="mt-16 flex">
              <Link to={service.route}>
                <button className="btnOutline mx-auto w-72 py-2 lg:absolute lg:bottom-0 lg:ml-0">
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
