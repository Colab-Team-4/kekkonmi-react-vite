import "/src/index.css";

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
        <div className="flex items-center gap-32" key={i}>
          <section className="flex basis-1/2 flex-col gap-14">
            <h1 className="whitespace-nowrap font-playFair text-[34px] font-medium">
              {hero.heading}
            </h1>
            <p>{hero.body}</p>
            <button className="btn-solid mt-14 w-72">{hero.button}</button>
          </section>
          <img
            className="h-[45vh] basis-1/2"
            src={hero.image}
            alt={hero.heading}
          />
        </div>
      ))}
    </div>
  );
}

export default LandingHero;
