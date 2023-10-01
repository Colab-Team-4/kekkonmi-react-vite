import LandingHero from "../components/LandingHero";
import ServicesDisplay from "../components/ServicesDisplay";
import LandingDisplay from "../components/LandingDisplay";

function Home() {
  return (
    <div className="flex flex-col gap-[5vh]">
      <LandingHero />
      <ServicesDisplay />
      <LandingDisplay />
    </div>
  );
}

export default Home;
