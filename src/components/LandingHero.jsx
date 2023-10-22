import { Link } from "react-router-dom";
import "../index.css";

const heroes = [
  {
    heading: "Seamless Celebrations: Your Perfect Wedding Awaits!",
    body: 'Discover a world of effortless elegance and impeccable planning. From venue selection to exquisite details, we\'ll turn your dream wedding into a stress-free reality. Start your journey to "I do" today!',
    button: "Find a Venue",
    image:
      "https://images.pexels.com/photos/372225/pexels-photo-372225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function LandingHero() {
  return (
    <div className="mt-[10vh] flex flex-col gap-16 px-[5vw] py-[5vh]">
      {heroes.map((hero, i) => (
        <div
          className="flex flex-col items-center justify-between gap-4 lg:flex-row"
          key={i}
        >
          <section className="order-2 flex w-full flex-col gap-8 lg:order-1 lg:w-[41%]">
            <h1 className="font-playFair text-xl font-medium lg:whitespace-nowrap">
              {hero.heading}
            </h1>
            <p className="text-sm">{hero.body}</p>
            <Link
              to="/venues"
              className="btnSolid mobileText mt-10 w-52 self-center py-2 text-center lg:self-start"
            >
              {hero.button}
            </Link>
          </section>
          <img
            className="order-1 aspect-video w-full rounded-lg object-cover lg:order-2 lg:w-[50%]"
            src={hero.image}
            alt={hero.heading}
          />
        </div>
      ))}
    </div>
  );
}

export default LandingHero;
