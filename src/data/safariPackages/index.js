import { parkPackages } from '../parkPackages';

// Helper function to format price
const formatPrice = (price) => `$${price.toLocaleString()}`;

// Convert park packages to the right format and combine with categories
const convertParkPackages = () => {
  const allPackages = [];
  
  Object.entries(parkPackages).forEach(([parkId, packages]) => {
    packages.forEach(pkg => {
      // Create a unified package format
      const unifiedPackage = {
        id: `${parkId}-${pkg.id}`,
        title: pkg.title,
        image: pkg.image,
        price: formatPrice(pkg.price),
        duration: pkg.duration,
        description: pkg.description,
        bestTime: "June-October", // Default peak season
        categories: pkg.categories || ["Wildlife Safaris"],
        highlights: pkg.highlights,
        itinerary: pkg.itinerary,
        parkId: parkId
      };
      allPackages.push(unifiedPackage);
    });
  });
  
  return allPackages;
};

// Combine park packages with existing safari packages
const allPackages = convertParkPackages();

export const safariPackages = {
  categories: {
    wildlife: {
      id: 'wildlife',
      name: 'Wildlife Safaris',
      packages: allPackages.filter(pkg => pkg.categories.includes('Wildlife Safaris'))
    },
    mountain: {
      id: 'mountain',
      name: 'Mountain Climbing',
      packages: allPackages.filter(pkg => pkg.categories.includes('Mountain Climbing'))
    },
    beach: {
      id: 'beach',
      name: 'Beach Holidays',
      packages: allPackages.filter(pkg => pkg.categories.includes('Beach Holidays'))
    },
    cultural: {
      id: 'cultural',
      name: 'Cultural Tours',
      packages: allPackages.filter(pkg => pkg.categories.includes('Cultural Tours'))
    },
    day: {
      id: 'day',
      name: 'Day Trips',
      packages: allPackages.filter(pkg => pkg.categories.includes('Day Trips'))
    }
  }
}; 