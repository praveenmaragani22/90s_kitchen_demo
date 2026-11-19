// ─── Restaurant Info ───────────────────────────────────────────────
export const restaurant = {
  name: "90's Authentic Kitchen",
  nameTE: "90's ఆథెంటిక్ కిచెన్",
  tagline: "Real Telugu Flavours. Real 90s Feels.",
  taglineTE: "నిజమైన తెలుగు రుచులు. నిజమైన 90ల అనుభవం.",
  address: "Beside Almond House, KPHB Colony Phase 3, Kukatpally, Hyderabad 500085",
  closingTime: "11:30 PM",
  phone: "09160719425",
  phoneDisplay: "091607 19425",
  whatsapp: "919160719425",
  whatsappMessage: "Hi! I'd like to place an order / book a table at 90's Authentic Kitchen.",
  mapEmbedUrl:
    "https://www.google.com/maps?q=90%27s+Authentic+Kitchen+KPHB+Colony+Phase+3+Hyderabad&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=90%27s+Authentic+Kitchen+KPHB+Colony+Phase+3+Hyderabad",
  rating: 4.3,
  reviewCount: "700+",
  priceRange: "₹400 – ₹1,400",
  services: ["Dine-in", "Takeaway", "Delivery"],
  servicesTE: ["డైన్-ఇన్", "టేకవే", "డెలివరీ"],
};

// ─── Designer credit ───────────────────────────────────────────────
export const designer = {
  name: "Praveen",
  whatsapp: "REPLACE_WITH_MY_NUMBER",
};

// ─── Signature Dishes ───────────────────────────────────────────────
export const signatureDishes = [
  {
    id: 1,
    name: "Mutton Dum Biryani",
    nameTE: "మటన్ దమ్ బిర్యానీ",
    desc: "Slow-cooked on dum with whole spices, served with curry sides. The kind that makes the whole table go quiet.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&fm=jpg&crop=entropy&fit=crop",
    tag: "House Special",
    rotate: "-rotate-2",
  },
  {
    id: 2,
    name: "Special Pulao",
    nameTE: "స్పెషల్ పులావ్",
    desc: "Fragrant basmati with seasonal vegetables, topped with crispy fried onions. Light, satisfying and very 90s Sunday.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80&fm=jpg&crop=entropy&fit=crop",
    tag: "Comfort Bowl",
    rotate: "rotate-2",
  },
  {
    id: 3,
    name: "Baby Corn Manchurian",
    nameTE: "బేబీ కార్న్ మంచూరియన్",
    desc: "Crispy baby corn tossed in a tangy Indo-Chinese sauce. Starter? Main? Honestly, we lose count refilling it.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80&fm=jpg&crop=entropy&fit=crop",
    tag: "Crowd Favourite",
    rotate: "-rotate-1",
  },
  {
    id: 4,
    name: "Crispy Prawns",
    nameTE: "క్రిస్పీ ప్రాన్స్",
    desc: "Golden-fried prawns, crunchy outside, juicy inside — gone before the main course arrives.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fm=jpg&crop=entropy&fit=crop",
    tag: "Bestseller",
    rotate: "rotate-3",
  },
  {
    id: 5,
    name: "Apricot Delight",
    nameTE: "ఆప్రికాట్ డిలైట్",
    desc: "A retro dessert that hasn't changed since the 90s — sweet, creamy, cold, and absolutely worth saving room for.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&fm=jpg&crop=entropy&fit=crop",
    tag: "Sweet Finish",
    rotate: "-rotate-3",
  },
];

// ─── Menu Highlights ────────────────────────────────────────────────
export const menuCategories = [
  {
    id: "biryani",
    label: "Biryanis & Pulaos",
    labelTE: "బిర్యానీలు & పులావ్‌లు",
    items: [
      { name: "Mutton Dum Biryani", nameTE: "మటన్ దమ్ బిర్యానీ", available: true },
      { name: "Special Pulao", nameTE: "స్పెషల్ పులావ్", available: true },
      { name: "More coming soon...", nameTE: "మరిన్ని త్వరలో...", available: false },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    labelTE: "స్టార్టర్లు",
    items: [
      { name: "Baby Corn Manchurian", nameTE: "బేబీ కార్న్ మంచూరియన్", available: true },
      { name: "Crispy Prawns", nameTE: "క్రిస్పీ ప్రాన్స్", available: true },
      { name: "More starters soon...", nameTE: "మరిన్ని స్టార్టర్లు...", available: false },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    labelTE: "డిజర్ట్లు",
    items: [
      { name: "Apricot Delight", nameTE: "ఆప్రికాట్ డిలైట్", available: true },
      { name: "More sweets soon...", nameTE: "మరిన్ని తీపులు...", available: false },
    ],
  },
];

// ─── UI copy (English / Telugu) ─────────────────────────────────────
export const copy = {
  en: {
    heroHeading: ["Remember", "Sunday Mornings?"],
    heroSub: "Authentic Telugu flavours, the way Amma used to make them — right here in KPHB.",
    heroBtn1: "Order on WhatsApp",
    heroBtn2: "Book a Table",
    sigTitle: "Signature Dishes",
    vibeTitle: "The 90s Vibe",
    vibeSub: "Walk in. Breathe deep. Hear a classic song play softly. Sit down.",
    menuTitle: "Menu Highlights",
    orderTitle: "How to Order",
    bookTitle: "Book a Table",
    ratingTitle: "What KPHB Says",
    visitTitle: "Find Us",
    navLinks: ["Dishes", "Menu", "Vibe", "Book", "Visit"],
    // VisitUs
    visitAddress: "Address",
    visitClosing: "Closes",
    visitPrice: "Price Range",
    visitDineIn: "Dine-in",
    visitTakeaway: "Takeaway",
    visitDelivery: "Delivery",
    visitDirections: "Get Directions",
    visitWhatsApp: "Order on WhatsApp",
    visitMapCaption: "Beside Almond House",
    visitMapFallback: "Open in Google Maps",
    visitPhone: "Call us",
    // Footer
    footerQuickLinks: "Quick Links",
    footerContact: "Contact",
    footerClosing: "Closes at",
    footerCredit: "Sample website design by",
    footerRights: "© 2026 90's Authentic Kitchen",
    // StickyActions
    stickyCall: "Call",
    stickyWhatsApp: "WhatsApp",
  },
  te: {
    heroHeading: ["ఆదివారం", "పొద్దున గుర్తుందా?"],
    heroSub: "అమ్మ చేసిన రుచులు — ఇప్పుడు KPHB లో.",
    heroBtn1: "WhatsApp లో ఆర్డర్ చేయండి",
    heroBtn2: "టేబుల్ బుక్ చేయండి",
    sigTitle: "ప్రత్యేక వంటకాలు",
    vibeTitle: "90ల వైబ్",
    vibeSub: "లోపలికి రండి. పాత పాట వినండి. కూర్చోండి.",
    menuTitle: "మెను హైలైట్స్",
    orderTitle: "ఆర్డర్ ఎలా చేయాలి",
    bookTitle: "టేబుల్ బుక్ చేయండి",
    ratingTitle: "KPHB ఏం చెప్తుంది",
    visitTitle: "మమ్మల్ని కనుగొనండి",
    navLinks: ["వంటకాలు", "మెను", "వైబ్", "బుక్", "దర్శించండి"],
    // VisitUs
    visitAddress: "చిరునామా",
    visitClosing: "మూసే సమయం",
    visitPrice: "ధర పరిధి",
    visitDineIn: "డైన్-ఇన్",
    visitTakeaway: "టేకవే",
    visitDelivery: "డెలివరీ",
    visitDirections: "దారి చూపించు",
    visitWhatsApp: "WhatsApp లో ఆర్డర్ చేయండి",
    visitMapCaption: "ఆమండ్ హౌస్ పక్కన",
    visitMapFallback: "Google Maps లో తెరవండి",
    visitPhone: "ఫోన్ చేయండి",
    // Footer
    footerQuickLinks: "త్వరిత లింకులు",
    footerContact: "సంప్రదించండి",
    footerClosing: "మూసే సమయం",
    footerCredit: "వెబ్‌సైట్ డిజైన్",
    footerRights: "© 2026 90's ఆథెంటిక్ కిచెన్",
    // StickyActions
    stickyCall: "కాల్ చేయండి",
    stickyWhatsApp: "WhatsApp",
  },
};
