// BK HOMES — Real Project Data

export const company = {
  name: "BK Homes",
  tagline: "Think Home, Think BK Homes",
  tamilQuote: "எல்லா புகழும் இறைவனுக்கு",
  tamilQuoteEng: "All Glory to God",
  founded: 2011,
  md: "K. Mohan Kumar",
  phone: "88708 00708",
  phone2: "75100 20044",
  email: "bkhomes2011@gmail.com",
  website: "www.bkhomes.in",
  whatsapp: "8870800708",
  offices: {
    corporate: {
      label: "Corporate Office",
      address: "Plot No. 8C, Vivekananda Salai, Rajajipuram, Tiruvallur – 602 001",
      city: "Tiruvallur"
    },
    branch: {
      label: "Branch Office",
      address: "Plot No. 14, 2nd Cross Street, Dr. VGP Vimala Nagar, Medavakkam, Chennai – 600 100",
      city: "Chennai"
    }
  },
  stats: [
    { number: "26+", label: "Apartments Built" },
    { number: "42+", label: "Individual Homes" },
    { number: "14+", label: "Years of Excellence" },
    { number: "3", label: "Commercial Buildings" },
  ],
  about: `BK HOMES is an established construction company managed by a team of well-experienced professional engineers. Founded in 2011, our roots trace back to an agriculture-based parent company — built on the values of hard work, trust, and quality. Today, we are proud to have delivered landmark projects across Chennai, Madurai, and Tiruvallur.`,
  mission: "Setting a benchmark in the construction domain by offering value-rich homes at affordable prices.",
  vision: "To create the ideal environment for people to live, to work, to grow, to thrive and to prosper for generations to come.",
  quality: "Quality is Primary to BK Homes. We create homes of true artistry and quality.",
  promise: ["We promise what we can deliver", "We deliver what we promise"],
};

export const services = [
  {
    id: "apartments",
    icon: "Building2",
    number: "01",
    title: "Apartment Buildings",
    desc: "Premium multi-unit residential complexes with modern amenities, lift access, covered parking, and quality finishes across Tiruvallur and Chennai."
  },
  {
    id: "villas",
    icon: "Home",
    number: "02",
    title: "Individual Villas",
    desc: "Bespoke stand-alone villas crafted to match your vision — from plot selection to handover, every detail executed with precision."
  },
  {
    id: "custom",
    icon: "PenTool",
    number: "03",
    title: "Custom Homes",
    desc: "Your dream, our expertise. Collaborate with our architects to build a custom home that reflects your personality and lifestyle."
  },
  {
    id: "realestate",
    icon: "MapPin",
    number: "04",
    title: "Real Estate",
    desc: "Buy, sell, or invest with confidence. Curated residential plots and ready properties with full legal and documentation support."
  },
  {
    id: "contract",
    icon: "Hammer",
    number: "05",
    title: "Contract Work",
    desc: "End-to-end civil contract work for residential and commercial projects. Quality execution, on-time delivery, zero compromise."
  },
  {
    id: "jv",
    icon: "Handshake",
    number: "06",
    title: "Joint Venture",
    desc: "Strategic joint venture partnerships for landowners and investors. Transparent dealings, maximum value, mutual growth."
  },
];

export const featuredProjects = [
  {
    id: "bk-ams",
    name: "BK AMS",
    type: "Apartment",
    status: "Ongoing",
    location: "Sri Padmavathi Nagar, Periyakuppam Village, Rajajipuram, Tiruvallur",
    plotNo: "Plot No. 36",
    contact: "88708 00708",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    elevationColor: "#f97316",
    floors: 3,
    totalFlats: 6,
    flatTypes: [
      { flat: "F1", area: 990, uds: 400, facing: "East" },
      { flat: "F2", area: 990, uds: 400, facing: "East" },
      { flat: "S1", area: 990, uds: 400, facing: "East" },
      { flat: "S2", area: 990, uds: 400, facing: "East" },
      { flat: "T1", area: 990, uds: 400, facing: "East" },
      { flat: "T2", area: 990, uds: 400, facing: "East" },
    ],
    plotSize: "40' × 60'",
    features: ["Lift", "Covered Parking", "East Facing", "3 BHK", "Balcony"],
    description: "BK AMS is a premium 3-floor apartment complex featuring 6 thoughtfully designed 3BHK units of 990 sqft each. Located in the prestigious Sri Padmavathi Nagar, Tiruvallur, this project exemplifies BK Homes' commitment to quality living spaces.",
    has3D: true,
    hasFloorPlan: true,
    // Floor plan dimensions from PDF
    floorPlan: {
      width: 32, depth: 52,
      rooms: ["Living Area 9'9\" × 20'7½\"", "Bedroom 10'0\" × 11'7½\"", "Bedroom 10'0\" × 9'6\"", "Bedroom 10'0\" × 10'7½\"", "Kitchen 10'0\" × 10'7½\"", "Balcony 9'9\" × 4'3\"", "2 Toilets", "Pooja"]
    }
  },
  {
    id: "bk-surya",
    name: "BK Surya",
    type: "Apartment",
    status: "Ongoing",
    location: "Sri Padmavathi Nagar, Periyakuppam Village, Rajajipuram, Tiruvallur",
    plotNo: "Plot No. 37",
    contact: "88708 00708",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
    elevationColor: "#d97706",
    floors: 3,
    totalFlats: 5,
    flatTypes: [
      { flat: "F1", area: 1980, uds: 800, facing: "East" },
      { flat: "S1", area: 990, uds: 400, facing: "East" },
      { flat: "S2", area: 990, uds: 400, facing: "East" },
      { flat: "T1", area: 990, uds: 400, facing: "East" },
      { flat: "T2", area: 990, uds: 400, facing: "East" },
    ],
    plotSize: "40' × 60'",
    features: ["Lift", "Covered Parking", "East Facing", "3 BHK", "Balcony", "Utility"],
    description: "BK Surya is an elegantly designed apartment complex featuring a spacious 1980 sqft first-floor unit and four 990 sqft flats on upper floors. The distinctive orange-terra facade with curved architectural accents makes this a landmark in Tiruvallur.",
    has3D: true,
    hasFloorPlan: true,
    floorPlan: {
      width: 32, depth: 52,
      rooms: ["Living Area 19'9\" × 13'7½\"", "Dining Area 9'9\" × 20'4\"", "Master Bedroom 13'4\" × 10'10½\"", "Bedroom 10'0\" × 10'7½\"", "Bedroom 10'0\" × 16'3\"", "Kitchen 10'0\" × 11'9\"", "Balcony 9'9\" × 5'3\"", "Utility 10'0\" × 3'11\""]
    }
  },
  {
    id: "bk-skandha-south",
    name: "BK Skandha South",
    type: "Individual Villa",
    status: "Completed",
    location: "Poonthottam Nagar, Tiruvallur",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    elevationColor: "#f59e0b",
    floors: 2,
    plotSize: "25'1\" × 50'",
    builtArea: "1145 sqft",
    features: ["Portico 15'0\"×14'3\"", "2 Bedrooms", "Living Hall", "Dining Area", "Kitchen", "2 Toilets", "Staircase"],
    description: "BK Skandha South is a beautifully designed individual villa on a 25×50 plot. The contemporary facade features warm wood-toned vertical slats, stone cladding accents, decorative gate panels, and lush landscaping — a perfect family home.",
    has3D: true,
    hasFloorPlan: true,
    floorPlan: {
      width: 25.1, depth: 50,
      groundArea: 1020, headRoom: 125, totalArea: 1145,
      rooms: ["Living Hall 11'9\"×15'0\"", "Bedroom 10'1\"×12'0\"", "Bedroom 9'1\"×12'0\"", "Dining 7'9\"×6'1½\"", "Kitchen 7'4½\"×8'0\"", "Toilet 10'1\"×4'6\"", "Toilet 5'8½\"×4'6\"", "Portico 15'0\"×14'3\""]
    }
  },
  {
    id: "bk-chandra",
    name: "BK Chandra",
    type: "Apartment",
    status: "Ongoing",
    location: "Vivekananda Salai, Tiruvallur",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    elevationColor: "#6366f1",
    floors: 6,
    description: "BK Chandra is a landmark 6-floor apartment complex on Vivekananda Salai, Tiruvallur — a high-rise that redefines the city skyline with its bold vertical massing and contemporary finishes.",
    has3D: false,
    hasFloorPlan: false,
  },
];

export const completedProjects = [
  { name: "Saraswathi Manor", type: "Apartment", location: "Balaji Nagar, Medavakkam" },
  { name: "Babu Manor", type: "Apartment", location: "Balaji Nagar, Medavakkam" },
  { name: "Ambu Manor", type: "Apartment", location: "Balaji Nagar, Medavakkam" },
  { name: "BK Enclave", type: "Apartment", location: "Balaji Nagar, Medavakkam" },
  { name: "BK Castle", type: "Apartment", location: "Veerabathra Nagar, Medavakkam" },
  { name: "BK Blossom", type: "Apartment", location: "Tiruvallur" },
  { name: "BK Pinnacle", type: "Apartment", location: "Jayalakshmi Nagar, Santhosapuram" },
  { name: "Drona Divine", type: "Apartment", location: "Visalakshi Nagar, Santhosapuram" },
  { name: "The Emerald", type: "Apartment", location: "Balaji Nagar, Medavakkam" },
  { name: "BK Brindhavanam", type: "Apartment", location: "Poonga Nagar, Tiruvallur" },
  { name: "BK Krisha", type: "Apartment", location: "Sri Padmavathi Nagar, Tiruvallur" },
  { name: "BK Padmanabham", type: "Apartment", location: "SRP Colony, Perambur" },
  { name: "BK Kurinji", type: "Apartment", location: "Kurinji Street, Tiruvallur" },
  { name: "BK Magizhagam", type: "Apartment", location: "Sakthi Kovil Cross Street, Tiruvallur" },
  { name: "BK Nandhalala", type: "Apartment", location: "Jawahar Nagar, Perambur" },
  { name: "BK Divine", type: "Villa", location: "Tiruvallur" },
  { name: "BK Tulip", type: "Villa", location: "Tiruvallur" },
  { name: "BK Trinity", type: "Villa", location: "Tiruvallur" },
  { name: "BK Twins", type: "Villa", location: "Tiruvallur" },
  { name: "BK Thangam", type: "Villa", location: "Tiruvallur" },
  { name: "BK Skandha North", type: "Villa", location: "Tiruvallur" },
  { name: "BK Square", type: "Villa", location: "Poonthottam Nagar, Tiruvallur" },
  { name: "BK Ratan", type: "Commercial", location: "Tiruvallur" },
];
