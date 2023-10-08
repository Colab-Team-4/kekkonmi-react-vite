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
    <div className="mt-[10vh] flex snap-center scroll-mt-20 flex-col gap-16 px-[5vw] py-[5vh]">
      {heroes.map((hero, i) => (
        <div
          className="flex flex-col items-center gap-4 lg:flex-row lg:gap-32"
          key={i}
        >
          <section className="order-2 flex flex-col gap-14 lg:order-1">
            <h1 className="font-playFair text-[34px] font-medium lg:whitespace-nowrap">
              {hero.heading}
            </h1>
            <p>{hero.body}</p>
            <button className="btnSolid mt-1 w-72 self-center py-2 lg:mt-14 lg:self-start">
              {hero.button}
            </button>
          </section>
          <img
            className="order-1 w-full object-cover lg:order-2 lg:h-[600px]"
            src={hero.image}
            alt={hero.heading}
          />
        </div>
      ))}
    </div>
  );
}

export default LandingHero;
