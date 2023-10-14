import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Venues from "./views/Venues";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./views/Error404";
import BudgetSteps from "./views/BudgetSteps";

function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/budgeting" element={<BudgetSteps />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
