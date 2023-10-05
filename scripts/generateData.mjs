import { faker } from "@faker-js/faker";
import { createClient } from "pexels";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const guestCapacityOptions = [
  "0 - 50",
  "51 - 100",
  "101 - 150",
  "151 - 200",
  "201 - 250",
  "251 - 300",
  "300+",
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
const weddingVendorTeam = ["Destination Weddings"];
const diversityFilter = [
  "Asian-owned Business",
  "Black-owned Business",
  "Hispanic-Latina-owned Business",
  "Native-American-owned Business",
  "Pacific Islander-owned Business",
  "Veteran-owned Business",
  "Woman-owned Business",
];
const priceFilter = [
  "$ - Inexpensive",
  "$$ - Affordable",
  "$$$ - Moderate",
  "$$$$ - Luxury",
];
const descriptionTemplates = [
  "{name} is a top-tier wedding venue located in the heart of {location}.",
  "Our venue is best known for its {feature1} and {feature2}.",
  "Nestled in {location}, {name} provides an idyllic setting for your special day.",
  "With {feature1} and {feature2}, we have everything you need for a memorable event.",
  "Couples love the {feature1} that add a touch of elegance to any ceremony.",
  "{name} boasts {feature2} that make it unique among venues in {location}.",
  "Our dedicated team in {location} will work with you to make your wedding dreams come true.",
  "You'll fall in love with the {feature1} that make {name} a one-of-a-kind venue.",
  "If you're looking for a venue in {location} that offers {feature1}, look no further than {name}.",
  "Experience the magic of {feature1} in a stunning setting at {name}.",
  "Your search for the perfect wedding venue in {location} ends with {name}, known for its {feature2}.",
  "Our {feature1} sets the stage for a romantic and unforgettable wedding day.",
  "Celebrate your love with a backdrop of {feature2} only at {name}.",
  "Couples rave about our {feature1}, making {name} a sought-after venue in {location}.",
  "Come and discover why {name} is {location}'s hidden gem for weddings, featuring {feature1} and {feature2}.",
  "{name} is not just a venue; it's an experience that includes {feature1} and {feature2}.",
  "The combination of {feature1} and {feature2} sets {name} apart from other venues in {location}.",
  "Our venue is the epitome of elegance, offering {feature1} that will leave you and your guests in awe.",
];

const generateFeatures = () => {
  const venueType = generateRandomElement(venueTypes);
  const amenities = generateRandomElements(venueAmenities);
  return [venueType, ...amenities];
};

const generateDescription = (venueName, location, features) => {
  const feature1 = features[0];
  const feature2 = features[1] || features[0];
  const chosenTemplates = Array.from({ length: 3 }, () => {
    const template =
      descriptionTemplates[
        Math.floor(Math.random() * descriptionTemplates.length)
      ];
    return template
      .replace("{name}", venueName)
      .replace("{location}", location)
      .replace("{feature1}", feature1)
      .replace("{feature2}", feature2);
  });
  return chosenTemplates.join(" ");
};

const generateRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomElements = (array) => {
  return array.filter(() => Math.random() < 0.5);
};

const client = createClient(process.env.PEXELS_API_KEY);
const fetchPexelsImage = async (venue) => {
  const query = `wedding venue ${venue.name} ${
    venue.location
  } ${venue.features.join(" ")}`;
  try {
    const photos = await client.photos.search({ query, per_page: 21 });
    const coverUrl = photos.photos[0].src.original;
    const galleryUrls = photos.photos
      .slice(1)
      .map((photo) => photo.src.original);
    return { coverUrl, galleryUrls };
  } catch (error) {
    console.error(`Failed to fetch images: ${error}`);
    return { coverUrl: "", galleryUrls: [] };
  }
};

const generateVenue = async () => {
  const venueName = faker.company.name();
  const city = faker.location.city();
  const country = faker.location.country();
  const location = `${city}, ${country}`;
  const features = generateFeatures();
  const { coverUrl, galleryUrls } = await fetchPexelsImage({
    name: venueName,
    location,
    features,
  });

  return {
    name: venueName,
    location,
    city,
    country,
    isFavorited: false,
    description: generateDescription(venueName, location, features),
    pricing: generateRandomElement(priceFilter),
    guestCapacity: generateRandomElement(guestCapacityOptions),
    venueType: generateRandomElement(venueTypes),
    amenities: generateRandomElements(venueAmenities),
    vendorTeam: generateRandomElements(weddingVendorTeam),
    diversity: generateRandomElements(diversityFilter),
    coverUrl,
    galleryUrls,
  };
};

const generateAllVenues = async (n) => {
  const venues = await Promise.all(Array.from({ length: n }, generateVenue));
  fs.writeFileSync(
    "./src/data/venueData.json",
    JSON.stringify(venues, null, 2),
  );
};

generateAllVenues(100).catch((err) => console.error(err));
