import LandingHero from "../components/LandingHero";
import ServicesDisplay from "../components/ServicesDisplay";
import LandingDisplay from "../components/LandingDisplay";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="flex flex-col gap-[5vh]">
      <LandingHero />
      <ServicesDisplay />
      <LandingDisplay />
      <Contact />
    </div>
  );
}

export default Home;
