import React from 'react';
// ... same imports

const Saanane = () => {
  const parkInfo = {
    name: "Saanane Island National Park",
    tagline: "Urban Wildlife Haven in Lake Victoria",
    description: `Tanzania's smallest national park, located near Mwanza city, 
    offering a unique blend of wildlife viewing and city proximity. Perfect for 
    day trips and educational visits.`,
    
    highlights: [
      "City accessibility",
      "Educational center",
      "Rock formations",
      "Lake Victoria views",
      "Small wildlife",
      "Bird watching"
    ],

    activities: [
      {
        name: "Nature Walks",
        description: "Guided walks around the island",
        duration: "1-2 hours",
        difficulty: "Easy",
        includes: ["Guide", "Entry fees", "Information booklet"]
      },
      {
        name: "Rock Climbing",
        description: "Explore unique rock formations",
        duration: "1-2 hours",
        difficulty: "Moderate",
        includes: ["Safety equipment", "Instructor", "Basic training"]
      }
    ],

    trails: [
      {
        name: "Island Circuit",
        distance: "2 km",
        difficulty: "Easy",
        description: "Complete loop around the island",
        startPoint: [32.8930, -2.0644],
        type: "Loop",
        features: ["Lake views", "Wildlife spots", "Rock formations"]
      }
    ],

    practicalInfo: {
      bestTime: "Year-round",
      climate: {
        averageTemp: "22-30°C",
        rainfall: "Moderate year-round"
      },
      gettingThere: [
        {
          method: "Boat",
          details: "Regular ferry from Mwanza",
          duration: "10 minutes"
        }
      ]
    }
  };

  return (
    <div className="park-page">
      {/* Similar structure */}
    </div>
  );
}; 