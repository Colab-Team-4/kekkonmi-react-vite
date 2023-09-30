function About() {
  const aboutText = `We are Kekkonmi, where dreams become reality. Our experienced team is dedicated to turning your unique vision into a remarkable wedding day. With our expertise and commitment to your happiness, we're your trusted partners throughout this exciting journey. Welcome to your dream wedding experience.`;
  const aboutButton = `Learn More`;
  const aboutImage = `https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  return (
    <div className="about flex min-h-screen min-w-full">
      <div className="about-center mx-16 flex items-center justify-evenly">
        {/* about Left */}
        <div className="about-left flex w-5/12 flex-col gap-10">
          <h1 className="about-title">
            About Us
          </h1>
          <p className="about-text">{aboutText}</p>
          <div className="about-button">
            <button class="rounded bg-slate-950 px-14 py-2 text-white hover:bg-blue-700">
              {aboutButton}
            </button>
          </div>
        </div>
        {/* End of about Left */}
        {/* about Right */}
        <div className="about-right flex w-6/12 items-center justify-center">
          <div className="about-img flex items-center justify-center">
            <img src={aboutImage} className="w-11/12"></img>
          </div>
        </div>
        {/* End of about Right */}
      </div>
    </div>
  );
}

export default About;
