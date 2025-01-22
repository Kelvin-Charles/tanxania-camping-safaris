import React from 'react';
import './Fleets.css';

const fleetData = [
  {
    id: 1,
    name: 'Toyota Land Cruiser',
    image: '/images/fleets/land-cruiser.jpg',
    description: 'Our flagship safari vehicle, perfect for any terrain with superior comfort and reliability.',
    features: [
      'Comfortable seating for 6 passengers',
      'Pop-up roof for game viewing',
      'Air conditioning',
      'Charging ports',
      'First aid kit',
      'Cool box for refreshments'
    ]
  },
  {
    id: 2,
    name: 'Toyota Hiace',
    image: '/images/fleets/hiace.jpg',
    description: 'Ideal for airport transfers and city tours, offering comfort and space for groups.',
    features: [
      'Spacious seating for 8 passengers',
      'Air conditioning',
      'Luggage space',
      'Comfortable seats',
      'USB charging ports',
      'PA system'
    ]
  },
  {
    id: 3,
    name: 'Land Rover Defender',
    image: '/images/fleets/defender.jpg',
    description: 'The ultimate adventure vehicle for challenging terrains and authentic safari experiences.',
    features: [
      'Rugged 4x4 capability',
      'Elevated seating position',
      'Game viewing windows',
      'Safari equipment storage',
      'Recovery gear',
      'Radio communication'
    ]
  }
];

const Fleets = () => {
  const heroImage = "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80";

  return (
    <div className="fleets-container" style={{
      '--hero-bg': `url(${heroImage})`
    }}>
      <div className="fleets-hero">
        <h1>Our Safari Fleet</h1>
        <p>Experience Tanzania's wilderness in comfort and style with our well-maintained fleet of safari vehicles</p>
      </div>

      <section className="fleet-intro">
        <h2>Explore Our Vehicles</h2>
        <p>We take pride in our fleet of specially modified safari vehicles, each designed to provide maximum comfort and safety during your adventure. Our vehicles are regularly maintained and equipped with all necessary safety features.</p>
      </section>

      <div className="fleet-grid">
        {fleetData.map(vehicle => (
          <div key={vehicle.id} className="fleet-card">
            <div className="fleet-image">
              <img src={vehicle.image} alt={vehicle.name} />
            </div>
            <div className="fleet-content">
              <h3>{vehicle.name}</h3>
              <p>{vehicle.description}</p>
              <div className="fleet-features">
                <h4>Features & Amenities</h4>
                <ul>
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="fleet-maintenance">
        <h2>Vehicle Maintenance & Safety</h2>
        <div className="maintenance-content">
          <div className="maintenance-text">
            <p>At Tanzania Camping Safaris, we prioritize your safety and comfort. Our comprehensive maintenance program ensures all vehicles are:</p>
            <ul>
              <li>Regularly serviced by certified mechanics</li>
              <li>Equipped with modern safety features</li>
              <li>Thoroughly inspected before each safari</li>
              <li>Fitted with communication devices</li>
              <li>Stocked with emergency supplies</li>
            </ul>
            <p>Each vehicle undergoes rigorous safety checks and is maintained to the highest standards to ensure a worry-free safari experience.</p>
          </div>
          <div className="maintenance-image">
            <img src="/images/fleets/maintenance.jpg" alt="Vehicle maintenance" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleets; 