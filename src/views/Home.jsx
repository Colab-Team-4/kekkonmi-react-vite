import LandingHero from "../components/LandingHero";
import ServicesDisplay from "../components/ServicesDisplay";
import LandingDisplay from "../components/LandingDisplay";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col gap-[5vh]">
      <LandingHero />
      <ServicesDisplay />
      <LandingDisplay />
      <Footer />
    </div>
  );
}

export default Home;
