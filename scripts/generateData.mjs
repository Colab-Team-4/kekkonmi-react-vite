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
  const query = `${venue.name} ${venue.state} ${venue.features.join(" ")} wedding venue scenic -people`;

  let coverUrl = "";
  let galleryUrls = [];

  try {
    const photos = await client.photos.search({ query, per_page: 6 });
    coverUrl = photos.photos[0].src.original;
    galleryUrls = filterBlacklistedUrls(
      photos.photos.slice(1).map((photo) => photo.src.original)
    );

    if (blacklistedUrls.includes(coverUrl) || galleryUrls.includes(coverUrl)) {
      let newCoverUrl = await fetchSingleImage(query);
      while (blacklistedUrls.includes(newCoverUrl) || galleryUrls.includes(newCoverUrl)) {
        newCoverUrl = await fetchSingleImage(query);
      }
      coverUrl = newCoverUrl;
    }

    return { coverUrl, galleryUrls };
  } catch (error) {
    console.error(`Failed to fetch images: ${error.message}`);
    return { coverUrl: "", galleryUrls: [] };
  }
};

const fetchSingleImage = async (query) => {
  try {
    const photos = await client.photos.search({ query, per_page: 1 });
    return photos.photos[0].src.original;
  } catch (error) {
    console.error(`Failed to fetch single image: ${error.message}`);
    return "";
  }
};

const filterBlacklistedUrls = (galleryUrls) => {
  return galleryUrls.filter((url) => !blacklistedUrls.includes(url));
};

const blacklistedUrls = [
  "https://images.pexels.com/photos/13779079/pexels-photo-13779079.jpeg",
  "https://images.pexels.com/photos/7648051/pexels-photo-7648051.jpeg",
  "https://images.pexels.com/photos/3795291/pexels-photo-3795291.jpeg",
  "https://images.pexels.com/photos/16155281/pexels-photo-16155281.jpeg",
  "https://images.pexels.com/photos/16155280/pexels-photo-16155280.jpeg",
  "https://images.pexels.com/photos/7648055/pexels-photo-7648055.jpeg",
  "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg",
  "https://images.pexels.com/photos/7648043/pexels-photo-7648043.jpeg",
  "https://images.pexels.com/photos/7648022/pexels-photo-7648022.jpeg",
  "https://images.pexels.com/photos/3755620/pexels-photo-3755620.jpeg",
  "https://images.pexels.com/photos/3791665/pexels-photo-3791665.jpeg",
  "https://images.pexels.com/photos/3783095/pexels-photo-3783095.jpeg",
  "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
  "https://images.pexels.com/photos/116366/pexels-photo-116366.jpeg",
  "https://images.pexels.com/photos/5816307/pexels-photo-5816307.jpeg",
  "https://images.pexels.com/photos/3764485/pexels-photo-3764485.jpeg",
  "https://images.pexels.com/photos/4064647/pexels-photo-4064647.jpeg",
  "https://images.pexels.com/photos/4064638/pexels-photo-4064638.jpeg",
  "https://images.pexels.com/photos/4545130/pexels-photo-4545130.jpeg",
  "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
  "https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg",
  "https://images.pexels.com/photos/5428763/pexels-photo-5428763.jpeg",
  "https://images.pexels.com/photos/5428723/pexels-photo-5428723.jpeg",
  "https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg",
  "https://images.pexels.com/photos/7648470/pexels-photo-7648470.jpeg",
  "https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg",
  "https://images.pexels.com/photos/8439688/pexels-photo-8439688.jpeg",
  "https://images.pexels.com/photos/8439742/pexels-photo-8439742.jpeg",
  "https://images.pexels.com/photos/4064175/pexels-photo-4064175.jpeg",
  "https://images.pexels.com/photos/4064235/pexels-photo-4064235.jpeg",
  "https://images.pexels.com/photos/4064227/pexels-photo-4064227.jpeg",
  "https://images.pexels.com/photos/4065625/pexels-photo-4065625.jpeg",
  "https://images.pexels.com/photos/4827512/pexels-photo-4827512.jpeg",
  "https://images.pexels.com/photos/4827499/pexels-photo-4827499.jpeg",
  "https://images.pexels.com/photos/4827504/pexels-photo-4827504.jpeg",
  "https://images.pexels.com/photos/7172698/pexels-photo-7172698.jpeg",
  "https://images.pexels.com/photos/4559978/pexels-photo-4559978.jpeg",
  "https://images.pexels.com/photos/3799254/pexels-photo-3799254.jpeg",
  "https://images.pexels.com/photos/7537834/pexels-photo-7537834.jpeg",
  "https://images.pexels.com/photos/5542269/pexels-photo-5542269.jpeg",
  "https://images.pexels.com/photos/7648221/pexels-photo-7648221.jpeg",
  "https://images.pexels.com/photos/7648232/pexels-photo-7648232.jpeg",
  "https://images.pexels.com/photos/7648258/pexels-photo-7648258.jpeg",
  "https://images.pexels.com/photos/370470/pexels-photo-370470.jpeg",
  "https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg",
  "https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg",
  "https://images.pexels.com/photos/6957656/pexels-photo-6957656.jpeg",
  "https://images.pexels.com/photos/4200703/pexels-photo-4200703.jpeg",
  "https://images.pexels.com/photos/209726/pexels-photo-209726.jpeg",
  "https://images.pexels.com/photos/3755516/pexels-photo-3755516.jpeg",
  "https://images.pexels.com/photos/3764171/pexels-photo-3764171.jpeg",
  "https://images.pexels.com/photos/3775157/pexels-photo-3775157.jpeg",
  "https://images.pexels.com/photos/3771129/pexels-photo-3771129.jpeg",
  "https://images.pexels.com/photos/3755822/pexels-photo-3755822.jpeg",
  "https://images.pexels.com/photos/4626336/pexels-photo-4626336.jpeg",
  "https://images.pexels.com/photos/4560058/pexels-photo-4560058.jpeg",
  "https://images.pexels.com/photos/4560140/pexels-photo-4560140.jpeg",
  "https://images.pexels.com/photos/5910969/pexels-photo-5910969.jpeg",
  "https://images.pexels.com/photos/5965885/pexels-photo-5965885.jpeg",
  "https://images.pexels.com/photos/6787631/pexels-photo-6787631.jpeg",
  "https://images.pexels.com/photos/6787680/pexels-photo-6787680.jpeg",
  "https://images.pexels.com/photos/5748595/pexels-photo-5748595.jpeg",
  "https://images.pexels.com/photos/7108218/pexels-photo-7108218.jpeg",
  "https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg",
  "https://images.pexels.com/photos/4064696/pexels-photo-4064696.jpeg",
  "https://images.pexels.com/photos/4559618/pexels-photo-4559618.jpeg",
  "https://images.pexels.com/photos/4064700/pexels-photo-4064700.jpeg",
  "https://images.pexels.com/photos/3771791/pexels-photo-3771791.jpeg",
  "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg",
  "https://images.pexels.com/photos/5257313/pexels-photo-5257313.jpeg",
  "https://images.pexels.com/photos/5257306/pexels-photo-5257306.jpeg",
  "https://images.pexels.com/photos/5257553/pexels-photo-5257553.jpeg",
  "https://images.pexels.com/photos/4064645/pexels-photo-4064645.jpeg",
  "https://images.pexels.com/photos/4445152/pexels-photo-4445152.jpeg",
  "https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg",
  "https://images.pexels.com/photos/3760060/pexels-photo-3760060.jpeg",
  "https://images.pexels.com/photos/3760081/pexels-photo-3760081.jpeg",
  "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg",
  "https://images.pexels.com/photos/5662825/pexels-photo-5662825.jpeg",
  "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg",
  "https://images.pexels.com/photos/3764156/pexels-photo-3764156.jpeg",
  "https://images.pexels.com/photos/3966557/pexels-photo-3966557.jpeg",
  "https://images.pexels.com/photos/7034395/pexels-photo-7034395.jpeg",
  "https://images.pexels.com/photos/3771091/pexels-photo-3771091.jpeg",
  "https://images.pexels.com/photos/3767397/pexels-photo-3767397.jpeg",
  "https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg",
  "https://images.pexels.com/photos/4792749/pexels-photo-4792749.jpeg",
  "https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg",
  "https://images.pexels.com/photos/5615067/pexels-photo-5615067.jpeg",
  "https://images.pexels.com/photos/4626335/pexels-photo-4626335.jpeg",
  "https://images.pexels.com/photos/5039042/pexels-photo-5039042.jpeg",
  "https://images.pexels.com/photos/6045047/pexels-photo-6045047.jpeg",
  "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg",
  "https://images.pexels.com/photos/6045041/pexels-photo-6045041.jpeg",
  "https://images.pexels.com/photos/18610082/pexels-photo-18610082.jpeg",
  "https://images.pexels.com/photos/6348048/pexels-photo-6348048.jpeg",
  "https://images.pexels.com/photos/6348049/pexels-photo-6348049.jpeg",
  "https://images.pexels.com/photos/16978385/pexels-photo-16978385.jpeg",
  "https://images.pexels.com/photos/7162350/pexels-photo-7162350.jpeg",
  "https://images.pexels.com/photos/7172089/pexels-photo-7172089.jpeg",
  "https://images.pexels.com/photos/7172098/pexels-photo-7172098.jpeg",
  "https://images.pexels.com/photos/4063792/pexels-photo-4063792.jpeg",
  "https://images.pexels.com/photos/4093162/pexels-photo-4093162.jpeg",
  "https://images.pexels.com/photos/3791605/pexels-photo-3791605.jpeg",
  "https://images.pexels.com/photos/4063797/pexels-photo-4063797.jpeg",
  "https://images.pexels.com/photos/4063860/pexels-photo-4063860.jpeg",
  "https://images.pexels.com/photos/8791209/pexels-photo-8791209.jpeg",
  "https://images.pexels.com/photos/6564826/pexels-photo-6564826.jpeg",
  "https://images.pexels.com/photos/6564830/pexels-photo-6564830.jpeg",
  "https://images.pexels.com/photos/6564823/pexels-photo-6564823.jpeg",
  "https://images.pexels.com/photos/7956376/pexels-photo-7956376.jpeg",
  "https://images.pexels.com/photos/5845692/pexels-photo-5845692.jpeg",
  "https://images.pexels.com/photos/7956384/pexels-photo-7956384.jpeg",
  "https://images.pexels.com/photos/5889213/pexels-photo-5889213.jpeg",
  "https://images.pexels.com/photos/3819712/pexels-photo-3819712.jpeg",
  "https://images.pexels.com/photos/7319478/pexels-photo-7319478.jpeg",
  "https://images.pexels.com/photos/7299586/pexels-photo-7299586.jpeg",
  "https://images.pexels.com/photos/4031710/pexels-photo-4031710.jpeg",
  "https://images.pexels.com/photos/3957985/pexels-photo-3957985.jpeg",
  "https://images.pexels.com/photos/4240581/pexels-photo-4240581.jpeg",
  "https://images.pexels.com/photos/4240609/pexels-photo-4240609.jpeg",
  "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg",
  "https://images.pexels.com/photos/415713/pexels-photo-415713.jpeg",
  "https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg",
  "https://images.pexels.com/photos/12405358/pexels-photo-12405358.jpeg",
  "https://images.pexels.com/photos/6033590/pexels-photo-6033590.jpeg",
  "https://images.pexels.com/photos/4820661/pexels-photo-4820661.jpeg",
  "https://images.pexels.com/photos/4063791/pexels-photo-4063791.jpeg",
  "https://images.pexels.com/photos/6980224/pexels-photo-6980224.jpeg",
  "https://images.pexels.com/photos/4355395/pexels-photo-4355395.jpeg",
  "https://images.pexels.com/photos/7956377/pexels-photo-7956377.jpeg",
  "https://images.pexels.com/photos/4454855/pexels-photo-4454855.jpeg",
  "https://images.pexels.com/photos/17239805/pexels-photo-17239805.jpeg",
  "https://images.pexels.com/photos/3768177/pexels-photo-3768177.jpeg",
  "https://images.pexels.com/photos/4861364/pexels-photo-4861364.jpeg",
  "https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg",
  "https://images.pexels.com/photos/7125631/pexels-photo-7125631.jpeg",
  "https://images.pexels.com/photos/7578231/pexels-photo-7578231.jpeg",
  "https://images.pexels.com/photos/5825362/pexels-photo-5825362.jpeg",
  "https://images.pexels.com/photos/6373486/pexels-photo-6373486.jpeg",
  "https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg",
  "https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg",
  "https://images.pexels.com/photos/4993062/pexels-photo-4993062.jpeg",
  "https://images.pexels.com/photos/4195322/pexels-photo-4195322.jpeg",
  "https://images.pexels.com/photos/6027391/pexels-photo-6027391.jpeg",
  "https://images.pexels.com/photos/6231632/pexels-photo-6231632.jpeg",
  "https://images.pexels.com/photos/6231635/pexels-photo-6231635.jpeg",
  "https://images.pexels.com/photos/7125661/pexels-photo-7125661.jpeg",
  "https://images.pexels.com/photos/6231636/pexels-photo-6231636.jpeg",
  "https://images.pexels.com/photos/6001239/pexels-photo-6001239.jpeg",
  "https://images.pexels.com/photos/4126798/pexels-photo-4126798.jpeg",
  "https://images.pexels.com/photos/6464730/pexels-photo-6464730.jpeg",
  "https://images.pexels.com/photos/7034027/pexels-photo-7034027.jpeg",
  "https://images.pexels.com/photos/4946400/pexels-photo-4946400.jpeg",
  "https://images.pexels.com/photos/7125644/pexels-photo-7125644.jpeg",
  "https://images.pexels.com/photos/9784635/pexels-photo-9784635.jpeg",
  "https://images.pexels.com/photos/5529572/pexels-photo-5529572.jpeg",
  "https://images.pexels.com/photos/5529571/pexels-photo-5529571.jpeg",
  "https://images.pexels.com/photos/5529573/pexels-photo-5529573.jpeg",
  "https://images.pexels.com/photos/5529948/pexels-photo-5529948.jpeg",
  "https://images.pexels.com/photos/5619705/pexels-photo-5619705.jpeg",
  "https://images.pexels.com/photos/2922445/pexels-photo-2922445.jpeg",
  "https://images.pexels.com/photos/3831110/pexels-photo-3831110.jpeg",
  "https://images.pexels.com/photos/3197315/pexels-photo-3197315.jpeg",
  "https://images.pexels.com/photos/7084558/pexels-photo-7084558.jpeg",
  "https://images.pexels.com/photos/7453198/pexels-photo-7453198.jpeg",
  "https://images.pexels.com/photos/7453196/pexels-photo-7453196.jpeg"
]

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
