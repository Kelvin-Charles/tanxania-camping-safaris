export const parkPackages = {
  serengeti: [
    {
      id: 1,
      title: "3 Days Classic Safari",
      image: "/images/serengeti/classic-safari.jpg",
      price: 800,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      description: "Experience the best of Serengeti with our classic safari package.",
      highlights: [
        "Great Migration viewing",
        "Big Five game drives",
        "Luxury tented camp accommodation",
        "Professional wildlife guide",
        "All meals included",
        "Park fees and transfers"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Game Drive",
          description: "Begin your Serengeti adventure",
          activities: [
            "Morning pickup from Arusha",
            "Drive to Serengeti with picnic lunch",
            "Afternoon game drive",
            "Dinner and overnight at luxury camp"
          ]
        },
        {
          day: 2,
          title: "Full Day Game Drive",
          description: "Explore the endless plains",
          activities: [
            "Early morning game drive",
            "Migration viewing",
            "Picnic lunch in the bush",
            "Afternoon game drive",
            "Sundowner and dinner at camp"
          ]
        },
        {
          day: 3,
          title: "Final Game Drive & Departure",
          description: "Last glimpse of Serengeti",
          activities: [
            "Morning game drive",
            "Breakfast at camp",
            "Transfer to airstrip",
            "Flight back to Arusha"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "5 Days Migration Safari",
      image: "/images/serengeti/migration-safari.jpg",
      price: 1500,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Follow the Great Migration through the Serengeti ecosystem.",
      highlights: [
        "Extended Migration viewing",
        "Multiple game drives",
        "Luxury lodge accommodation",
        "Professional guide",
        "All-inclusive package",
        "Cultural visits"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Serengeti",
          description: "Begin your migration adventure",
          activities: [
            "Flight to Serengeti",
            "Afternoon game drive",
            "Sunset at luxury lodge",
            "Welcome dinner"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 3,
      title: "7 Days Photography Safari",
      image: "/images/serengeti/photo-safari.jpg",
      price: 2200,
      duration: "7 Days / 6 Nights",
      groupSize: "4-8 people",
      description: "Perfect for photography enthusiasts wanting to capture the best of Serengeti.",
      highlights: [
        "Professional photography guide",
        "Specially equipped vehicles",
        "Prime wildlife locations",
        "Flexible schedule for best light",
        "Post-processing workshops",
        "All-inclusive luxury accommodation"
      ]
    },
    {
      id: 4,
      title: "4 Days Balloon Safari Special",
      image: "/images/serengeti/balloon-safari.jpg",
      price: 1800,
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      description: "Experience the Serengeti from above with hot air balloon rides.",
      highlights: [
        "Hot air balloon safari",
        "Champagne breakfast",
        "Game drives",
        "Luxury accommodation",
        "All meals included",
        "Professional guides"
      ]
    }
  ],
  
  kilimanjaro: [
    {
      id: 1,
      title: "7 Days Machame Route",
      image: "/images/kilimanjaro/machame.jpg",
      price: 2500,
      duration: "7 Days / 6 Nights",
      groupSize: "2-10 people",
      description: "The most scenic and popular route to the summit of Kilimanjaro.",
      highlights: [
        "High success rate",
        "Scenic mountain views",
        "Professional mountain guides",
        "Quality camping equipment",
        "All meals included",
        "Safety equipment"
      ],
      itinerary: [
        {
          day: 1,
          title: "Machame Gate to Machame Camp",
          description: "Begin your climb through the rainforest",
          activities: [
            "Registration at Machame Gate (1,800m)",
            "Trek through rainforest to Machame Camp (3,000m)",
            "Lunch on trail",
            "Dinner and overnight at camp"
          ]
        },
        // More days...
      ]
    },
    {
      id: 2,
      title: "6 Days Marangu Route",
      image: "/images/kilimanjaro/marangu.jpg",
      price: 2200,
      duration: "6 Days / 5 Nights",
      groupSize: "2-12 people",
      description: "The classic 'Coca-Cola' route with comfortable hut accommodations.",
      highlights: [
        "Hut accommodations",
        "Gradual ascent profile",
        "Suitable for beginners",
        "Historic route",
        "Professional guides",
        "All meals included"
      ]
    },
    {
      id: 3,
      title: "8 Days Lemosho Route",
      image: "/images/kilimanjaro/lemosho.jpg",
      price: 2800,
      duration: "8 Days / 7 Nights",
      groupSize: "2-8 people",
      description: "The most scenic and gradual ascent route with highest success rate.",
      highlights: [
        "Best acclimatization profile",
        "Remote wilderness experience",
        "Premium camping equipment",
        "Gourmet mountain meals",
        "Professional team",
        "Scenic variety"
      ]
    },
    {
      id: 4,
      title: "9 Days Northern Circuit",
      image: "/images/kilimanjaro/northern.jpg",
      price: 3200,
      duration: "9 Days / 8 Nights",
      groupSize: "2-8 people",
      description: "The longest and most remote route circumnavigating the mountain.",
      highlights: [
        "360-degree mountain views",
        "Highest success rate",
        "Luxury camping experience",
        "Pristine wilderness",
        "Expert guides",
        "Full support team"
      ]
    }
  ],
  
  ngorongoro: [
    {
      id: 1,
      title: "2 Days Crater Explorer",
      image: "/images/ngorongoro/crater-explorer.jpg",
      price: 800,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      description: "Experience the 'Eighth Wonder of the World' with this comprehensive crater tour.",
      highlights: [
        "Full day crater tour",
        "Big Five viewing",
        "Luxury lodge stay",
        "Professional guide",
        "All meals included",
        "Crater rim sundowner"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Crater Rim",
          description: "Journey to the crater rim",
          activities: [
            "Morning pickup from Arusha",
            "Drive to Ngorongoro Conservation Area",
            "Afternoon crater rim walk",
            "Sundowner at lodge",
            "Dinner and overnight at luxury lodge"
          ]
        },
        {
          day: 2,
          title: "Full Crater Tour",
          description: "Explore the crater floor",
          activities: [
            "Early morning descent",
            "Full day game drive",
            "Picnic lunch in crater",
            "Evening return to Arusha"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "3 Days Cultural & Wildlife",
      image: "/images/ngorongoro/cultural.jpg",
      price: 1200,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      description: "Combine wildlife viewing with Maasai cultural experiences.",
      highlights: [
        "Crater game drives",
        "Maasai village visit",
        "Cultural activities",
        "Olduvai Gorge tour",
        "Premium accommodation",
        "All-inclusive package"
      ]
    },
    {
      id: 3,
      title: "4 Days Photography Special",
      image: "/images/ngorongoro/photo-safari.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      description: "Perfect for photographers seeking unique crater perspectives.",
      highlights: [
        "Multiple crater descents",
        "Professional photo guide",
        "Special photography permits",
        "Extended game drives",
        "Luxury accommodation",
        "Post-processing workshops"
      ]
    },
    {
      id: 4,
      title: "5 Days Ultimate Crater Safari",
      image: "/images/ngorongoro/ultimate-safari.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "The most comprehensive Ngorongoro experience available.",
      highlights: [
        "Multiple crater visits",
        "Olmoti Crater hike",
        "Empakai Crater trek",
        "Maasai interaction",
        "Luxury lodging",
        "All activities included"
      ]
    }
  ],
  
  tarangire: [
    {
      id: 1,
      title: "2 Days Elephant Paradise",
      image: "/images/tarangire/elephants.jpg",
      price: 700,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      description: "Experience Tanzania's elephant haven and ancient baobab forests.",
      highlights: [
        "Elephant herds",
        "Baobab forests",
        "Game drives",
        "Luxury tented camp",
        "All meals included",
        "Expert guides"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Afternoon Game Drive",
          activities: [
            "Morning pickup from Arusha",
            "Drive to Tarangire",
            "Afternoon game drive",
            "Sundowner at camp",
            "Dinner and overnight"
          ]
        },
        {
          day: 2,
          title: "Full Day Game Drive",
          activities: [
            "Early morning game drive",
            "Picnic lunch",
            "Afternoon wildlife viewing",
            "Return to Arusha"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "3 Days Tarangire Explorer",
      image: "/images/tarangire/explorer.jpg",
      price: 1100,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      description: "In-depth exploration of Tarangire's diverse ecosystems.",
      highlights: [
        "Multiple game drives",
        "Night safari",
        "Walking safari",
        "Luxury lodging",
        "All inclusive",
        "Professional guides"
      ]
    },
    {
      id: 3,
      title: "4 Days Wildlife & Wilderness",
      image: "/images/tarangire/wilderness.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      description: "Experience the true wilderness of Tarangire.",
      highlights: [
        "Remote areas",
        "Fly camping",
        "Night drives",
        "Walking safaris",
        "Premium camping",
        "Expert naturalists"
      ]
    },
    {
      id: 4,
      title: "5 Days Ultimate Tarangire",
      image: "/images/tarangire/ultimate.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "The most comprehensive Tarangire experience.",
      highlights: [
        "All park zones",
        "Multiple activities",
        "Luxury lodges",
        "Private guide",
        "All inclusive",
        "Maximum flexibility"
      ]
    }
  ],
  
  lakemanyara: [
    {
      id: 1,
      title: "1 Day Tree-Climbing Lions Safari",
      image: "/images/manyara/lions-safari.jpg",
      price: 400,
      duration: "Full Day",
      groupSize: "2-7 people",
      description: "Perfect day trip to spot Lake Manyara's famous tree-climbing lions.",
      highlights: [
        "Tree-climbing lions",
        "Lake shore birds",
        "Forest wildlife",
        "Picnic lunch",
        "Professional guide",
        "Park fees included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Lake Manyara Full Day",
          description: "Explore the diverse ecosystems of Lake Manyara",
          activities: [
            "Early morning departure from Arusha",
            "Game drive through groundwater forest",
            "Picnic lunch at scenic point",
            "Afternoon game drive along lake shore",
            "Return to Arusha in evening"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "2 Days Lake Manyara & Birdwatching",
      image: "/images/manyara/birdwatching.jpg",
      price: 750,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      description: "Focus on Lake Manyara's incredible bird life and diverse ecosystems.",
      highlights: [
        "Over 400 bird species",
        "Flamingo flocks",
        "Luxury lodge stay",
        "Professional bird guide",
        "All meals included",
        "Photography opportunities"
      ]
    },
    {
      id: 3,
      title: "3 Days Wildlife & Culture",
      image: "/images/manyara/culture.jpg",
      price: 1100,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      description: "Combine wildlife viewing with local cultural experiences.",
      highlights: [
        "Game drives",
        "Village visits",
        "Cultural activities",
        "Canopy walkway",
        "Premium lodging",
        "Local interaction"
      ]
    },
    {
      id: 4,
      title: "4 Days Photography Special",
      image: "/images/manyara/photo.jpg",
      price: 1500,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      description: "Perfect for photographers seeking unique wildlife shots.",
      highlights: [
        "Professional photo guide",
        "Multiple ecosystems",
        "Special permits",
        "Flexible schedule",
        "Luxury accommodation",
        "Small group size"
      ]
    }
  ],
  
  zanzibar: [
    {
      id: 1,
      title: "3 Days Stone Town & Beach",
      image: "/images/zanzibar/stone-town.jpg",
      price: 600,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      description: "Experience the historic Stone Town and pristine beaches of Zanzibar.",
      highlights: [
        "Stone Town UNESCO tour",
        "Spice plantation visit",
        "Beach relaxation",
        "Sunset dhow cruise",
        "Local cuisine experience",
        "Cultural interactions"
      ]
    },
    {
      id: 2,
      title: "5 Days Island Explorer",
      image: "/images/zanzibar/explorer.jpg",
      price: 1200,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Comprehensive exploration of Zanzibar's highlights.",
      highlights: [
        "Stone Town heritage",
        "Multiple beaches",
        "Spice tours",
        "Jozani Forest",
        "Dolphin watching",
        "Local village visits"
      ]
    },
    {
      id: 3,
      title: "7 Days Ultimate Zanzibar",
      image: "/images/zanzibar/ultimate.jpg",
      price: 1800,
      duration: "7 Days / 6 Nights",
      groupSize: "2-8 people",
      description: "The most complete Zanzibar experience available.",
      highlights: [
        "Luxury accommodations",
        "Private tours",
        "Water sports",
        "Cultural immersion",
        "Gourmet dining",
        "Spa treatments"
      ]
    },
    {
      id: 4,
      title: "4 Days Water Sports Special",
      image: "/images/zanzibar/water-sports.jpg",
      price: 900,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Focus on marine activities and water sports.",
      highlights: [
        "Snorkeling",
        "Scuba diving",
        "Kitesurfing",
        "Sailing",
        "Beach accommodation",
        "Equipment included"
      ]
    }
  ],
  
  mafia: [
    {
      id: 1,
      title: "4 Days Whale Shark Experience",
      image: "/images/mafia/whale-sharks.jpg",
      price: 1200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Swim with whale sharks and explore pristine coral reefs.",
      highlights: [
        "Whale shark encounters",
        "Scuba diving",
        "Snorkeling trips",
        "Beach relaxation",
        "Marine life viewing",
        "Local village visits"
      ]
    },
    {
      id: 2,
      title: "6 Days Diving Paradise",
      image: "/images/mafia/diving.jpg",
      price: 1800,
      duration: "6 Days / 5 Nights",
      groupSize: "2-4 people",
      description: "World-class diving experience in pristine waters.",
      highlights: [
        "Multiple dive sites",
        "PADI courses",
        "Equipment rental",
        "Marine biology talks",
        "Beach accommodation",
        "All meals included"
      ]
    },
    {
      id: 3,
      title: "3 Days Island Escape",
      image: "/images/mafia/escape.jpg",
      price: 900,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      description: "Perfect short break on this pristine island.",
      highlights: [
        "Snorkeling trips",
        "Beach time",
        "Local culture",
        "Fresh seafood",
        "Island tours",
        "Sunset cruises"
      ]
    },
    {
      id: 4,
      title: "5 Days Photography Special",
      image: "/images/mafia/photo.jpg",
      price: 1500,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Capture the beauty of Mafia's marine life and culture.",
      highlights: [
        "Underwater photography",
        "Wildlife shots",
        "Cultural photos",
        "Professional guide",
        "Equipment advice",
        "Post-processing tips"
      ]
    }
  ],
  
  pemba: [
    {
      id: 1,
      title: "5 Days Diving Paradise",
      image: "/images/pemba/diving.jpg",
      price: 1500,
      duration: "5 Days / 4 Nights",
      groupSize: "2-4 people",
      description: "World-class diving in pristine coral reefs.",
      highlights: [
        "Advanced dive sites",
        "Wall diving",
        "Coral gardens",
        "Marine life encounters",
        "Beach accommodation",
        "Professional dive guides"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Orientation",
          activities: [
            "Airport pickup",
            "Resort check-in",
            "Equipment fitting",
            "Dive briefing",
            "Welcome dinner"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "4 Days Cultural Experience",
      image: "/images/pemba/cultural.jpg",
      price: 1200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      description: "Immerse yourself in Pemba's rich culture and traditions.",
      highlights: [
        "Village visits",
        "Spice tours",
        "Traditional cooking",
        "Local ceremonies",
        "Cultural performances",
        "Craft workshops"
      ]
    },
    {
      id: 3,
      title: "6 Days Island Explorer",
      image: "/images/pemba/explorer.jpg",
      price: 1800,
      duration: "6 Days / 5 Nights",
      groupSize: "2-6 people",
      description: "Comprehensive exploration of Pemba's highlights.",
      highlights: [
        "Multiple beaches",
        "Forest reserves",
        "Snorkeling trips",
        "Island hopping",
        "Luxury lodging",
        "All activities"
      ]
    },
    {
      id: 4,
      title: "3 Days Beach Escape",
      image: "/images/pemba/beach.jpg",
      price: 900,
      duration: "3 Days / 2 Nights",
      groupSize: "2-10 people",
      description: "Relax on pristine beaches and enjoy water activities.",
      highlights: [
        "Beach activities",
        "Sunset cruises",
        "Water sports",
        "Beach dining",
        "Spa services",
        "Ocean views"
      ]
    }
  ],
  
  saadani: [
    {
      id: 1,
      title: "3 Days Bush & Beach",
      image: "/images/saadani/bush-beach.jpg",
      price: 1000,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      description: "Experience the unique combination of safari and beach.",
      highlights: [
        "Game drives",
        "Beach time",
        "Boat safaris",
        "Wildlife viewing",
        "Ocean swimming",
        "Sundowners"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Game Drive",
          activities: [
            "Morning pickup",
            "Afternoon game drive",
            "Beach sundowner",
            "Dinner at camp"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "4 Days Photography Special",
      image: "/images/saadani/photo.jpg",
      price: 1400,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      description: "Capture unique wildlife and coastal landscapes.",
      highlights: [
        "Professional guide",
        "Multiple habitats",
        "Boat trips",
        "Flexible schedule",
        "Equipment advice",
        "Post-processing"
      ]
    },
    {
      id: 3,
      title: "5 Days Ultimate Saadani",
      image: "/images/saadani/ultimate.jpg",
      price: 1800,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Complete exploration of Saadani's diverse ecosystems.",
      highlights: [
        "All park zones",
        "River cruises",
        "Walking safaris",
        "Night drives",
        "Cultural visits",
        "Premium lodging"
      ]
    },
    {
      id: 4,
      title: "2 Days Quick Escape",
      image: "/images/saadani/quick.jpg",
      price: 600,
      duration: "2 Days / 1 Night",
      groupSize: "2-8 people",
      description: "Perfect weekend getaway combining wildlife and ocean.",
      highlights: [
        "Game viewing",
        "Beach time",
        "Boat trip",
        "All meals",
        "Guided walks",
        "Transport included"
      ]
    }
  ],
  
  katavi: [
    {
      id: 1,
      title: "4 Days Wilderness Safari",
      image: "/images/katavi/wilderness.jpg",
      price: 1400,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Experience one of Africa's most untouched wilderness areas.",
      highlights: [
        "Remote game drives",
        "Hippo pools",
        "Walking safaris",
        "Luxury camping",
        "Expert guides",
        "All-inclusive package"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Game Drive",
          activities: [
            "Flight to Katavi",
            "Afternoon game drive",
            "Sundowner",
            "Dinner at camp"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "6 Days Ultimate Katavi",
      image: "/images/katavi/ultimate.jpg",
      price: 2200,
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      description: "Complete exploration of Katavi's diverse ecosystems.",
      highlights: [
        "Multiple habitats",
        "Night drives",
        "Bush walks",
        "River safaris",
        "Premium lodging",
        "Cultural visits"
      ]
    },
    {
      id: 3,
      title: "3 Days Fly-in Safari",
      image: "/images/katavi/fly-in.jpg",
      price: 1800,
      duration: "3 Days / 2 Nights",
      groupSize: "2-4 people",
      description: "Quick but comprehensive Katavi experience.",
      highlights: [
        "Scenic flights",
        "Game drives",
        "River viewing",
        "Luxury tents",
        "All meals",
        "Expert guiding"
      ]
    },
    {
      id: 4,
      title: "5 Days Photography Special",
      image: "/images/katavi/photo.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Perfect for photographers seeking unique wildlife shots.",
      highlights: [
        "Photo guidance",
        "Special vehicles",
        "Prime locations",
        "Flexible timing",
        "Expert tutorials",
        "All inclusive"
      ]
    }
  ],
  
  gombe: [
    {
      id: 1,
      title: "3 Days Chimpanzee Tracking",
      image: "/images/gombe/chimp-tracking.jpg",
      price: 1200,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      description: "Experience close encounters with habituated chimpanzees in their natural habitat.",
      highlights: [
        "Chimp tracking",
        "Forest walks",
        "Lake activities",
        "Research center visit",
        "Expert guides",
        "All inclusive"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Orientation",
          activities: [
            "Boat transfer from Kigoma",
            "Lodge check-in",
            "Afternoon forest walk",
            "Research center visit",
            "Dinner and briefing"
          ]
        },
        // More days...
      ]
    },
    {
      id: 2,
      title: "5 Days Primate Safari",
      image: "/images/gombe/primate-safari.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Comprehensive primate experience including chimps and other species.",
      highlights: [
        "Multiple chimp visits",
        "Red colobus monkeys",
        "Bird watching",
        "Lake activities",
        "Cultural visits",
        "Research insights"
      ]
    },
    {
      id: 3,
      title: "4 Days Photography Special",
      image: "/images/gombe/photo-safari.jpg",
      price: 1800,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      description: "Perfect for photographers seeking unique primate shots.",
      highlights: [
        "Photography guidance",
        "Multiple locations",
        "Flexible timing",
        "Small groups",
        "Expert guides",
        "All inclusive"
      ]
    },
    {
      id: 4,
      title: "7 Days Ultimate Gombe",
      image: "/images/gombe/ultimate.jpg",
      price: 2800,
      duration: "7 Days / 6 Nights",
      groupSize: "2-6 people",
      description: "The most comprehensive Gombe experience available.",
      highlights: [
        "Extended chimp time",
        "Research participation",
        "All activities",
        "Premium lodging",
        "Expert guides",
        "Cultural visits"
      ]
    }
  ],
  
  mahale: [
    {
      id: 1,
      title: "4 Days Chimp Trekking",
      image: "/images/mahale/chimp-trek.jpg",
      price: 2200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Trek through pristine rainforest to encounter wild chimpanzees in their natural habitat.",
      highlights: [
        "Chimp tracking",
        "Beach activities",
        "Forest walks",
        "Lake Tanganyika views",
        "Luxury lodge stay",
        "Expert guides"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mahale",
          activities: [
            "Flight to Mahale airstrip",
            "Boat transfer to lodge",
            "Orientation walk",
            "Sunset cruise",
            "Welcome dinner"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "6 Days Ultimate Mahale",
      image: "/images/mahale/ultimate.jpg",
      price: 3500,
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      description: "The most comprehensive Mahale Mountains experience.",
      highlights: [
        "Multiple chimp treks",
        "Boat safaris",
        "Swimming",
        "Forest exploration",
        "Premium accommodation",
        "Research visits"
      ]
    },
    {
      id: 3,
      title: "5 Days Photography Adventure",
      image: "/images/mahale/photo.jpg",
      price: 2800,
      duration: "5 Days / 4 Nights",
      groupSize: "2-4 people",
      description: "Capture unique images of chimps and forest wildlife.",
      highlights: [
        "Photography guidance",
        "Prime locations",
        "Flexible schedule",
        "Small groups",
        "Technical support",
        "All inclusive"
      ]
    },
    {
      id: 4,
      title: "7 Days Research & Recreation",
      image: "/images/mahale/research.jpg",
      price: 4000,
      duration: "7 Days / 6 Nights",
      groupSize: "2-6 people",
      description: "Combine research activities with leisure time.",
      highlights: [
        "Research participation",
        "Extended chimp time",
        "Data collection",
        "Beach relaxation",
        "Expert lectures",
        "Luxury facilities"
      ]
    }
  ],
  
  rubondo: [
    {
      id: 1,
      title: "3 Days Island Explorer",
      image: "/images/rubondo/explorer.jpg",
      price: 1200,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      description: "Discover the unique wildlife and landscapes of Rubondo Island.",
      highlights: [
        "Forest walks",
        "Boat safaris",
        "Bird watching",
        "Chimpanzee tracking",
        "Lake activities",
        "All inclusive"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival on Rubondo",
          activities: [
            "Flight to Rubondo",
            "Lodge check-in",
            "Afternoon activity",
            "Sundowner cruise",
            "Dinner at lodge"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "5 Days Wildlife & Water",
      image: "/images/rubondo/wildlife.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      description: "Complete island experience combining wildlife and water activities.",
      highlights: [
        "Game drives",
        "Fishing trips",
        "Canopy walks",
        "Swimming",
        "Night drives",
        "Luxury camping"
      ]
    },
    {
      id: 3,
      title: "4 Days Birding Special",
      image: "/images/rubondo/birding.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Focus on Rubondo's rich bird life and forest species.",
      highlights: [
        "Bird watching",
        "Forest trails",
        "Lake shores",
        "Expert guides",
        "Photography",
        "Comfortable lodging"
      ]
    },
    {
      id: 4,
      title: "6 Days Adventure Safari",
      image: "/images/rubondo/adventure.jpg",
      price: 2400,
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      description: "Active exploration of Rubondo's diverse ecosystems.",
      highlights: [
        "Hiking trails",
        "Kayaking",
        "Wildlife tracking",
        "Camping options",
        "Local culture",
        "Research visits"
      ]
    }
  ],
  
  udzungwa: [
    {
      id: 1,
      title: "3 Days Hiking Adventure",
      image: "/images/udzungwa/hiking.jpg",
      price: 900,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      description: "Explore the pristine rainforest and waterfalls of the Udzungwa Mountains.",
      highlights: [
        "Sanje Waterfall hike",
        "Primate watching",
        "Forest trails",
        "Local guide",
        "Camping equipment",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Forest Walk",
          activities: [
            "Morning pickup from Dar es Salaam/Mikumi",
            "Drive to Udzungwa",
            "Afternoon forest walk",
            "Camp setup",
            "Evening nature walk"
          ]
        }
        // ... more days
      ]
    },
    {
      id: 2,
      title: "5 Days Research & Hiking",
      image: "/images/udzungwa/research.jpg",
      price: 1500,
      duration: "5 Days / 4 Nights",
      groupSize: "2-4 people",
      description: "Combine hiking with primate research and conservation activities.",
      highlights: [
        "Research participation",
        "Multiple trails",
        "Primate tracking",
        "Expert guides",
        "Conservation talks",
        "Comfortable lodging"
      ]
    },
    {
      id: 3,
      title: "4 Days Photography Tour",
      image: "/images/udzungwa/photo.jpg",
      price: 1200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      description: "Capture unique images of endemic species and landscapes.",
      highlights: [
        "Photography guidance",
        "Endemic species",
        "Scenic viewpoints",
        "Flexible schedule",
        "Equipment advice",
        "All inclusive"
      ]
    },
    {
      id: 4,
      title: "7 Days Ultimate Explorer",
      image: "/images/udzungwa/explorer.jpg",
      price: 2200,
      duration: "7 Days / 6 Nights",
      groupSize: "2-8 people",
      description: "Complete exploration of Udzungwa's diverse ecosystems.",
      highlights: [
        "Multiple trails",
        "All waterfalls",
        "Wildlife viewing",
        "Cultural visits",
        "Premium camping",
        "Research station"
      ]
    }
  ]
  
  // Continue adding at least 4 packages for each remaining park...
};

export const getPackagesForPark = (parkId) => {
  return parkPackages[parkId] || [];
}; 