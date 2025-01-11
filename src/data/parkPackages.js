export const parkPackages = {
  serengeti: [
    {
      id: 1,
      title: "3 Days Classic Safari",
      image: "/images/serengeti/classic-safari.jpg",
      price: 800,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
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
          description: "Begin your Serengeti adventure with a scenic drive through the African savanna",
          activities: [
            "06:00 - Early morning pickup from your Arusha hotel",
            "07:00 - Depart for Serengeti with packed breakfast",
            "11:00 - Game viewing en route through Ngorongoro Conservation Area",
            "13:00 - Picnic lunch at Naabi Hill Gate",
            "14:00 - Enter Serengeti National Park",
            "14:30-17:30 - Afternoon game drive searching for big cats and other wildlife",
            "18:00 - Arrive at luxury tented camp for check-in",
            "19:30 - Welcome dinner under the stars with safari briefing",
            "Evening at leisure with optional night sounds experience"
          ],
          meals: {
            breakfast: "Packed breakfast box from Arusha",
            lunch: "Picnic lunch at scenic location",
            dinner: "Three-course dinner at camp"
          },
          accommodation: "Luxury Tented Camp in Central Serengeti",
          included: [
            "Professional safari guide",
            "4x4 safari vehicle",
            "Park entrance fees",
            "All meals",
            "Bottled water"
          ]
        },
        {
          day: 2,
          title: "Full Day Game Drive",
          description: "Immerse yourself in the Serengeti ecosystem with dawn-to-dusk wildlife viewing",
          activities: [
            "05:30 - Early morning wake-up call with hot beverages",
            "06:00-09:30 - Dawn game drive (best time for predator activity)",
            "09:30 - Return to camp for full breakfast",
            "10:30-12:30 - Mid-morning game drive focusing on Great Migration",
            "12:30-14:00 - Picnic lunch in the bush under an acacia tree",
            "14:00-17:30 - Afternoon game drive exploring different habitats",
            "17:30-18:30 - Sundowner with snacks at a scenic location",
            "19:30 - Dinner at camp",
            "Optional evening presentation on Serengeti wildlife"
          ],
          meals: {
            breakfast: "Full breakfast at camp after morning drive",
            lunch: "Gourmet picnic lunch in the bush",
            dinner: "Buffet dinner at camp"
          },
          accommodation: "Same luxury tented camp",
          included: [
            "Full-day game drive",
            "Sundowner drinks and snacks",
            "Professional guide",
            "All meals and refreshments"
          ]
        },
        {
          day: 3,
          title: "Final Game Drive & Departure",
          description: "Last opportunity to spot wildlife before a scenic departure",
          activities: [
            "05:30 - Light breakfast at camp",
            "06:00-09:30 - Final morning game drive",
            "09:30-10:30 - Return to camp for full breakfast",
            "11:00 - Check-out and drive to airstrip",
            "12:30 - Flight departure to Arusha",
            "13:30 - Arrival in Arusha and transfer to your hotel"
          ],
          meals: {
            breakfast: "Two breakfasts (light and full)",
            lunch: "Packed lunch for journey"
          },
          included: [
            "Morning game drive",
            "Flight to Arusha",
            "Transfer to Arusha hotel",
            "All park fees"
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
      categories: ["Wildlife Safaris"],
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
          description: "Start your migration adventure with a flight into the heart of Serengeti",
          activities: [
            "08:00 - Morning briefing at Arusha airport",
            "09:00 - Scenic flight to Serengeti",
            "10:30 - Meet your guide at the airstrip",
            "11:00-13:00 - Game drive to luxury lodge",
            "13:00-14:30 - Lunch and lodge check-in",
            "15:00-18:00 - Afternoon game drive following migration herds",
            "18:00-19:00 - Sunset drinks at lodge viewpoint",
            "19:30 - Welcome dinner with migration briefing",
            "Evening presentation on Great Migration"
          ],
          meals: {
            breakfast: "Breakfast at Arusha before flight",
            lunch: "Lunch at lodge",
            dinner: "Gourmet dinner at lodge"
          },
          accommodation: "Luxury Migration Lodge",
          included: [
            "Flight to Serengeti",
            "Game drives",
            "All meals",
            "Expert migration guide"
          ]
        },
        {
          day: 2,
          title: "Following the Migration",
          description: "Full day tracking wildebeest herds and witnessing river crossings",
          activities: [
            "05:30 - Early morning coffee and briefing",
            "06:00-10:00 - Dawn game drive to river crossing points",
            "10:00-11:00 - Bush breakfast at scenic location",
            "11:00-15:00 - Continue following migration movements",
            "15:00-16:00 - Afternoon tea at lodge",
            "16:00-18:30 - Evening game drive and sundowner",
            "19:30 - Dinner under the stars"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Packed lunch in the field",
            dinner: "Outdoor dining experience"
          },
          accommodation: "Same luxury lodge",
          included: [
            "Full-day migration tracking",
            "Professional photography tips",
            "All meals and drinks"
          ]
        }
        // ... remaining days with similar detail ...
      ]
    },
    {
      id: 3,
      title: "7 Days Photography Safari",
      image: "/images/serengeti/photo-safari.jpg",
      price: 2200,
      duration: "7 Days / 6 Nights",
      groupSize: "4-8 people",
      categories: ["Wildlife Safaris"],
      description: "Perfect for photography enthusiasts wanting to capture the best of Serengeti.",
      highlights: [
        "Professional photography guide",
        "Specially equipped vehicles",
        "Prime wildlife locations",
        "Flexible schedule for best light",
        "Post-processing workshops",
        "All-inclusive luxury accommodation"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Photography Briefing",
          description: "Begin your photographic journey with expert guidance and equipment setup",
          activities: [
            "08:00 - Arrival at Arusha Airport",
            "09:00 - Meet your professional photography guide",
            "09:30-11:00 - Photography equipment check and technical briefing",
            "11:30 - Flight to Serengeti",
            "13:00 - Arrival and transfer to luxury lodge",
            "14:00-15:00 - Lunch and photography planning session",
            "15:30-18:30 - Evening photo shoot focusing on golden light",
            "19:00 - Image review and editing session",
            "20:00 - Welcome dinner and next day briefing"
          ],
          meals: {
            breakfast: "Breakfast at Arusha",
            lunch: "Gourmet lunch at lodge",
            dinner: "Fine dining experience"
          },
          accommodation: "Luxury Photography Lodge",
          included: [
            "Professional photography guide",
            "Camera support equipment",
            "All transfers",
            "Full board accommodation"
          ]
        },
        {
          day: 2,
          title: "Big Cats Photography",
          description: "Focus on capturing the iconic big cats of Serengeti",
          activities: [
            "05:00 - Early morning wake-up call",
            "05:30 - Coffee and photography preparation",
            "06:00-10:00 - Dawn photo shoot (predator hunting time)",
            "10:00-11:00 - Breakfast at scenic location",
            "11:00-13:00 - Photography skills workshop",
            "13:00-14:00 - Lunch and image review",
            "14:30-18:30 - Afternoon photo session focusing on big cats",
            "19:00-20:00 - Evening editing workshop",
            "20:00 - Dinner and portfolio review"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same luxury lodge",
          included: [
            "Photography tutorials",
            "Editing software access",
            "Game drive vehicle",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Migration Photography",
          description: "Capture the dramatic wildebeest migration",
          activities: [
            "05:30 - Sunrise positioning for migration shots",
            "06:00-10:00 - Morning migration photography",
            "10:00-11:00 - Brunch and technique discussion",
            "11:30-14:00 - River crossing positioning and waiting",
            "14:00-17:30 - Afternoon migration shooting",
            "18:00-19:00 - Sundowner photography",
            "19:30 - Dinner and image critique"
          ],
          meals: {
            breakfast: "Packed breakfast",
            lunch: "Field lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Mobile Tented Camp",
          included: [
            "Expert positioning",
            "All photography permits",
            "Refreshments",
            "Technical support"
          ]
        },
        {
          day: 4,
          title: "Landscape & Wildlife",
          description: "Focus on combining wildlife with dramatic Serengeti landscapes",
          activities: [
            "05:00 - Pre-dawn landscape positioning",
            "05:30-08:00 - Sunrise and early morning shots",
            "08:30-09:30 - Breakfast and tutorial",
            "10:00-13:00 - Wildlife in habitat photography",
            "13:30-14:30 - Lunch and technique review",
            "15:00-18:30 - Afternoon combination shots",
            "19:00 - Post-processing workshop"
          ],
          meals: {
            breakfast: "Hot breakfast in the bush",
            lunch: "Lodge lunch",
            dinner: "Private dining experience"
          },
          accommodation: "Same tented camp",
          included: [
            "Landscape photography guidance",
            "Special permits for key locations",
            "All meals",
            "Equipment support"
          ]
        },
        {
          day: 5,
          title: "Bird & Macro Photography",
          description: "Detail and small subject photography techniques",
          activities: [
            "06:00 - Early morning bird photography",
            "09:00 - Breakfast and equipment change",
            "10:00-12:00 - Macro photography workshop",
            "12:30-13:30 - Lunch break",
            "14:00-17:00 - Specialized bird hide session",
            "17:30-18:30 - Evening macro opportunities",
            "19:00 - Dinner and technique review"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch",
            dinner: "Bush dinner"
          },
          accommodation: "Luxury Lodge",
          included: [
            "Macro equipment",
            "Bird hide access",
            "Specialist guide",
            "All meals"
          ]
        },
        {
          day: 6,
          title: "Action & Movement",
          description: "Capturing dynamic wildlife behavior and movement",
          activities: [
            "05:30 - Morning action shot preparation",
            "06:00-10:00 - Predator action photography",
            "10:30-11:30 - Brunch and technique discussion",
            "12:00-15:00 - Movement photography workshop",
            "15:30-18:30 - Evening action shots",
            "19:00 - Final portfolio review"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Lodge lunch",
            dinner: "Farewell dinner"
          },
          accommodation: "Same luxury lodge",
          included: [
            "High-speed photography equipment",
            "Action shot guidance",
            "All meals",
            "Technical support"
          ]
        },
        {
          day: 7,
          title: "Final Shots & Departure",
          description: "Last photo opportunities and image review",
          activities: [
            "06:00 - Final sunrise shoot",
            "08:00 - Breakfast and image selection",
            "09:00-11:00 - Final editing workshop",
            "11:00-12:00 - Portfolio presentation",
            "12:30 - Lunch and departure preparation",
            "14:00 - Flight to Arusha",
            "16:00 - Final image backup and farewell"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Image backup service",
            "Transfer to airport",
            "Final portfolio review",
            "All transfers"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4 Days Balloon Safari Special",
      image: "/images/serengeti/balloon-safari.jpg",
      price: 1800,
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      categories: ["Wildlife Safaris"],
      description: "Experience the Serengeti from above with hot air balloon rides.",
      highlights: [
        "Hot air balloon safari",
        "Champagne breakfast",
        "Game drives",
        "Luxury accommodation",
        "All meals included",
        "Professional guides"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Evening Game Drive",
          description: "Arrive in Serengeti and prepare for your balloon adventure",
          activities: [
            "12:00 - Arrival at Seronera Airstrip",
            "12:30-13:30 - Transfer to luxury lodge",
            "14:00-15:00 - Lunch and balloon briefing",
            "15:30-18:30 - Evening game drive",
            "19:00 - Special dinner and balloon preparation briefing",
            "20:00 - Early night rest for balloon safari"
          ],
          meals: {
            breakfast: "Breakfast before flight",
            lunch: "Lodge lunch",
            dinner: "Gourmet dinner"
          },
          accommodation: "Luxury Safari Lodge",
          included: [
            "Airport transfers",
            "Game drive",
            "All meals",
            "Balloon briefing"
          ]
        },
        {
          day: 2,
          title: "Balloon Safari & Game Drive",
          description: "Experience the magic of a dawn balloon flight over the Serengeti",
          activities: [
            "04:30 - Early morning wake-up call",
            "05:00 - Transfer to balloon launch site",
            "05:30-06:00 - Balloon inflation and safety briefing",
            "06:00-07:30 - Balloon flight over Serengeti",
            "08:00-09:30 - Champagne breakfast in the bush",
            "10:00-13:00 - Morning game drive",
            "13:30-14:30 - Lunch at lodge",
            "15:00-18:30 - Afternoon game drive",
            "19:00 - Dinner and flight experience sharing"
          ],
          meals: {
            breakfast: "Champagne breakfast",
            lunch: "Lodge lunch",
            dinner: "Bush dinner"
          },
          accommodation: "Same luxury lodge",
          included: [
            "Balloon safari",
            "Champagne breakfast",
            "Game drives",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Full Day Game Drive",
          description: "Explore the Serengeti from ground level",
          activities: [
            "06:00 - Early morning start",
            "06:30-09:30 - Dawn game drive",
            "09:30-10:30 - Bush breakfast",
            "11:00-13:00 - Continue game drive",
            "13:00-14:00 - Picnic lunch",
            "14:30-18:00 - Afternoon game viewing",
            "18:00-19:00 - Sundowner experience",
            "19:30 - Dinner under the stars"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Picnic lunch",
            dinner: "Star-lit dinner"
          },
          accommodation: "Luxury tented camp",
          included: [
            "Full-day game drive",
            "Sundowner drinks",
            "All meals",
            "Professional guide"
          ]
        },
        {
          day: 4,
          title: "Final Game Drive & Departure",
          description: "Last wildlife viewing and return flight",
          activities: [
            "06:00 - Light breakfast",
            "06:30-09:30 - Final game drive",
            "09:30-10:30 - Full breakfast at lodge",
            "11:00 - Lodge check-out",
            "11:30 - Transfer to airstrip",
            "13:00 - Flight departure to Arusha"
          ],
          meals: {
            breakfast: "Two breakfasts (light and full)",
            lunch: "Packed lunch"
          },
          included: [
            "Morning game drive",
            "All transfers",
            "Flight to Arusha",
            "Park fees"
          ]
        }
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
      categories: ["Mountain Climbing"],
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
          description: "Begin your Kilimanjaro ascent through lush rainforest",
          activities: [
            "07:00 - Pickup from Moshi hotel",
            "08:30 - Arrival at Machame Gate (1,800m) for registration",
            "09:30 - Begin trek through rainforest",
            "10:30 - Tea break with snacks",
            "13:00 - Lunch break on trail",
            "15:30 - Arrive at Machame Camp (3,000m)",
            "16:00 - Camp check-in and afternoon tea",
            "17:00 - Acclimatization walk",
            "18:00 - Evening briefing",
            "19:00 - Hot dinner in mess tent"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Packed lunch on trail",
            dinner: "Hot dinner at camp"
          },
          accommodation: "Machame Camp (3,000m)",
          included: [
            "Professional mountain guide",
            "Porters for equipment",
            "All meals and snacks",
            "Camping equipment",
            "Safety equipment"
          ],
          technicalDetails: {
            startAltitude: "1,800m",
            finishAltitude: "3,000m",
            distance: "11km",
            time: "5-7 hours",
            habitat: "Rainforest"
          }
        },
        {
          day: 2,
          title: "Machame Camp to Shira Camp",
          description: "Trek through moorland zone with views of Kibo peak",
          activities: [
            "06:30 - Wake up call with hot drinks",
            "07:00 - Hot breakfast",
            "08:00 - Begin trek to Shira Plateau",
            "10:30 - Morning tea break",
            "13:00 - Lunch break with mountain views",
            "15:00 - Arrive at Shira Camp (3,850m)",
            "15:30 - Camp setup and rest",
            "16:30 - Acclimatization walk",
            "17:30 - Afternoon tea",
            "18:00 - Evening medical check",
            "19:00 - Dinner and briefing"
          ],
          meals: {
            breakfast: "Hot breakfast at camp",
            lunch: "Packed lunch on trail",
            dinner: "Three-course dinner"
          },
          accommodation: "Shira Camp (3,850m)",
          included: [
            "Professional guides",
            "Porter service",
            "All meals",
            "Safety monitoring"
          ],
          technicalDetails: {
            startAltitude: "3,000m",
            finishAltitude: "3,850m",
            distance: "5km",
            time: "4-6 hours",
            habitat: "Moorland"
          }
        }
        // ... remaining days with similar detail ...
      ]
    },
    {
      id: 2,
      title: "6 Days Marangu Route",
      image: "/images/kilimanjaro/marangu.jpg",
      price: 2200,
      duration: "6 Days / 5 Nights",
      groupSize: "2-12 people",
      categories: ["Mountain Climbing"],
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
      categories: ["Mountain Climbing"],
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
      categories: ["Mountain Climbing"],
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
      categories: ["Wildlife Safaris"],
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
          description: "Journey to the crater rim and experience stunning views",
          activities: [
            "06:00 - Early morning pickup from Arusha hotel",
            "07:30 - Drive through the highlands to Ngorongoro",
            "09:30 - Arrival at Ngorongoro Conservation Area gate",
            "10:00 - Game viewing en route to crater rim",
            "12:00-13:00 - Lunch at panoramic viewpoint",
            "14:00-16:00 - Guided crater rim walk with Maasai guide",
            "16:30-17:30 - Evening wildlife and bird watching",
            "18:00 - Sunset cocktails at lodge viewpoint",
            "19:30 - Welcome dinner with crater descent briefing"
          ],
          meals: {
            breakfast: "Breakfast at hotel",
            lunch: "Picnic lunch at viewpoint",
            dinner: "Three-course dinner at lodge"
          },
          accommodation: "Luxury Crater Rim Lodge",
          included: [
            "Professional guide",
            "Conservation fees",
            "Rim walk",
            "All meals",
            "Sundowner drinks"
          ]
        },
        {
          day: 2,
          title: "Full Crater Tour",
          description: "Explore the diverse wildlife of the crater floor",
          activities: [
            "05:30 - Early morning wake-up call",
            "06:00 - Light breakfast and descent preparation",
            "06:30 - Descend into the crater",
            "07:00-12:00 - Morning game drive (prime wildlife viewing)",
            "12:30-13:30 - Picnic lunch at hippo pool",
            "13:30-16:00 - Afternoon game drive focusing on big cats",
            "16:00 - Begin ascent from crater",
            "17:00 - Depart for Arusha",
            "19:00 - Evening arrival in Arusha"
          ],
          meals: {
            breakfast: "Light breakfast at lodge",
            lunch: "Gourmet picnic lunch in crater",
            dinner: "Not included"
          },
          included: [
            "Full-day crater tour",
            "Professional guide",
            "All park fees",
            "Meals as specified",
            "Game drive vehicle"
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
      categories: ["Wildlife Safaris", "Culture Tour"],
      description: "Combine wildlife viewing with Maasai cultural experiences.",
      highlights: [
        "Crater game drives",
        "Maasai village visit",
        "Cultural activities",
        "Olduvai Gorge tour",
        "Premium accommodation",
        "All-inclusive package"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Maasai Experience",
          description: "Immerse yourself in authentic Maasai culture",
          activities: [
            "07:00 - Pickup from Arusha",
            "09:30 - Arrival at Maasai village",
            "10:00-12:00 - Traditional welcome ceremony and dances",
            "12:00-13:00 - Learn about Maasai customs and lifestyle",
            "13:00-14:00 - Traditional lunch with Maasai family",
            "14:30-16:30 - Cattle herding and traditional activities",
            "17:00 - Drive to luxury lodge",
            "18:30 - Cultural discussion with Maasai elder",
            "19:30 - Dinner with traditional storytelling"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Traditional Maasai lunch",
            dinner: "Lodge dinner with cultural elements"
          },
          accommodation: "Cultural Lodge",
          included: [
            "Cultural guide",
            "Village fees",
            "Traditional activities",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Crater Wildlife Safari",
          description: "Full day exploring the crater's diverse ecosystems",
          activities: [
            "05:30 - Early breakfast",
            "06:00 - Crater descent",
            "06:30-12:00 - Morning game drive",
            "12:00-13:00 - Picnic lunch in crater",
            "13:30-16:30 - Afternoon wildlife viewing",
            "17:00 - Evening crater rim walk",
            "18:30 - Sundowner with Maasai warriors",
            "19:30 - Dinner and wildlife discussion"
          ],
          meals: {
            breakfast: "Early breakfast at lodge",
            lunch: "Crater picnic",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Game drives",
            "Cultural activities",
            "All meals",
            "Expert guides"
          ]
        },
        {
          day: 3,
          title: "Olduvai Gorge & Departure",
          description: "Explore human origins and ancient history",
          activities: [
            "07:00 - Breakfast at lodge",
            "08:00 - Drive to Olduvai Gorge",
            "09:00-11:00 - Museum visit and archaeological presentation",
            "11:00-12:00 - Guided gorge walk",
            "12:00-13:00 - Lunch at viewpoint",
            "13:30-15:00 - Visit active dig sites",
            "15:30 - Depart for Arusha",
            "18:00 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Not included"
          },
          included: [
            "Archaeological guide",
            "Museum fees",
            "Site visits",
            "Transfer to Arusha"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "4 Days Photography Special",
      image: "/images/ngorongoro/photo-safari.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      categories: ["Wildlife Safaris"],
      description: "Perfect for photographers seeking unique crater perspectives.",
      highlights: [
        "Multiple crater descents",
        "Professional photo guide",
        "Special photography permits",
        "Extended game drives",
        "Luxury accommodation",
        "Post-processing workshops"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Photography Workshop",
          description: "Photography orientation and crater rim shots",
          activities: [
            "08:00 - Pickup from Arusha",
            "09:30 - Photography equipment check",
            "10:30 - Drive to Ngorongoro",
            "12:00-13:00 - Lunch and photography briefing",
            "14:00-16:00 - Crater rim photography session",
            "16:30-18:30 - Sunset photography at key viewpoints",
            "19:00 - Image review and editing workshop",
            "20:00 - Dinner and next day planning"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Crater Lodge",
          included: [
            "Photography guide",
            "Equipment support",
            "All meals",
            "Editing software"
          ]
        },
        {
          day: 2,
          title: "Crater Wildlife Photography",
          description: "Full day capturing crater wildlife",
          activities: [
            "05:00 - Pre-dawn preparation",
            "05:30 - Descend into crater",
            "06:00-10:00 - Morning light photography",
            "10:30-11:30 - Technical workshop in crater",
            "12:00-15:00 - Afternoon wildlife shots",
            "15:30-17:30 - Golden hour photography",
            "18:00 - Return to lodge",
            "19:00 - Evening editing session"
          ],
          meals: {
            breakfast: "Packed breakfast",
            lunch: "Field lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Full-day photography",
            "Technical support",
            "All meals",
            "Special permits"
          ]
        },
        {
          day: 3,
          title: "Cultural & Landscape Photography",
          description: "Capture Maasai life and landscapes",
          activities: [
            "06:00 - Sunrise landscape shoot",
            "08:00-10:00 - Maasai portrait session",
            "10:30-12:00 - Cultural photography",
            "12:30-13:30 - Lunch break",
            "14:00-16:00 - Highland landscapes",
            "16:30-18:30 - Evening cultural ceremonies",
            "19:00 - Portfolio review",
            "20:00 - Dinner and discussion"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch",
            dinner: "Traditional dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Cultural access",
            "Portrait sessions",
            "All meals",
            "Local guides"
          ]
        },
        {
          day: 4,
          title: "Final Shots & Departure",
          description: "Morning shoot and image review",
          activities: [
            "05:30 - Final sunrise shoot",
            "07:00-08:00 - Breakfast",
            "08:30-10:30 - Image selection and editing",
            "11:00-12:00 - Final portfolio review",
            "12:30 - Lunch",
            "13:30 - Depart for Arusha",
            "16:00 - Final image backup",
            "16:30 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Morning photography",
            "Image backup",
            "Transfer to Arusha",
            "Final review"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "5 Days Ultimate Crater Safari",
      image: "/images/ngorongoro/ultimate-safari.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris", "Culture Tour"],
      description: "The most comprehensive Ngorongoro experience available.",
      highlights: [
        "Multiple crater visits",
        "Olmoti Crater hike",
        "Empakai Crater trek",
        "Maasai interaction",
        "Luxury lodging",
        "All activities included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Highland Exploration",
          description: "Discover the Ngorongoro highlands",
          activities: [
            "07:00 - Departure from Arusha",
            "09:30 - Highland game viewing",
            "11:00-13:00 - Guided nature walk",
            "13:00-14:00 - Picnic lunch",
            "14:30-16:30 - Visit Maasai community",
            "17:00 - Arrive at luxury lodge",
            "18:00 - Sundowner experience",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Picnic lunch",
            dinner: "Gourmet dinner"
          },
          accommodation: "Luxury Highland Lodge",
          included: [
            "Highland guide",
            "Nature walk",
            "Cultural visit",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Olmoti Crater Hike",
          description: "Explore the pristine Olmoti Crater",
          activities: [
            "06:30 - Early breakfast",
            "07:30 - Drive to Olmoti",
            "08:30-12:00 - Crater rim hike",
            "12:00-13:00 - Picnic lunch",
            "13:30-15:30 - Waterfall visit",
            "16:00 - Return to lodge",
            "17:00 - Spa treatment",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Hiking guide",
            "Safety equipment",
            "Spa treatment",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Ngorongoro Crater Safari",
          description: "Full day in the main crater",
          activities: [
            "05:30 - Early departure",
            "06:00-12:00 - Morning game drive",
            "12:00-13:00 - Crater floor lunch",
            "13:30-17:00 - Afternoon wildlife viewing",
            "17:30 - Ascend crater",
            "18:30 - Evening relaxation",
            "19:30 - Dinner with wildlife discussion"
          ],
          meals: {
            breakfast: "Packed breakfast",
            lunch: "Crater picnic",
            dinner: "Lodge dinner"
          },
          accommodation: "Crater Rim Lodge",
          included: [
            "Full-day game drive",
            "Expert guide",
            "All meals",
            "Park fees"
          ]
        },
        {
          day: 4,
          title: "Empakai Crater Trek",
          description: "Trek to the beautiful Empakai Crater",
          activities: [
            "07:00 - Breakfast",
            "08:00 - Drive to Empakai",
            "09:00-12:00 - Crater descent and exploration",
            "12:00-13:00 - Lakeside lunch",
            "13:30-15:30 - Flamingo viewing",
            "16:00 - Return hike",
            "18:00 - Sundowner",
            "19:30 - Farewell dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch",
            dinner: "Special dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Trekking guide",
            "Safety equipment",
            "All meals",
            "Transfers"
          ]
        },
        {
          day: 5,
          title: "Cultural Immersion & Departure",
          description: "Final day of cultural experiences",
          activities: [
            "07:00 - Breakfast",
            "08:00-10:00 - Maasai market visit",
            "10:30-12:00 - Traditional cooking class",
            "12:30-13:30 - Lunch with local family",
            "14:00 - Depart for Arusha",
            "16:30 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Traditional lunch"
          },
          included: [
            "Cultural guide",
            "Cooking class",
            "Local interaction",
            "Transfer to Arusha"
          ]
        }
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
      categories: ["Wildlife Safaris"],
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
          description: "Begin your elephant adventure in Tanzania's baobab paradise",
          activities: [
            "06:00 - Early morning pickup from Arusha hotel",
            "07:30-09:30 - Scenic drive to Tarangire National Park",
            "10:00 - Park entrance and briefing",
            "10:30-12:30 - Morning game drive focusing on elephant herds",
            "12:30-13:30 - Picnic lunch under ancient baobab tree",
            "14:00-17:30 - Afternoon game drive exploring river valley",
            "18:00 - Arrival at luxury tented camp",
            "19:00 - Sundowner with savanna views",
            "20:00 - Dinner and evening wildlife presentation"
          ],
          meals: {
            breakfast: "Breakfast at hotel",
            lunch: "Picnic lunch in the park",
            dinner: "Three-course dinner at camp"
          },
          accommodation: "Luxury Tented Camp",
          included: [
            "Professional guide",
            "Game drive vehicle",
            "Park fees",
            "All meals",
            "Sundowner drinks"
          ]
        },
        {
          day: 2,
          title: "Full Day Game Drive",
          description: "Explore Tarangire's diverse ecosystems and wildlife",
          activities: [
            "05:30 - Early morning wake-up call",
            "06:00-09:30 - Dawn game drive (prime elephant viewing)",
            "09:30-10:30 - Bush breakfast",
            "11:00-13:00 - Game drive along Tarangire River",
            "13:00-14:00 - Picnic lunch with river views",
            "14:30-16:30 - Final game drive through baobab forest",
            "17:00 - Depart for Arusha",
            "19:00 - Evening arrival in Arusha"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Picnic lunch",
            dinner: "Not included"
          },
          included: [
            "Full-day game drive",
            "Professional guide",
            "All park fees",
            "Meals as specified"
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
      categories: ["Wildlife Safaris"],
      description: "In-depth exploration of Tarangire's diverse ecosystems.",
      highlights: [
        "Multiple game drives",
        "Night safari",
        "Walking safari",
        "Luxury lodging",
        "All inclusive",
        "Professional guides"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Walking Safari",
          description: "Experience Tarangire on foot and from your vehicle",
          activities: [
            "07:00 - Pickup from Arusha",
            "09:30 - Arrive at Tarangire National Park",
            "10:00-12:00 - Morning game drive",
            "12:00-13:00 - Lunch at picnic site",
            "14:00-16:00 - Guided walking safari",
            "16:30-18:00 - Evening game drive",
            "18:30 - Check-in at luxury lodge",
            "19:30 - Dinner and safari briefing"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Luxury Safari Lodge",
          included: [
            "Walking safari guide",
            "Armed ranger",
            "All park fees",
            "Full board accommodation"
          ]
        },
        {
          day: 2,
          title: "Night Safari & Wildlife",
          description: "Discover nocturnal wildlife and daytime game viewing",
          activities: [
            "06:00-09:30 - Early morning game drive",
            "09:30-10:30 - Breakfast at lodge",
            "11:00-13:00 - Game drive to remote areas",
            "13:00-14:30 - Lunch and rest at lodge",
            "15:00-17:30 - Afternoon game viewing",
            "19:00-21:00 - Night game drive",
            "21:30 - Dinner under stars"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Lodge lunch",
            dinner: "Bush dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Night safari permit",
            "Spotlight equipment",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Swamp & Savanna Exploration",
          description: "Final day exploring diverse habitats",
          activities: [
            "06:00 - Early game drive",
            "09:00 - Breakfast by the river",
            "10:00-13:00 - River game viewing",
            "13:30 - Lunch at new camp",
            "15:30-18:00 - Plains game drive",
            "18:30 - Evening nature walk",
            "19:30 - Dinner and stargazing"
          ],
          meals: {
            breakfast: "River breakfast",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Premium Safari Camp",
          included: [
            "River activities",
            "Game drives",
            "Nature walks",
            "All meals"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "4 Days Wildlife & Wilderness",
      image: "/images/tarangire/wilderness.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      categories: ["Wildlife Safaris"],
      description: "Experience the true wilderness of Tarangire.",
      highlights: [
        "Remote areas",
        "Fly camping",
        "Night drives",
        "Walking safaris",
        "Premium camping",
        "Expert naturalists"
      ],
      itinerary: [
        {
          day: 1,
          title: "Journey to Remote Tarangire",
          description: "Travel to the park's remote southern sector",
          activities: [
            "07:00 - Depart Arusha",
            "10:00 - Park entrance and briefing",
            "10:30-13:00 - Game drive to southern sector",
            "13:00-14:00 - Picnic lunch",
            "14:30-17:00 - Afternoon game viewing",
            "17:30 - Fly camp setup",
            "18:30 - Sundowner",
            "19:30 - Campfire dinner"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Picnic lunch",
            dinner: "Campfire dinner"
          },
          accommodation: "Exclusive Fly Camp",
          included: [
            "Camping equipment",
            "Professional guide",
            "Camp staff",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Walking & Wildlife",
          description: "Full day exploring on foot and by vehicle",
          activities: [
            "05:30 - Dawn walking safari",
            "08:00 - Bush breakfast",
            "09:00-12:00 - Game drive",
            "12:30-14:00 - Lunch at camp",
            "15:00-17:00 - Afternoon walk",
            "17:30-19:00 - Night game drive",
            "19:30 - Dinner under stars"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Camp lunch",
            dinner: "Outdoor dinner"
          },
          accommodation: "Mobile Tented Camp",
          included: [
            "Walking safaris",
            "Night drives",
            "All meals",
            "Expert guides"
          ]
        },
        {
          day: 3,
          title: "River & Plains Exploration",
          description: "Discover diverse wildlife along the river",
          activities: [
            "06:00 - Early game drive",
            "09:00 - Breakfast by the river",
            "10:00-13:00 - River game viewing",
            "13:30 - Lunch at new camp",
            "15:30-18:00 - Plains game drive",
            "18:30 - Evening nature walk",
            "19:30 - Dinner and stargazing"
          ],
          meals: {
            breakfast: "River breakfast",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Premium Safari Camp",
          included: [
            "River activities",
            "Game drives",
            "Nature walks",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Wilderness Day",
          description: "Last exploration of Tarangire's remote areas",
          activities: [
            "05:30 - Early morning walk",
            "07:00 - Breakfast at camp",
            "08:00-11:00 - Game drive",
            "11:30-12:30 - Pack up camp",
            "13:00-14:00 - Lunch",
            "14:30-16:00 - Final game drive",
            "16:30 - Return to Arusha",
            "19:00 - Evening arrival"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Picnic lunch"
          },
          included: [
            "Morning walk",
            "Game drive",
            "Transfer to Arusha",
            "All activities"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "5 Days Ultimate Tarangire",
      image: "/images/tarangire/ultimate.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
      description: "The most comprehensive Tarangire experience.",
      highlights: [
        "All park zones",
        "Multiple activities",
        "Luxury lodges",
        "Private guide",
        "All inclusive",
        "Maximum flexibility"
      ],
      itinerary: [
        {
          day: 1,
          title: "Park Introduction & Silale Swamps",
          description: "Begin your comprehensive Tarangire experience",
          activities: [
            "07:00 - Depart Arusha",
            "09:30 - Park briefing",
            "10:00-12:00 - Game drive to Silale",
            "12:30-13:30 - Lunch overlooking swamps",
            "14:00-17:00 - Swamp wildlife viewing",
            "17:30 - Lodge check-in",
            "18:30 - Sundowner",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Luxury Safari Lodge",
          included: [
            "Expert guide",
            "Park fees",
            "All meals",
            "Premium drinks"
          ]
        },
        {
          day: 2,
          title: "Southern Wilderness",
          description: "Explore the remote southern sector",
          activities: [
            "06:00 - Early breakfast",
            "06:30-12:00 - Extended game drive south",
            "12:00-13:00 - Bush lunch",
            "13:30-16:30 - Walking safari",
            "17:00-19:00 - Night drive",
            "19:30 - Dinner at camp"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Bush lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Luxury Tented Camp",
          included: [
            "Walking safari",
            "Night drive",
            "All meals",
            "Premium drinks"
          ]
        },
        {
          day: 3,
          title: "Tarangire River Valley",
          description: "Full day along the life-giving river",
          activities: [
            "05:30 - Dawn game drive",
            "08:00 - Riverside breakfast",
            "09:00-12:00 - River game viewing",
            "12:30-14:00 - Lunch and siesta",
            "14:30-17:30 - Afternoon activities",
            "18:00 - Sundowner cruise",
            "19:30 - Dinner under stars"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Lodge lunch",
            dinner: "Outdoor dinner"
          },
          accommodation: "River Lodge",
          included: [
            "River activities",
            "Game drives",
            "Boat cruise",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Cultural & Wildlife Day",
          description: "Combine wildlife viewing with local culture",
          activities: [
            "06:30 - Morning game drive",
            "09:30 - Village visit",
            "11:00 - Cultural activities",
            "13:00 - Traditional lunch",
            "14:30-17:30 - Afternoon game drive",
            "18:00 - Cultural dinner",
            "20:00 - Traditional dancing"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Traditional lunch",
            dinner: "Cultural dinner"
          },
          accommodation: "Cultural Lodge",
          included: [
            "Cultural guide",
            "Village fees",
            "Activities",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Final Exploration & Departure",
          description: "Last day in Tarangire's wilderness",
          activities: [
            "06:00 - Early game drive",
            "09:00 - Breakfast at lodge",
            "10:00-12:00 - Final game drive",
            "12:30 - Lunch",
            "14:00 - Depart for Arusha",
            "16:30 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Game drives",
            "Park fees",
            "Transfer to Arusha",
            "All meals"
          ]
        }
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
      categories: ["Wildlife Safaris"],
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
            "06:00 - Early morning pickup from Arusha",
            "07:30-09:00 - Scenic drive to Lake Manyara",
            "09:30 - Park entrance and briefing",
            "10:00-12:30 - Morning game drive through groundwater forest",
            "12:30-13:30 - Picnic lunch at scenic viewpoint",
            "14:00-16:30 - Afternoon game drive along lake shore",
            "16:30-17:30 - Final game drive and bird watching",
            "18:00 - Depart for Arusha",
            "19:30 - Evening arrival in Arusha"
          ],
          meals: {
            breakfast: "Breakfast box from hotel",
            lunch: "Picnic lunch in the park",
            dinner: "Not included"
          },
          included: [
            "Professional guide",
            "Game drive vehicle",
            "Park fees",
            "Meals as specified",
            "Bottled water"
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
      categories: ["Wildlife Safaris"],
      description: "Focus on Lake Manyara's incredible bird life and diverse ecosystems.",
      highlights: [
        "Over 400 bird species",
        "Flamingo flocks",
        "Luxury lodge stay",
        "Professional bird guide",
        "All meals included",
        "Photography opportunities"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Afternoon Birding",
          description: "Begin your birdwatching adventure at Lake Manyara",
          activities: [
            "07:00 - Pickup from Arusha",
            "09:00 - Arrival at Lake Manyara",
            "09:30-12:30 - Morning birding session",
            "12:30-13:30 - Lunch at lodge",
            "14:00-17:00 - Afternoon bird watching at lake shore",
            "17:30 - Evening birding near lodge",
            "19:00 - Dinner and bird species review",
            "20:00 - Optional night birding"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Lodge lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Lake Manyara Lodge",
          included: [
            "Professional bird guide",
            "Spotting scope",
            "Bird checklist",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Full Day Birding",
          description: "Explore different habitats for varied bird species",
          activities: [
            "06:00 - Early morning birding walk",
            "07:30 - Breakfast at lodge",
            "08:30-12:00 - Morning birding session",
            "12:00-13:00 - Picnic lunch",
            "13:30-16:30 - Afternoon birding at new locations",
            "16:30 - Final species count",
            "17:00 - Depart for Arusha",
            "19:00 - Evening arrival"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch"
          },
          included: [
            "Bird guide",
            "Park fees",
            "All meals",
            "Transfer to Arusha"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "3 Days Wildlife & Culture",
      image: "/images/manyara/culture.jpg",
      price: 1100,
      duration: "3 Days / 2 Nights",
      groupSize: "2-8 people",
      categories: ["Wildlife Safaris", "Culture Tour"],
      description: "Combine wildlife viewing with local cultural experiences.",
      highlights: [
        "Game drives",
        "Village visits",
        "Cultural activities",
        "Canopy walkway",
        "Premium lodging",
        "Local interaction"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Cultural Experience",
          description: "Immerse in local culture and wildlife viewing",
          activities: [
            "07:00 - Depart Arusha",
            "09:00 - Village visit and cultural activities",
            "12:00 - Traditional lunch with local family",
            "14:00-17:00 - Afternoon game drive",
            "17:30 - Lodge check-in",
            "19:00 - Dinner with cultural entertainment"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Traditional lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Cultural Lodge",
          included: [
            "Cultural guide",
            "Village fees",
            "Game drive",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Wildlife & Canopy Walk",
          description: "Explore Lake Manyara from ground and canopy level",
          activities: [
            "06:00 - Early morning game drive",
            "09:00 - Breakfast at lodge",
            "10:00-12:00 - Canopy walkway experience",
            "12:30 - Lunch at scenic point",
            "14:00-17:00 - Afternoon wildlife viewing",
            "17:30 - Evening nature walk",
            "19:00 - Dinner at lodge"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Canopy walk fees",
            "Game drives",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Lake Shore & Departure",
          description: "Final wildlife viewing and cultural activities",
          activities: [
            "06:30 - Morning bird watching",
            "08:00 - Breakfast at lodge",
            "09:00-12:00 - Game drive and lake shore",
            "12:30 - Farewell lunch",
            "14:00 - Craft workshop visit",
            "15:30 - Depart for Arusha",
            "18:00 - Evening arrival"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Bird watching",
            "Game drive",
            "Craft workshop",
            "Transfer to Arusha"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4 Days Photography Special",
      image: "/images/manyara/photo.jpg",
      price: 1500,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      categories: ["Wildlife Safaris"],
      description: "Perfect for photographers seeking unique wildlife shots.",
      highlights: [
        "Professional photo guide",
        "Multiple ecosystems",
        "Special permits",
        "Flexible schedule",
        "Luxury accommodation",
        "Small group size"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Photography Workshop",
          description: "Begin your underwater photography adventure",
          activities: [
            "09:00 - Arrival at Mafia Airport",
            "10:00 - Transfer to resort",
            "11:00-12:30 - Equipment check and setup",
            "12:30-14:00 - Lunch and briefing",
            "14:30-16:30 - Photography workshop",
            "17:00-18:30 - Sunset photo session",
            "19:00 - Welcome dinner and planning"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Resort lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Photography Resort",
          included: [
            "Airport transfer",
            "Photography workshop",
            "All meals",
            "Equipment support"
          ]
        },
        {
          day: 2,
          title: "Underwater Photography",
          description: "Master underwater photography techniques",
          activities: [
            "06:30 - Light breakfast",
            "07:30-11:30 - Underwater photo session",
            "12:00-13:30 - Lunch and image review",
            "14:00-16:00 - Technical workshop",
            "16:30-18:00 - Evening beach shoot",
            "19:00 - Dinner and portfolio review"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Underwater sessions",
            "Equipment",
            "Expert guidance",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Marine Life Photography",
          description: "Focus on capturing marine wildlife",
          activities: [
            "06:00 - Early breakfast",
            "07:00-11:00 - Marine life photo shoot",
            "11:30-13:00 - Lunch and editing",
            "14:00-16:00 - Coral reef photography",
            "16:30-18:00 - Technical review",
            "19:00 - Dinner presentation"
          ],
          meals: {
            breakfast: "Early breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Marine sessions",
            "Equipment",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Cultural & Landscape Photography",
          description: "Capture island life and landscapes",
          activities: [
            "07:00 - Breakfast",
            "08:00-11:00 - Village photo walk",
            "11:30-13:00 - Lunch break",
            "14:00-16:00 - Landscape session",
            "16:30-18:30 - Sunset shoot",
            "19:00 - Dinner and review"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Local lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Cultural tour",
            "Photography guide",
            "All meals",
            "Local transport"
          ]
        },
        {
          day: 5,
          title: "Final Shoots & Departure",
          description: "Last photo opportunities",
          activities: [
            "05:30 - Sunrise shoot",
            "07:00-08:00 - Breakfast",
            "08:30-10:30 - Final photo session",
            "11:00-12:00 - Image review",
            "12:30 - Resort checkout",
            "13:00 - Airport transfer",
            "14:30 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Morning shoot",
            "Image review",
            "Transfer",
            "Meals as specified"
          ]
        }
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
      categories: ["Beach Holidays", "Culture Tour"],
      description: "Experience the historic Stone Town and pristine beaches of Zanzibar.",
      highlights: [
        "Stone Town UNESCO tour",
        "Spice plantation visit",
        "Beach relaxation",
        "Sunset dhow cruise",
        "Local cuisine experience",
        "Cultural interactions"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Stone Town Heritage",
          description: "Explore the historic UNESCO World Heritage Site of Stone Town",
          activities: [
            "08:00 - Arrival at Zanzibar Airport",
            "09:00 - Transfer to Stone Town hotel",
            "10:00-13:00 - Guided Stone Town walking tour",
            "13:00-14:30 - Traditional Zanzibari lunch",
            "15:00-17:00 - Visit to Palace Museum and House of Wonders",
            "17:30-19:00 - Forodhani Gardens food market visit",
            "19:30 - Rooftop dinner with local music"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Local Zanzibari lunch",
            dinner: "Rooftop dinner"
          },
          accommodation: "Boutique Stone Town Hotel",
          included: [
            "Airport transfer",
            "Walking tour guide",
            "Museum entries",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Spice Tour & Beach Transfer",
          description: "Experience Zanzibar's famous spice heritage and move to beach resort",
          activities: [
            "08:00 - Breakfast at hotel",
            "09:00-12:00 - Spice plantation tour",
            "12:30-13:30 - Traditional spice-infused lunch",
            "14:00 - Transfer to beach resort",
            "15:30 - Beach resort check-in",
            "16:00-18:00 - Beach relaxation and swimming",
            "18:30-19:30 - Sunset dhow cruise",
            "20:00 - Beachfront dinner"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Spice plantation lunch",
            dinner: "Beach resort dinner"
          },
          accommodation: "Luxury Beach Resort",
          included: [
            "Spice tour",
            "Transfer to beach",
            "Sunset cruise",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Beach Day & Departure",
          description: "Relax on pristine beaches before departure",
          activities: [
            "07:00-08:00 - Sunrise yoga (optional)",
            "08:00-09:30 - Breakfast at resort",
            "10:00-12:00 - Beach activities or snorkeling",
            "12:30-14:00 - Final lunch at beach restaurant",
            "14:00-15:00 - Pack and checkout",
            "15:30 - Transfer to airport",
            "17:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Beach restaurant lunch"
          },
          included: [
            "Beach activities",
            "Airport transfer",
            "Morning yoga",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "5 Days Island Explorer",
      image: "/images/zanzibar/explorer.jpg",
      price: 1200,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays", "Culture Tour"],
      description: "Comprehensive exploration of Zanzibar's highlights.",
      highlights: [
        "Stone Town heritage",
        "Multiple beaches",
        "Spice tours",
        "Jozani Forest",
        "Dolphin watching",
        "Local village visits"
      ],
      itinerary: [
        {
          day: 1,
          title: "Stone Town Discovery",
          description: "Immerse yourself in Zanzibar's historic capital",
          activities: [
            "08:00 - Airport arrival and transfer",
            "09:30-12:30 - Stone Town heritage walk",
            "13:00-14:30 - Lunch at rooftop restaurant",
            "15:00-17:00 - Visit historical sites",
            "17:30-19:00 - Sunset dhow cruise",
            "19:30 - Welcome dinner with local music"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Rooftop lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Heritage Hotel Stone Town",
          included: [
            "Guided tours",
            "Dhow cruise",
            "All meals",
            "Transfers"
          ]
        },
        {
          day: 2,
          title: "Spice & Jozani Forest",
          description: "Explore Zanzibar's natural and cultural heritage",
          activities: [
            "08:00 - Breakfast at hotel",
            "09:00-11:30 - Spice plantation tour",
            "12:00-13:00 - Spice lunch experience",
            "14:00-16:30 - Jozani Forest tour",
            "17:00 - Transfer to beach resort",
            "19:00 - Dinner at resort"
          ],
          meals: {
            breakfast: "Hotel breakfast",
            lunch: "Spice plantation lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Beach Resort",
          included: [
            "Spice tour",
            "Forest guide",
            "All transfers",
            "Meals"
          ]
        },
        {
          day: 3,
          title: "Marine Adventure",
          description: "Discover Zanzibar's marine life",
          activities: [
            "07:00 - Breakfast at resort",
            "08:00-12:00 - Snorkeling trip",
            "12:30-13:30 - Beach picnic lunch",
            "14:00-16:00 - Dolphin watching",
            "16:30-18:00 - Beach relaxation",
            "19:00 - Seafood dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Beach picnic",
            dinner: "Seafood dinner"
          },
          accommodation: "Same resort",
          included: [
            "Snorkeling equipment",
            "Boat trips",
            "Marine guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Village & Culture",
          description: "Experience local life and traditions",
          activities: [
            "08:00 - Breakfast at resort",
            "09:00-12:00 - Village tour",
            "12:30-14:00 - Local home lunch",
            "14:30-16:30 - Traditional crafts",
            "17:00-18:30 - Cooking class",
            "19:00 - Traditional dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Home-cooked lunch",
            dinner: "Traditional dinner"
          },
          accommodation: "Same resort",
          included: [
            "Village guide",
            "Cooking class",
            "Cultural activities",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Beach & Departure",
          description: "Final day of relaxation",
          activities: [
            "07:00-08:00 - Sunrise yoga",
            "08:30-10:00 - Breakfast",
            "10:00-12:00 - Beach time",
            "12:30-14:00 - Final lunch",
            "14:30 - Resort checkout",
            "15:00 - Airport transfer",
            "17:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Morning yoga",
            "Beach activities",
            "Airport transfer",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "7 Days Ultimate Zanzibar",
      image: "/images/zanzibar/ultimate.jpg",
      price: 1800,
      duration: "7 Days / 6 Nights",
      groupSize: "2-8 people",
      categories: ["Beach Holidays", "Culture Tour"],
      description: "The most complete Zanzibar experience available.",
      highlights: [
        "Luxury accommodations",
        "Private tours",
        "Water sports",
        "Cultural immersion",
        "Gourmet dining",
        "Spa treatments"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Luxury Welcome",
          description: "Begin your premium Zanzibar experience",
          activities: [
            "08:00 - VIP airport arrival service",
            "09:00-10:00 - Private transfer to luxury resort",
            "10:30 - Welcome ceremony and check-in",
            "12:00-14:00 - Beachfront lunch and resort tour",
            "15:00-17:00 - Spa treatment",
            "17:30-19:00 - Sunset cocktail cruise",
            "19:30 - Private beach dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Gourmet lunch",
            dinner: "Private beach dinner"
          },
          accommodation: "Premium Beach Resort & Spa",
          included: [
            "VIP transfers",
            "Welcome package",
            "Spa treatment",
            "Sunset cruise"
          ]
        },
        {
          day: 2,
          title: "Stone Town Heritage",
          description: "Private tour of Zanzibar's historic capital",
          activities: [
            "08:00-09:30 - Breakfast at resort",
            "10:00-13:00 - Private Stone Town tour",
            "13:30-15:00 - Royal Palace lunch",
            "15:30-17:30 - Artisan workshops",
            "18:00-19:00 - Rooftop cocktails",
            "19:30 - Fine dining experience"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Palace restaurant",
            dinner: "Fine dining"
          },
          accommodation: "Same resort",
          included: [
            "Private guide",
            "All entrance fees",
            "Luxury transport",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Marine Discovery",
          description: "Luxury marine adventures",
          activities: [
            "07:30 - Breakfast at resort",
            "09:00-12:00 - Private yacht cruise",
            "12:30-14:00 - Island picnic lunch",
            "14:30-16:30 - Private snorkeling",
            "17:00-18:30 - Sunset fishing",
            "19:30 - Fresh catch dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Gourmet picnic",
            dinner: "Seafood dinner"
          },
          accommodation: "Same resort",
          included: [
            "Private yacht",
            "Snorkeling gear",
            "Marine guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Spice & Culture",
          description: "Exclusive cultural experiences",
          activities: [
            "08:00 - Breakfast at resort",
            "09:30-12:00 - Private spice tour",
            "12:30-14:00 - Spice plantation lunch",
            "14:30-16:30 - Cultural village visit",
            "17:00-18:30 - Cooking class",
            "19:00 - Traditional feast"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Plantation lunch",
            dinner: "Traditional feast"
          },
          accommodation: "Same resort",
          included: [
            "Private guide",
            "Cooking class",
            "Cultural activities",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Wellness & Relaxation",
          description: "Luxury spa and wellness day",
          activities: [
            "07:00-08:00 - Private yoga session",
            "08:30-09:30 - Healthy breakfast",
            "10:00-12:00 - Spa treatments",
            "12:30-14:00 - Wellness lunch",
            "15:00-16:30 - Meditation session",
            "17:00-18:00 - Beach yoga",
            "19:00 - Organic dinner"
          ],
          meals: {
            breakfast: "Wellness breakfast",
            lunch: "Spa cuisine",
            dinner: "Organic dinner"
          },
          accommodation: "Same resort",
          included: [
            "Spa treatments",
            "Yoga sessions",
            "Wellness activities",
            "All meals"
          ]
        },
        {
          day: 6,
          title: "Adventure & Leisure",
          description: "Choose your own adventures",
          activities: [
            "08:00 - Breakfast at resort",
            "09:30-12:00 - Water sports",
            "12:30-14:00 - Beach lunch",
            "14:30-16:30 - Optional activities",
            "17:00-18:30 - Beach bonfire",
            "19:00 - BBQ dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Beach lunch",
            dinner: "BBQ dinner"
          },
          accommodation: "Same resort",
          included: [
            "Water sports",
            "Equipment rental",
            "Beach activities",
            "All meals"
          ]
        },
        {
          day: 7,
          title: "Farewell & Departure",
          description: "Final day of luxury and relaxation",
          activities: [
            "08:00-09:30 - Breakfast at resort",
            "10:00-12:00 - Final beach time",
            "12:30-14:00 - Farewell lunch",
            "14:30 - Spa treatment",
            "16:00 - Resort checkout",
            "16:30 - VIP transfer to airport",
            "18:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Spa treatment",
            "VIP transfer",
        "All meals",
            "Departure service"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "4 Days Water Sports Special",
      image: "/images/zanzibar/water-sports.jpg",
      price: 900,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Focus on marine activities and water sports.",
      highlights: [
        "Snorkeling",
        "Scuba diving",
        "Kitesurfing",
        "Sailing",
        "Beach accommodation",
        "Equipment included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Water Sports Introduction",
          description: "Begin your active beach adventure",
          activities: [
            "08:00 - Airport arrival",
            "09:30 - Resort check-in",
            "10:30-12:00 - Water sports briefing",
            "12:30-13:30 - Beach lunch",
            "14:00-16:00 - Introductory lessons",
            "16:30-18:00 - Beach volleyball",
            "19:00 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Beach lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Beach Sports Resort",
          included: [
            "Equipment orientation",
            "Basic lessons",
        "All meals",
            "Transfers"
          ]
        },
        {
          day: 2,
          title: "Diving & Snorkeling",
          description: "Explore underwater world",
          activities: [
            "07:00 - Light breakfast",
            "08:00-12:00 - Diving course/trip",
            "12:30-13:30 - Lunch break",
            "14:00-16:00 - Snorkeling",
            "16:30-18:00 - Beach games",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Packed lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Diving equipment",
            "PADI instructor",
            "Snorkeling gear",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Kitesurfing & Sailing",
          description: "Wind and wave adventures",
          activities: [
            "08:00 - Breakfast",
            "09:00-12:00 - Kitesurfing lesson",
            "12:30-13:30 - Beach lunch",
            "14:00-16:00 - Sailing session",
            "16:30-18:00 - Free practice",
            "19:00 - Beach BBQ"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Beach lunch",
            dinner: "BBQ dinner"
          },
          accommodation: "Same resort",
          included: [
            "Kitesurfing gear",
            "Sailing equipment",
            "Instructors",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Activities & Departure",
          description: "Last water adventures",
          activities: [
            "07:00-08:00 - Breakfast",
            "08:30-11:00 - Choice of activities",
            "11:30-12:30 - Final lunch",
            "13:00 - Resort checkout",
            "14:00 - Airport transfer",
            "16:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Morning activities",
            "Equipment usage",
            "Transfer",
            "Meals as specified"
          ]
        }
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
      categories: ["Beach Holidays"],
      description: "Swim with whale sharks and explore pristine coral reefs.",
      highlights: [
        "Whale shark encounters",
        "Scuba diving",
        "Snorkeling trips",
        "Beach relaxation",
        "Marine life viewing",
        "Local village visits"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Marine Briefing",
          description: "Begin your whale shark adventure",
          activities: [
            "09:00 - Arrival at Mafia Airport",
            "10:00 - Transfer to beach resort",
            "11:00-12:00 - Welcome briefing",
            "12:30-14:00 - Lunch at resort",
            "14:30-16:30 - Marine conservation presentation",
            "17:00-18:30 - Beach walk and orientation",
            "19:00 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Resort lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Marine Lodge",
          included: [
            "Airport transfer",
            "Conservation briefing",
            "All meals",
            "Welcome pack"
          ]
        },
        {
          day: 2,
          title: "Whale Shark Encounter",
          description: "First whale shark expedition",
          activities: [
            "06:30 - Light breakfast",
            "07:00-12:00 - Whale shark expedition",
            "12:30-14:00 - Lunch at resort",
            "14:30-16:30 - Marine biology talk",
            "17:00-18:30 - Sunset beach walk",
            "19:00 - Dinner and experience sharing"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Whale shark guide",
            "Snorkeling gear",
            "Marine biologist",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Reef Exploration",
          description: "Discover Mafia's coral reefs",
          activities: [
            "07:00 - Breakfast",
            "08:00-12:00 - Reef snorkeling",
            "12:30-13:30 - Beach picnic",
            "14:00-16:00 - Optional whale shark trip",
            "16:30-18:00 - Marine life presentation",
            "19:00 - Seafood dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Beach picnic",
            dinner: "Seafood dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Snorkeling guide",
            "Equipment",
            "Marine expert",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Encounter & Departure",
          description: "Last chance for whale shark viewing",
          activities: [
            "06:30 - Light breakfast",
            "07:00-10:00 - Final whale shark trip",
            "10:30-11:30 - Fresh breakfast",
            "12:00 - Lodge checkout",
            "12:30 - Airport transfer",
            "14:00 - Departure"
          ],
          meals: {
            breakfast: "Two breakfasts",
            lunch: "Packed lunch"
          },
          included: [
            "Morning expedition",
            "Transfer",
            "Equipment",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "6 Days Diving Paradise",
      image: "/images/mafia/diving-paradise.jpg",
      price: 1500,
      duration: "6 Days / 5 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Discover the underwater world of Mafia Island.",
      highlights: [
        "Multiple dive sites",
        "Advanced diving",
        "Wreck diving",
        "Manta ray encounters",
        "Turtle encounters",
        "Night dives"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Diving Preparation",
          description: "Begin your diving adventure in Mafia",
          activities: [
            "09:00 - Arrival at Mafia Airport",
            "10:00 - Transfer to dive resort",
            "11:00-12:00 - Resort check-in",
            "12:30-13:30 - Welcome lunch",
            "14:00-16:00 - Equipment fitting and briefing",
            "16:30-17:30 - Pool refresher session",
            "18:00 - Dive planning meeting",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Resort lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Dive Resort",
          included: [
            "Airport transfer",
            "Diving equipment",
            "Pool session",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "First Dive Day",
          description: "Explore Mafia's shallow reefs",
          activities: [
            "06:30 - Light breakfast",
            "07:30-11:30 - Two morning dives",
            "12:00-13:30 - Lunch break",
            "14:00-16:00 - Afternoon dive",
            "16:30-17:30 - Dive log review",
            "18:00 - Marine life presentation",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Three dives",
            "Equipment",
            "Dive guide",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Deep Dive Experience",
          description: "Venture to deeper reef sites",
          activities: [
            "06:30 - Breakfast",
            "07:30-12:00 - Deep dive sessions",
            "12:30-14:00 - Lunch and rest",
            "14:30-16:30 - Afternoon dive",
            "17:00-18:00 - Marine biology talk",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Packed lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Deep dives",
            "Equipment",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Wall & Drift Diving",
          description: "Experience advanced diving techniques",
          activities: [
            "06:30 - Light breakfast",
            "07:30-11:30 - Wall dive sessions",
            "12:00-13:30 - Lunch break",
            "14:00-16:00 - Drift dive",
            "16:30-17:30 - Photography workshop",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Advanced dives",
            "Equipment",
            "Photography tips",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Specialty Dives",
          description: "Focus on specific diving interests",
          activities: [
            "07:00 - Breakfast",
            "08:00-12:00 - Specialty dive sessions",
            "12:30-14:00 - Lunch break",
            "14:30-16:30 - Optional dive",
            "17:00-18:00 - Certification review",
            "19:00 - Celebration dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Resort lunch",
            dinner: "BBQ dinner"
          },
          accommodation: "Same resort",
          included: [
            "Specialty dives",
            "Certification",
            "Equipment",
            "All meals"
          ]
        },
        {
          day: 6,
          title: "Final Dive & Departure",
          description: "Last underwater experience",
          activities: [
            "07:00 - Light breakfast",
            "08:00-10:00 - Final dive",
            "10:30-11:30 - Fresh breakfast",
            "12:00 - Resort checkout",
            "12:30 - Airport transfer",
            "14:00 - Departure"
          ],
          meals: {
            breakfast: "Two breakfasts",
            lunch: "Packed lunch"
          },
          included: [
            "Morning dive",
            "Transfer",
            "Equipment",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "3 Days Island Escape",
      image: "/images/mafia/island-escape.jpg",
      price: 1000,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Escape to a secluded island for a peaceful retreat.",
      highlights: [
        "Private island getaway",
        "Snorkeling",
        "Kayaking",
        "Beach relaxation",
        "Local cuisine",
        "Sunset cruise"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Island Introduction",
          description: "Begin your island getaway",
          activities: [
            "09:00 - Arrival at Mafia Airport",
            "10:00 - Transfer to beach resort",
            "11:00-12:00 - Welcome briefing",
            "12:30-14:00 - Lunch at beach restaurant",
            "14:30-16:30 - Beach relaxation",
            "17:00-18:30 - Sunset dhow cruise",
            "19:00 - Seafood dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Beach lunch",
            dinner: "Seafood dinner"
          },
          accommodation: "Beach Resort",
          included: [
            "Airport transfer",
            "Sunset cruise",
            "All meals",
            "Welcome drink"
          ]
        },
        {
          day: 2,
          title: "Island Activities",
          description: "Explore Mafia's marine life and culture",
          activities: [
            "07:00 - Breakfast",
            "08:00-12:00 - Snorkeling trip",
            "12:30-13:30 - Beach picnic",
            "14:00-16:00 - Village visit",
            "16:30-18:00 - Beach activities",
            "19:00 - Traditional dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Picnic lunch",
            dinner: "Local dinner"
          },
          accommodation: "Same resort",
          included: [
            "Snorkeling trip",
            "Cultural tour",
            "Equipment",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Final Day & Departure",
          description: "Last moments in paradise",
          activities: [
            "07:00-08:00 - Sunrise yoga",
            "08:30-09:30 - Breakfast",
            "10:00-11:30 - Beach time",
            "12:00 - Resort checkout",
            "12:30 - Light lunch",
            "13:30 - Airport transfer",
            "15:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Morning yoga",
            "Beach access",
            "Transfer",
            "Meals as specified"
          ]
        }
      ]
    }
  ],
  
  pemba: [
    {
      id: 1,
      title: "5 Days Diving Paradise",
      image: "/images/pemba/diving-paradise.jpg",
      price: 1500,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Discover the underwater world of Pemba Island.",
      highlights: [
        "Multiple dive sites",
        "Advanced diving",
        "Wreck diving",
        "Manta ray encounters",
        "Turtle encounters",
        "Night dives"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Dive Preparation",
          description: "Begin your diving adventure in Pemba",
          activities: [
            "08:00 - Arrival at Pemba Airport",
            "09:00 - Transfer to dive resort",
            "10:00-11:00 - Welcome briefing",
            "11:30-12:30 - Equipment setup",
            "12:30-14:00 - Lunch break",
            "14:30-16:30 - Check dive",
            "17:00-18:00 - Dive planning",
            "19:00 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Resort lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Dive Resort",
          included: [
            "Airport transfer",
            "Diving equipment",
            "Check dive",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Wall Diving",
          description: "Explore Pemba's famous wall dives",
          activities: [
            "06:30 - Light breakfast",
            "07:30-11:30 - Morning wall dives",
            "12:00-13:30 - Lunch break",
            "14:00-16:00 - Afternoon dive",
            "16:30-17:30 - Dive review",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Three dives",
            "Equipment",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Coral Gardens",
          description: "Discover pristine coral reefs",
          activities: [
            "06:30 - Breakfast",
            "07:30-12:00 - Coral reef dives",
            "12:30-14:00 - Lunch and rest",
            "14:30-16:30 - Afternoon dive",
            "17:00-18:00 - Marine life talk",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Packed lunch",
            dinner: "Resort dinner"
          },
          accommodation: "Same resort",
          included: [
            "Three dives",
            "Equipment",
            "Marine guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Advanced Sites",
          description: "Experience challenging dive sites",
          activities: [
            "06:30 - Light breakfast",
            "07:30-11:30 - Deep dive sessions",
            "12:00-13:30 - Lunch break",
            "14:00-16:00 - Current dive",
            "16:30-17:30 - Skills review",
            "19:00 - Celebration dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Resort lunch",
            dinner: "BBQ dinner"
          },
          accommodation: "Same resort",
          included: [
            "Advanced dives",
            "Equipment",
            "Expert guidance",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Final Dives & Departure",
          description: "Last underwater exploration",
          activities: [
            "07:00 - Light breakfast",
            "08:00-10:00 - Final dive",
            "10:30-11:30 - Fresh breakfast",
            "12:00 - Resort checkout",
            "12:30 - Airport transfer",
            "14:00 - Departure"
          ],
          meals: {
            breakfast: "Two breakfasts",
            lunch: "Packed lunch"
          },
          included: [
            "Morning dive",
            "Transfer",
            "Equipment",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "4 Days Cultural Experience",
      image: "/images/pemba/cultural-experience.jpg",
      price: 1200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      categories: ["Culture Tour"],
      description: "Experience the rich cultural heritage of Pemba Island.",
      highlights: [
        "Traditional village visits",
        "Cultural activities",
        "Cooking class",
        "Local interaction"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Cultural Introduction",
          description: "Begin your cultural journey in Pemba",
          activities: [
            "09:00 - Arrival at Pemba Airport",
            "10:00 - Transfer to cultural lodge",
            "11:00-12:00 - Welcome ceremony",
            "12:30-14:00 - Traditional lunch",
            "14:30-16:30 - Village orientation walk",
            "17:00-18:30 - Cultural presentation",
            "19:00 - Welcome dinner with local music"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Traditional lunch",
            dinner: "Cultural dinner"
          },
          accommodation: "Cultural Lodge",
          included: [
            "Airport transfer",
            "Cultural activities",
            "Local guide",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Village Life & Traditions",
          description: "Immerse in local daily life",
          activities: [
            "07:00 - Traditional breakfast",
            "08:00-11:00 - Village activities",
            "11:30-13:00 - Cooking class",
            "13:30-14:30 - Lunch with families",
            "15:00-17:00 - Craft workshops",
            "17:30-18:30 - Evening rituals",
            "19:00 - Community dinner"
          ],
          meals: {
            breakfast: "Local breakfast",
            lunch: "Home-cooked lunch",
            dinner: "Community feast"
          },
          accommodation: "Same lodge",
          included: [
            "Village activities",
            "Cooking class",
            "Craft materials",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Spice & Heritage",
          description: "Explore Pemba's rich heritage",
          activities: [
            "07:30 - Breakfast",
            "08:30-11:30 - Spice plantation tour",
            "12:00-13:30 - Spice-infused lunch",
            "14:00-16:00 - Historical sites visit",
            "16:30-18:00 - Traditional medicine walk",
            "19:00 - Special dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Plantation lunch",
            dinner: "Traditional dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Spice tour",
            "Heritage guide",
            "All activities",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Cultural Day & Departure",
          description: "Last cultural experiences",
          activities: [
            "07:00 - Morning ritual",
            "08:00-09:00 - Traditional breakfast",
            "09:30-11:00 - Final village visit",
            "11:30-12:30 - Farewell ceremony",
            "13:00 - Light lunch",
            "14:00 - Airport transfer",
            "16:00 - Departure"
          ],
          meals: {
            breakfast: "Traditional breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Morning activities",
            "Farewell ceremony",
            "Transfer",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "6 Days Island Explorer",
      image: "/images/pemba/island-explorer.jpg",
      price: 1800,
      duration: "6 Days / 5 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Explore the diverse landscapes and marine life of Pemba Island.",
      highlights: [
        "Island hopping",
        "Beach relaxation",
        "Local cuisine",
        "Sunset cruises",
        "Nature walks",
        "Traditional village visits"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Island Overview",
          description: "Begin your comprehensive Pemba experience",
          activities: [
            "08:00 - Arrival at Pemba Airport",
            "09:00-10:00 - Transfer to luxury lodge",
            "10:30-11:30 - Welcome briefing",
            "12:00-13:30 - Lunch with view",
            "14:00-16:00 - Island orientation tour",
            "16:30-18:00 - Beach walk",
            "19:00 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Lodge lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Luxury Beach Lodge",
          included: [
            "Airport transfer",
            "Orientation tour",
            "Welcome pack",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Forest Reserve Exploration",
          description: "Discover Pemba's natural heritage",
          activities: [
            "07:00 - Breakfast",
            "08:00-12:00 - Forest hike",
            "12:30-13:30 - Picnic lunch",
            "14:00-16:00 - Wildlife spotting",
            "16:30-18:00 - Nature presentation",
            "19:00 - Dinner at lodge"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Forest guide",
            "Nature activities",
            "All meals",
            "Equipment"
          ]
        },
        {
          day: 3,
          title: "Marine Discovery",
          description: "Explore underwater wonders",
          activities: [
            "07:30 - Breakfast",
            "08:30-12:00 - Snorkeling trip",
            "12:30-14:00 - Beach lunch",
            "14:30-16:30 - Marine conservation",
            "17:00-18:30 - Sunset cruise",
            "19:00 - Seafood dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Beach lunch",
            dinner: "Seafood dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Snorkeling gear",
            "Boat trips",
            "Marine guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Island Hopping",
          description: "Visit surrounding islands",
          activities: [
            "07:00 - Early breakfast",
            "08:00-12:00 - Island hopping",
            "12:30-13:30 - Island picnic",
            "14:00-16:00 - Beach activities",
            "16:30-18:00 - Return cruise",
            "19:00 - Dinner at lodge"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Boat trips",
            "Island visits",
            "Activities",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Cultural Heritage",
          description: "Experience local traditions",
          activities: [
            "08:00 - Breakfast",
            "09:00-12:00 - Village visit",
            "12:30-14:00 - Traditional lunch",
            "14:30-16:30 - Spice tour",
            "17:00-18:30 - Cultural show",
            "19:00 - Special dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Traditional lunch",
            dinner: "Themed dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Cultural guide",
            "Village visit",
            "Activities",
            "All meals"
          ]
        },
        {
          day: 6,
          title: "Final Day & Departure",
          description: "Last island experiences",
          activities: [
            "07:00-08:00 - Sunrise yoga",
            "08:30-09:30 - Breakfast",
            "10:00-11:30 - Beach time",
            "12:00 - Lodge checkout",
            "12:30 - Light lunch",
            "13:30 - Airport transfer",
            "15:00 - Departure"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Morning activities",
            "Transfer",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "3 Days Beach Escape",
      image: "/images/pemba/beach-escape.jpg",
      price: 1000,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays"],
      description: "Enjoy the pristine beaches and crystal-clear waters of Pemba.",
      highlights: [
        "Beach relaxation",
        "Snorkeling",
        "Kayaking",
        "Sunset cruises",
        "Local cuisine",
        "Sunset beach walks"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Beach Welcome",
          description: "Begin your beach retreat",
          activities: [
            "09:00 - Arrival at Pemba Airport",
            "10:00 - Transfer to beach resort",
            "11:00-12:00 - Welcome briefing",
            "12:30-14:00 - Beachfront lunch",
            "14:30-16:30 - Beach relaxation",
            "17:00-18:30 - Sunset cocktails",
            "19:00 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Beach lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Beach Resort",
          included: [
            "Airport transfer",
            "Welcome drink",
            "Beach access",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Beach & Water Activities",
          description: "Full day of beach activities",
          activities: [
            "07:00-08:00 - Beach yoga",
            "08:30-09:30 - Breakfast",
            "10:00-12:00 - Water sports",
            "12:30-14:00 - Beach lunch",
            "14:30-16:30 - Snorkeling",
            "17:00-18:30 - Sunset cruise",
            "19:00 - BBQ dinner"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Beach lunch",
            dinner: "BBQ dinner"
          },
          accommodation: "Same resort",
          included: [
        "Water sports",
            "Snorkeling gear",
            "Sunset cruise",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Final Beach Day & Departure",
          description: "Last moments in paradise",
          activities: [
            "07:30-08:30 - Breakfast",
            "09:00-11:00 - Beach time",
            "11:30-12:30 - Spa treatment",
            "13:00 - Resort checkout",
            "13:30 - Light lunch",
            "14:30 - Airport transfer",
            "16:00 - Departure"
          ],
          meals: {
            breakfast: "Resort breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Spa treatment",
            "Beach access",
            "Transfer",
            "Meals as specified"
          ]
        }
      ]
    }
  ],
  
  saadani: [
    {
      id: 1,
      title: "3 Days Bush & Beach",
      image: "/images/saadani/bush-beach.jpg",
      price: 1200,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays", "Safari"],
      description: "Experience the best of both worlds with this unique safari and beach package.",
      highlights: [
        "Safari game drives",
        "Beach relaxation",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Safari",
          description: "Begin your unique bush and beach experience",
          activities: [
            "07:00 - Pickup from Dar es Salaam",
            "09:30 - Arrival at Saadani",
            "10:00-11:00 - Park briefing",
            "11:30-13:30 - Game drive to camp",
            "13:30-14:30 - Lunch at camp",
            "15:00-18:00 - Afternoon game drive",
            "18:30 - Beach sundowner",
            "19:30 - Dinner under stars"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Bush dinner"
          },
          accommodation: "Luxury Tented Camp",
          included: [
            "Transfer from Dar",
            "Game drives",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Wildlife & Ocean",
          description: "Combine safari and beach activities",
          activities: [
            "06:00 - Early morning game drive",
            "09:00-10:00 - Bush breakfast",
            "10:30-12:30 - Beach time",
            "13:00-14:00 - Lunch at camp",
            "14:30-16:30 - Boat safari",
            "17:00-18:30 - Evening game drive",
            "19:00 - Dinner at camp"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Game drives",
            "Boat safari",
            "Beach access",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Final Activities & Departure",
          description: "Last chance to enjoy both worlds",
          activities: [
            "06:30 - Morning beach walk",
            "07:30-08:30 - Breakfast",
            "09:00-11:00 - Game drive",
            "11:30-12:30 - Final beach time",
            "13:00 - Lunch",
            "14:00 - Depart for Dar",
            "16:30 - Arrival in Dar"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Morning activities",
            "Transfer to Dar",
            "Park fees",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "4 Days Photography Special",
      image: "/images/saadani/photo-safari.jpg",
      price: 1600,
      duration: "4 Days / 3 Nights",
      groupSize: "2-4 people",
      categories: ["Wildlife Safaris"],
      description: "Perfect for photographers seeking unique safari and beach shots.",
      highlights: [
        "Professional safari photography",
        "Beach sunset sessions",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Photography Introduction",
          description: "Begin your unique photo safari",
          activities: [
            "07:00 - Pickup from Dar es Salaam",
            "09:30 - Arrival at Saadani",
            "10:00-11:00 - Photography briefing",
            "11:30-13:30 - First photo session",
            "13:30-14:30 - Lunch at camp",
            "15:00-18:00 - Evening shoot",
            "18:30 - Sunset photos",
            "19:30 - Image review & dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Photography Camp",
          included: [
            "Transfer from Dar",
            "Photo guide",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Wildlife Photography",
          description: "Focus on wildlife shots",
          activities: [
            "05:30 - Early morning light",
            "06:00-09:30 - Wildlife shoot",
            "09:30-10:30 - Breakfast & review",
            "11:00-13:00 - Photography workshop",
            "14:00-17:30 - Afternoon session",
            "18:00-19:00 - Editing workshop",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Photo sessions",
            "Workshop",
            "Equipment support",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "Coastal & Marine Photography",
          description: "Capture unique coastal wildlife",
          activities: [
            "06:00 - Sunrise beach shoot",
            "08:00-09:00 - Breakfast",
            "09:30-12:30 - Boat photography",
            "13:00-14:00 - Lunch break",
            "14:30-17:30 - Beach wildlife",
            "18:00-19:00 - Portfolio review",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Boat lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
        "Boat trip",
            "Beach access",
            "Expert guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Shots & Departure",
          description: "Last photo opportunities",
          activities: [
            "05:30 - Dawn shoot",
            "07:30-08:30 - Breakfast",
            "09:00-11:00 - Final session",
            "11:30-12:30 - Image review",
            "13:00 - Lunch",
            "14:00 - Depart for Dar",
            "16:30 - Arrival in Dar"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Morning shoot",
            "Transfer to Dar",
            "Image review",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "5 Days Ultimate Saadani",
      image: "/images/saadani/ultimate.jpg",
      price: 2000,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Beach Holidays", "Safari"],
      description: "The ultimate Saadani experience combining safari and beach activities.",
      highlights: [
        "Safari game drives",
        "Beach relaxation",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Introduction",
          description: "Begin your comprehensive Saadani experience",
          activities: [
            "07:00 - Pickup from Dar es Salaam",
            "09:30 - Arrival at Saadani",
            "10:00-11:00 - Park briefing",
            "11:30-13:30 - Game drive to lodge",
            "13:30-14:30 - Welcome lunch",
            "15:00-18:00 - Afternoon activities",
            "18:30 - Sundowner",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Lodge lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Luxury Lodge",
          included: [
            "Transfer from Dar",
            "Activities",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Savanna Explorer",
          description: "Full day exploring inland areas",
          activities: [
            "06:00 - Early game drive",
            "09:00-10:00 - Bush breakfast",
            "10:30-13:00 - Walking safari",
            "13:30-14:30 - Lunch at lodge",
            "15:00-18:00 - Game drive",
            "18:30 - Night drive",
            "20:00 - Dinner"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Lodge lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Game drives",
            "Walking safari",
            "Night drive",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "River & Mangroves",
          description: "Explore waterways and wetlands",
          activities: [
            "07:00 - Breakfast",
            "08:00-11:00 - River safari",
            "11:30-13:00 - Mangrove walk",
            "13:30-14:30 - Picnic lunch",
            "15:00-17:00 - Boat cruise",
            "17:30-18:30 - Beach time",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "River safari",
            "Boat cruise",
            "Guide",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Culture & Conservation",
          description: "Connect with local communities",
          activities: [
            "07:30 - Breakfast",
            "08:30-11:00 - Village visit",
            "11:30-13:00 - Cultural activities",
            "13:30-14:30 - Traditional lunch",
            "15:00-17:00 - Conservation project",
            "17:30-18:30 - Community dinner",
            "19:30 - Cultural show"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Traditional lunch",
            dinner: "Community dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Cultural guide",
            "Village visit",
            "Activities",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Final Day & Departure",
          description: "Last Saadani experiences",
          activities: [
            "06:00 - Sunrise game drive",
            "08:30-09:30 - Breakfast",
            "10:00-11:30 - Beach walk",
            "12:00 - Lodge checkout",
            "12:30 - Lunch",
            "13:30 - Depart for Dar",
            "16:00 - Arrival in Dar"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Morning drive",
            "Transfer to Dar",
            "Park fees",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "2 Days Quick Escape",
      image: "/images/saadani/quick-escape.jpg",
      price: 800,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      categories: ["Beach Holidays", "Safari"],
      description: "Make the most of your short stay with this safari and beach package.",
      highlights: [
        "Safari game drives",
        "Beach relaxation",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Activities",
          description: "Make the most of your short stay",
          activities: [
            "07:00 - Departure from Dar",
            "09:30 - Arrival at Saadani",
            "10:00-12:30 - Morning game drive",
            "13:00-14:00 - Lunch at camp",
            "14:30-16:30 - Beach time",
            "17:00-18:30 - Evening game drive",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Tented Camp",
          included: [
            "Transfer from Dar",
            "Game drives",
            "Beach access",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Final Activities & Return",
          description: "Last taste of bush and beach",
          activities: [
            "06:00 - Early game drive",
            "08:30-09:30 - Breakfast",
            "10:00-11:30 - Boat safari",
            "12:00 - Camp checkout",
            "12:30 - Lunch",
            "13:30 - Depart for Dar",
            "16:00 - Arrival in Dar"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch"
          },
          included: [
            "Game drive",
            "Boat safari",
            "Transfer to Dar",
            "Meals as specified"
          ]
        }
      ]
    }
  ],
  
  katavi: [
    {
      id: 1,
      title: "4 Days Wilderness Safari",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 1200,
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
      description: "Experience the true wilderness of Katavi.",
      highlights: [
        "Remote areas",
        "Fly camping",
        "Night drives",
        "Walking safaris",
        "Premium camping",
        "Expert naturalists"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & First Game Drive",
          description: "Begin your wilderness adventure",
          activities: [
            "08:00 - Flight from Arusha",
            "10:00 - Arrival at Katavi",
            "10:30-11:30 - Camp check-in",
            "12:00-13:00 - Lunch at camp",
            "14:00-17:30 - Afternoon game drive",
            "18:00 - Sundowner",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Wilderness Camp",
          included: [
            "Flight from Arusha",
            "Game drive",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Hippo Pools & Plains",
          description: "Explore Katavi's famous hippo concentrations",
          activities: [
            "06:00 - Early morning game drive",
            "09:00-10:00 - Bush breakfast",
            "10:30-13:00 - Hippo pools visit",
            "13:30-14:30 - Lunch at camp",
            "15:00-18:00 - Plains game drive",
            "19:00 - Dinner under stars"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Game drives",
            "Expert guide",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 3,
          title: "Walking Safari",
          description: "Experience the wilderness on foot",
          activities: [
            "06:30 - Light breakfast",
            "07:00-10:00 - Morning walking safari",
            "10:30-11:30 - Brunch at camp",
            "12:00-15:00 - Rest period",
            "15:30-18:00 - Evening game drive",
            "19:00 - Dinner and stories"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Camp brunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Walking safari",
            "Game drive",
            "Armed ranger",
            "All meals"
          ]
        },
        {
          day: 4,
          title: "Final Game Drive & Departure",
          description: "Last glimpse of wilderness",
          activities: [
            "06:00 - Early game drive",
            "09:00-10:00 - Breakfast",
            "10:30-12:00 - Final drive",
            "12:30 - Light lunch",
            "14:00 - Flight to Arusha",
            "16:00 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Game drive",
            "Flight to Arusha",
            "Park fees",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "6 Days Ultimate Katavi",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 1800,
      duration: "6 Days / 5 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
      description: "The ultimate Katavi experience combining safari and wilderness activities.",
      highlights: [
        "Remote areas",
        "Fly camping",
        "Night drives",
        "Walking safaris",
        "Local cuisine",
        "Sunset cruises"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Orientation",
          description: "Begin your comprehensive Katavi experience",
          activities: [
            "08:00 - Flight from Arusha",
            "10:00 - Arrival at Katavi",
            "10:30-11:30 - Welcome briefing",
            "12:00-13:00 - Lunch at lodge",
            "14:00-17:30 - Afternoon game drive",
            "18:00 - Sundowner",
            "19:30 - Welcome dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Lodge lunch",
            dinner: "Welcome dinner"
          },
          accommodation: "Luxury Lodge",
          included: [
            "Flight from Arusha",
            "Game drive",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Paradise Plains",
          description: "Explore vast savanna plains",
          activities: [
            "06:00 - Early game drive",
            "09:00-10:00 - Bush breakfast",
            "10:30-13:00 - Extended game drive",
            "13:30-14:30 - Lunch at lodge",
            "15:00-18:00 - Afternoon drive",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Lodge lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Game drives",
            "Expert guide",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 3,
          title: "River & Wetlands",
          description: "Discover river ecosystems",
          activities: [
            "06:30 - Breakfast",
            "07:00-11:00 - River game drive",
            "11:30-12:30 - Hippo pools visit",
            "13:00-14:00 - Picnic lunch",
            "14:30-17:30 - Wetlands exploration",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Game drives",
            "Expert guide",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 4,
          title: "Walking & Culture",
          description: "Experience wilderness on foot",
          activities: [
            "06:00 - Light breakfast",
            "06:30-10:00 - Walking safari",
            "10:30-11:30 - Brunch",
            "14:00-16:00 - Village visit",
            "16:30-18:00 - Cultural activities",
            "19:00 - Traditional dinner"
          ],
          meals: {
            breakfast: "Light breakfast",
            lunch: "Lodge brunch",
            dinner: "Traditional dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Walking safari",
            "Cultural visit",
            "Local guide",
            "All meals"
          ]
        },
        {
          day: 5,
          title: "Remote Sectors",
          description: "Explore hidden corners",
          activities: [
            "06:00 - Early departure",
            "06:30-11:00 - Remote area drive",
            "11:30-12:30 - Picnic lunch",
            "13:00-16:00 - Game viewing",
            "16:30-18:00 - Night drive",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Packed breakfast",
            lunch: "Picnic lunch",
            dinner: "Lodge dinner"
          },
          accommodation: "Same lodge",
          included: [
            "Full-day drive",
            "Night drive",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 6,
          title: "Final Safari & Departure",
          description: "Last wilderness experience",
          activities: [
            "06:00 - Sunrise drive",
            "09:00-10:00 - Breakfast",
            "10:30-12:00 - Final game drive",
            "12:30 - Light lunch",
            "14:00 - Flight to Arusha",
            "16:00 - Arrival in Arusha"
          ],
          meals: {
            breakfast: "Lodge breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Game drive",
            "Flight to Arusha",
            "Park fees",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "3 Days Fly-in Safari",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 1500,
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
      description: "Experience the wilderness from the sky and on foot.",
      highlights: [
        "Scenic flight",
        "Walking safari",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Scenic Flight & First Drive",
          description: "Aerial and ground safari experience",
          activities: [
            "08:00 - Flight from Arusha",
            "10:00 - Scenic flight over Katavi",
            "11:00 - Camp arrival",
            "12:00-13:00 - Lunch at camp",
            "14:00-17:30 - Game drive",
            "18:00 - Sundowner",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Luxury Camp",
          included: [
            "Scenic flight",
            "Game drive",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Full Day Safari",
          description: "Intensive wildlife viewing",
          activities: [
            "06:00 - Early drive",
            "09:00-10:00 - Bush breakfast",
            "10:30-13:00 - Game viewing",
            "13:30-14:30 - Lunch at camp",
            "15:00-18:00 - Afternoon drive",
            "19:00 - Dinner"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
        "Game drives",
            "Expert guide",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 3,
          title: "Final Safari & Return Flight",
          description: "Last wildlife encounters",
          activities: [
            "06:00 - Morning drive",
            "09:00-10:00 - Breakfast",
            "10:30-12:00 - Final drive",
            "12:30 - Light lunch",
            "14:00 - Flight to Arusha",
            "16:00 - Arrival"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Game drive",
            "Flight to Arusha",
            "Park fees",
            "Meals as specified"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "5 Days Photography Special",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 1800,
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      categories: ["Wildlife Safaris"],
      description: "Perfect for photographers seeking unique safari and wilderness shots.",
      highlights: [
        "Scenic flight",
        "Walking safari",
        "Local cuisine",
        "Sunset cruises",
        "All meals included"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Photo Planning",
          description: "Begin your photo safari",
          activities: [
            "08:00 - Flight from Arusha",
            "10:00 - Arrival at Katavi",
            "10:30-11:30 - Photography briefing",
            "12:00-13:00 - Lunch at camp",
            "14:00-17:30 - Evening shoot",
            "18:00 - Sunset photos",
            "19:30 - Image review & dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Camp lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Photography Camp",
          included: [
            "Flight from Arusha",
            "Photo guide",
            "Park fees",
            "All meals"
          ]
        },
        {
          day: 2,
          title: "Plains & Predators",
          description: "Focus on action shots",
          activities: [
            "05:30 - Early light shoot",
            "09:00-10:00 - Breakfast & review",
            "10:30-13:00 - Technical workshop",
            "14:00-17:30 - Afternoon session",
            "18:00-19:00 - Editing workshop",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Photo sessions",
            "Workshop",
            "Equipment support",
            "All meals"
          ]
        },
        {
          day: 3,
          title: "River & Wildlife",
          description: "Water-based photography",
          activities: [
            "06:00 - River shoot",
            "09:00-10:00 - Breakfast",
            "10:30-13:00 - Hippo pools",
            "14:00-17:30 - Wildlife action",
            "18:00-19:00 - Portfolio review",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Photo sessions",
            "Expert guide",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 4,
          title: "Landscapes & Light",
          description: "Scenic and atmospheric shots",
          activities: [
            "05:30 - Dawn shoot",
            "09:00-10:00 - Breakfast",
            "10:30-13:00 - Landscape session",
            "14:00-17:30 - Wildlife portraits",
            "18:00-19:00 - Editing time",
            "19:30 - Dinner"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Packed lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Same camp",
          included: [
            "Photo sessions",
            "Equipment",
            "All meals",
            "Activities"
          ]
        },
        {
          day: 5,
          title: "Final Shots & Departure",
          description: "Last photo opportunities",
          activities: [
            "05:30 - Sunrise shoot",
            "09:00-10:00 - Breakfast",
            "10:30-12:00 - Final session",
            "12:30 - Light lunch",
            "14:00 - Flight to Arusha",
            "16:00 - Arrival"
          ],
          meals: {
            breakfast: "Camp breakfast",
            lunch: "Light lunch"
          },
          included: [
            "Morning shoot",
            "Flight to Arusha",
            "Image review",
            "Meals as specified"
          ]
        }
      ]
    }
  ],

  cultural: [
    {
      id: 1,
      title: "Maasai Cultural Experience",
      image: "https://images.unsplash.com/photo-1612338192105-4f0f4568b0c0?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 250,
      duration: "2 Days / 1 Night",
      groupSize: "2-8 people",
      categories: ["Cultural Tours"],
      description: "Immerse yourself in authentic Maasai culture near Ngorongoro Conservation Area.",
      highlights: [
        "Traditional dance performances",
        "Village visit",
        "Cultural workshops",
        "Local cuisine",
        "Craft making",
        "Story telling sessions"
      ],
      itinerary: [
        {
          day: 1,
          title: "Village Welcome & Cultural Activities",
          description: "Experience traditional Maasai lifestyle",
          activities: [
            "08:00 - Pickup from Arusha",
            "10:30 - Welcome ceremony at Maasai village",
            "11:00-13:00 - Village tour & cultural orientation",
            "13:00-14:00 - Traditional lunch",
            "14:30-16:30 - Beadwork & craft workshop",
            "17:00-18:30 - Evening dance ceremony",
            "19:00 - Traditional dinner"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Traditional lunch",
            dinner: "Traditional dinner"
          },
          accommodation: "Cultural Boma Stay",
          included: [
            "Transportation",
            "Cultural activities",
            "Meals",
            "Accommodation"
          ]
        },
        {
          day: 2,
          title: "Daily Life & Traditions",
          description: "Learn about Maasai traditions and lifestyle",
          activities: [
            "06:30 - Morning rituals",
            "07:30-08:30 - Traditional breakfast",
            "09:00-11:00 - Cattle herding experience",
            "11:30-13:00 - Traditional medicine walk",
            "13:30 - Farewell lunch",
            "15:00 - Return to Arusha"
          ],
          meals: {
            breakfast: "Traditional breakfast",
            lunch: "Farewell lunch"
          },
          included: [
            "Morning activities",
            "Cultural guide",
            "Meals",
            "Return transfer"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Hadzabe Tribe Experience",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 300,
      duration: "2 Days / 1 Night",
      groupSize: "2-6 people",
      categories: ["Cultural Tours"],
      description: "Unique opportunity to learn about the ancient hunter-gatherer lifestyle of the Hadzabe tribe near Lake Eyasi.",
      highlights: [
        "Hunter-gatherer experience",
        "Bush walks",
        "Traditional hunting methods",
        "Ancient rock art",
        "Evening storytelling",
        "Traditional healing"
      ],
      itinerary: [
        {
          day: 1,
          title: "Journey to Lake Eyasi",
          description: "Meet the Hadzabe community",
          activities: [
            "07:00 - Depart from Arusha",
            "11:00 - Arrival at Lake Eyasi",
            "12:00-13:00 - Welcome ceremony",
            "13:30-14:30 - Traditional lunch",
            "15:00-17:00 - Community introduction",
            "17:30-19:00 - Evening cultural activities",
            "19:30 - Dinner and stories"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Traditional lunch",
            dinner: "Camp dinner"
          },
          accommodation: "Tented Camp",
          included: [
            "Transportation",
            "Activities",
            "Meals",
            "Accommodation"
          ]
        },
        {
          day: 2,
          title: "Hunter-Gatherer Experience",
          description: "Learn traditional survival skills",
          activities: [
            "05:30 - Early morning hunt",
            "09:00-10:00 - Bush breakfast",
            "10:30-12:00 - Traditional skills workshop",
            "12:30 - Farewell lunch",
            "14:00 - Depart for Arusha"
          ],
          meals: {
            breakfast: "Bush breakfast",
            lunch: "Traditional lunch"
          },
          included: [
            "Morning hunt",
            "Traditional guide",
            "Meals",
            "Return transfer"
          ]
        }
      ]
    }
  ],

  daytrips: [
    {
      id: 1,
      title: "Arusha National Park Day Safari",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 180,
      duration: "1 Day",
      groupSize: "2-6 people",
      categories: ["Day Trips", "Wildlife Safaris"],
      description: "Perfect introduction to Tanzania's wildlife just a short drive from Arusha.",
      highlights: [
        "Mount Meru views",
        "Colobus monkeys",
        "Momella Lakes",
        "Ngurdoto Crater",
        "Buffalo herds",
        "Waterfall walk"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arusha National Park Explorer",
          description: "Full day wildlife and nature experience",
          activities: [
            "06:30 - Hotel pickup in Arusha",
            "07:30 - Park arrival and briefing",
            "08:00-10:30 - Morning game drive",
            "11:00-12:00 - Guided waterfall walk",
            "12:30-13:30 - Picnic lunch",
            "14:00-16:30 - Afternoon game drive",
            "17:00 - Return to Arusha"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Picnic lunch"
          },
          included: [
            "Park fees",
            "Game drives",
            "Walking safari",
            "Picnic lunch",
            "Guide"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Materuni Waterfalls & Coffee Tour",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 120,
      duration: "1 Day",
      groupSize: "2-8 people",
      categories: ["Day Trips", "Cultural Tours"],
      description: "Experience local coffee culture and beautiful waterfalls on the slopes of Kilimanjaro.",
      highlights: [
        "Coffee plantation tour",
        "Traditional coffee making",
        "Waterfall hike",
        "Local lunch",
        "Chagga culture",
        "Mountain views"
      ],
      itinerary: [
        {
          day: 1,
          title: "Coffee & Waterfalls Adventure",
          description: "Cultural and nature experience",
          activities: [
            "08:00 - Pickup from Moshi",
            "09:00-11:00 - Coffee plantation tour & workshop",
            "11:30-13:00 - Waterfall hike",
            "13:30-14:30 - Traditional lunch",
            "15:00-16:00 - Village walk",
            "16:30 - Return to Moshi"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Traditional lunch"
          },
          included: [
            "Transportation",
            "Coffee tour",
            "Waterfall fees",
            "Local guide",
            "Traditional lunch"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Moshi Hot Springs Escape",
      image: "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      price: 90,
      duration: "1 Day",
      groupSize: "2-10 people",
      categories: ["Day Trips"],
      description: "Relax in natural hot springs surrounded by beautiful forest scenery.",
      highlights: [
        "Natural hot springs",
        "Swimming",
        "Forest walk",
        "Picnic lunch",
        "Bird watching",
        "Local village visit"
      ],
      itinerary: [
        {
          day: 1,
          title: "Hot Springs Relaxation",
          description: "Day of relaxation and nature",
          activities: [
            "09:00 - Pickup from Moshi",
            "10:00 - Arrival at hot springs",
            "10:30-12:30 - Swimming and relaxation",
            "12:30-13:30 - Picnic lunch",
            "14:00-15:00 - Optional forest walk",
            "15:30 - Return to Moshi"
          ],
          meals: {
            breakfast: "Not included",
            lunch: "Picnic lunch"
          },
          included: [
            "Transportation",
            "Entrance fees",
            "Picnic lunch",
            "Guide",
            "Swimming"
          ]
        }
      ]
    }
  ]
};

export const getPackagesForPark = (parkId) => {
  return parkPackages[parkId] || [];
}; 