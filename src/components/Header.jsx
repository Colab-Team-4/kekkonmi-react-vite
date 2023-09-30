import "/src/index.css"

function Header() {
  const headerImg = `https://images.pexels.com/photos/372225/pexels-photo-372225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  const headerTitle = `Seamless Celebrations: Your Perfect Wedding Awaits!`
  const headerText = `Discover a world of effortless elegance and impeccable planning.
  From venue selection to exquisite details, we'll turn your dream
  wedding into a stress-free reality. Start your journey to 'I do'
  today!`
  const headerButton = `Find a Venue`

  return (
    <div className="header flex min-w-full min-h-screen">
      <div className="header-center mx-16 flex">
        {/* Header Left */}
        <div className="header-text flex h-full w-1/2 flex-col items-start justify-center pl-10">
          <h1 className="header-h1 my-10">
            {headerTitle}
          </h1>
          <p className="header-p mb-20">
            {headerText}
          </p>
          <button>
            {headerButton}
          </button>
        </div>
        {/* End of Header Left */}
        {/* Header Right */}
        <div className="header-img w-1/2 h-full flex justify-center items-center">
          <div className="header-img-center flex justify-center">
            <img src={headerImg} className="w-10/12"></img>
          </div>
        </div>
        {/* End of Header Right */}
      </div>
    </div>
  );
}

export default Header;
