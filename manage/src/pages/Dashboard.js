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

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
        <FaExclamationCircle className="mr-2" /> {error}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Packages Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                <FaBox className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Packages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.packages}</p>
              </div>
            </div>
          </div>

          {/* Bookings Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg">
                <FaCalendarCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.bookings}</p>
              </div>
            </div>
          </div>

          {/* Enquiries Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                <FaEnvelope className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">New Enquiries</p>
                <p className="text-2xl font-bold text-gray-900">{stats.enquiries}</p>
              </div>
            </div>
          </div>

          {/* Revenue Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 rounded-lg">
                <FaChartLine className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Parks Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg">
                <FaTree className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Parks</p>
                <p className="text-2xl font-bold text-gray-900">{stats.parks}</p>
              </div>
            </div>
          </div>

          {/* Categories Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg">
                <FaList className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Categories</p>
                <p className="text-2xl font-bold text-gray-900">{stats.categories}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
              <Link to="/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                View All →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {recentBookings.length > 0 ? (
                recentBookings.map(booking => (
                  <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                        <FaDollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{booking.packageName}</p>
                        <p className="text-sm text-gray-500">{booking.customerName} - ${booking.amount.toLocaleString()}</p>
                        <div className="flex items-center mt-1">
                          <FaClock className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-xs text-gray-500">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <FaExclamationCircle className="mx-auto h-6 w-6 mb-2" />
                  <p>No recent bookings</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Recent Enquiries</h2>
              <Link to="/enquiries" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                View All →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {recentEnquiries.length > 0 ? (
                recentEnquiries.map(enquiry => (
                  <div key={enquiry.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                        <FaEnvelope className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{enquiry.subject}</p>
                        <p className="text-sm text-gray-500">{enquiry.name}</p>
                        <div className="flex items-center mt-1">
                          <FaClock className="h-4 w-4 text-gray-400 mr-1" />
                          <p className="text-xs text-gray-500">
                            {new Date(enquiry.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        enquiry.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        enquiry.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {enquiry.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <FaExclamationCircle className="mx-auto h-6 w-6 mb-2" />
                  <p>No recent enquiries</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 