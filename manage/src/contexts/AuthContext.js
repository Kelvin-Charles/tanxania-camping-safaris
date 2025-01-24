import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await authApi.me();
        setUser(response.data.user);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await authApi.login({ email, password });
      
      // Check if the response has status success
      if (response.data.status === 'success') {
        const { access_token, user } = response.data;
        localStorage.setItem('token', access_token);
        setUser(user);
        return true;
      } else {
        setError(response.data.message || 'Invalid email or password');
        return false;
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password');
      return false;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
      window.location.href = '/login';
    }
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    logout,
    checkAuth
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 