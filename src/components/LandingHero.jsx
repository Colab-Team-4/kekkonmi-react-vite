import { Link } from "react-router-dom";
import "../index.css";
import Landing from "../assets/Landing.png";

const heroes = [
  {
    heading: "Crafting Love Stories",
    body: 'Experience the magic of your love story coming to life as we meticulously plan and execute every detail of your wedding. From the moment your eyes meet to the day you say "I do," were here to weave your unique tale into a fairy-tale celebration.',
    button: "Find a Venue",
    image: Landing,
  },
];

function LandingHero() {
  return (
    <div className="mt-[10vh] flex flex-col gap-16 px-[5vw] py-[5vh]">
      {heroes.map((hero, i) => (
        <div
          className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10"
          key={i}
        >
          <section className="order-2 flex w-full flex-col gap-8 lg:order-1 lg:w-[41%]">
            <h1 className="font-playFair text-2xl font-semibold lg:whitespace-nowrap">
              {hero.heading}
            </h1>
            <p className="w-full text-base leading-5 lg:w-[36rem]">
              {hero.body}
            </p>
            <Link
              to="/venues"
              className="btnSolid mobileText flex h-14 w-56 items-center justify-center self-center lg:mt-16 lg:self-start"
            >
              {hero.button}
            </Link>
          </section>
          <img
            className="order-1 aspect-video w-full rounded-lg object-cover lg:order-2 lg:aspect-auto lg:w-[40%]"
            src={hero.image}
            alt={hero.heading}
          />
        </div>
      ))}
    </div>
  );
}

export default LandingHero;
