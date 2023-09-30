import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ServicesDisplay from "../components/ServicesDisplay";
import LandingDisplay from "../components/LandingDisplay";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col gap-[5vh]">
      <Navbar />
      <Header />
      <ServicesDisplay />
      <LandingDisplay />
      <Footer />
    </div>
  );
}

export default Home;
