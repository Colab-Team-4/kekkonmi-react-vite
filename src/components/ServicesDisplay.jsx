const services = [
  {
    heading: "Find your Inspiration",
    body: "Explore a variety of wedding experiences, from destination weddings in stunning locales to intimate elopements with your closest loved ones, all designed to make your special day truly unforgettable.",
    button: "Explore Now",
    image:
      "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Plan your Budget",
    body: "Budget Bliss: Simplify wedding finances with real-time tracking, payment schedules, and personalized suggestions. Stress-free wedding planning, now at your fingertips.",
    button: "Plan Now",
    image:
      "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Create your Checklist",
    body: "Organize your wedding seamlessly with real-time task tracking, deadlines, and personalized to-dos. Effortless wedding planning, now in your pocket.",
    button: "Create Now",
    image:
      "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function ServicesDisplay() {
  return (
    <div className="px-[5vw]">
      <h1 className="mb-10">Services</h1>
      <div className="relative grid h-fit grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div className="flex flex-col gap-10" key={i}>
            <img
              className="rounded-md"
              src={service.image}
              alt={service.heading}
            />
            <h2>{service.heading}</h2>
            <p className="text-[20px]">{service.body}</p>
            <div className="mt-16 flex justify-center">
              <button className="btn-outline absolute bottom-0 w-72">
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesDisplay;
