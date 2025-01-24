import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  FaTachometerAlt, 
  FaBox, 
  FaList, 
  FaTree, 
  FaCalendarCheck, 
  FaEnvelope, 
  FaCog, 
  FaBars,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const menuItems = [
    { path: '/', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { path: '/packages', icon: <FaBox />, label: 'Packages' },
    { path: '/categories', icon: <FaList />, label: 'Categories' },
    { path: '/parks', icon: <FaTree />, label: 'Parks' },
    { path: '/bookings', icon: <FaCalendarCheck />, label: 'Bookings' },
    { path: '/enquiries', icon: <FaEnvelope />, label: 'Enquiries' },
    { path: '/settings', icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <img src="https://tanzaniacampingsafaris.com/images/logo.png" alt="Logo" className="logo" />
          <button 
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
            <h1>Tanzania Camping Safaris Management</h1>
          </div>
          <div className="header-right">
            <div className="user-info">
              <FaUser />
              <span>{user?.name || 'Admin'}</span>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout; 