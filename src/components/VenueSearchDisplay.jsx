import { SearchIcon, FilterIcon } from "./Icons";

function VenueSearchDisplay() {
  return (
    <div className="lg:px-[5vw]">
      <form className="flex flex-col justify-evenly gap-10 lg:flex-row lg:gap-6">
        <div className="flex justify-center gap-5">
          <div className="relative">
            <div className="absolute left-0 flex h-full items-center pl-3">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="venueSearch"
              placeholder="Venues in New York"
              className="input-text mobile-text py-3 pl-16 pr-2 lg:w-[827px] lg:text-[22px]"
            />
          </div>
          <div className="relative md:hidden">
            <button className="btn-solid mobile-text btn-weight-normal group flex h-full w-24 items-center pl-10 lg:text-[22px]">
              <div className="absolute left-0 pl-3">
                <FilterIcon className="fill-current text-white group-hover:text-black" />
              </div>
              Filters
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4 lg:gap-6">
          <button
            className="btn-solid mobile-text w-40 lg:w-60 lg:text-xl"
            type="submit"
          >
            Search
          </button>
          <button className="btn-outline mobile-text w-40 lg:w-60 lg:text-xl">
            Save Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default VenueSearchDisplay;
