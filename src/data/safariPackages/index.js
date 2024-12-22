export const safariPackages = {
  categories: {
    wildlife: {
      name: 'Wildlife Safaris',
      description: 'Experience Tanzania\'s incredible wildlife in their natural habitat',
      packages: [
        {
          id: 'classic-northern',
          title: '5 Days Classic Northern Circuit',
          description: 'Experience the best of Tanzania\'s northern circuit parks',
          price: 'From $2,400',
          duration: '5 Days',
          destinations: ['Serengeti', 'Ngorongoro', 'Tarangire'],
          groupSize: '2-6 people',
          comfort: 'Luxury',
          activities: ['Game drives', 'Cultural visits', 'Bird watching'],
          highlights: [
            'Big Five viewing',
            'Great Migration (seasonal)',
            'Crater tour',
            'Maasai village visit'
          ],
          itinerary: [
            {
              day: 1,
              title: 'Arrival & Tarangire',
              description: 'Airport pickup and drive to Tarangire National Park',
              activities: ['Afternoon game drive', 'Sunset viewing'],
              accommodation: 'Luxury tented camp',
              meals: ['Lunch', 'Dinner']
            },
            // Add more days...
          ],
          includes: [
            'All park fees',
            'Professional guide',
            'Luxury accommodation',
            'All meals',
            'Transportation'
          ],
          excludes: [
            'International flights',
            'Travel insurance',
            'Personal items',
            'Tips'
          ],
          bestTime: 'June-October',
          difficulty: 'Easy'
        }
        // Add more wildlife packages...
      ]
    },
    climbing: {
      name: 'Mountain Climbing',
      description: 'Summit Africa\'s highest peaks',
      packages: [
        // Add climbing packages...
      ]
    },
    cultural: {
      name: 'Cultural Tours',
      description: 'Immerse yourself in Tanzania\'s rich cultural heritage',
      packages: [
        // Add cultural packages...
      ]
    },
    beach: {
      name: 'Beach Holidays',
      description: 'Relax on pristine beaches and explore marine life',
      packages: [
        // Add beach packages...
      ]
    }
  },
  customOptions: {
    destinations: [
      {
        id: 'serengeti',
        name: 'Serengeti National Park',
        activities: ['Game drives', 'Balloon safari', 'Walking safari'],
        accommodations: ['Luxury lodge', 'Tented camp', 'Mobile camp'],
        minDays: 2
      },
      // Add more destinations...
    ],
    activities: [
      {
        id: 'game-drive',
        name: 'Game Drives',
        duration: ['Half day', 'Full day'],
        prices: {
          'Half day': 150,
          'Full day': 250
        }
      },
      // Add more activities...
    ],
    accommodations: [
      {
        id: 'luxury-lodge',
        name: 'Luxury Lodge',
        type: 'Lodge',
        comfort: 'Luxury',
        pricePerNight: 500,
        locations: ['Serengeti', 'Ngorongoro', 'Tarangire']
      },
      // Add more accommodations...
    ],
    transportation: [
      {
        id: 'safari-vehicle',
        name: 'Safari Land Cruiser',
        type: 'Private',
        capacity: '6 people',
        pricePerDay: 200
      },
      // Add more transportation options...
    ]
  }
}; 