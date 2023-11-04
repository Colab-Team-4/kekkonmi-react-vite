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
import Login from "./views/Login";
import Budget from "./views/Budget";
import SavedVenues from "./views/SavedVenues";

function App() {
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [savedVenues, setSavedVenues] = useState([]);

  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleShowNavModal = () => {
    if (!isNavModalOpen) {
      setIsNavModalOpen(true);
    }
  };
  const handleCloseNavModal = () => {
    if (isNavModalOpen) {
      setIsNavModalOpen(false);
    }
  };

  const handleRegister = () => {
    if (isRegisterVisible) {
      setIsRegisterVisible(false);
    } else {
      setIsRegisterVisible(true);
      setIsLoginVisible(false);
    }
  };

  const handleLogin = () => {
    if (isLoginVisible) {
      setIsLoginVisible(false);
    } else {
      setIsLoginVisible(true);
      setIsRegisterVisible(false);
    }
  };

  const updateSavedVenues = (venue, isFavorited) => {
    if (isFavorited) {
      setSavedVenues((prevSavedVenues) => [...prevSavedVenues, venue]);
    } else {
      setSavedVenues((prevSavedVenues) =>
        prevSavedVenues.filter((v) => v.name !== venue.name),
      );
    }
  };

  return (
    <div className="relative flex h-screen flex-col">
      {isNavModalOpen ? <NavModal /> : ""}
      <div className="absolute z-50 lg:left-0 lg:right-0 lg:top-8 lg:ml-auto lg:mr-auto lg:w-[700px] xl:top-32">
        {isRegisterVisible && (
          <Register handleRegister={handleRegister} handleLogin={handleLogin} />
        )}
        {isLoginVisible && (
          <Login handleLogin={handleLogin} handleRegister={handleRegister} />
        )}
      </div>
      <div
        onClick={handleCloseNavModal}
        className={`flex h-screen flex-col justify-between ${
          isRegisterVisible || isLoginVisible
            ? "pointer-events-none overflow-hidden opacity-50"
            : isNavModalOpen
            ? "overflow-hidden opacity-50"
            : ""
        } `}
      >
        <Navbar
          handleShowNavModal={handleShowNavModal}
          handleRegister={handleRegister}
          handleLogin={handleLogin}
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
                updateSavedVenues={updateSavedVenues}
                savedVenues={savedVenues}
                setSavedVenues={setSavedVenues}
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
          <Route path="/budget" element={<Budget />} />
          <Route
            path="/saved"
            element={
              <SavedVenues
                savedVenues={savedVenues}
                setSavedVenues={setSavedVenues}
                updateSavedVenues={updateSavedVenues}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
