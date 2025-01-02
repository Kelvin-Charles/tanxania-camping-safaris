import React, { useState, useEffect, useRef } from 'react';
import '../western/ParkStyles.css';
import './Tarangire.css';
import { FaMapMarkerAlt, FaTree, FaLeaf, FaPaw, FaSun, FaCamera, FaCar, FaBinoculars, FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaWater, FaChevronLeft, FaChevronRight, FaCalendarCheck, FaWhatsapp, FaArrowRight, FaImages, FaTimes, FaSearchPlus, FaSync, FaExpand, FaUsers, FaGlobe, FaMountain, FaFeather, FaClock, FaStar, FaEye, FaCloudRain, FaCompass } from 'react-icons/fa';
import { contactInfo } from '../../../config/contact';
import '../../../shared/styles/BookingForm.css';

const viewpoints = [
  {
    id: 'tarangire-river',
    name: 'Tarangire River',
    description: 'The life-giving river that attracts diverse wildlife year-round',
    embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.8333!2d36.0000!3f180!4f0!5f0.7820865974627469'
  },
  {
    id: 'silale-swamps',
    name: 'Silale Swamps',
    description: 'Vast wetlands teeming with elephants and water birds',
    embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.9167!2d36.1667!3f220!4f0!5f0.7820865974627469'
  },
  {
    id: 'baobab-valley',
    name: 'Baobab Valley',
    description: 'Ancient giants dotting the landscape, some over 1,000 years old',
    embedCode: 'https://www.google.com/maps/embed?pb=!4v1710825433695!6m8!1m7!1sCAoSLEFGMVFpcE1aWUY4MHZfbXFYWnJKRGpqX0QtRWFhUDRQUmJqY0QtRHJERVNN!2m2!1d-3.7500!2d36.0833!3f150!4f0!5f0.7820865974627469'
  }
];

const wildlifeFacts = [
  {
    title: "Elephant Paradise",
    description: "Home to one of Africa's largest elephant populations, with herds of up to 300 individuals during peak season",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpiueHfpO8R_Qzaai9aHYTPy-ChCPp-Pd4g&s"
  },
  {
    title: "Ancient Baobabs",
    description: "The park features some of Africa's oldest baobab trees, with specimens over 1,000 years old",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-r1XN4GgPSt3MWqtzDv6WY87xVwRl8j4Bg&s"
  },
  {
    title: "River Ecosystem",
    description: "The Tarangire River sustains diverse wildlife throughout the year, even during the driest months",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIkFueNUU6pGls9eWGpA_HAbIFdQxR0voFw&s"
  },
  {
    title: "Migration Patterns",
    description: "During the dry season, Tarangire hosts the second-largest wildlife migration in Tanzania, after the Serengeti",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUmsormK_CakofVRgMxkibM8Uc4uag1prOw&s"
  },
  {
    title: "Predator Paradise",
    description: "Lions, leopards, and spotted hyenas thrive here, following the seasonal movements of their prey",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPYcDQFZxxSmC9-27BqZw5seotrA4RZp0NA&s"
  },
  {
    title: "Python Pool",
    description: "The park's swamps are home to massive African rock pythons, often seen draped over tree branches",
    image: "https://img.freepik.com/free-photo/python-tree-tarangire_181624-48222.jpg"
  }
];

const birdSpecies = [
  {
    name: "Yellow-collared Lovebird",
    image: "https://img.freepik.com/free-photo/colorful-lovebird-branch_181624-48216.jpg",
    description: "Endemic to Tanzania, these colorful birds are often seen in pairs",
    population: "75%",
    bestSeason: "Year-round"
  },
  {
    name: "Red-and-yellow Barbet",
    image: "https://img.freepik.com/free-photo/red-yellow-barbet-tree_181624-48215.jpg",
    description: "Distinctive bird known for its colorful plumage and loud calls",
    population: "65%",
    bestSeason: "June to October"
  },
  {
    name: "Ashy Starling",
    image: "https://img.freepik.com/free-photo/ashy-starling-branch_181624-48223.jpg",
    description: "Endemic to Tanzania, these unique starlings are commonly seen around baobab trees",
    population: "85%",
    bestSeason: "Year-round"
  },
  {
    name: "Northern Pied Babbler",
    image: "https://img.freepik.com/free-photo/babbler-tarangire_181624-48224.jpg",
    description: "Social birds often seen in family groups, known for their distinctive calls",
    population: "70%",
    bestSeason: "June to October"
  }
];

const landscapes = [
  {
    name: "Baobab Forest",
    image: "https://img.freepik.com/free-photo/ancient-baobab-trees-sunset_181624-48214.jpg",
    description: "Ancient baobabs create an otherworldly landscape",
    highlights: ["Ancient Trees", "Elephant Gatherings", "Sunset Views"],
    bestTime: "Late Afternoon"
  },
  {
    name: "Silale Swamps",
    image: "https://img.freepik.com/free-photo/wetland-landscape-tarangire_181624-48213.jpg",
    description: "Vast wetlands that attract diverse wildlife",
    highlights: ["Bird Life", "Elephant Herds", "Water Features"],
    bestTime: "Early Morning"
  },
  {
    name: "Tarangire River Valley",
    image: "https://img.freepik.com/free-photo/river-valley-tarangire_181624-48225.jpg",
    description: "The park's lifeline, attracting huge concentrations of wildlife in dry season",
    highlights: ["Wildlife Gatherings", "River Scenes", "Predator Action"],
    bestTime: "Early Morning/Late Afternoon"
  },
  {
    name: "Grassland Plains",
    image: "https://img.freepik.com/free-photo/grasslands-tarangire_181624-48226.jpg",
    description: "Vast savanna plains dotted with termite mounds and ancient baobabs",
    highlights: ["Cheetah Territory", "Grazing Herds", "Dramatic Skies"],
    bestTime: "Midday"
  }
];

const photographyTips = {
  general: [
    {
      title: "Golden Light",
      tip: "Best photography during early morning and late afternoon when animals gather at the river",
      icon: "FaSun"
    },
    {
      title: "Baobab Compositions",
      tip: "Use ancient baobabs as dramatic backgrounds for wildlife shots",
      icon: "FaCamera"
    },
    {
      title: "Tarangire River",
      tip: "The park's lifeline, attracting diverse wildlife year-round as dramatic backgrounds for wildlife shots",
      icon: "FaWater"
    }
  ],
  locations: [
    {
      spot: "Tarangire River",
      bestFor: "Elephant herds, predator sightings",
      equipment: "Telephoto lens (200-600mm)"
    },
    {
      spot: "Silale Swamps",
      bestFor: "Birds, elephant herds",
      equipment: "Wide-angle and telephoto lenses"
    }
  ]
};

const safariActivities = [
  {
    title: "Game Drives",
    description: "Explore the park's diverse landscapes and witness incredible wildlife",
    image: "https://img.freepik.com/free-photo/safari-vehicle-tarangire_181624-48212.jpg",
    duration: "Full day or half-day options",
    highlights: ["Elephant herds", "Ancient baobabs", "River crossings"]
  },
  {
    title: "Walking Safaris",
    description: "Get closer to nature with guided walking tours",
    image: "https://img.freepik.com/free-photo/walking-safari-tarangire_181624-48211.jpg",
    duration: "2-3 hours",
    highlights: ["Bird watching", "Plant identification", "Small wildlife"]
  }
];

const enhancedPhotographyTips = {
  general: [
    ...photographyTips.general,
    {
      title: "Elephant Portraits",
      tip: "Position yourself at ground level near waterholes for dramatic elephant shots",
      icon: "FaCamera"
    },
    {
      title: "Baobab Silhouettes",
      tip: "Capture stunning silhouettes of baobabs during sunrise and sunset",
      icon: "FaSun"
    },
    {
      title: "Bird Photography",
      tip: "Use high shutter speeds (1/2000+) for birds in flight around swamps",
      icon: "FaFeather"
    }
  ],
  locations: [
    ...photographyTips.locations,
    {
      spot: "Baobab Valley",
      bestFor: "Landscape photography, elephant interactions",
      equipment: "Wide-angle lens (16-35mm), ND filters"
    },
    {
      spot: "Sunset Ridge",
      bestFor: "Golden hour shots, wildlife silhouettes",
      equipment: "70-200mm lens, tripod"
    }
  ],
  seasonalTips: [
    {
      season: "Dry Season",
      tips: [
        "Focus on waterhole activity",
        "Dust adds atmosphere to sunset shots",
        "Clear skies ideal for star photography"
      ]
    },
    {
      season: "Green Season",
      tips: [
        "Dramatic storm clouds as backgrounds",
        "Lush landscapes and reflections",
        "Birds in breeding plumage"
      ]
    }
  ]
};

const accommodationOptions = [
  {
    type: "Luxury Lodges",
    options: [
      {
        name: "Tarangire Treetops",
        description: "Unique treehouse-style rooms with elevated views",
        features: ["Private balconies", "En-suite bathrooms", "Air conditioning"],
        price: "Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpmiA23JT-en8f-s7LlerCYPxJafp_PK3zA&s"
      },
      {
        name: "Oliver's Camp",
        description: "Authentic safari experience with luxury touches",
        features: ["Gourmet dining", "Guided walks", "Bush breakfast"],
        price: "Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnMLVBm8qetLLvBnxbiEDxCgeQDdMBKviKg&s"
      }
    ]
  },
  {
    type: "Tented Camps",
    options: [
      {
        name: "Kirurumu Tarangire",
        description: "Eco-friendly camp with stunning views",
        features: ["Solar power", "Local guides", "Bush dinners"],
        price: "Moderate",
        image: "https://images.ctfassets.net/p03x4m3svbfn/2Ynj9PhXnHVq3qvKHV9o2G/0df9bbc04b4a208c20f12a8f00ec570a/20210920_155125von.jpg?w=724&h=448&fit=fill&q=50"
      }
    ]
  }
];

const culturalExperiences = {
  title: "Cultural Heritage",
  description: "Experience the rich cultural heritage of the Maasai and other local communities",
  activities: [
    {
      name: "Maasai Village Visit",
      description: "Learn about traditional Maasai life and customs",
      duration: "Half-day",
      highlights: ["Traditional dances", "Craft demonstrations", "Cultural talks"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPs94iEU1-7a6F9LKc6YB1yxntlIimLDUblA&s"
    },
    {
      name: "Local Market Tours",
      description: "Visit authentic local markets and interact with communities",
      duration: "2-3 hours",
      highlights: ["Local produce", "Traditional crafts", "Community interaction"],
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ce/b6/79/immer-was-los-hier.jpg?w=1200&h=-1&s=1"
    }
  ]
};

const seasonalHighlights = {
  drySeasonJunOct: {
    title: "Dry Season (June-October)",
    highlights: [
      "Massive elephant herds congregating along Tarangire River",
      "Exceptional predator sightings as animals gather near water sources",
      "Ancient baobabs creating dramatic landscapes",
      "Perfect visibility for photography and game viewing"
    ],
    wildlife: ["Elephants", "Lions", "Leopards", "Giraffes", "Zebras", "Buffalo"],
    activities: ["Game drives", "Walking safaris", "Night drives", "Photography"],
    image: "https://safariavventura.com/wp-content/uploads/2017/03/PARCO-TARANGIRE-1.jpg",
    icon: "FaSun"
  },
  wetSeasonNovMay: {
    title: "Green Season (November-May)",
    highlights: [
      "Lush landscapes with vibrant wildflowers",
      "Spectacular bird watching with migratory species",
      "Newborn animals and breeding season",
      "Dramatic skies perfect for landscape photography"
    ],
    wildlife: ["Migratory birds", "Young animals", "Resident predators", "Antelope species"],
    activities: ["Bird watching", "Photography", "Cultural visits", "Guided walks"],
    image: "https://www.siyabona.com/images/olivers-camp-elephant-family-590x390.jpg",
    icon: "FaCloudRain"
  }
};

const parkHighlights = [
  {
    title: "Ancient Baobab Forest",
    description: "Home to some of Africa's oldest and largest baobab trees, some over 1,000 years old",
    image: "https://www.tarangirenationalparks.com/wp-content/uploads/2023/10/tarangire-national-park-1.jpg",
    fact: "Some baobabs have trunks with circumferences of up to 36 meters"
  },
  {
    title: "Elephant Migration",
    description: "Hosts the largest concentration of elephants outside of Serengeti ecosystem",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqQMf3047qwZ8BMO13QfsJ1Qw2O92GmPuVQ&s",
    fact: "Up to 3,000 elephants gather during peak season"
  },
  {
    title: "Tarangire River",
    description: "The park's lifeline, attracting diverse wildlife year-round",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/41/6a/37/tarangire-national-park.jpg",
    fact: "Supports over 550 bird species"
  }
];

const parkZones = [
  {
    id: 'tarangire-river',
    name: 'Tarangire River Zone',
    description: 'The life-giving artery of the park',
    wildlife: ['Elephants', 'Lions', 'Zebras', 'Wildebeest'],
    activities: ['Game drives', 'Bird watching', 'Photography'],
    bestTime: 'Early morning and late afternoon',
    vegetation: 'Riverine forest and grassland',
    coordinates: { lat: -3.8333, lng: 36.0000 }
  },
  {
    id: 'silale-swamps',
    name: 'Silale Swamps',
    description: 'Vast wetlands teeming with wildlife',
    wildlife: ['Hippos', 'Water birds', 'Buffalo'],
    activities: ['Bird watching', 'Photography'],
    bestTime: 'Morning hours',
    vegetation: 'Marshland and swamp grass',
    coordinates: { lat: -3.9167, lng: 36.1667 }
  },
  {
    id: 'baobab-valley',
    name: 'Baobab Valley',
    description: 'Ancient giants dotting the landscape',
    wildlife: ['Elephants', 'Giraffes', 'Leopards'],
    activities: ['Walking safaris', 'Photography'],
    bestTime: 'Late afternoon',
    vegetation: 'Baobab woodland and savanna',
    coordinates: { lat: -3.7500, lng: 36.0833 }
  }
];

const parkHistory = {
  title: "Park History & Conservation",
  timeline: [
    {
      year: "1957",
      event: "Establishment of Tarangire Game Reserve",
      description: "Created to protect the Tarangire River and its unique ecosystem"
    },
    {
      year: "1970",
      event: "National Park Status",
      description: "Upgraded to National Park status to enhance wildlife protection"
    },
    {
      year: "2000",
      event: "Conservation Corridor",
      description: "Implementation of wildlife corridors connecting to Manyara ecosystem"
    }
  ],
  conservation: {
    title: "Conservation Efforts",
    initiatives: [
      {
        name: "Elephant Migration Project",
        description: "Tracking and protecting traditional elephant migration routes",
        impact: "30% increase in elephant population since 2010"
      },
      {
        name: "Baobab Protection",
        description: "Preserving ancient baobab trees and their ecosystem",
        impact: "Over 200 ancient trees protected"
      }
    ]
  }
};

const uniqueFeatures = {
  geology: {
    title: "Geological Wonders",
    features: [
      {
        name: "Ancient River Valley",
        description: "Formed over millions of years by the Tarangire River",
        image: "https://example.com/river-valley.jpg"
      },
      {
        name: "Silale Swamps",
        description: "Permanent wetlands supporting diverse ecosystems",
        image: "https://example.com/swamps.jpg"
      }
    ]
  },
  vegetation: {
    title: "Unique Vegetation",
    types: [
      {
        name: "Baobab Woodlands",
        description: "Ancient trees up to 1,000 years old",
        characteristics: ["Drought resistant", "Wildlife habitat", "Cultural significance"]
      },
      {
        name: "Acacia Savanna",
        description: "Classic African landscape supporting diverse herbivores",
        characteristics: ["Seasonal changes", "Grazing grounds", "Predator territory"]
      }
    ]
  }
};

const interactiveElements = {
  virtualTour: {
    title: "360° Virtual Tour",
    locations: [
      {
        name: "Tarangire River Viewpoint",
        coordinates: { lat: -3.8333, lng: 36.0000 },
        description: "Panoramic views of wildlife gathering at the river"
      },
      {
        name: "Baobab Valley",
        coordinates: { lat: -3.7500, lng: 36.0833 },
        description: "Walk among ancient baobab trees"
      }
    ]
  },
  wildlifeTracker: {
    title: "Live Wildlife Tracking",
    species: [
      {
        name: "Elephant Herds",
        lastSeen: "Recent sightings near Silale Swamps",
        frequency: "Daily"
      },
      {
        name: "Lion Pride",
        lastSeen: "Active around Tarangire Hill",
        frequency: "Regular"
      }
    ]
  }
};

const parkLocations = [
  {
    name: "Tarangire Safari Lodge",
    description: "Panoramic views of the Tarangire River valley, perfect for game viewing",
    top: 30,
    left: 48
  },
  {
    name: "Silale Swamps",
    description: "Large wetland area attracting diverse wildlife, especially during dry season",
    top: 70,
    left: 52
  },
  {
    name: "Tarangire River",
    description: "The park's lifeline, attracting wildlife year-round",
    top: 50,
    left: 45
  },
  {
    name: "Boundary Hill",
    description: "Excellent viewpoint offering panoramic views of the park",
    top: 20,
    left: 55
  },
  {
    name: "Lemiyon",
    description: "Rich wildlife viewing area with ancient baobab trees",
    top: 40,
    left: 65
  },
  {
    name: "Gurusi Plains",
    description: "Open savannah plains ideal for spotting large herds",
    top: 80,
    left: 40
  }
];

const wildlifeTracker = {
  species: [
    {
      name: "African Elephant",
      lastSeen: "Today at Tarangire River",
      frequency: "Very Common",
      locations: ["River", "Silale Plains"],
      sightings: [
        { top: 45, left: 40, time: "2 hours ago" },
        { top: 50, left: 45, time: "Today morning" },
        { top: 65, left: 52, time: "Yesterday" }
      ]
    },
    {
      name: "Lion Pride",
      lastSeen: "Yesterday near Baobab Valley",
      frequency: "Regular",
      locations: ["Grasslands", "River Area"],
      sightings: [
        { top: 35, left: 70, time: "Yesterday" },
        { top: 40, left: 65, time: "2 days ago" }
      ]
    },
    {
      name: "Leopard",
      lastSeen: "2 days ago",
      frequency: "Occasional",
      locations: ["Baobab Valley"],
      sightings: [
        { top: 20, left: 55, time: "2 days ago" },
        { top: 30, left: 48, time: "Last week" }
      ]
    }
  ]
};

const wildlifeSpots = {
  morning: [
    {
      species: "Elephants",
      behavior: "Drinking and bathing at the river",
      details: "Family herds with young calves gathering for morning hydration",
      activity: "High",
      top: "40%",
      left: "45%",
      group: "15-20 individuals",
      bestPhoto: "From the north bank"
    },
    {
      species: "Birds",
      behavior: "Active feeding in wetlands",
      details: "Yellow-billed storks and sacred ibis fishing in shallow waters",
      activity: "Very High",
      top: "55%",
      left: "60%",
      group: "Mixed species flocks",
      bestPhoto: "Early morning light"
    },
    {
      species: "Baboons",
      behavior: "Foraging in baobab trees",
      details: "Troops moving from sleeping sites to feeding grounds",
      activity: "High",
      top: "35%",
      left: "52%",
      group: "30-40 individuals",
      bestPhoto: "From ground level"
    }
  ],
  afternoon: [
    {
      species: "Lions",
      behavior: "Resting in shade",
      details: "Pride seeking shelter under acacia trees during peak heat",
      activity: "Low",
      top: "35%",
      left: "55%",
      group: "Pride of 8-12",
      bestPhoto: "From safari vehicle"
    },
    {
      species: "Giraffes",
      behavior: "Browsing on acacia trees",
      details: "Careful feeding patterns avoiding thorns with skilled tongue use",
      activity: "Moderate",
      top: "45%",
      left: "65%",
      group: "Tower of 6-8",
      bestPhoto: "Side profile against sky"
    },
    {
      species: "Buffalo",
      behavior: "Wallowing in mud pools",
      details: "Cooling behavior and natural tick removal",
      activity: "Moderate",
      top: "50%",
      left: "58%",
      group: "Herd of 50+",
      bestPhoto: "From elevated position"
    }
  ],
  evening: [
    {
      species: "Leopard",
      behavior: "Beginning to hunt",
      details: "Solitary hunter moving through undergrowth near river",
      activity: "High",
      top: "30%",
      left: "50%",
      group: "Solitary",
      bestPhoto: "Using spotlight carefully"
    },
    {
      species: "Elephants",
      behavior: "Returning to forest areas",
      details: "Family groups moving together in single file",
      activity: "High",
      top: "50%",
      left: "45%",
      group: "Multiple families",
      bestPhoto: "Silhouettes at sunset"
    },
    {
      species: "Hyenas",
      behavior: "Starting night patrol",
      details: "Clan members emerging from den sites",
      activity: "Increasing",
      top: "42%",
      left: "53%",
      group: "4-6 individuals",
      bestPhoto: "Low-light conditions"
    }
  ]
};

const seasonalImages = {
  dry: "https://img.freepik.com/free-photo/dry-season-african-savanna_181624-48232.jpg",
  green: "https://img.freepik.com/free-photo/green-season-african-savanna_181624-48233.jpg"
};

const seasonalVariations = {
  drySeasonEarly: {
    months: "June-July",
    landscape: "Yellowing grasslands",
    wildlife: "Increasing concentrations",
    activities: ["Game drives", "Walking safaris", "Night drives"],
    image: "https://example.com/dry-early.jpg"
  },
  drySeasonPeak: {
    months: "August-October",
    landscape: "Dusty and sparse",
    wildlife: "Highest concentrations",
    activities: ["River watching", "Photography", "Extended drives"],
    image: "https://example.com/dry-peak.jpg"
  },
  shortRains: {
    months: "November-December",
    landscape: "Fresh green shoots",
    wildlife: "Dispersing herds",
    activities: ["Bird watching", "Landscape photography"],
    image: "https://example.com/short-rains.jpg"
  },
  greenSeason: {
    months: "January-March",
    landscape: "Lush and vibrant",
    wildlife: "Breeding season",
    activities: ["Cultural visits", "Birding"],
    image: "https://example.com/green.jpg"
  }
};

const Tarangire = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeViewpoint, setActiveViewpoint] = useState('baobab');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedZone, setSelectedZone] = useState(null);
  const [isZoneHovered, setIsZoneHovered] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSeason, setSelectedSeason] = useState('dry');
  const [showPhotoTips, setShowPhotoTips] = useState(false);
  const [activeFact, setActiveFact] = useState(0);
  const [viewMode, setViewMode] = useState('aerial');
  const modelViewerRef = useRef(null);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImage, setGalleryImage] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [virtualTourActive, setVirtualTourActive] = useState(false);
  const [currentVirtualLocation, setCurrentVirtualLocation] = useState(null);
  const [activeZone, setActiveZone] = useState(null);
  const [showEcosystemModal, setShowEcosystemModal] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaSun':
        return <FaSun />;
      case 'FaCamera':
        return <FaCamera />;
      case 'FaCompass':
        return <FaCompass />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGallery = (imageSrc) => {
    setGalleryImage(imageSrc);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % parkHighlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  const handleHotspotClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="park-page">
      <div className="scroll-progress">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {showGallery && (
        <div className="gallery-view active" onClick={closeGallery}>
          <img src={galleryImage} alt="Gallery view" className="gallery-image" />
          <button className="close-gallery" onClick={closeGallery}>
            <FaTimes />
          </button>
        </div>
      )}

      <section className="park-hero">
        <div className="hero-content">
          <h1>Tarangire National Park</h1>
          <p>Home to Ancient Baobabs and Tanzania's Largest Elephant Population</p>
        </div>
      </section>

      <section className="park-overview">
        <div className="container">
          <h2>About Tarangire</h2>
          <p>Tarangire National Park is famous for its large elephant herds, ancient baobab trees, and diverse wildlife. The park is named after the Tarangire River, which provides a permanent water source for wildlife throughout the year.</p>
          
          <div className="key-features">
            <div className="feature">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Northern Tanzania, 120 km from Arusha</p>
            </div>
            <div className="feature">
              <FaTree />
              <h3>Size</h3>
              <p>2,850 square kilometers of diverse landscapes</p>
            </div>
            <div className="feature">
              <FaWater />
              <h3>Ecosystem</h3>
              <p>River valleys, swamps, and ancient baobab trees</p>
            </div>
            <div className="feature">
              <FaPaw />
              <h3>Wildlife</h3>
              <p>Large elephant herds, predators, and diverse antelope species</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-section">
        <div className="container">
          <h2>Wildlife & Nature</h2>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-Axl8GRxHBuMrxILdnfQQy0Wcxp5RQRy1A&s" alt="Elephants" />
              </div>
              <div className="wildlife-content">
                <h3>Elephant Herds</h3>
                <p>Home to some of Africa's largest elephant populations, with herds of up to 300 individuals.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnUc-jUFbHMq9en2UgWGMSksbA9htLUtYgQ&sg" alt="Baobabs" />
              </div>
              <div className="wildlife-content">
                <h3>Ancient Baobabs</h3>
                <p>Iconic landscapes dotted with ancient baobab trees, some over 1,000 years old.</p>
              </div>
            </div>
            <div className="wildlife-card">
              <div className="wildlife-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsp3QnkTXDXL5_K7-T44D4noYrigixtf1TA&s" alt="Predators" />
              </div>
              <div className="wildlife-content">
                <h3>Predators</h3>
                <p>Lions, leopards, and other predators thrive in the diverse habitats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-showcase">
        <div className="container">
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'birds' ? 'active' : ''}`}
              onClick={() => handleTabChange('birds')}
            >
              <FaPaw /> Birds
            </button>
            <button 
              className={`tab-btn ${activeTab === 'wildlife' ? 'active' : ''}`}
              onClick={() => handleTabChange('wildlife')}
            >
              <FaFeather /> wildlife
            </button>
            <button 
              className={`tab-btn ${activeTab === 'landscapes' ? 'active' : ''}`}
              onClick={() => handleTabChange('landscapes')}
            >
              <FaMountain /> Landscapes
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'birds' && (
              <div className="wildlife-content">
                <div className="wildlife-facts">
                  <div className="facts-slider">
                    {wildlifeFacts.map((fact, index) => (
                      <div key={index} className={`fact-slide ${index === activeFact ? 'active' : ''}`}>
                        <div className="fact-image">
                          <img src={fact.image} alt={fact.title} />
                        </div>
                        <div className="fact-content">
                          <h3>{fact.title}</h3>
                          <p>{fact.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="fact-navigation">
                    <button 
                      className="nav-btn prev" 
                      onClick={() => setActiveFact(prev => prev === 0 ? wildlifeFacts.length - 1 : prev - 1)}
                    >
                      <FaChevronLeft />
                    </button>
                    <div className="fact-indicators">
                      {wildlifeFacts.map((_, index) => (
                        <button
                          key={index}
                          className={`indicator ${index === activeFact ? 'active' : ''}`}
                          onClick={() => setActiveFact(index)}
                        />
                      ))}
                    </div>
                    <button 
                      className="nav-btn next"
                      onClick={() => setActiveFact(prev => (prev + 1) % wildlifeFacts.length)}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'birds' && (
              <div className="birds-showcase">
                <div className="birds-hero">
                  <img src="https://img.freepik.com/free-photo/birds-tarangire_181624-48210.jpg" alt="Birds of Tarangire" />
                  <div className="hero-overlay">
                    <h3>Birding Paradise</h3>
                    <p>Over 550 bird species inhabit Tarangire's diverse ecosystems</p>
                  </div>
                </div>
                
                <div className="birds-grid">
                  {birdSpecies.map((bird, index) => (
                    <div key={index} className="bird-card">
                      <img src={bird.image} alt={bird.name} />
                      <div className="card-content">
                        <h4>{bird.name}</h4>
                        <p>{bird.description}</p>
                        <div className="bird-info">
                          <div className="population-indicator">
                            <div className="indicator-bar" style={{width: bird.population}}></div>
                            <span>Abundance: {bird.population}</span>
                          </div>
                          <div className="season-tag">Best: {bird.bestSeason}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'landscapes' && (
              <div className="landscapes-showcase">
                <div className="landscapes-hero">
                  <img src="https://img.freepik.com/free-photo/tarangire-landscape_181624-48209.jpg" alt="Tarangire Landscapes" />
                  <div className="hero-overlay">
                    <h3>Dramatic Landscapes</h3>
                    <p>Ancient baobabs and rolling savannas create stunning vistas</p>
                  </div>
                </div>
                
                <div className="landscapes-grid">
                  {landscapes.map((landscape, index) => (
                    <div key={index} className="landscape-card">
                      <img src={landscape.image} alt={landscape.name} />
                      <div className="card-content">
                        <h4>{landscape.name}</h4>
                        <p>{landscape.description}</p>
                        <div className="highlights">
                          {landscape.highlights.map((highlight, i) => (
                            <span key={i} className="highlight-tag">{highlight}</span>
                          ))}
                        </div>
                        <p className="best-time"><FaClock /> Best time: {landscape.bestTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          <h2>Activities & Attractions</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsdkn6ICYQeq_SGzkjqutqEcC5xZVwXbP7Q&s" alt="Game Drives" />
              </div>
              <div className="activity-content">
                <h3>Game Drives</h3>
                <p>Explore diverse landscapes and witness incredible wildlife encounters.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdqTGg7wx8oGN6sNJgnSOYySvPiurAFxRCQ&s" alt="Walking Safaris" />
              </div>
              <div className="activity-content">
                <h3>Walking Safaris</h3>
                <p>Guided walks through the ancient baobab forests.</p>
              </div>
            </div>
            <div className="activity-card">
              <div className="activity-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCS-Kt5zz_rxAR932ZG4EIEx-AZc3951pKQ&s" alt="Bird Watching" />
              </div>
              <div className="activity-content">
                <h3>Bird Watching</h3>
                <p>Over 550 bird species inhabit the diverse ecosystems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-info">
        <div className="container">
          <h2>Visitor Information</h2>
          <div className="info-grid">
            <div className="info-card">
              <FaMapMarkerAlt />
              <h3>How to Get There</h3>
              <p>120 km drive from Arusha or scheduled flights to Tarangire airstrip.</p>
            </div>
            <div className="info-card">
              <FaCamera />
              <h3>Best Time to Visit</h3>
              <p>July to October for best wildlife viewing during dry season.</p>
            </div>
            <div className="info-card">
              <FaBinoculars />
              <h3>What to Bring</h3>
              <p>Camera, binoculars, sun protection, and comfortable clothing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seasonal-highlights">
        <div className="container">
          <h2>Seasonal Highlights</h2>
          <div className="season-tabs">
            <div 
              className={`season-tab ${selectedSeason === 'dry' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('dry')}
            >
              <FaSun />
              Dry Season
            </div>
            <div 
              className={`season-tab ${selectedSeason === 'wet' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('wet')}
            >
              <FaCloudRain />
              Green Season
            </div>
          </div>

          <div className={`season-content ${selectedSeason ? 'active' : ''}`}>
            <div className="season-info">
              <h3>
                {selectedSeason === 'dry' 
                  ? seasonalHighlights.drySeasonJunOct.title 
                  : seasonalHighlights.wetSeasonNovMay.title}
              </h3>
              <div className="highlights-list">
                {(selectedSeason === 'dry' 
                  ? seasonalHighlights.drySeasonJunOct.highlights 
                  : seasonalHighlights.wetSeasonNovMay.highlights).map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <FaStar />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="season-details">
                <div className="details-grid">
                  <div className="detail-box">
                    <h4><FaPaw /> Wildlife Highlights</h4>
                    <ul>
                      {(selectedSeason === 'dry' 
                        ? seasonalHighlights.drySeasonJunOct.wildlife 
                        : seasonalHighlights.wetSeasonNovMay.wildlife).map((animal, index) => (
                        <li key={index}>{animal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="detail-box">
                    <h4><FaCompass /> Activities</h4>
                    <ul>
                      {(selectedSeason === 'dry' 
                        ? seasonalHighlights.drySeasonJunOct.activities 
                        : seasonalHighlights.wetSeasonNovMay.activities).map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="season-image">
              <img 
                src={selectedSeason === 'dry' 
                  ? seasonalHighlights.drySeasonJunOct.image 
                  : seasonalHighlights.wetSeasonNovMay.image} 
                alt={selectedSeason === 'dry' ? "Dry Season" : "Green Season"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="accommodation-section">
        <div className="container">
          <h2>Where to Stay</h2>
          <div className="accommodation-grid">
            {accommodationOptions.map((category, index) => (
              <div key={index} className="accommodation-category">
                <h3>{category.type}</h3>
                <div className="options-grid">
                  {category.options.map((option, idx) => (
                    <div key={idx} className="accommodation-card">
                      <div className="accommodation-image">
                        <img src={option.image} alt={option.name} />
                      </div>
                      <div className="accommodation-content">
                        <h4>{option.name}</h4>
                        <p>{option.description}</p>
                        <div className="features-list">
                          {option.features.map((feature, i) => (
                            <span key={i} className="feature-tag"><FaCheckCircle /> {feature}</span>
                          ))}
                        </div>
                        <div className="price-category">
                          <FaStar /> {option.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cultural-section">
        <div className="container">
          <h2>{culturalExperiences.title}</h2>
          <p className="section-intro">{culturalExperiences.description}</p>
          <div className="cultural-activities">
            {culturalExperiences.activities.map((activity, index) => (
              <div key={index} className="cultural-card">
                <div className="cultural-image">
                  <img src={activity.image} alt={activity.name} />
                </div>
                <div className="cultural-content">
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                  <div className="duration">
                    <FaClock /> {activity.duration}
                  </div>
                  <div className="cultural-highlights">
                    {activity.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">
                        <FaCheckCircle /> {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photography-guide-section">
        <div className="container">
          <h2>Photography Guide</h2>
          <div className="photo-tips-grid">
            {photographyTips.general.map((tip, index) => (
              <div key={index} className="photo-tip-card">
                <div className="tip-icon">
                  {getIcon(tip.icon)}
                </div>
                <h4>{tip.title}</h4>
                <p>{tip.tip}</p>
              </div>
            ))}
          </div>
          
          <div className="location-specific-tips">
            <h3>Location-Specific Tips</h3>
            <div className="locations-grid">
              {photographyTips.locations.map((location, index) => (
                <div key={index} className="location-card">
                  <h4>{location.spot}</h4>
                  <p><strong>Best For:</strong> {location.bestFor}</p>
                  <p><strong>Recommended:</strong> {location.equipment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      <section className="park-highlights">
        <div className="container">
          <h2>Park Highlights</h2>
          <div className="highlights-slider">
            {parkHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`highlight-slide ${index === activeHighlight ? 'active' : ''}`}
                onClick={() => openGallery(highlight.image)}
              >
                <div className="highlight-image">
                  <img src={highlight.image} alt={highlight.title} />
                </div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  <div className="highlight-fact">
                    <FaInfoCircle />
                    <span>{highlight.fact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <section 
        id="park-history" 
        className={`park-history ${isTimelineVisible ? 'timeline-visible' : ''}`}
        onMouseEnter={() => setIsTimelineVisible(true)}
        onMouseLeave={() => setIsTimelineVisible(false)}
      >
        <div className="container">
          <h2>{parkHistory.title}</h2>
          <div className="timeline">
            {parkHistory.timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${activeSection === 'park-history' ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.event}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="conservation-initiatives">
            <h3>{parkHistory.conservation.title}</h3>
            <div className="initiatives-grid">
              {parkHistory.conservation.initiatives.map((initiative, index) => (
                <div 
                  key={index} 
                  className="initiative-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4>{initiative.name}</h4>
                  <p>{initiative.description}</p>
                  <div className="impact-badge">
                    <FaCheckCircle />
                    <span>{initiative.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="interactive-map-section">
        <div className="container">
          <h2>Park Map & Key Areas</h2>
          <div className="map-container">
            <div className="map-interactive">
              <img src="https://africanscenicsafaris.com/images/tarangire-map.webp" alt="Tarangire National Park Map" />
              {parkLocations.map((location, index) => (
                <div 
                  key={index}
                  className="map-hotspot"
                  style={{ top: `${location.top}%`, left: `${location.left}%` }}
                  onClick={() => handleHotspotClick(location)}
                >
                  <div className="hotspot-content">
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="map-sidebar">
              <h3>Key Locations</h3>
              <ul className="location-list">
                {parkLocations.map((location, index) => (
                  <li 
                    key={index}
                    className={selectedLocation === location ? 'active' : ''}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <h4>{location.name}</h4>
                    <p>{location.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wildlife-tracking-section">
        <div className="container">
          <h2>Live Wildlife Tracking</h2>
          <div className="tracking-grid">
            {wildlifeTracker.species.map((species, index) => (
              <div 
                key={index}
                className="tracking-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="species-info">
                  <h3>{species.name}</h3>
                  <p className="last-seen">
                    <FaClock /> Last seen: {species.lastSeen}
                  </p>
                  <p className="frequency">
                    <FaSync /> Frequency: {species.frequency}
                  </p>
                </div>
                <div className={`tracking-map ${species.name.toLowerCase().includes('elephant') ? 'elephant-view' : 
                                      species.name.toLowerCase().includes('lion') ? 'lion-view' : 
                                      'leopard-view'}`}>
                  <img src="https://africanscenicsafaris.com/images/tarangire-map.webp" alt={`${species.name} sightings map`} />
                  {species.sightings.map((sighting, idx) => {
                    const getMarkerClass = (time) => {
                      if (time.includes('hours ago')) return 'recent';
                      if (time.includes('Today') || time.includes('morning')) return 'today';
                      return 'older';
                    };
                    
                    return (
                      <div
                        key={idx}
                        className={`sighting-marker ${getMarkerClass(sighting.time)}`}
                        style={{ top: `${sighting.top}%`, left: `${sighting.left}%` }}
                      >
                        <div className="sighting-info">
                          {sighting.time}
                        </div>
                      </div>
                    );
                  })}
                  <div className="tracking-legend">
                    <div className="legend-item">
                      <span className="legend-dot recent-dot"></span>
                      <span>Recent (within 6h)</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot today-dot"></span>
                      <span>Today</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot older-dot"></span>
                      <span>Older</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="park-zones-section">
        <div className="container">
          <h2>Explore Park Zones</h2>
          <div className="zones-grid">
            {parkZones.map(zone => (
              <div 
                key={zone.id}
                className={`zone-card ${activeZone === zone.id ? 'active' : ''}`}
                onClick={() => setActiveZone(zone.id)}
              >
                <div className="zone-header">
                  <h3>{zone.name}</h3>
                  <p className="zone-description">{zone.description}</p>
                </div>
                <div className="zone-details">
                  <div className="wildlife-list">
                    <h4>Key Wildlife</h4>
                    <ul>
                      {zone.wildlife.map((animal, index) => (
                        <li key={index}>{animal}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="activities-list">
                    <h4>Activities</h4>
                    <ul>
                      {zone.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="zone-info">
                    <p><FaClock /> Best time: {zone.bestTime}</p>
                    <p><FaTree /> {zone.vegetation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="booking-section">
        <div className="container">
          <h2>Plan Your Visit</h2>
          <div className="booking-container">
            <div className="booking-form">
              <h3>Inquire Now</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Number of People</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group select-wrapper">
                  <select required>
                    <option value="">Select Activity</option>
                    <option value="game-drive">Game Drive</option>
                    <option value="walking">Walking Safari</option>
                    <option value="birding">Bird Watching</option>
                    <option value="custom">Custom Tour</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Special Requirements" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <FaCalendarCheck /> Request Booking
                </button>
              </form>
            </div>
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <div className="contact-options">
                <a href={contactInfo.whatsappLink} className="whatsapp-btn">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="contact-info">
                  <p>Email: {contactInfo.email}</p>
                  <p>Phone: {contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarangire; 