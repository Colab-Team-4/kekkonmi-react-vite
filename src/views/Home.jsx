import Navbar from "/src/components/Navbar"
import Header from "/src/components/Header"
import ServiceOffer from "/src/components/ServiceOffer"
import Gallery from "/src/components/Gallery"
import Tips from "/src/components/Tips"
import About from "/src/components/About"
import Footer from "/src/components/Footer"
import "/src/index.css"

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ServiceOffer />
      <Gallery />
      <Tips />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
