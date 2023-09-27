import "./index.css";

function Landing() {
  return (
    <div className="header flex min-w-full">
      <div className="header-center mx-6 flex">
        {/* Left Side */}
        <div className="header-text flex h-full w-1/2 flex-col items-start justify-center">
          <div className="header-h1 my-10 font-serif text-2xl font-semibold">
            Seamless Celebrations: Your Perfect Wedding Awaits!
          </div>
          <div className="header-p mb-20">
            Discover a world of effortless elegance and impeccable planning.
            From venue selection to excquisite details, we'll turn your dream
            wedding into a stress-free reality. Start your journey to 'I do'
            today!
          </div>
          <button class="rounded bg-slate-950 px-14 py-2 font-medium text-white hover:bg-blue-700">
            Find a Venue
          </button>
        </div>
        {/* End of Left Side */}
        {/* Right Side */}
        <div className="header-img w-1/2 py-20 pl-40">
          <div className="header-img-center flex flex-wrap ">
            <img
              src="https://picsum.photos/100/100?random=1"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=2"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=3"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=4"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=1"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=2"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=3"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=4"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=1"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=2"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=3"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=4"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=1"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=2"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=3"
              className="h-auto w-40"
            ></img>
            <img
              src="https://picsum.photos/100/100?random=4"
              className="h-auto w-40"
            ></img>
          </div>
        </div>
        {/* End of Right Side */}
      </div>
    </div>
  );
}

export default Landing;
