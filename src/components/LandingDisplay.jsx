import LandingOne from "../assets/Gallery.png";
import TopTen from "../assets/TopTen.png";
import AboutUs from "../assets/AboutUs.png";

const contents = [
  {
    heading: "Gallery",
    body: "Step into the enchanting world of weddings with our meticulously curated collection of mesmerizing photos and heartwarming videos. We've captured every precious moment, from the \"I do's\" to the joyous dances, allowing you to relive the beauty and magic of your special day whenever your heart desires. Welcome to your personal gallery of cherished wedding memories.",
    button: "Explore Now",
    image: LandingOne,
  },
  {
    heading: "Top 10 Tips for Stress-Free Wedding Planning",
    body: "Planning a wedding is an exciting journey, but it can also be a stressful one. From choosing the perfect venue to managing your guest list and ensuring every detail is just right, the tasks can seem overwhelming. But fear not, because in this comprehensive guide, we're going to take you through the steps to plan your dream wedding while keeping stress at bay.",
    button: "Read More",
    image: TopTen,
  },
  {
    heading: "About Us",
    body: "We are Matrimoni, where dreams become reality. Our experienced team is dedicated to turning your unique vision into a remarkable wedding day. With our expertise and commitment to your happiness, we're your trusted partners throughout this exciting journey. Welcome to your dream wedding experience.",
    button: "Learn More",
    image: AboutUs,
  },
];

function LandingDisplay() {
  return (
    <div className="flex flex-col bg-[#F8F8F8] px-[5vw] py-[5vh]">
      {contents.map((content, i) => (
        <div
          className="mb-20 flex flex-col items-center gap-4 lg:flex-row lg:gap-20"
          key={i}
        >
          <section
            className={`flex basis-1/2 flex-col gap-6 lg:gap-12 ${
              i % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <h1 className="text-2xl font-semibold lg:text-4xl lg:font-normal">
              {content.heading}
            </h1>
            <p className="text-base lg:max-w-2xl">{content.body}</p>
            <button className="btnOutline mb-5 w-72 self-center py-2 lg:self-start">
              {content.button}
            </button>
          </section>
          <div
            className={`flex h-[80vh] basis-1/2 items-center ${
              i % 2 === 0 ? "lg:order-2 lg:justify-end" : "lg:order-1"
            }`}
          >
            <img
              className="w-full rounded-lg object-cover lg:h-[80%]"
              src={content.image}
              alt={content.heading}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingDisplay;
