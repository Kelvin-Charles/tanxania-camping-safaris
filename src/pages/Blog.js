import React, { useState } from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Best Time to Visit Serengeti National Park',
    category: 'Travel Tips',
    image: '/images/blog/serengeti.jpg',
    excerpt: 'Discover the optimal seasons for witnessing the Great Migration and experiencing the diverse wildlife of the Serengeti.',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/blog/authors/sarah.jpg'
    },
    date: 'June 15, 2023'
  },
  {
    id: 2,
    title: 'Top 10 Photography Tips for Safari',
    category: 'Photography',
    image: '/images/blog/photography.jpg',
    excerpt: 'Expert tips for capturing stunning wildlife photographs during your Tanzania safari adventure.',
    author: {
      name: 'Michael Chen',
      avatar: '/images/blog/authors/michael.jpg'
    },
    date: 'June 10, 2023'
  },
  {
    id: 3,
    title: 'Cultural Experiences in Tanzania',
    category: 'Culture',
    image: '/images/blog/culture.jpg',
    excerpt: 'Explore the rich cultural heritage of Tanzania through traditional villages, local customs, and authentic experiences.',
    author: {
      name: 'Emma Williams',
      avatar: '/images/blog/authors/emma.jpg'
    },
    date: 'June 5, 2023'
  },
  {
    id: 4,
    title: 'Climbing Mount Kilimanjaro: A Complete Guide',
    category: 'Adventure',
    image: '/images/blog/kilimanjaro.jpg',
    excerpt: 'Everything you need to know about planning your Kilimanjaro trek, from choosing a route to training tips.',
    author: {
      name: 'David Miller',
      avatar: '/images/blog/authors/david.jpg'
    },
    date: 'May 30, 2023'
  },
  {
    id: 5,
    title: 'Wildlife of Ngorongoro Crater',
    category: 'Wildlife',
    image: '/images/blog/ngorongoro.jpg',
    excerpt: 'A guide to the diverse wildlife species found in the unique ecosystem of Ngorongoro Crater.',
    author: {
      name: 'Lisa Anderson',
      avatar: '/images/blog/authors/lisa.jpg'
    },
    date: 'May 25, 2023'
  },
  {
    id: 6,
    title: 'Zanzibar: Beach & Culture Guide',
    category: 'Travel Tips',
    image: '/images/blog/zanzibar.jpg',
    excerpt: 'Explore the perfect blend of pristine beaches and rich cultural heritage in Zanzibar.',
    author: {
      name: 'James Wilson',
      avatar: '/images/blog/authors/james.jpg'
    },
    date: 'May 20, 2023'
  }
];

const categories = [
  { name: 'Travel Tips', count: 8 },
  { name: 'Wildlife', count: 12 },
  { name: 'Photography', count: 6 },
  { name: 'Adventure', count: 9 },
  { name: 'Culture', count: 7 },
  { name: 'Conservation', count: 5 }
];

const popularPosts = [
  {
    id: 1,
    title: 'Ultimate Tanzania Safari Packing List',
    image: '/images/blog/packing.jpg',
    date: 'June 1, 2023'
  },
  {
    id: 2,
    title: 'Top 5 Luxury Safari Lodges',
    image: '/images/blog/lodges.jpg',
    date: 'May 28, 2023'
  },
  {
    id: 3,
    title: 'Best Safari Activities for Families',
    image: '/images/blog/family.jpg',
    date: 'May 15, 2023'
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const heroImage = "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="blog-container" style={{
      '--hero-bg': `url(${heroImage})`
    }}>
      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Stories, tips, and guides for your Tanzania adventure</p>
      </div>

      <div className="blog-content">
        <div className="blog-main">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-text">
                <div className="blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src={post.author.avatar} alt={post.author.name} />
                    <span>{post.author.name}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-section">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={`#${category.name}`}>
                    {category.name}
                    <span className="category-count">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Popular Posts</h3>
            <ul className="popular-posts">
              {popularPosts.map(post => (
                <li key={post.id} className="popular-post">
                  <img src={post.image} alt={post.title} />
                  <div className="popular-post-content">
                    <h4>{post.title}</h4>
                    <span>{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="pagination">
        <button>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Blog; 