import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ParkForm = ({ park, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    circuit: 'northern', // Default to northern circuit
    image_url: ''
  });

  // Available circuits with display names
  const circuits = [
    { value: 'northern', label: 'Northern Circuit' },
    { value: 'southern', label: 'Southern Circuit' },
    { value: 'western', label: 'Western Circuit' },
    { value: 'coastal', label: 'Coastal Circuit' }
  ];

  useEffect(() => {
    if (park) {
      setFormData({
        name: park.name || '',
        description: park.description || '',
        circuit: park.circuit || 'northern',
        image_url: park.image_url || ''
      });
    }
  }, [park]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    try {
        onSubmit(formData);
    } catch (error) {
        console.error('Error in form submission:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{park ? 'Edit Park' : 'Add New Park'}</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label htmlFor="name">Park Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter park name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter park description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="circuit">Circuit Zone</label>
            <select
              id="circuit"
              name="circuit"
              value={formData.circuit}
              onChange={handleChange}
              required
              className="circuit-select"
            >
              {circuits.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {park ? 'Update Park' : 'Add Park'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParkForm; 