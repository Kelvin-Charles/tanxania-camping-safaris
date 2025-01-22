import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost/tanzania/php-backend/public/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
};

// Package API endpoints
export const packageApi = {
  getAll: () => api.get('/packages'),
  getById: (id) => api.get(`/packages/${id}`),
  create: async (data) => {
    if (!data.parks || data.parks.length === 0) {
      throw new Error('At least one park must be selected');
    }

    // Validate required fields
    if (!data.title) throw new Error('Title is required');
    if (!data.description) throw new Error('Description is required');
    if (!data.price || isNaN(parseFloat(data.price))) throw new Error('Valid price is required');
    if (!data.duration) throw new Error('Duration is required');

    // Format the data according to the database schema
    const formattedData = {
      name: data.title,
      title: data.title,
      description: data.description,
      price: parseFloat(data.price),
      duration: `${data.duration} Days`,
      park_id: parseInt(data.parks[0]),
      group_size: data.groupSize || null,
      categories: JSON.stringify(data.categories?.map(id => parseInt(id)) || []),
      highlights: JSON.stringify(data.highlights || []),
      itinerary: JSON.stringify([{
        day: 1,
        title: "Day 1",
        description: data.description,
        activities: []
      }]),
      image_url: data.image_url || null,
      featured: false
    };

    // Validate JSON fields
    try {
      JSON.parse(formattedData.categories);
      JSON.parse(formattedData.highlights);
      JSON.parse(formattedData.itinerary);
    } catch (e) {
      throw new Error('Invalid JSON data in categories, highlights, or itinerary');
    }

    console.log('Sending formatted data:', formattedData);
    return api.post('/packages', formattedData);
  },
  update: (id, data) => api.put(`/packages/${id}`, data),
  delete: (id) => api.delete(`/packages/${id}`)
};

// Category API endpoints
export const categoryApi = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`)
};

// Park API endpoints
export const parkApi = {
  getAll: () => api.get('/parks'),
  getById: (id) => api.get(`/parks/${id}`),
  create: (data) => api.post('/parks', data),
  update: (id, data) => api.put(`/parks/${id}`, data),
  delete: (id) => api.delete(`/parks/${id}`)
};

// Booking API endpoints
export const bookingApi = {
  getAll: () => api.get('/bookings'),
  getById: (id) => api.get(`/bookings/${id}`),
  create: (data) => api.post('/bookings', data),
  update: (id, data) => api.put(`/bookings/${id}`, data),
  delete: (id) => api.delete(`/bookings/${id}`)
};

// Enquiry API endpoints
export const enquiryApi = {
  getAll: () => api.get('/enquiries'),
  getById: (id) => api.get(`/enquiries/${id}`),
  create: (data) => api.post('/enquiries', data),
  update: (id, data) => api.put(`/enquiries/${id}`, data),
  delete: (id) => api.delete(`/enquiries/${id}`)
};