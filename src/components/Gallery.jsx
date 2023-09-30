function Gallery() {
  const galleryText = `Step into the enchanting world of weddings with our meticulously
    curated collection of mesmerizing photos and heartwarming videos.
    We've captured every precious moment, from the 'I do's' to the
    joyous dances, allowing you to relive the beauty and magic of your
    special day whenever your heart desires. Welcome to your personal
    gallery of cherished wedding memories.`;
  const galleryButton = `Explore Now`;
  const galleryImage = `https://images.pexels.com/photos/5198287/pexels-photo-5198287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  return (
    <div className="gallery min-h-screen min-w-full flex">
      <div className="gallery-center mx-auto flex items-center justify-center">
        {/* Gallery Left */}
        <div className="gallery-left w-5/12 flex flex-col gap-10">
          <h1 className="gallery-title">
            Gallery
          </h1>
          <p className="gallery-text">{galleryText}</p>
          <div className="gallery-button">
            <button class="rounded bg-slate-950 px-14 py-2 text-white hover:bg-blue-700">
              {galleryButton}
            </button>
          </div>
        </div>
        {/* End of Gallery Left */}
        {/* Gallery Right */}
        <div className="gallery-right w-6/12 flex justify-center items-center">
          <div className="gallery-img flex items-center justify-center">
            <img src={galleryImage} className="w-11/12"></img>
          </div>
        </div>
        {/* End of Gallery Right */}
      </div>
    </div>
  );
}

export default Gallery;
