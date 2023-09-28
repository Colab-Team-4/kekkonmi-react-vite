import React from 'react'

function About() {
    var aboutText = `We are Kekkonmi, where dreams become reality. Our experienced team is dedicated to turning your unique vision into a remarkable wedding day. With our expertise and commitment to your happiness, we're your trusted partners throughout this exciting journey. Welcome to your dream wedding experience.`;
  var aboutButton = `Learn More`;
  var aboutImage = `https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  return (
    <div className="about min-h-screen min-w-full flex">
      <div className="about-center mx-16 flex items-center justify-evenly">
        {/* about Left */}
        <div className="about-left w-5/12 flex flex-col gap-10">
          <div className="about-title font-serif text-5xl font-semibold">
          About Us
          </div>
          <div className="about-text text-lg">{aboutText}</div>
          <div className="about-button">
            <button class="rounded bg-slate-950 px-14 py-2 font-medium text-white hover:bg-blue-700">
              {aboutButton}
            </button>
          </div>
        </div>
        {/* End of about Left */}
        {/* about Right */}
        <div className="about-right w-6/12 flex justify-center items-center">
          <div className="about-img flex items-center justify-center">
            <img src={aboutImage} className="w-11/12"></img>
          </div>
        </div>
        {/* End of about Right */}
      </div>
    </div>
  );
}

export default About
