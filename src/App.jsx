import "./index.css";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
import Services from "./services/Services";
import Gallery from "./Gallery";
import Tips from "./Tips";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Gallery />
      <Tips />
      <About />
      <Footer />
    </div>
  );
}

export default App;
