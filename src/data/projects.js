// BK HOMES — Real Project Data

export const company = {
  name: "BK Homes",
  tagline: "Think Home, Think BK Homes",
  tamilQuote: "எல்லா புகழும் இறைவனுக்கு",
  tamilQuoteEng: "All Glory to God",
  founded: 2011,
  md: "K. Mohan Kumar",
  phone: "88708 00708",
  email: "bkhomes2011@gmail.com",
  website: "www.bkhomes.in",
  whatsapp: "8870800708",
  offices: {
    corporate: {
      label: "Corporate Office",
      address: "Plot No. 8C, Vivekananda Salai, Rajajipuram, Tiruvallur – 602 001",
      city: "Tiruvallur"
    },
  },
  stats: [
    { number: "4", label: "Ongoing Apartments" },
    { number: "2", label: "Ongoing Villas" },
    { number: "1", label: "Gated Community" },
    { number: "14+", label: "Years of Excellence" },
  ],
  about: `BK HOMES is an established construction company managed by a team of well-experienced professional engineers. Founded in 2011, our roots trace back to an agriculture-based parent company — built on the values of hard work, trust, and quality. Today, we are proud to have delivered landmark projects across Tiruvallur and beyond.`,
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
    desc: "Premium multi-unit residential complexes with modern amenities, lift access, covered parking, and quality finishes across Tiruvallur."
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

// ── ONGOING APARTMENT PROJECTS ──────────────────────────────────────────────
export const ongoingApartments = [
  {
    id: "bk-chandra",
    name: "BK Chandra",
    subtitle: "Signature Living",
    type: "Apartment",
    status: "Ongoing",
    location: "Dr. Mu. Va Street, Rajajipuram, Tiruvallur",
    contact: "88708 00708",
    floors: 5,
    totalFlats: 10,
    plotSize: "50'×52' (approx)",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    flatTypes: [
      { flat: "1A", area: 1377, uds: 518, facing: "North", status: "Booked" },
      { flat: "1B", area: 1343, uds: 518, facing: "South", status: "Booked" },
      { flat: "2A", area: 1377, uds: 518, facing: "North", status: "Available" },
      { flat: "2B", area: 1343, uds: 518, facing: "South", status: "Available" },
      { flat: "3A", area: 1377, uds: 518, facing: "North", status: "Available" },
      { flat: "3B", area: 1343, uds: 518, facing: "South", status: "Available" },
      { flat: "4A", area: 1377, uds: 518, facing: "North", status: "Available" },
      { flat: "4B", area: 1343, uds: 518, facing: "South", status: "Available" },
      { flat: "5A", area: 1377, uds: 518, facing: "North", status: "Booked" },
      { flat: "5B", area: 1343, uds: 518, facing: "South", status: "Available" },
    ],
    floorAvailability: [
      { floor: "1st Floor", units: [{ id: "1A", status: "Booked", area: 1377, facing: "North" }, { id: "1B", status: "Booked", area: 1343, facing: "South" }] },
      { floor: "2nd Floor", units: [{ id: "2A", status: "Available", area: 1377, facing: "North" }, { id: "2B", status: "Available", area: 1343, facing: "South" }] },
      { floor: "3rd Floor", units: [{ id: "3A", status: "Available", area: 1377, facing: "North" }, { id: "3B", status: "Available", area: 1343, facing: "South" }] },
      { floor: "4th Floor", units: [{ id: "4A", status: "Available", area: 1377, facing: "North" }, { id: "4B", status: "Available", area: 1343, facing: "South" }] },
      { floor: "5th Floor", units: [{ id: "5A", status: "Booked", area: 1377, facing: "North" }, { id: "5B", status: "Available", area: 1343, facing: "South" }] },
    ],
    features: ["Lift (Johnson)", "Modular Kitchen", "Wood Work", "False Ceiling", "1 Ton AC (Lloyd)", "AO Smith Geyser", "Video Door Phone", "CCTV Parking", "Genset", "Covered Parking"],
    amenities: ["Fully Furnished Premium 3BHK", "Modular Kitchen", "Wood Work (Bedrooms, TV Unit, Pooja)", "False Ceiling (Hall & Bedrooms)", "1 Ton AC - Lloyd", "AO Smith Geyser", "Video Door Phone Lock", "CCTV Camera For Parking", "Johnson Lift", "Automatic Water Level Controller", "Genset For Lift & Common Area"],
    description: "BK Chandra is a landmark premium apartment complex on Dr. Mu. Va Street, Rajajipuram, Tiruvallur. Featuring fully furnished 3BHK flats with modular kitchen, wood work, false ceiling, and top-tier amenities. 1st floor is fully booked. 3rd floor is fully available. 5th floor back side (5B) is available.",
    hasFloorPlan: true,
    floorPlan: {
      width: 50, depth: 52,
      rooms: [
        "Living/Dining 17'9\"×17'0\" (Type A) / 13'10\"×21'6\" (Type B)",
        "Master Bedroom 10'7½\"×16'3\" / 10'0\"×12'4½\"",
        "Bedroom 10'10\"×9'7½\" / 9'4½\"×11'10½\"",
        "Bedroom 10'0\"×11'6\" / 10'3\"×12'4½\"",
        "Kitchen 7'0\"×9'7\" / 9'4½\"×7'0\"",
        "Utility 7'3\"×4'8\"",
        "Balcony 6'3\"×4'7½\" / 9'7½\"×3'9\"",
        "3 Toilets", "Foyer", "Pooja",
      ]
    }
  },
  {
    id: "bk-aran",
    name: "BK Aran",
    subtitle: "Elevated Living",
    type: "Apartment",
    status: "Ongoing",
    location: "Tiruvallur",
    contact: "88708 00708",
    floors: 3,
    totalFlats: 5,
    plotSize: "40' × 60'",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    flatTypes: [
      { flat: "F1", area: "1772", uds: "394", facing: "East (Full Floor)", status: "Available" },
      { flat: "S1", area: "922", uds: "205", facing: "East (Front)", status: "Available" },
      { flat: "S2", area: "850", uds: "189", facing: "East (Back)", status: "Available" },
      { flat: "T1", area: "922", uds: "205", facing: "East (Front)", status: "Available" },
      { flat: "T2", area: "850", uds: "189", facing: "East (Back)", status: "Available" },
    ],
    floorAvailability: [
      { floor: "1st Floor", units: [{ id: "F1", status: "Available", area: 1772, facing: "East (Full Floor – 3BHK)" }] },
      { floor: "2nd Floor", units: [{ id: "S1", status: "Available", area: 922, facing: "East (Front)" }, { id: "S2", status: "Available", area: 850, facing: "East (Back)" }] },
      { floor: "3rd Floor", units: [{ id: "T1", status: "Available", area: 922, facing: "East (Front)" }, { id: "T2", status: "Available", area: 850, facing: "East (Back)" }] },
    ],
    features: ["Lift", "Covered Parking", "East Facing", "3 BHK", "Balcony", "Pooja Room"],
    description: "BK Aran is a premium 3-floor apartment complex in Tiruvallur. 1st floor features a spacious single 3BHK unit of 1772 sqft. 2nd and 3rd floors each have two 3BHK units. Ground floor is dedicated parking.",
    hasFloorPlan: true,
    floorPlan: {
      width: 40, depth: 60,
      rooms: ["Living Area 9'9\"×20'7½\"", "Bedroom 10'0\"×11'7½\"", "Bedroom 10'0\"×9'6\"", "Bedroom 10'0\"×10'7½\"", "Kitchen 10'0\"×8'6\"", "Balcony 9'9\"×4'3\"", "2 Toilets", "Pooja"]
    }
  },
  {
    id: "bk-ams",
    name: "BK AMS",
    subtitle: "Premium 3BHK Apartments",
    type: "Apartment",
    status: "Ongoing",
    location: "Sri Padmavathi Nagar, Periyakuppam Village, Rajajipuram, Tiruvallur",
    plotNo: "Plot No. 36",
    contact: "88708 00708",
    floors: 3,
    totalFlats: 6,
    plotSize: "40' × 60'",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    flatTypes: [
      { flat: "F1", area: 990, uds: 400, facing: "East (Front)", status: "Booked" },
      { flat: "F2", area: 990, uds: 400, facing: "East (Back)", status: "Available" },
      { flat: "S1", area: 990, uds: 400, facing: "East (Front)", status: "Booked" },
      { flat: "S2", area: 990, uds: 400, facing: "East (Back)", status: "Available" },
      { flat: "T1", area: 990, uds: 400, facing: "East (Front)", status: "Booked" },
      { flat: "T2", area: 990, uds: 400, facing: "East (Back)", status: "Available" },
    ],
    floorAvailability: [
      { floor: "1st Floor", units: [{ id: "F1", status: "Booked", area: 990, facing: "East (Front)" }, { id: "F2", status: "Available", area: 990, facing: "East (Back)" }] },
      { floor: "2nd Floor", units: [{ id: "S1", status: "Booked", area: 990, facing: "East (Front)" }, { id: "S2", status: "Available", area: 990, facing: "East (Back)" }] },
      { floor: "3rd Floor", units: [{ id: "T1", status: "Booked", area: 990, facing: "East (Front)" }, { id: "T2", status: "Available", area: 990, facing: "East (Back)" }] },
    ],
    features: ["Lift", "Covered Parking", "East Facing", "3 BHK", "Balcony", "Pooja Room"],
    description: "BK AMS is a premium 3-floor apartment complex featuring 6 thoughtfully designed 3BHK units of 990 sqft each. Ground floor is parking. Back-side flats (F2, S2, T2) are available.",
    hasFloorPlan: true,
    floorPlan: {
      width: 32, depth: 52,
      rooms: ["Living Area 9'9\"×20'7½\"", "Bedroom 10'0\"×11'7½\"", "Bedroom 10'0\"×9'6\"", "Bedroom 10'0\"×10'7½\"", "Kitchen 10'0\"×8'6\"", "Balcony 9'9\"×4'3\"", "Toilet 7'10½\"×4'0\"", "Toilet 6'10½\"×4'0\"", "Pooja"]
    }
  },
  {
    id: "bk-surya",
    name: "BK Surya",
    subtitle: "Spacious Living Redefined",
    type: "Apartment",
    status: "Ongoing",
    location: "Sri Padmavathi Nagar, Periyakuppam Village, Rajajipuram, Tiruvallur",
    plotNo: "Plot No. 37",
    contact: "88708 00708",
    floors: 3,
    totalFlats: 5,
    plotSize: "40' × 60'",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
    flatTypes: [
      { flat: "F1", area: 1980, uds: 800, facing: "East", status: "Available" },
      { flat: "S1", area: 990, uds: 400, facing: "East", status: "Available" },
      { flat: "S2", area: 990, uds: 400, facing: "East", status: "Available" },
      { flat: "T1", area: 990, uds: 400, facing: "East", status: "Available" },
      { flat: "T2", area: 990, uds: 400, facing: "East", status: "Available" },
    ],
    floorAvailability: [
      { floor: "1st Floor", units: [{ id: "F1", status: "Available", area: 1980, facing: "East (Full Floor – 4BHK Duplex)" }] },
      { floor: "2nd Floor", units: [{ id: "S1", status: "Available", area: 990, facing: "East" }, { id: "S2", status: "Available", area: 990, facing: "East" }] },
      { floor: "3rd Floor", units: [{ id: "T1", status: "Available", area: 990, facing: "East" }, { id: "T2", status: "Available", area: 990, facing: "East" }] },
    ],
    features: ["Lift", "Covered Parking", "East Facing", "3 BHK / 4 BHK Duplex", "Balcony", "Utility Room"],
    description: "BK Surya features a unique layout — a spacious 1980 sqft first-floor duplex and four 990 sqft 3BHK flats. 2nd and 3rd floors are fully available. The distinctive curved facade makes this a landmark in Tiruvallur.",
    hasFloorPlan: true,
    floorPlan: {
      width: 32, depth: 52,
      rooms: [
        "Living Area 19'9\"×13'7½\" (1st Floor)",
        "Dining Area 9'9\"×20'4\"",
        "Master Bedroom 13'4\"×10'10½\"",
        "Bedroom 10'0\"×10'7½\"",
        "Bedroom 10'0\"×16'3\"",
        "Kitchen 10'0\"×11'9\"",
        "Balcony 9'9\"×5'3\"",
        "Utility 10'0\"×3'11\"",
        "2 Toilets"
      ]
    }
  },
];

// ── ONGOING VILLA PROJECTS ───────────────────────────────────────────────────
export const ongoingVillas = [
  {
    id: "bk-skandha-south",
    name: "BK Skandha South",
    type: "Individual Villa",
    status: "Ongoing",
    location: "Poonthottam Nagar, Tiruvallur",
    contact: "88708 00708",
    floors: 2,
    plotSize: "25'1\" × 50'",
    builtArea: "1145 sqft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    features: ["Portico 15'0\"×14'3\"", "2 Bedrooms", "Living Hall", "Dining Area", "Kitchen", "2 Toilets", "Private Compound"],
    description: "BK Skandha South is a beautifully designed individual villa on a 25×50 plot. Contemporary facade with warm wood-toned vertical slats, stone cladding accents, decorative gate panels, and lush landscaping.",
    hasFloorPlan: true,
    floorPlan: {
      groundArea: 1020, headRoom: 125, totalArea: 1145,
      width: 25.1, depth: 50,
      rooms: [
        "Living Hall 11'9\"×15'0\"",
        "Bedroom 10'1\"×12'0\"",
        "Bedroom 9'1\"×12'0\"",
        "Dining Area 7'9\"×6'1½\"",
        "Kitchen (O/K) 7'4½\"×8'0\"",
        "Toilet 10'1\"×4'6\"",
        "Toilet 5'8½\"×4'6\"",
        "Portico 15'0\"×14'3\"",
        "Staircase"
      ]
    }
  },
  {
    id: "mr-hitech-city",
    name: "M.R HI-Tech City",
    type: "Individual Villa",
    status: "Ongoing",
    location: "Tiruvallur",
    contact: "88708 00708",
    floors: 2,
    plotSize: "Contact for Details",
    builtArea: "Contact for Details",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    features: ["Modern Design", "Individual Villa", "Premium Finishes", "Private Compound"],
    description: "M.R HI-Tech City is a premium individual villa project in Tiruvallur with modern design, premium finishes, and thoughtful space planning. Contact us for floor plan and size details.",
    hasFloorPlan: false,
    floorPlan: null,
  },
];

// ── COMPLETED PROJECTS ────────────────────────────────────────────────────────
export const completedProjects = [
  { name: "BK Skandha North", type: "Villa", location: "Tiruvallur" },
  { name: "BK Magizhagam", type: "Apartment", location: "Sakthi Kovil Cross Street, Tiruvallur" },
];

// ── CONTRACT WORK ─────────────────────────────────────────────────────────────
export const contractWork = {
  ongoing: [
    { name: "Udhyakumar", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
    { name: "Rajkamal", location: "Tiruvallur", image: "/assets/projects/Rajkamal_Contract_Work copy.jpeg", hasElevation: true },
    { name: "Vilivadhan", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80" },
    { name: "Vinoth", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80" },
    { name: "Vasudvan", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80" },
  ],
  completed: [
    { name: "Suresh", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80" },
    { name: "Sivagurunadhar", location: "Tiruvallur", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80" },
  ]
};

// ── MOHAN GARDENS (Real Estate) ───────────────────────────────────────────────
export const mohanGardenPlots = [
  { no: 1, area: 1080, status: "Available" },
  { no: 2, area: 1066, status: "Available" },
  { no: 3, area: 1047.5, status: "Available" },
  { no: 4, area: 1560, status: "Booked" },
  { no: 5, area: 1560, status: "Available" },
  { no: 6, area: 1560, status: "Available" },
  { no: 7, area: 1560, status: "Available" },
  { no: 8, area: 1560, status: "Booked" },
  { no: 9, area: 1560, status: "Available" },
  { no: 10, area: 1560, status: "Available" },
  { no: 11, area: 1560, status: "Available" },
  { no: 12, area: 1607.5, status: "Booked" },
  { no: 13, area: 1822.5, status: "Available" },
  { no: 14, area: 1810, status: "Available" },
  { no: 15, area: 1560, status: "Available" },
  { no: 16, area: 1660, status: "Available" },
  { no: 17, area: 1041, status: "Available" },
  { no: 18, area: 1164, status: "Available" },
  { no: 19, area: 1228, status: "Available" },
  { no: 20, area: 1062, status: "Available" },
  { no: 21, area: 1534, status: "Available" },
  { no: 22, area: 1473, status: "Available" },
  { no: 23, area: 1485, status: "Available" },
  { no: 24, area: 1550, status: "Available" },
  { no: 25, area: 1614, status: "Available" },
  { no: 26, area: 1678, status: "Available" },
  { no: 27, area: 1742, status: "Available" },
  { no: 28, area: 1806, status: "Available" },
  { no: 29, area: 1871, status: "Available" },
  { no: 30, area: 1937, status: "Available" },
  { no: 31, area: 1388, status: "Available" },
  { no: 32, area: 1425, status: "Available" },
  { no: 33, area: 1654, status: "Available" },
];

// Legacy export for backward compat
export const featuredProjects = [
  ...ongoingApartments.slice(0, 2),
  ...ongoingVillas.slice(0, 1),
  ongoingApartments[3],
];
