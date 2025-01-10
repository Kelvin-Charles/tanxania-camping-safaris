// Placeholder function until real images are added
export const getHeroImage = (parkName) => {
  return `https://source.unsplash.com/1600x900/?tanzania,wildlife,${parkName}`;
};

export const parkImages = {
  gombe: {
    hero: getHeroImage('gombe'),
    main: getHeroImage('chimpanzee'),
    gallery: [
      // Wildlife Category
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Chimpanzee Research',
        description: 'Observing chimps in their natural habitat',
        category: 'wildlife',
        location: 'Gombe Forest',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe',
        title: 'Mother and Baby Chimp',
        description: 'A touching moment between mother and infant',
        category: 'wildlife',
        location: 'Kakombe Valley',
        date: 'June 2023',
        orientation: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7',
        title: 'Red Colobus Monkeys',
        description: 'Endemic primates in the canopy',
        category: 'wildlife',
        location: 'Gombe Forest',
        date: 'June 2023',
        orientation: 'landscape'
      },
      // Landscape Category
      {
        url: 'https://images.unsplash.com/photo-1623930154261-37f8b293c059',
        title: 'Lake Tanganyika Shore',
        description: 'Pristine beaches along Lake Tanganyika',
        category: 'landscape',
        location: 'Gombe Beach',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4',
        title: 'Forest Waterfall',
        description: 'Hidden waterfall in Kakombe Valley',
        category: 'landscape',
        location: 'Kakombe Valley',
        date: 'June 2023',
        orientation: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217',
        title: 'Misty Forest',
        description: 'Morning mist over Gombe forest',
        category: 'landscape',
        location: 'Jane\'s Peak',
        date: 'June 2023',
        orientation: 'landscape'
      },
      // Activities Category
      {
        url: 'https://images.unsplash.com/photo-1574786577067-860e56382975',
        title: 'Chimp Tracking',
        description: 'Following chimps with expert guides',
        category: 'activities',
        location: 'Research Area',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
        title: 'Lake Swimming',
        description: 'Cooling off in Lake Tanganyika',
        category: 'activities',
        location: 'Gombe Beach',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1576626345463-b8d1f2f48861',
        title: 'Research Activities',
        description: 'Scientists continuing Jane\'s legacy',
        category: 'activities',
        location: 'Research Center',
        date: 'June 2023',
        orientation: 'portrait'
      }
    ]
  },
  mahale: {
    hero: getHeroImage('mahale'),
    main: getHeroImage('mountains'),
    gallery: [
      // Wildlife Category
      {
        url: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe',
        title: 'Chimpanzee Tracking',
        description: 'Wild chimpanzees in their natural habitat',
        category: 'wildlife',
        location: 'Mahale Mountains',
        date: 'June 2023',
        orientation: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7',
        title: 'Red Colobus Monkey',
        description: 'Endemic primates in the forest canopy',
        category: 'wildlife',
        location: 'Mahale Forest',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1581852017173-c9c7ef3c1208',
        title: 'Forest Birds',
        description: 'Colorful bird species in their habitat',
        category: 'wildlife',
        location: 'Mahale Mountains',
        date: 'June 2023',
        orientation: 'portrait'
      },
      // Landscape Category
      {
        url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        title: 'Lake Tanganyika',
        description: 'Crystal clear waters and pristine beaches',
        category: 'landscape',
        location: 'Mahale Coast',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1562679299-c81cfb3eb331',
        title: 'Mountain Views',
        description: 'Spectacular mountain vistas',
        category: 'landscape',
        location: 'Mahale Mountains',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1552083375-1447ce886485',
        title: 'Forest Canopy',
        description: 'Dense rainforest from above',
        category: 'landscape',
        location: 'Mahale Forest',
        date: 'June 2023',
        orientation: 'portrait'
      },
      // Activities Category
      {
        url: 'https://images.unsplash.com/photo-1590845947376-2638caa89309',
        title: 'Forest Trails',
        description: 'Hiking paths through pristine forest',
        category: 'activities',
        location: 'Mahale Mountains',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
        title: 'Lake Swimming',
        description: 'Refreshing swim in Lake Tanganyika',
        category: 'activities',
        location: 'Mahale Beach',
        date: 'June 2023',
        orientation: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1576180616247-f715cf7dffdb',
        title: 'Research Activities',
        description: 'Scientists studying chimpanzee behavior',
        category: 'activities',
        location: 'Research Station',
        date: 'June 2023',
        orientation: 'portrait'
      }
    ]
  },
  rubondo: {
    hero: getHeroImage('rubondo'),
    main: getHeroImage('island'),
    gallery: [/* Rubondo specific images */]
  },
  burigiChato: {
    hero: getHeroImage('burigi'),
    main: getHeroImage('savanna'),
    gallery: [/* Burigi-Chato specific images */]
  },
  saanane: {
    hero: getHeroImage('saanane'),
    main: getHeroImage('lake-victoria'),
    gallery: [/* Saanane specific images */]
  },
  ibandaKyerwa: {
    hero: getHeroImage('ibanda'),
    main: getHeroImage('wilderness'),
    gallery: [/* Ibanda-Kyerwa specific images */]
  },
  rumanyika: {
    hero: getHeroImage('rumanyika'),
    main: getHeroImage('cultural'),
    gallery: [/* Rumanyika specific images */]
  },
  ugalla: {
    hero: getHeroImage('ugalla'),
    main: getHeroImage('river'),
    gallery: [/* Ugalla specific images */]
  }
}; 