export const northernParks = {
  'kilimanjaro': {
    name: 'Mount Kilimanjaro',
    title: 'Africa\'s Highest Peak',
    heroImage: 'https://images.unsplash.com/photo-1589308454676-22c0253bb86a',
    introduction: [
      'Standing majestically at 5,895 meters (19,341 feet), Mount Kilimanjaro is Africa\'s highest peak and Tanzania\'s most iconic landmark.',
      'This UNESCO World Heritage site is also the world\'s highest free-standing mountain and one of the world\'s most accessible high summits.',
      'The mountain comprises three volcanic cones: Kibo, Mawenzi, and Shira, with Uhuru Peak on Kibo being the highest point.'
    ],
    highlights: [
      'Climb to the "Roof of Africa"',
      'Experience diverse climate zones',
      'Witness stunning sunrise views',
      'Rich wildlife in lower slopes',
      'Multiple climbing routes available'
    ],
    bestTime: {
      details: 'The best time to climb Kilimanjaro is during the dry seasons: January to mid-March and June to October. These periods offer the most favorable weather conditions with clearer skies and less precipitation.',
      seasons: [
        {
          name: 'Dry Season (June-October)',
          description: 'Most popular time, clear skies, cold nights'
        },
        {
          name: 'Short Dry Season (January-March)',
          description: 'Warmer conditions, possible brief showers'
        },
        {
          name: 'Wet Seasons',
          description: 'April-May and November-December, challenging conditions'
        }
      ]
    },
    activities: [
      {
        name: 'Mountain Climbing',
        description: 'Choose from various routes including Marangu, Machame, Lemosho, and more.',
        details: 'Experience one of the world\'s most iconic climbs with professional guides.'
      },
      {
        name: 'Nature Walks',
        description: 'Explore the mountain\'s lower slopes and surrounding forest.',
        details: 'Discover diverse flora and fauna in the mountain\'s rich ecosystem.'
      },
      {
        name: 'Wildlife Viewing',
        description: 'Spot various animals including blue monkeys, colobus monkeys, and unique bird species.',
        details: 'The mountain\'s slopes are home to diverse wildlife adapted to different altitude zones.'
      },
      {
        name: 'Photography',
        description: 'Capture breathtaking landscapes and diverse ecosystems.',
        details: 'From dramatic sunrises to stunning vistas, endless photo opportunities await.'
      }
    ],
    routes: [
      {
        name: 'Marangu Route',
        duration: '5-6 days',
        difficulty: 'Moderate',
        description: 'Known as the "Coca-Cola" route, featuring comfortable hut accommodations.',
        highlights: [
          'Only route with hut accommodation',
          'Gradual slope for hiking',
          'Good for beginners',
          'Shortest route to the summit'
        ]
      },
      {
        name: 'Machame Route',
        duration: '6-7 days',
        difficulty: 'Moderate-Difficult',
        description: 'The most scenic and popular route, also known as the "Whiskey" route.',
        highlights: [
          'Most scenic route',
          'Better acclimatization profile',
          'Popular with experienced hikers',
          'Beautiful forest sections'
        ]
      },
      {
        name: 'Lemosho Route',
        duration: '7-8 days',
        difficulty: 'Moderate',
        description: 'Offers excellent acclimatization and stunning views.',
        highlights: [
          'High success rate',
          'Less crowded starting point',
          'Beautiful wilderness experience',
          'Great for acclimatization'
        ]
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1589308454676-22c0253bb86a',
        title: 'Kilimanjaro Summit',
        description: 'Sunrise view from Uhuru Peak'
      },
      {
        url: 'https://images.unsplash.com/photo-1621414050941-8aa30f506ec8',
        title: 'Climbing Experience',
        description: 'Climbers making their way to the summit'
      }
    ],
    practicalInfo: {
      preparation: [
        'Physical fitness training recommended 3-6 months before climb',
        'Proper gear and clothing essential',
        'Altitude sickness prevention measures',
        'Valid passport and visa required'
      ],
      weather: {
        seasons: {
          dry: 'June-October & January-March',
          wet: 'April-May & November-December'
        },
        temperatures: {
          base: '20°C to 30°C',
          summit: '-20°C to -5°C'
        }
      },
      equipment: {
        essential: [
          'Warm sleeping bag',
          'Waterproof hiking boots',
          'Down jacket',
          'Rain gear',
          'Headlamp'
        ],
        recommended: [
          'Trekking poles',
          'Camera equipment',
          'Personal first aid kit'
        ]
      }
    },
    itineraries: [
      {
        name: '6 Days Kilimanjaro Marangu Route',
        highlights: 'Classic Kilimanjaro climb via the "Coca-Cola" route',
        difficulty: 'Moderate-Difficult',
        price: 'From $2,800 per person',
        days: [
          {
            day: 1,
            title: 'Marangu Gate to Mandara Hut',
            altitude: {
              start: '1,843m',
              end: '2,700m',
              gain: '857m'
            },
            distance: '8 km',
            time: '4-5 hours',
            description: 'Begin your Kilimanjaro trek through the rainforest to Mandara Hut',
            highlights: [
              'Park registration and briefing',
              'Rainforest trek',
              'First mountain hut stay',
              'Wildlife spotting opportunity'
            ]
          },
          {
            day: 2,
            title: 'Mandara Hut to Horombo Hut',
            altitude: {
              start: '2,700m',
              end: '3,720m',
              gain: '1,020m'
            },
            distance: '12 km',
            time: '6-8 hours',
            description: 'Trek through moorland vegetation zone to Horombo Hut',
            highlights: [
              'Moorland landscapes',
              'First views of Kibo peak',
              'Mountain vegetation zones',
              'Acclimatization walk'
            ]
          },
          {
            day: 3,
            title: 'Horombo Hut to Kibo Hut',
            altitude: {
              start: '3,720m',
              end: '4,703m',
              gain: '983m'
            },
            distance: '10 km',
            time: '6-8 hours',
            description: 'Cross the lunar desert to Kibo Hut',
            highlights: [
              'Alpine desert zone',
              'Views of Mawenzi peak',
              'Final preparation for summit',
              'Early dinner and rest'
            ]
          },
          {
            day: 4,
            title: 'Summit Day: Kibo Hut to Uhuru Peak and down to Horombo',
            altitude: {
              start: '4,703m',
              summit: '5,895m',
              end: '3,720m',
              gain: '1,192m',
              descent: '2,175m'
            },
            distance: '22 km total',
            time: {
              ascent: '6-8 hours',
              descent: '4-6 hours'
            },
            description: "Very early start for summit attempt via Gilman's Point to Uhuru Peak, then descend",
            highlights: [
              'Midnight start',
              "Sunrise at Gilman's Point",
              'Uhuru Peak achievement',
              'Glaciers and crater rim',
              'Rapid descent'
            ]
          },
          {
            day: 5,
            title: 'Horombo Hut to Marangu Gate',
            altitude: {
              start: '3,720m',
              end: '1,843m',
              descent: '1,877m'
            },
            distance: '20 km',
            time: '5-7 hours',
            description: 'Descend through moorland and forest to park gate',
            highlights: [
              'Final descent',
              'Certificate collection',
              'Celebration with team',
              'Transfer to hotel'
            ]
          }
        ],
        included: [
          'All park fees and taxes',
          'Professional mountain guides',
          'Mountain crew (porters & cooks)',
          'Rescue fees',
          'All meals on mountain',
          'Accommodation in mountain huts',
          'All transportation',
          'Emergency oxygen'
        ],
        excluded: [
          'International flights',
          'Personal climbing gear',
          'Travel insurance',
          'Tips for guides and crew',
          'Personal expenses',
          'Visa fees'
        ]
      }
    ]
  },
  'serengeti': {
    name: 'Serengeti National Park',
    title: 'Home of the Great Migration',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    introduction: [
      "The Serengeti is Tanzania's oldest and most popular national park.",
      'Home to the spectacular wildebeest migration and offers excellent wildlife viewing year round.',
      'The park covers 14,763 sq km of endless rolling plains, which reach up to the Kenyan border.'
    ],
    highlights: [
      'Witness the Great Migration',
      'Big Five wildlife viewing',
      'Vast savannah plains',
      'Hot air balloon safaris',
      'Luxury lodges and camps'
    ],
    bestTime: {
      details: 'The best wildlife viewing months in Serengeti National Park are during the dry season from late June to October.',
      seasons: [
        {
          name: 'Dry Season (June-October)',
          description: 'Best for general wildlife viewing and wildebeest migration in northern Serengeti'
        },
        {
          name: 'Wet Season (November-May)',
          description: 'Best for bird watching, wildebeest calving in southern Serengeti'
        },
        {
          name: 'Migration Season',
          description: 'Varies throughout the year depending on rainfall patterns'
        }
      ]
    },
    activities: [
      {
        name: 'Game Drives',
        description: 'Morning and afternoon game drives in custom-built safari vehicles',
        details: 'Experience close encounters with wildlife in their natural habitat'
      },
      {
        name: 'Balloon Safari',
        description: 'Dawn hot air balloon flights over the savannah',
        details: 'Unique aerial perspective of wildlife and landscapes'
      },
      {
        name: 'Migration Tracking',
        description: 'Follow the wildebeest migration across the plains',
        details: 'Witness one of nature\'s most spectacular events'
      },
      {
        name: 'Bird Watching',
        description: 'Over 500 bird species in diverse habitats',
        details: 'Paradise for bird enthusiasts and photographers'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Wildebeest Migration',
        description: 'The great migration crossing the Mara River'
      },
      {
        url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
        title: 'Lions in Serengeti',
        description: 'Pride of lions resting in the savannah'
      },
      {
        url: 'https://images.unsplash.com/photo-1551085254-e96b210db58a',
        title: 'Balloon Safari',
        description: 'Dawn balloon safari over the endless plains'
      }
    ],
    itineraries: [
      {
        name: '4 Days Serengeti Safari',
        highlights: 'Classic wildlife viewing experience',
        difficulty: 'Easy',
        price: 'From $2,400 per person',
        days: [
          {
            day: 1,
            title: 'Arrival and Transfer',
            description: 'Arrival at Seronera Airstrip and afternoon game drive',
            highlights: ['Welcome briefing', 'Afternoon game drive', 'Sunset at camp']
          },
          // Add more days
        ],
        included: [
          'All park fees',
          'Professional guide',
          'Safari vehicle',
          'All meals',
          'Accommodation'
        ],
        excluded: [
          'International flights',
          'Travel insurance',
          'Personal items',
          'Tips'
        ]
      }
    ],
    practicalInfo: {
      preparation: [
        'Light, neutral-colored clothing',
        'Sun protection',
        'Insect repellent',
        'Camera equipment'
      ],
      weather: {
        seasons: {
          dry: 'June-October',
          wet: 'November-May'
        },
        temperatures: {
          day: '20°C to 30°C',
          night: '13°C to 25°C'
        }
      },
      equipment: {
        essential: [
          'Binoculars',
          'Camera',
          'Sun hat',
          'Comfortable walking shoes'
        ],
        recommended: [
          'Telephoto lens',
          'Power bank',
          'Light jacket'
        ]
      }
    }
  },
  'ngorongoro': {
    name: 'Ngorongoro Crater',
    title: 'The Eighth Wonder of the World',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
    introduction: [
      "Ngorongoro Crater is the world's largest intact volcanic caldera and a UNESCO World Heritage Site.",
      'The crater floor is home to over 25,000 large animals, including the rare black rhino.',
      'This natural amphitheater spans roughly 100 square miles and is 2,000 feet deep.'
    ],
    highlights: [
      'Big Five wildlife viewing',
      'Spectacular crater views',
      'Maasai culture',
      'Ancient volcanic landscape',
      'Year-round wildlife viewing'
    ],
    bestTime: {
      details: 'The crater can be visited year-round, but the dry seasons offer the best wildlife viewing conditions.',
      seasons: [
        {
          name: 'Dry Season (June-October)',
          description: 'Best wildlife viewing, less vegetation'
        },
        {
          name: 'Short Dry (January-February)',
          description: 'Good wildlife viewing, milder temperatures'
        },
        {
          name: 'Green Season (March-May, November-December)',
          description: 'Lush landscapes, fewer tourists, occasional rain'
        }
      ]
    },
    activities: [
      {
        name: 'Game Drives',
        description: 'Full-day crater floor safaris',
        details: 'Experience incredible wildlife density and diversity'
      },
      {
        name: 'Cultural Visits',
        description: 'Meet local Maasai communities',
        details: 'Learn about traditional customs and lifestyle'
      },
      {
        name: 'Hiking',
        description: 'Crater rim walks and nature trails',
        details: 'Guided walks with stunning views'
      },
      {
        name: 'Photography',
        description: 'Unique landscape and wildlife photography',
        details: 'Capture dramatic scenes and diverse wildlife'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        title: 'Ngorongoro Crater',
        description: 'The world\'s largest intact volcanic caldera'
      },
      // Add more gallery images
    ],
    itineraries: [
      {
        name: '4 Days Serengeti Safari',
        highlights: 'Classic wildlife viewing experience',
        difficulty: 'Easy',
        price: 'From $2,400 per person',
        days: [
          {
            day: 1,
            title: 'Arrival and Transfer',
            description: 'Arrival at Seronera Airstrip and afternoon game drive',
            highlights: ['Welcome briefing', 'Afternoon game drive', 'Sunset at camp']
          },
          // Add more days
        ],
        included: [
          'All park fees',
          'Professional guide',
          'Safari vehicle',
          'All meals',
          'Accommodation'
        ],
        excluded: [
          'International flights',
          'Travel insurance',
          'Personal items',
          'Tips'
        ]
      }
    ],
    practicalInfo: {
      preparation: [
        'Light, neutral-colored clothing',
        'Sun protection',
        'Insect repellent',
        'Camera equipment'
      ],
      weather: {
        seasons: {
          dry: 'June-October',
          wet: 'November-May'
        },
        temperatures: {
          day: '20°C to 30°C',
          night: '13°C to 25°C'
        }
      },
      equipment: {
        essential: [
          'Binoculars',
          'Camera',
          'Sun hat',
          'Comfortable walking shoes'
        ],
        recommended: [
          'Telephoto lens',
          'Power bank',
          'Light jacket'
        ]
      }
    }
  },
  'tarangire': {
    name: 'Tarangire National Park',
    title: 'Land of the Giants',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    introduction: [
      'Tarangire is famous for its large elephant herds and iconic baobab trees.',
      'The park is named after the Tarangire River, which provides year-round water.',
      'During the dry season, the park hosts one of the highest wildlife concentrations in Tanzania.'
    ],
    highlights: [
      'Massive elephant herds',
      'Ancient baobab trees',
      'Diverse wildlife viewing',
      'Bird watching paradise',
      'Authentic safari experience'
    ],
    bestTime: {
      details: 'The best time to visit Tarangire is during the dry season from June to October when animals congregate around the Tarangire River.',
      seasons: [
        {
          name: 'Dry Season (June-October)',
          description: 'Best wildlife viewing as animals gather around water sources'
        },
        {
          name: 'Green Season (November-December)',
          description: 'Beautiful landscapes, migratory birds present'
        },
        {
          name: 'Short Dry (January-February)',
          description: 'Good wildlife viewing, fewer tourists'
        },
        {
          name: 'Long Rains (March-May)',
          description: 'Lush scenery, challenging road conditions'
        }
      ]
    },
    activities: [
      {
        name: 'Game Drives',
        description: 'Morning and afternoon safari drives',
        details: 'Witness large elephant herds and diverse wildlife around the river'
      },
      {
        name: 'Walking Safaris',
        description: 'Guided nature walks in designated areas',
        details: 'Experience the park on foot with experienced guides'
      },
      {
        name: 'Night Drives',
        description: 'Evening game drives to spot nocturnal animals',
        details: 'Unique opportunity to see nocturnal predators and other wildlife'
      },
      {
        name: 'Bird Watching',
        description: 'Over 550 bird species recorded',
        details: 'Paradise for bird enthusiasts with diverse species'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Elephant Herd',
        description: 'Large elephant family near baobab trees'
      },
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Baobab Landscape',
        description: 'Iconic baobab trees at sunset'
      },
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Wildlife at River',
        description: 'Animals gathering at Tarangire River'
      }
    ],
    itineraries: [
      {
        name: '3 Days Tarangire Safari',
        highlights: 'Classic wildlife and elephant experience',
        difficulty: 'Easy',
        price: 'From $1,200 per person',
        days: [
          {
            day: 1,
            title: 'Arrival and Afternoon Game Drive',
            description: 'Drive from Arusha to Tarangire, afternoon wildlife viewing',
            highlights: ['Welcome briefing', 'Afternoon game drive', 'Sunset by the river']
          },
          {
            day: 2,
            title: 'Full Day Game Drive',
            description: 'Full day exploring different park areas',
            highlights: ['Morning game drive', 'Picnic lunch', 'Afternoon wildlife viewing']
          },
          {
            day: 3,
            title: 'Morning Safari and Departure',
            description: 'Final game drive and return to Arusha',
            highlights: ['Dawn game drive', 'Breakfast in the bush', 'Transfer to Arusha']
          }
        ],
        included: [
          'Park fees',
          'Professional guide',
          'Safari vehicle',
          'All meals',
          'Accommodation'
        ],
        excluded: [
          'International flights',
          'Travel insurance',
          'Personal items',
          'Tips'
        ]
      }
    ],
    practicalInfo: {
      preparation: [
        'Light, neutral-colored clothing',
        'Sun protection',
        'Insect repellent',
        'Camera equipment'
      ],
      weather: {
        seasons: {
          dry: 'June-October',
          wet: 'November-May'
        },
        temperatures: {
          day: '25°C to 32°C',
          night: '15°C to 20°C'
        }
      },
      equipment: {
        essential: [
          'Binoculars',
          'Camera',
          'Sun hat',
          'Water bottle'
        ],
        recommended: [
          'Telephoto lens',
          'Power bank',
          'Light jacket',
          'Dust protection'
        ]
      }
    }
  },
  'manyara': {
    name: 'Lake Manyara National Park',
    title: 'Tree-Climbing Lions Paradise',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    introduction: [
      'Lake Manyara is famous for its tree-climbing lions and diverse birdlife.',
      'The park features a dramatic landscape with the Great Rift Valley escarpment.',
      'The alkaline lake attracts thousands of flamingos and other water birds.'
    ],
    // Add complete data structure...
  },
  'arusha': {
    name: 'Arusha National Park',
    title: 'Gateway to Northern Safari Circuit',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    introduction: [
      'Arusha National Park includes the slopes of Mount Meru.',
      'The park offers diverse landscapes from forest to alpine vegetation.',
      'Home to diverse wildlife including black-and-white colobus monkeys.'
    ],
    // Add complete data structure...
  }
}; 