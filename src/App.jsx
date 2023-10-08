import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Venues from "./views/Venues";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./views/Error404";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
