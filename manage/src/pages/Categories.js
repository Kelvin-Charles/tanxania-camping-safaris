import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import { categoryApi } from '../services/api';
import DeleteConfirmation from '../components/common/DeleteConfirmation';
import CategoryForm from '../components/forms/CategoryForm';
// import '../styles/AdminPages.css';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredCategories, setFilteredCategories] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('Fetching categories...');
      const response = await categoryApi.getAll();
      console.log('Raw Categories Response:', response);

      // Extract categories from the nested response
      const categoriesData = response?.data?.data?.data || [];
      console.log('Processed Categories:', categoriesData);

      if (!Array.isArray(categoriesData)) {
        console.error('Categories is not an array:', categoriesData);
        setError('Invalid categories data format');
        return;
      }

      // Process categories to ensure all required fields
      const processedCategories = categoriesData.map(cat => ({
        ...cat,
        name: cat.name || 'Untitled Category',
        description: cat.description || '',
        package_count: parseInt(cat.package_count) || 0
      }));

      console.log('Final Processed Categories:', processedCategories);
      
      setCategories(processedCategories);
      setFilteredCategories(processedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to load categories');
      setFilteredCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // Update filtered categories when search term or sort options change
  useEffect(() => {
    if (!Array.isArray(categories)) {
      console.warn('Categories is not an array:', categories);
      setFilteredCategories([]);
      return;
    }

    const filtered = categories
      .filter(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cat.description || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = (a[sortBy] || '').toString().toLowerCase();
        const bValue = (b[sortBy] || '').toString().toLowerCase();
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });

    console.log('Filtered Categories:', filtered);
    setFilteredCategories(filtered);
  }, [categories, searchTerm, sortBy, sortOrder]);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (data) => {
    try {
      await categoryApi.create(data);
      fetchData();
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await categoryApi.update(id, data);
      fetchData();
      setShowForm(false);
      setSelectedCategory(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await categoryApi.delete(id);
      fetchData();
      setShowDeleteModal(false);
      setSelectedCategory(null);
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

  if (loading) return <div className="loading">Loading categories...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="page-header">
        <h1>Manage Categories</h1>
        <button 
          className="add-btn"
          onClick={() => {
            setSelectedCategory(null);
            setShowForm(true);
          }}
        >
          <FaPlus /> Add Category
        </button>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="sort-box">
          <FaSortAmountDown />
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="package_count">Sort by Package Count</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Categories List */}
      <div className="grid-layout">
        {!Array.isArray(filteredCategories) || filteredCategories.length === 0 ? (
          <div className="no-data">No categories found</div>
        ) : (
          <div className="categories-grid">
            {filteredCategories.map(category => (
              <div key={category.id} className="card">
                <div className="card-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="package-count">
                    Packages: {category.package_count}
                  </div>
                  <div className="category-actions">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowForm(true);
                      }}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        setSelectedCategory(category);
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmation
          title="Delete Category"
          message={`Are you sure you want to delete "${selectedCategory.name}"? This action cannot be undone.`}
          onConfirm={() => handleDelete(selectedCategory.id)}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedCategory(null);
          }}
        />
      )}

      {/* Add the CategoryForm */}
      {showForm && (
        <CategoryForm
          category={selectedCategory}
          onSubmit={(data) => {
            if (selectedCategory) {
              handleUpdate(selectedCategory.id, data);
            } else {
              handleCreate(data);
            }
          }}
          onClose={() => {
            setShowForm(false);
            setSelectedCategory(null);
          }}
        />
      )}
    </div>
  );
};

export default Categories; 