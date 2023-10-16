import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Venues from "./views/Venues";
import VenueDetails from "./views/VenueDetails";
import VenueContact from "./views/VenueContact";
import VenueConfirmation from "./views/VenueConfirmation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./views/Error404";
import BudgetSteps from "./views/BudgetSteps";
import venues from "./data/venueData.json";
import NavModal from "./components/NavModal";
import Register from "./views/Register";

function App() {
  const [filteredVenues, setFilteredVenues] = useState(venues);

  const [hideNavModal, setHideNavModal] = useState("right-full");
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const handleShowNavModal = () => {
    setHideNavModal("");
    setIsNavModalOpen(true);
  };

  const handleCloseNavModal = () => {
    if (isNavModalOpen === true) {
      setHideNavModal("right-full");
      setIsNavModalOpen(false);
    }
  };

  const handleShowRegister = () => {
    setIsRegisterVisible(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterVisible(false);
  };

  return (
    <div className="flex h-screen flex-col">
      <NavModal setHideNavModal={setHideNavModal} hideNavModal={hideNavModal} />
      {isRegisterVisible && <Register handleCloseRegister={handleCloseRegister} />}
      <div
        onClick={handleCloseNavModal}
        className="flex h-screen flex-col justify-between"
      >
        <Navbar
          handleShowNavModal={handleShowNavModal}
          handleShowRegister={handleShowRegister}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmation" element={<VenueConfirmation />} />
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
          <Route path="/venues/:venueName/contact" element={<VenueContact />} />
          <Route
            path="/venues/:venueName/contact/confirmation"
            element={<VenueConfirmation />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
