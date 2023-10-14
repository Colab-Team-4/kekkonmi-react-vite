import { faker } from "@faker-js/faker";
import { createClient } from "pexels";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const guestCapacityOptions = [
  "0-50",
  "51-100",
  "101-150",
  "151-200",
  "201-250",
  "251-300",
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
const outdoorsFilter = ["Outdoor Event Space", "Covered Outdoor Space"];

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
  const query = `${venue.name} ${venue.location} ${venue.features.join(
    " ",
  )} wedding venue`;

  try {
    const photos = await client.photos.search({ query, per_page: 6 });
    const coverUrl = photos.photos[0].src.original;
    const galleryUrls = photos.photos
      .slice(1)
      .map((photo) => photo.src.original);
    return { coverUrl, galleryUrls };
  } catch (error) {
    console.error(`Failed to fetch images: ${error.message}`);
    return { coverUrl: "", galleryUrls: [] };
  }
};

const generateVenue = async () => {
  const adjectiveList = [
    "Elegant",
    "Grand",
    "Serene",
    "Charming",
    "Majestic",
    "Enchanting",
    "Stunning",
    "Picturesque",
    "Classical",
    "Timeless",
  ];
  const city = faker.location.city();
  const state = faker.location.state();
  const venueType = generateRandomElement(venueTypes);
  const randomAdjective =
    adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  const venueName = `${randomAdjective} ${venueType} of ${city}`;
  const location = `${city}, ${state}`;
  const streetAddress = faker.location.streetAddress();
  const zipCode = faker.location.zipCode();
  const detailedDesc = faker.lorem.paragraphs(10);
  const features = generateFeatures();
  const startingPrice = Math.floor(Math.random() * 18 + 3) * 1000;
  let pricing;
  if (startingPrice < 5000) {
    pricing = "$ - Inexpensive";
  } else if (startingPrice < 8000) {
    pricing = "$$ - Affordable";
  } else if (startingPrice < 11000) {
    pricing = "$$$ - Moderate";
  } else {
    pricing = "$$$$ - Luxury";
  }
  const { coverUrl, galleryUrls } = await fetchPexelsImage({
    name: venueName,
    location,
    features,
  });
  const rating = parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));
  const reviews = Math.floor(Math.random() * 1000);

  return {
    name: venueName,
    venueType,
    location,
    city,
    state,
    streetAddress,
    zipCode,
    detailedDesc,
    isFavorited: false,
    description: generateDescription(venueName, location, features),
    guestCapacity: generateRandomElement(guestCapacityOptions),
    amenities: generateRandomElements(venueAmenities),
    vendors: generateRandomElements(vendorTeams),
    affiliations: generateRandomElements(affiliations),
    diversity: generateRandomElements(diversityFilter),
    outdoors: generateRandomElements(outdoorsFilter),
    startingPrice,
    pricing,
    coverUrl,
    galleryUrls,
    rating,
    reviews,
  };
};

const generateAllVenues = async (n) => {
  const batchSize = 50;
  const delay = 60000;
  let allVenues = [];

  try {
    const existingData = fs.readFileSync("./src/data/venueData.json", "utf8");
    allVenues = JSON.parse(existingData);
  } catch (error) {
    console.log(
      "No existing venueData.json found, starting with an empty array.",
    );
  }

  for (let i = 0; i < Math.ceil(n / batchSize); i++) {
    try {
      const batch = await Promise.all(
        Array.from({ length: batchSize }, generateVenue),
      );
      const hasEmptyUrls = batch.some(
        (venue) => !venue.coverUrl || venue.galleryUrls.length === 0,
      );

      if (hasEmptyUrls) {
        console.log("Pexels API limit reached. Stopping the script.");
        break;
      }

      allVenues.push(...batch);
      fs.writeFileSync(
        "./src/data/venueData.json",
        JSON.stringify(allVenues, null, 2),
      );
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }

    if (i < Math.ceil(n / batchSize) - 1) {
      console.log(`Waiting for ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

generateAllVenues(500);
