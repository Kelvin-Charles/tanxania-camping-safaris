const parkPackages = {
  serengeti: [
    {
      id: 1,
      title: "3 Days Classic Safari",
      image: "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600",
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
      image: "https://www.ngorongorocratertanzania.org/wp-content/uploads/2022/06/5-Days-Tanzania-Northern-Circuit-Wildlife-Safari-1170x450-1-750x450.jpg",
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
      ]
    }
  ],
  kilimanjaro: [
    {
      id: 1,
      title: "7 Days Machame Route",
      image: "https://www.pelago.com/img/products/TZ-Tanzania/kilimanjaro-machame-route-climb-7days-whiskey-route/03a25e63-b711-43e4-a8e7-9c1b723bad3e_kilimanjaro-machame-route-climb-7days-whiskey-route-xlarge.webp",
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
      ]
    },
    {
      id: 2,
      title: "6 Days Marangu Route",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/89/68/8d.jpg",
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
      image: "https://ascendtanzania.com/assest/images/8-days-lemosho-route-map.webp",
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
      image: "https://www.easytravel.co.tz/wp-content/uploads/2021/03/8-Days-Discover-Tarangire-Serengeti-Ngorongoro-22-comfort-plus-scaled.jpg",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6DQmVtweQvZWmKrrggXILM6SD09PQYRyfQ&s",
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
      image: "https://www.ngorongorocratertanzania.org/wp-content/uploads/2022/03/1540222037-boma-1.jpg",
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
            "Crater fees",
            "Cultural activities",
            "All meals"
          ]
        }
      ]
    }
  ],
  katavi: [
    {
      id: 1,
      title: "4 Days Wilderness Safari",
      image: "https://www.tanzaniaparks.go.tz/uploads/Katavi-NP.jpg",
      price: 1600,
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
            "Expert guide", // Copy Ngorongoro packages
            "All meals",
            "Activities"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "6 Days Ultimate Katavi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKIsLdhx8iAFFY8sdknhQFZjywbXPq-JeOWqZWyjNEDjhC5rXTycCX2F6HCkhfM44WtI&usqp=CAU",
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
        }
      ]
    }
  ]
};

module.exports = { parkPackages }; 