import { useState } from "react";
import PropTypes from "prop-types";

const guestCapacityOptions = [
  "0-50",
  "51-100",
  "101-150",
  "151-200",
  "201-250",
  "251-300",
  "300+",
];
const priceOptions = [
  "$ - Inexpensive",
  "$$ - Affordable",
  "$$$ - Moderate",
  "$$$$ - Luxury",
];
const venueTypes = [
  "Backyard",
  "Ballroom",
  "Barn",
  "Beach",
  "Brew & Distillery",
  "Castle",
  "City Hall",
  "Country Club",
  "Cruise",
  "Desert",
  "Estate",
  "Garden",
  "Historic Venue",
  "Hotel",
  "Industrial & Warehouse",
  "Library",
  "Loft",
  "Mountain",
  "Museum",
  "Park",
  "Religious Setting",
  "Restaurant",
  "Rooftop",
  "Tented",
  "Trees",
  "Vineyard & Winery",
];
const venueAmenities = [
  "Ceremony Area",
  "Dressing Room",
  "Handicap Accessible",
  "Indoor Event Space",
  "Liability Insurance",
  "On-site Accommodations",
  "Reception Area",
  "Wireless Internet",
];
const vendorTeams = [
  "Wedding Bands",
  "Wedding Catering",
  "Wedding Cake",
  "Wedding DJ",
  "Wedding Dress",
  "Wedding Flowers",
  "Wedding Hair & Makeup",
  "Wedding Invitations",
  "Wedding Photograpers",
  "Wedding Planners/Designers",
  "Wedding Rings",
  "Wedding Videographers",
];
const affiliations = ["Destination Weddings"];
const diversityFilter = [
  "Asian-owned Business",
  "Black-owned Business",
  "Hispanic-Latina-owned Business",
  "Native-American-owned Business",
  "Pacific Islander-owned Business",
  "Veteran-owned Business",
  "Woman-owned Business",
];
const outdoorsFilter = ["Outdoor Event Space", "Covered Outdoor Space"];

const options = [
  { category: "Guest Capacity", options: guestCapacityOptions },
  { category: "Price", options: priceOptions },
  { category: "Diversity", options: diversityFilter },
  { category: "Venue Types", options: venueTypes },
  { category: "Venue Amenities", options: venueAmenities },
  { category: "Venue Vendors", options: vendorTeams },
  { category: "Affiliations", options: affiliations },
  { category: "Outdoors", options: outdoorsFilter },
];

const moreFilterOptions = [
  { category: "Guest Capacity", options: guestCapacityOptions },
  { category: "Venue Types", options: venueTypes },
  { category: "Venue Amenities", options: venueAmenities },
  { category: "Venue Vendors", options: vendorTeams },
  { category: "Affiliations", options: affiliations },
];
const diversityFilterOptions = [
  { category: "Diversity", options: diversityFilter },
];
const priceFilterOptions = [{ category: "Price", options: priceOptions }];
const outdoorsFilterOptions = [
  { category: "Outdoors", options: outdoorsFilter },
];

function CloseIcon() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path
        d="M2.66634 24.1666L0.333008 21.8333L9.66634 12.4999L0.333008 3.16659L2.66634 0.833252L11.9997 10.1666L21.333 0.833252L23.6663 3.16659L14.333 12.4999L23.6663 21.8333L21.333 24.1666L11.9997 14.8333L2.66634 24.1666Z"
        fill="#6E7C99"
      />
    </svg>
  );
}

ModalCard.propTypes = {
  category: PropTypes.string,
  options: PropTypes.array,
  selectedOptions: PropTypes.object,
  setSelectedOptions: PropTypes.func,
  selectedRadio: PropTypes.string,
  setSelectedRadio: PropTypes.func,
  modalType: PropTypes.string,
  resetKey: PropTypes.number,
};
function ModalCard({
  category,
  options,
  selectedOptions,
  setSelectedOptions,
  selectedRadio,
  setSelectedRadio,
  modalType,
  resetKey,
}) {
  const handleOptionChange = (e) => {
    const option = e.target.name;
    const isChecked = e.target.checked;
    if (category === "Guest Capacity") {
      setSelectedRadio(option);
    } else {
      setSelectedOptions((prevSelected) => {
        const prevOptions = prevSelected[category] || [];
        const newOptions = isChecked
          ? [...prevOptions, option]
          : prevOptions.filter((o) => o !== option);
        return { ...prevSelected, [category]: newOptions };
      });
    }
  };

  const rows = Math.ceil(options.length / 2);
  const customGridRows = {
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
  };

  return (
    <div className="flex flex-col gap-4 text-[#161616]">
      {modalType && <h2 className="ml-[4%] text-lg">{category}</h2>}
      <div
        style={modalType || category === "Guest Capacity" ? customGridRows : {}}
        className={`grid ${
          category === "Guest Capacity" || modalType === "desktop"
            ? "grid-flow-col grid-cols-2"
            : "grid-cols-1 lg:ml-[12.5%]"
        }`}
      >
        {options.map((option, i) => (
          <div
            key={i}
            className={`${modalType ? "ml-[10%]" : ""} flex items-center`}
          >
            <input
              key={`radio-${resetKey}`}
              id={option}
              name={category === "Guest Capacity" ? category : option}
              type={category === "Guest Capacity" ? "radio" : "checkbox"}
              className={`h-4 w-4 text-violet-600 duration-150 focus:ring-violet-600 ${
                category === "Guest Capacity" ? "" : "rounded-sm"
              } `}
              checked={selectedOptions[category]?.includes(option)}
              defaultChecked={
                selectedRadio !== null && selectedRadio === option
              }
              onChange={handleOptionChange}
            />
            <label
              htmlFor={option}
              className="mb-1 ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

FilterModals.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  selectedOptions: PropTypes.object,
  setSelectedOptions: PropTypes.func,
  selectedRadio: PropTypes.object,
  setSelectedRadio: PropTypes.func,
  modalType: PropTypes.string,
  modalTransition: PropTypes.string,
  setFilteredVenues: PropTypes.func,
};
function FilterModals({
  isOpen,
  closeModal,
  selectedOptions,
  setSelectedOptions,
  selectedRadio,
  setSelectedRadio,
  modalType,
  modalTransition,
  setFilteredVenues,
}) {
  const [resetKey, setResetKey] = useState(0);

  const resetFilters = (category) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = { ...prevSelected };
      delete newSelected[category];
      return newSelected;
    });
    if (category === "Guest Capacity") {
      setSelectedRadio(null);
    }
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div
        onClick={closeModal}
        className={`fixed inset-0 -z-10 bg-black opacity-5 transition-all duration-100 ease-in-out ${
          isOpen ? "" : "invisible"
        }`}
      ></div>
      <div
        className={`flex h-full w-full flex-col gap-4 overflow-auto bg-white p-4 ${modalTransition}`}
      >
        {modalType === "mobile" || modalType === "desktop" ? (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-medium">More Filters</h1>
              <div
                className="scale-90 cursor-pointer duration-300 hover:scale-110"
                onClick={closeModal}
              >
                <CloseIcon />
              </div>
            </div>
            <hr />
          </>
        ) : null}
        {modalType === "mobile" &&
          options.map((optionSet, i) => (
            <ModalCard
              key={i}
              category={optionSet.category}
              options={optionSet.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
              modalType={modalType}
              resetKey={resetKey}
            />
          ))}
        {modalType === "outdoor" &&
          outdoorsFilterOptions.map((optionSet, i) => (
            <ModalCard
              key={i}
              category={optionSet.category}
              options={optionSet.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          ))}
        {modalType === "price" &&
          priceFilterOptions.map((optionSet, i) => (
            <ModalCard
              key={i}
              category={optionSet.category}
              options={optionSet.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          ))}
        {modalType === "diversity" &&
          diversityFilterOptions.map((optionSet, i) => (
            <ModalCard
              key={i}
              category={optionSet.category}
              options={optionSet.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
            />
          ))}
        {modalType === "desktop" &&
          moreFilterOptions.map((optionSet, i) => (
            <ModalCard
              key={i}
              category={optionSet.category}
              options={optionSet.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedRadio={selectedRadio}
              setSelectedRadio={setSelectedRadio}
              modalType={modalType}
              resetKey={resetKey}
            />
          ))}
        {modalType === "mobile" || modalType === "desktop" ? (
          <div className="flex h-full w-full gap-4">
            <button
              onClick={() => {
                if (modalType === "mobile") {
                  options.forEach((optionSet) =>
                    resetFilters(optionSet.category),
                  );
                } else if (modalType === "outdoor") {
                  outdoorsFilterOptions.forEach((optionSet) =>
                    resetFilters(optionSet.category),
                  );
                } else if (modalType === "price") {
                  priceFilterOptions.forEach((optionSet) =>
                    resetFilters(optionSet.category),
                  );
                } else if (modalType === "diversity") {
                  diversityFilterOptions.forEach((optionSet) =>
                    resetFilters(optionSet.category),
                  );
                } else if (modalType === "desktop") {
                  moreFilterOptions.forEach((optionSet) =>
                    resetFilters(optionSet.category),
                  );
                }
              }}
              className="btnOutline mobileText basis-1/2 py-2"
            >
              {modalType === "mobile" || modalType === "desktop"
                ? "Reset"
                : "Clear"}
            </button>
            <button
              onClick={closeModal}
              className="btnBudgetSolid mobileText basis-1/2 py-2"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex h-full w-full gap-4">
            <button
              onClick={resetFilters}
              className="mobileText basis-1/2 py-2"
            >
              Clear
            </button>
            <button onClick={closeModal} className="mobileText basis-1/2 py-2">
              Save
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FilterModals;
