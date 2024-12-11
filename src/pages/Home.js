import React from 'react';
import { Link } from 'react-router-dom';
import { FaCompass, FaCampground, FaUsers, FaShieldAlt, FaClock, FaMapMarkedAlt, FaArrowRight, FaSmile, FaAward } from 'react-icons/fa';
import './Home.css';
import heroVideo from '../home-hero-bg-video/hero-video1.mp4';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-video-container">
          <video 
            className="hero-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>Tanzania Camping Safaris</h1>
          <p>Discover the magic of camping safaris in Africa's most beautiful landscapes</p>
          <Link to="/camping-tours" className="cta-button">Explore Tours</Link>
        </div>
      </section>

      <section className="featured-tours">
        <h2 className="section-title">Popular Safari Packages</h2>
        <div className="tour-grid">
          {popularTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-content">
                <span className="tour-duration">{tour.duration}</span>
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <div className="tour-info">
                  <span className="price">From ${tour.price}</span>
                  <Link to={tour.link} className="tour-button">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features">
          {features.map((feature) => (
            <div key={feature.id} className="feature">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="destinations">
        <h2 className="section-title">Top Destinations</h2>
        <div className="destination-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <div className="destination-content">
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
                <Link to={dest.link} className="learn-more">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="adventure-types">
        <h2 className="section-title">Adventure Categories</h2>
        <div className="adventure-grid">
          {adventureTypes.map((type) => (
            <div key={type.id} className="adventure-card">
              <img src={type.image} alt={type.title} />
              <div className="adventure-content">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <Link to={type.link} className="adventure-link">
                  Explore More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              {stat.icon}
              <h3>{stat.number}</h3>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Adventure Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <p>{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-section">
        <h2 className="section-title">Latest Travel Stories</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <Link to={post.link} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Adventure?</h2>
          <p>Book your unforgettable Tanzania camping experience today</p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="cta-button primary">Contact Us</Link>
            <Link to="/camping-tours" className="cta-button secondary">View All Tours</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const popularTours = [
  {
    id: 1,
    title: "Serengeti Migration Safari",
    description: "Witness the great wildebeest migration in luxury camping style.",
    image: "https://img.freepik.com/premium-photo/zebras-wildebeest-standing-field_1048944-8233060.jpg?semt=ais_hybrid",
    duration: "6 Days",
    price: "1,299",
    link: "/camping-tours/serengeti"
  },
  {
    id: 2,
    title: "Ngorongoro Crater Adventure",
    description: "Explore the world's largest intact volcanic caldera.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    duration: "4 Days",
    price: "999",
    link: "/camping-tours/ngorongoro"
  },
  {
    id: 3,
    title: "Kilimanjaro Base Camp",
    description: "Experience the majesty of Africa's highest peak.",
    image: "https://img.freepik.com/free-photo/beautiful-scenery-yellow-tents-kilimanjaro-national-park_181624-36749.jpg?semt=ais_hybrid",
    duration: "5 Days",
    price: "1,499",
    link: "/camping-tours/kilimanjaro"
  }
];

const features = [
  {
    id: 1,
    icon: <FaCompass className="feature-icon" />,
    title: "Expert Local Guides",
    description: "Our experienced guides bring deep knowledge and passion to every safari."
  },
  {
    id: 2,
    icon: <FaCampground className="feature-icon" />,
    title: "Luxury Camping",
    description: "Premium camping facilities with all modern amenities for your comfort."
  },
  {
    id: 3,
    icon: <FaUsers className="feature-icon" />,
    title: "Small Groups",
    description: "Intimate group sizes ensure personalized attention and better wildlife viewing."
  },
  {
    id: 4,
    icon: <FaShieldAlt className="feature-icon" />,
    title: "Safety First",
    description: "Your safety is our priority with well-maintained equipment and protocols."
  }
];

const destinations = [
  {
    id: 1,
    name: "Serengeti National Park",
    description: "Home to the great migration and endless plains.",
    image: "https://img.freepik.com/premium-photo/camping-illustration-free-photo-hd-background_915071-91766.jpg?semt=ais_hybrid",
    link: "/parks-reserves/serengeti"
  },
  {
    id: 2,
    name: "Ngorongoro Crater",
    description: "A natural wonder teeming with wildlife.",
    image: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=800",
    link: "/parks-reserves/ngorongoro"
  },
  {
    id: 3,
    name: "Mount Kilimanjaro",
    description: "Africa's highest peak and a trekker's paradise.",
    image: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800",
    link: "/parks-reserves/kilimanjaro"
  },
  {
    id: 4,
    name: "Tarangire National Park",
    description: "Famous for its ancient baobab trees and elephants.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    link: "/parks-reserves/tarangire"
  }
];

const testimonials = [
  {
    id: 1,
    text: "An incredible experience! The camping facilities were excellent and the wildlife viewing was beyond our expectations.",
    name: "John Smith",
    location: "United States",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    text: "The guides were knowledgeable and passionate. We saw all the Big Five and more!",
    name: "Emma Wilson",
    location: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    text: "A perfect blend of adventure and comfort. The starlit dinners were magical!",
    name: "Michael Chen",
    location: "Canada",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const adventureTypes = [
  {
    id: 1,
    title: "Wildlife Safari",
    description: "Experience close encounters with Africa's majestic wildlife.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    link: "/wildlife-safari"
  },
  {
    id: 2,
    title: "Cultural Immersion",
    description: "Discover the rich traditions of Tanzania's diverse tribes.",
    image: "https://img.freepik.com/premium-photo/africa-tanzania-march-04-2016-european-tourists-interact-with-locals-africa-village-masai-tribe_135785-763.jpg?semt=ais_hybrid",
    link: "/cultural-tours"
  },
  {
    id: 3,
    title: "Mountain Trekking",
    description: "Conquer the peaks of Kilimanjaro and other mountains.",
    image: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800",
    link: "/mountain-trekking"
  }
];

const stats = [
  {
    id: 1,
    icon: <FaSmile className="stat-icon" />,
    number: "2000+",
    title: "Happy Clients"
  },
  {
    id: 2,
    icon: <FaCompass className="stat-icon" />,
    number: "150+",
    title: "Destinations"
  },
  {
    id: 3,
    icon: <FaCampground className="stat-icon" />,
    number: "70+",
    title: "Camping Sites"
  },
  {
    id: 4,
    icon: <FaAward className="stat-icon" />,
    number: "25+",
    title: "Years Experience"
  }
];

const galleryImages = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/crossroad-car-safari-scene_23-2151822336.jpg",
    title: "Serengeti Sunset",
    location: "Serengeti National Park"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
    title: "Maasai Village",
    location: "Ngorongoro Conservation Area"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    title: "Safari Experience",
    location: "Serengeti Plains"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    title: "Elephant Herd",
    location: "Tarangire National Park"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=800",
    title: "Crater View",
    location: "Ngorongoro Crater"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1521150932951-303a95503ed3?w=800",
    title: "Mountain Peak",
    location: "Mount Kilimanjaro"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "Best Time to Visit Tanzania for Wildlife Viewing",
    excerpt: "Discover the perfect seasons for witnessing the great migration and other wildlife spectacles.",
    image: "https://img.freepik.com/premium-photo/rear-view-woman-looking-giraffe-through-car-roof_1048944-11935606.jpg?semt=ais_hybrid",
    category: "Travel Tips",
    date: "June 15, 2024",
    link: "/blog/best-time-to-visit"
  },
  {
    id: 2,
    title: "Top 5 Camping Spots in Serengeti",
    excerpt: "Experience the ultimate African wilderness at these amazing camping locations.",
    image: "https://img.freepik.com/free-photo/young-multiethnic-international-romantic-couple-outdoors-meadow-sunny-summer-day-african-american-man-caucasian-woman-having-picnic-together-concept-relationship-summertime_155003-23121.jpg?semt=ais_hybrid",
    category: "Camping",
    date: "June 10, 2024",
    link: "/blog/top-camping-spots"
  },
  {
    id: 3,
    title: "Meeting the Maasai: A Cultural Journey",
    excerpt: "Learn about the rich traditions and lifestyle of Tanzania's iconic Maasai people.",
    image: "https://img.freepik.com/premium-photo/maasai-dance-front-tourists-amboseli-national-park-kenya_621486-2500.jpg?semt=ais_hybrid",
    category: "Culture",
    date: "June 5, 2024",
    link: "/blog/maasai-culture"
  }
];

export default Home; 