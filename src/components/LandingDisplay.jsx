const contents = [
  {
    heading: "Gallery",
    body: "Step into the enchanting world of weddings with our meticulously curated collection of mesmerizing photos and heartwarming videos. We've captured every precious moment, from the \"I do's\" to the joyous dances, allowing you to relive the beauty and magic of your special day whenever your heart desires. Welcome to your personal gallery of cherished wedding memories.",
    button: "Explore Now",
    image:
      "https://images.pexels.com/photos/5198287/pexels-photo-5198287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "Top 10 Tips for Stress-Free Wedding Planning",
    body: "Planning a wedding is an exciting journey, but it can also be a stressful one. From choosing the perfect venue to managing your guest list and ensuring every detail is just right, the tasks can seem overwhelming. But fear not, because in this comprehensive guide, we're going to take you through the steps to plan your dream wedding while keeping stress at bay.",
    button: "Read More",
    image:
      "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    heading: "About Us",
    body: "We are Kekkonmi, where dreams become reality. Our experienced team is dedicated to turning your unique vision into a remarkable wedding day. With our expertise and commitment to your happiness, we're your trusted partners throughout this exciting journey. Welcome to your dream wedding experience.",
    button: "Learn More",
    image:
      "https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function LandingDisplay() {
  return (
    <div className="flex flex-col gap-16 bg-[#D9D8D8] px-[5vw] py-[5vh]">
      {contents.map((content, i) => (
        <div className="flex items-center gap-32" key={i}>
          {i % 2 === 0 ? (
            <>
              <section className="flex basis-1/2 flex-col gap-14">
                <h1>{content.heading}</h1>
                <p>{content.body}</p>
                <button className="btn-outline">{content.button}</button>
              </section>
              <img
                className="aspect-auto h-[80vh] basis-1/2"
                src={content.image}
                alt={content.heading}
              />
            </>
          ) : (
            <>
              <img
                className="aspect-auto h-[80vh] basis-1/2"
                src={content.image}
                alt={content.heading}
              />
              <section className="flex basis-1/2 flex-col gap-12">
                <h1>{content.heading}</h1>
                <p>{content.body}</p>
                <button className="btn-outline">{content.button}</button>
              </section>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default LandingDisplay;
