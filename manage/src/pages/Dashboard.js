import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBox, 
  FaList, 
  FaTree, 
  FaCalendarCheck, 
  FaEnvelope,
  FaChartLine,
  FaClock,
  FaExclamationCircle,
  FaDollarSign
} from 'react-icons/fa';
import { packageApi, bookingApi, enquiryApi, parkApi, categoryApi } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    packages: 0,
    bookings: 0,
    enquiries: 0,
    revenue: 0,
    parks: 0,
    categories: 0
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch all data in parallel
        const responses = await Promise.all([
          packageApi.getAll(),
          bookingApi.getAll(),
          enquiryApi.getAll(),
          parkApi.getAll(),
          categoryApi.getAll()
        ]);

        // Debug log raw responses
        console.log('Raw API Responses:', responses);
        
        // Process packages
        const packages = responses[0]?.data?.data || [];
        console.log('Packages:', packages);
        
        // Process bookings
        const bookings = responses[1]?.data?.data || [];
        console.log('Bookings:', bookings);

        // Calculate revenue from confirmed/completed bookings
        const revenue = Array.isArray(bookings) ? bookings.reduce((acc, booking) => {
          if (booking.status === 'confirmed' || booking.status === 'completed') {
            return acc + (parseFloat(booking.total_amount) || 0);
          }
          return acc;
        }, 0) : 0;
        console.log('Calculated Revenue:', revenue);

        // Process enquiries
        const enquiries = responses[2]?.data?.data || [];
        console.log('Enquiries:', enquiries);

        // Process parks and categories
        const parks = responses[3]?.data?.data || [];
        console.log('Parks:', parks);
        const categories = responses[4]?.data?.data || [];
        console.log('Categories:', categories);

        // Update stats with the correct data
        const newStats = {
          packages: Array.isArray(packages) ? packages.length : 0,
          bookings: Array.isArray(bookings) ? bookings.length : 0,
          enquiries: Array.isArray(enquiries) ? enquiries.length : 0,
          revenue,
          parks: Array.isArray(parks) ? parks.length : 0,
          categories: Array.isArray(categories) ? categories.length : 0
        };
        console.log('New Stats:', newStats);

        setStats(newStats);
        setRecentBookings(bookings);
        setRecentEnquiries(enquiries);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        if (error.response) {
          console.error('Error Response:', error.response.data);
          console.error('Error Status:', error.response.status);
          console.error('Error Headers:', error.response.headers);
        }
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="loading">Loading dashboard...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard">
      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon packages">
            <FaBox />
          </div>
          <div className="stat-details">
            <h3>Total Packages</h3>
            <p>{stats.packages}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon bookings">
            <FaCalendarCheck />
          </div>
          <div className="stat-details">
            <h3>Total Bookings</h3>
            <p>{stats.bookings}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon enquiries">
            <FaEnvelope />
          </div>
          <div className="stat-details">
            <h3>New Enquiries</h3>
            <p>{stats.enquiries}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue">
            <FaChartLine />
          </div>
          <div className="stat-details">
            <h3>Total Revenue</h3>
            <p>${stats.revenue.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon parks">
            <FaTree />
          </div>
          <div className="stat-details">
            <h3>Total Parks</h3>
            <p>{stats.parks}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon categories">
            <FaList />
          </div>
          <div className="stat-details">
            <h3>Total Categories</h3>
            <p>{stats.categories}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-grid">
        {/* Recent Bookings */}
        <div className="activity-card">
          <div className="card-header">
            <h2>Recent Bookings</h2>
            <Link to="/bookings" className="view-all">View All</Link>
          </div>
          <div className="activity-list">
            {recentBookings.length > 0 ? (
              recentBookings.map(booking => (
                <div key={booking.id} className="activity-item">
                  <div className="activity-icon">
                    <FaDollarSign />
                  </div>
                  <div className="activity-details">
                    <h4>{booking.packageName}</h4>
                    <p>{booking.customerName} - ${booking.amount.toLocaleString()}</p>
                    <p className="activity-date">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </p>
                    <span className={`status ${booking.status}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">
                <p>No recent bookings</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="activity-card">
          <div className="card-header">
            <h2>Recent Enquiries</h2>
            <Link to="/enquiries" className="view-all">View All</Link>
          </div>
          <div className="activity-list">
            {recentEnquiries.length > 0 ? (
              recentEnquiries.map(enquiry => (
                <div key={enquiry.id} className="activity-item">
                  <div className="activity-icon">
                    <FaEnvelope />
                  </div>
                  <div className="activity-details">
                    <h4>{enquiry.subject}</h4>
                    <p>{enquiry.name}</p>
                    <p className="activity-date">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </p>
                    <span className={`status ${enquiry.status}`}>
                      {enquiry.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">
                <p>No recent enquiries</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 