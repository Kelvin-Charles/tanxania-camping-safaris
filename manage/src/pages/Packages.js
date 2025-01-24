import React, { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSearch, 
  FaImage,
  FaSortAmountDown,
  FaEye,
  FaTimes
} from 'react-icons/fa';
import { packageApi, categoryApi, parkApi } from '../services/api';
import PackageForm from '../components/packages/PackageForm';
import DeleteConfirmation from '../components/common/DeleteConfirmation';
import './Packages.css';
import '../styles/AdminPages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Define fetchData outside useEffect so it can be reused
  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('Fetching data...');
      const [packagesRes, categoriesRes, parksRes] = await Promise.allSettled([
        packageApi.getAll(),
        categoryApi.getAll(),
        parkApi.getAll()
      ]);

      console.log('Raw Packages Response:', packagesRes);
      console.log('Raw Categories Response:', categoriesRes);
      console.log('Raw Parks Response:', parksRes);

      // Fix the data extraction - notice we're accessing .data.data.data now
      const packages = packagesRes.status === 'fulfilled' && packagesRes.value?.data?.data?.data
        ? packagesRes.value.data.data.data
        : [];
      const categories = categoriesRes.status === 'fulfilled' && categoriesRes.value?.data?.data?.data
        ? categoriesRes.value.data.data.data
        : [];
      const parks = parksRes.status === 'fulfilled' && parksRes.value?.data?.data?.data
        ? parksRes.value.data.data.data
        : [];

      console.log('Processed Packages:', packages);
      console.log('Processed Categories:', categories);
      console.log('Processed Parks:', parks);

      // Ensure packages is an array and has the expected structure
      if (!Array.isArray(packages)) {
        console.error('Packages is not an array:', packages);
        setError('Invalid packages data format');
        return;
      }

      // Map the packages to ensure they have all required properties
      const processedPackages = packages.map(pkg => ({
        ...pkg,
        title: pkg.title || pkg.name || 'Untitled Package',
        description: pkg.description || '',
        price: parseFloat(pkg.price) || 0,
        categories: Array.isArray(pkg.categories) ? pkg.categories : [],
        parks: Array.isArray(pkg.parks) ? pkg.parks : [],
        highlights: Array.isArray(pkg.highlights) ? pkg.highlights : [],
        image_url: pkg.image_url || '/placeholder-image.jpg' // Add a fallback image
      }));

      console.log('Final Processed Packages:', processedPackages);

      setPackages(processedPackages);
      setCategories(categories);
      setParks(parks);
      setFilteredPackages(processedPackages);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load data');
      setFilteredPackages([]);
    } finally {
      setLoading(false);
    }
  };

  // Update filtered packages when search term or sort options change
  useEffect(() => {
    if (!Array.isArray(packages)) {
      console.warn('Packages is not an array:', packages);
      setFilteredPackages([]);
      return;
    }

    const filtered = packages
      .filter(pkg => 
        (pkg.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (pkg.description?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = (a[sortBy] || '').toString();
        const bValue = (b[sortBy] || '').toString();
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });
    
    console.log('Filtered Packages:', filtered);
    setFilteredPackages(filtered);
  }, [packages, searchTerm, sortBy, sortOrder]);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (id, data) => {
    try {
      console.log('Creating package with data:', data);
      const response = await packageApi.create(data);
      console.log('Package creation response:', response);
      
      if (response.data.status === 'success') {
        await fetchData(); // Refresh the packages list
        setShowForm(false);
      } else {
        setError(response.data.message || 'Failed to create package');
      }
    } catch (err) {
      console.error('Error creating package:', err);
      setError(err.response?.data?.message || err.message || 'Failed to create package');
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await packageApi.update(id, data);
      fetchData();
      setShowForm(false);
      setSelectedPackage(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await packageApi.delete(id);
      fetchData();
      setShowDeleteModal(false);
      setSelectedPackage(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleImageUpload = async (id, formData) => {
    try {
      await packageApi.updateImage(id, formData);
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  if (loading) return <div className="loading">Loading packages...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="packages-page">
      {/* Header */}
      <div className="page-header">
        <h1>Manage Packages</h1>
        <button 
          className="add-btn"
          onClick={() => {
            setSelectedPackage(null);
            setShowForm(true);
          }}
        >
          <FaPlus /> Add Package
        </button>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="sort-box">
          <FaSortAmountDown />
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Package List */}
      <div className="package-list">
        {loading ? (
          <div className="loading">Loading packages...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : !Array.isArray(filteredPackages) || filteredPackages.length === 0 ? (
          <div className="no-packages">No packages found</div>
        ) : (
          <div className="package-grid">
            {filteredPackages.map(pkg => (
              <div key={pkg.id} className="package-card">
                {pkg.image_url && (
                  <div className="package-image">
                    <img src={pkg.image_url} alt={pkg.name} />
                  </div>
                )}
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  
                  {/* Display Categories */}
                  {Array.isArray(pkg.categories) && pkg.categories.length > 0 && (
                    <div className="package-categories">
                      {pkg.categories.map((category, index) => (
                        <span key={index} className="category-badge">
                          {category.name || category}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Display Parks */}
                  {Array.isArray(pkg.parks) && pkg.parks.length > 0 && (
                    <div className="package-parks">
                      {pkg.parks.map((park, index) => (
                        <span key={index} className="park-badge">
                          {park.name || park}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="package-price">
                    ${pkg.price?.toLocaleString() || '0'}
                  </div>

                  <div className="package-actions">
                    <button
                      className="preview-btn"
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowPreviewModal(true);
                      }}
                    >
                      <FaEye /> Preview
                    </button>
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowForm(true);
                      }}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowDeleteModal(true);
                      }}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Package Form Modal */}
      {showForm && (
        <PackageForm
          package={selectedPackage}
          categories={categories}
          parks={parks}
          onSubmit={selectedPackage ? handleUpdate : handleCreate}
          onClose={() => {
            setShowForm(false);
            setSelectedPackage(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmation
          title="Delete Package"
          message={`Are you sure you want to delete "${selectedPackage.title}"? This action cannot be undone.`}
          onConfirm={() => handleDelete(selectedPackage.id)}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedPackage(null);
          }}
        />
      )}

      {/* Add the Preview Modal */}
      {showPreviewModal && selectedPackage && (
        <div className="modal-overlay">
          <div className="preview-modal">
            <div className="modal-header">
              <h2>{selectedPackage.name}</h2>
              <button 
                className="close-btn"
                onClick={() => {
                  setShowPreviewModal(false);
                  setSelectedPackage(null);
                }}
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <div className="preview-content">
                {selectedPackage.image_url && (
                  <div className="preview-image">
                    <img src={selectedPackage.image_url} alt={selectedPackage.name} />
                  </div>
                )}
                
                <div className="preview-details">
                  <div className="detail-group">
                    <label>Price:</label>
                    <span className="price-value">
                      ${selectedPackage.price?.toLocaleString() || '0'}
                    </span>
                  </div>

                  <div className="detail-group">
                    <label>Duration:</label>
                    <span>{selectedPackage.duration}</span>
                  </div>

                  {/* Categories Section */}
                  {Array.isArray(selectedPackage.categories) && selectedPackage.categories.length > 0 && (
                    <div className="detail-group">
                      <label>Categories:</label>
                      <div className="categories-list">
                        {selectedPackage.categories.map((category, index) => (
                          <span key={index} className="category-badge">
                            {category.name || category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Parks Section */}
                  {Array.isArray(selectedPackage.parks) && selectedPackage.parks.length > 0 && (
                    <div className="detail-group">
                      <label>Parks:</label>
                      <div className="parks-list">
                        {selectedPackage.parks.map((park, index) => (
                          <span key={index} className="park-badge">
                            {park.name || park}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="detail-group">
                    <label>Description:</label>
                    <p>{selectedPackage.description}</p>
                  </div>

                  {/* Highlights Section */}
                  {Array.isArray(selectedPackage.highlights) && selectedPackage.highlights.length > 0 && (
                    <div className="detail-group">
                      <label>Highlights:</label>
                      <ul className="highlights-list">
                        {selectedPackage.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages; 