import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Venues from "./views/Venues";
import VenueDetails from "./views/VenueDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./views/Error404";
import BudgetSteps from "./views/BudgetSteps";
import venues from "./data/venueData.json";

function App() {
  const [filteredVenues, setFilteredVenues] = useState(venues);

  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/venues"
          element={
            <Venues
              filteredVenues={filteredVenues}
              setFilteredVenues={setFilteredVenues}
            />
          }
        />
        <Route path="/budgeting" element={<BudgetSteps />} />
        <Route
          path="/venues/:venueName"
          element={<VenueDetails filteredVenues={filteredVenues} />}
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
