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

function App() {
  const [filteredVenues, setFilteredVenues] = useState(venues);

  const [hideNavModal, setHideNavModal] = useState("right-full");
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [filterBlur, setFilterBlur] = useState("");
  const [overflowHidden, setOverflowHidden] = useState("");
  const [pointerEvents, setPointerEvents] = useState("");

  const handleShowNavModal = () => {
    setHideNavModal("");
    setIsNavModalOpen(true);
    setFilterBlur("opacity-50");
    setOverflowHidden("overflow-hidden");
  };

  const handleCloseNavModal = () => {
    if (isNavModalOpen === true) {
      setHideNavModal("right-full");
      setIsNavModalOpen(false);
      setFilterBlur("");
      setOverflowHidden("");
    }
  };
  // Blur the background when Register modal is opened
  // setOverflowHidden stops the background from scrolling when Register modal is opened
  const handleShowRegister = () => {
    setIsRegisterVisible(true);
    setIsLoginVisible(false);
    setFilterBlur("opacity-50");
    setOverflowHidden("overflow-hidden");
    setPointerEvents("pointer-events-none")
  };
  // Remove the blur when Register modal is closed
  const handleCloseRegister = () => {
    setIsRegisterVisible(false);
    setFilterBlur("");
    setOverflowHidden("");
    setPointerEvents("");
  };

  const handleShowLogin = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
    setFilterBlur("opacity-50");
    setOverflowHidden("overflow-hidden");
    setPointerEvents("pointer-events-none")
  };
  // Remove the blur when Register modal is closed
  const handleCloseLogin = () => {
    setIsLoginVisible(false);
    setFilterBlur("");
    setOverflowHidden("");
    setPointerEvents("");
  };

  return (
    <div className="relative flex h-screen flex-col">
      <NavModal setHideNavModal={setHideNavModal} hideNavModal={hideNavModal} />
      <div className="absolute z-50 lg:left-0 lg:right-0 lg:top-8 lg:ml-auto lg:mr-auto lg:w-[700px] xl:top-32">
        {isRegisterVisible && (
          <Register
            handleCloseRegister={handleCloseRegister}
            handleShowLogin={handleShowLogin}
          />
        )}
        {isLoginVisible && (
          <Login
            handleCloseLogin={handleCloseLogin}
            handleShowRegister={handleShowRegister}
          />
        )}
      </div>
      <div
        onClick={handleCloseNavModal}
        className={`flex h-screen flex-col justify-between ${filterBlur} ${overflowHidden} ${pointerEvents}`}
      >
        <Navbar
          handleShowNavModal={handleShowNavModal}
          handleShowRegister={handleShowRegister}
          handleShowLogin={handleShowLogin}
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
          <Route path="/budget" element={<Budget />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
