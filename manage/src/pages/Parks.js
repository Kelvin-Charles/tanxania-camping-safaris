import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSortAmountDown } from 'react-icons/fa';
import { parkApi } from '../services/api';
import DeleteConfirmation from '../components/common/DeleteConfirmation';
import ParkForm from '../components/forms/ParkForm';
import '../styles/AdminPages.css';
import './Parks.css';

const Parks = () => {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredParks, setFilteredParks] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('Fetching parks...');
      const response = await parkApi.getAll();
      console.log('Raw Parks Response:', response);

      const parksData = response?.data?.data?.data || [];
      console.log('Processed Parks:', parksData);

      if (!Array.isArray(parksData)) {
        console.error('Parks is not an array:', parksData);
        setError('Invalid parks data format');
        return;
      }

      const processedParks = parksData.map(park => ({
        ...park,
        name: park.name || 'Untitled Park',
        description: park.description || '',
        location: park.location || '',
        package_count: parseInt(park.package_count) || 0
      }));

      console.log('Final Processed Parks:', processedParks);
      
      setParks(processedParks);
      setFilteredParks(processedParks);
    } catch (error) {
      console.error('Error fetching parks:', error);
      setError('Failed to load parks');
      setFilteredParks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!Array.isArray(parks)) {
      console.warn('Parks is not an array:', parks);
      setFilteredParks([]);
      return;
    }

    const filtered = parks
      .filter(park => 
        park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (park.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (park.location || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = (a[sortBy] || '').toString().toLowerCase();
        const bValue = (b[sortBy] || '').toString().toLowerCase();
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });

    console.log('Filtered Parks:', filtered);
    setFilteredParks(filtered);
  }, [parks, searchTerm, sortBy, sortOrder]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (data) => {
    try {
        console.log('Attempting to create park with data:', data);
        const response = await parkApi.create(data);
        console.log('Park creation response:', response);
        
        if (response.data.status === 'success') {
            console.log('Park created successfully');
            await fetchData();
            setShowForm(false);
        } else {
            console.error('Failed to create park:', response.data.message);
            setError(response.data.message || 'Failed to create park');
        }
    } catch (err) {
        console.error('Error creating park:', err);
        console.error('Error details:', {
            message: err.message,
            response: err.response?.data,
            status: err.response?.status
        });
        setError(err.response?.data?.message || err.message || 'Failed to create park');
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await parkApi.update(id, data);
      fetchData();
      setShowForm(false);
      setSelectedPark(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await parkApi.delete(id);
      fetchData();
      setShowDeleteModal(false);
      setSelectedPark(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading parks...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Manage Parks</h1>
        <button 
          className="add-btn"
          onClick={() => {
            setSelectedPark(null);
            setShowForm(true);
          }}
        >
          <FaPlus /> Add Park
        </button>
      </div>

      <div className="filters">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search parks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-box">
          <FaSortAmountDown />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="circuit">Sort by Circuit</option>
            <option value="package_count">Sort by Package Count</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="grid-layout">
        {!Array.isArray(filteredParks) || filteredParks.length === 0 ? (
          <div className="no-data">No parks found</div>
        ) : (
          <div className="parks-grid">
            {filteredParks.map(park => (
              <div key={park.id} className="card">
                <div className="card-content">
                  {park.image_url && (
                    <div className="park-image">
                      <img src={park.image_url} alt={park.name} />
                    </div>
                  )}
                  <h3>{park.name}</h3>
                  <p className="park-circuit">{park.circuit} Circuit</p>
                  <p className="park-description">{park.description}</p>
                  <div className="package-count">
                    Packages: {park.package_count}
                  </div>
                  <div className="park-actions">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setSelectedPark(park);
                        setShowForm(true);
                      }}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        setSelectedPark(park);
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

      {showDeleteModal && (
        <DeleteConfirmation
          title="Delete Park"
          message={`Are you sure you want to delete "${selectedPark.name}"? This action cannot be undone.`}
          onConfirm={() => handleDelete(selectedPark.id)}
          onCancel={() => {
            setShowDeleteModal(false);
            setSelectedPark(null);
          }}
        />
      )}

      {showForm && (
        <ParkForm
          park={selectedPark}
          onSubmit={(data) => {
            if (selectedPark) {
              handleUpdate(selectedPark.id, data);
            } else {
              handleCreate(data);
            }
          }}
          onClose={() => {
            setShowForm(false);
            setSelectedPark(null);
          }}
        />
      )}
    </div>
  );
};

export default Parks; 