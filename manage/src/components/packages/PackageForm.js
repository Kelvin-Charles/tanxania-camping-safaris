import React, { useState, useEffect } from 'react';
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import { packageApi } from '../../services/api';
import './PackageForm.css';

const PackageForm = ({ package: pkg, categories, parks, onSubmit, onClose }) => {
  const defaultDay = {
    day: 1,
    title: '',
    description: '',
    activities: [''],
    meals: {
      breakfast: '',
      lunch: '',
      dinner: ''
    },
    accommodation: ''
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    bestTime: '',
    groupSize: '',
    categories: [],
    parks: [],
    highlights: [''],
    itinerary: [defaultDay]
  });

  useEffect(() => {
    if (pkg) {
      try {
        // Parse itinerary if it's a string
        let parsedItinerary = pkg.itinerary;
        if (typeof pkg.itinerary === 'string') {
          parsedItinerary = JSON.parse(pkg.itinerary);
        }

        // Ensure each day in the itinerary has the correct structure
        const formattedItinerary = (parsedItinerary || []).map((day, index) => ({
          day: index + 1,
          title: day.title || '',
          description: day.description || '',
          activities: Array.isArray(day.activities) ? day.activities : [''],
          meals: {
            breakfast: day.meals?.breakfast || '',
            lunch: day.meals?.lunch || '',
            dinner: day.meals?.dinner || ''
          },
          accommodation: day.accommodation || ''
        }));

        // Parse highlights if it's a string
        let parsedHighlights = pkg.highlights;
        if (typeof pkg.highlights === 'string') {
          parsedHighlights = JSON.parse(pkg.highlights);
        }

        // Initialize parks array with the existing park_id if no parks array exists
        const initialParks = pkg.parks?.map(park => 
          typeof park === 'object' ? park.id : park
        ) || (pkg.park_id ? [pkg.park_id] : []);

        setFormData({
          ...pkg,
          categories: pkg.categories?.map(cat => 
            typeof cat === 'object' ? cat.id : cat
          ) || [],
          parks: initialParks,
          highlights: Array.isArray(parsedHighlights) ? parsedHighlights : [''],
          itinerary: formattedItinerary.length > 0 ? formattedItinerary : [defaultDay]
        });
      } catch (error) {
        console.error('Error formatting package data:', error);
        // If there's an error parsing, set default values but keep the park_id
        setFormData({
          ...pkg,
          categories: [],
          parks: pkg.park_id ? [pkg.park_id] : [],
          highlights: [''],
          itinerary: [defaultDay]
        });
      }
    }
  }, [pkg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setFormData(prev => {
      const updatedCategories = prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId];
      
      return {
        ...prev,
        categories: updatedCategories
      };
    });
  };

  const handleParkChange = (parkId) => {
    setFormData(prev => {
      const updatedParks = prev.parks.includes(parkId)
        ? prev.parks.filter(id => id !== parkId)
        : [...prev.parks, parkId];
      
      return {
        ...prev,
        parks: updatedParks
      };
    });
  };

  const handleHighlightChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.map((h, i) => i === index ? value : h)
    }));
  };

  const addHighlight = () => {
    setFormData(prev => ({
      ...prev,
      highlights: [...prev.highlights, '']
    }));
  };

  const removeHighlight = (index) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index)
    }));
  };

  const handleItineraryChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => {
        if (i !== index) return day;
        return { ...day, [field]: value };
      })
    }));
  };

  const handleActivityChange = (dayIndex, activityIndex, value) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => {
        if (i !== dayIndex) return day;
        const newActivities = [...day.activities];
        newActivities[activityIndex] = value;
        return { ...day, activities: newActivities };
      })
    }));
  };

  const addActivity = (dayIndex) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => {
        if (i !== dayIndex) return day;
        return { ...day, activities: [...day.activities, ''] };
      })
    }));
  };

  const removeActivity = (dayIndex, activityIndex) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) => {
        if (i !== dayIndex) return day;
        return {
          ...day,
          activities: day.activities.filter((_, j) => j !== activityIndex)
        };
      })
    }));
  };

  const addDay = () => {
    setFormData(prev => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        {
          day: prev.itinerary.length + 1,
          title: '',
          description: '',
          activities: [''],
          meals: {
            breakfast: '',
            lunch: '',
            dinner: ''
          },
          accommodation: ''
        }
      ]
    }));
  };

  const removeDay = (index) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary
        .filter((_, i) => i !== index)
        .map((day, i) => ({ ...day, day: i + 1 }))
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the form data being submitted
      console.log('Submitting form data:', formData);

      // Format the data before submission
      const submissionData = {
        ...formData,
        price: parseFloat(formData.price),
        categories: formData.categories.map(id => parseInt(id)),
        parks: formData.parks.map(id => parseInt(id)),
        highlights: JSON.stringify(formData.highlights),
        itinerary: JSON.stringify(formData.itinerary)
      };

      // Call the onSubmit prop with the formatted data
      await onSubmit(pkg ? pkg.id : null, submissionData);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="package-form-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{pkg ? 'Edit Package' : 'Create Package'}</h2>

        <form onSubmit={handleSubmit} className="package-form">
          {/* Basic Information */}
          <div className="form-section">
            <h3>Basic Information</h3>
            
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <div className="image-input-container">
                <input
                  type="text"
                  name="image_url"
                  value={formData.image_url || ''}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  className="image-url-input"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      try {
                        // Show loading state
                        setFormData(prev => ({
                          ...prev,
                          image_url: 'Uploading...'
                        }));

                        // Upload the image to the server
                        const imageUrl = await packageApi.uploadImage(file);
                        
                        // Update the form with the returned URL
                        setFormData(prev => ({
                          ...prev,
                          image_url: imageUrl
                        }));
                      } catch (error) {
                        console.error('Failed to upload image:', error);
                        alert('Failed to upload image: ' + error.message);
                        // Reset the image URL if upload failed
                        setFormData(prev => ({
                          ...prev,
                          image_url: ''
                        }));
                      }
                    }
                  }}
                  className="image-file-input"
                />
              </div>
              {formData.image_url && formData.image_url !== 'Uploading...' && (
                <div className="image-preview">
                  <img src={formData.image_url} alt="Package preview" />
                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                  >
                    <FaTimes /> Remove Image
                  </button>
                </div>
              )}
              {formData.image_url === 'Uploading...' && (
                <div className="upload-loading">
                  Uploading image...
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 3 Days"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Best Time</label>
                <input
                  type="text"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  placeholder="e.g., June-October"
                />
              </div>

              <div className="form-group">
                <label>Group Size</label>
                <input
                  type="text"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  placeholder="e.g., 2-10 people"
                />
              </div>
            </div>
          </div>

          {/* Categories and Parks */}
          <div className="form-section">
            <h3>Categories & Parks</h3>

            <div className="form-group">
              <label>Categories</label>
              <div className="checkbox-group">
                {categories.map(category => (
                  <label key={category.id} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Parks</label>
              <div className="checkbox-group">
                {parks.map(park => (
                  <label key={park.id} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.parks.includes(park.id)}
                      onChange={() => handleParkChange(park.id)}
                    />
                    <span>{park.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="form-section">
            <h3>Highlights</h3>
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => handleHighlightChange(index, e.target.value)}
                    placeholder="Enter highlight"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeHighlight(index)}
                  disabled={formData.highlights.length === 1}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button type="button" className="add-btn" onClick={addHighlight}>
              <FaPlus /> Add Highlight
            </button>
          </div>

          {/* Itinerary */}
          <div className="form-section">
            <h3>Itinerary</h3>
            {formData.itinerary.map((day, dayIndex) => (
              <div key={dayIndex} className="day-section">
                <div className="day-header">
                  <h4>Day {day.day}</h4>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeDay(dayIndex)}
                    disabled={formData.itinerary.length === 1}
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={day.title}
                    onChange={(e) => handleItineraryChange(dayIndex, 'title', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={day.description}
                    onChange={(e) => handleItineraryChange(dayIndex, 'description', e.target.value)}
                    required
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label>Activities</label>
                  {day.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="form-row">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeActivity(dayIndex, activityIndex)}
                        disabled={day.activities.length === 1}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() => addActivity(dayIndex)}
                  >
                    <FaPlus /> Add Activity
                  </button>
                </div>

                <div className="form-group">
                  <label>Meals</label>
                  <div className="meals-section">
                    <input
                      type="text"
                      placeholder="Breakfast"
                      value={day.meals.breakfast}
                      onChange={(e) => handleItineraryChange(dayIndex, 'meals', {
                        ...day.meals,
                        breakfast: e.target.value
                      })}
                    />
                    <input
                      type="text"
                      placeholder="Lunch"
                      value={day.meals.lunch}
                      onChange={(e) => handleItineraryChange(dayIndex, 'meals', {
                        ...day.meals,
                        lunch: e.target.value
                      })}
                    />
                    <input
                      type="text"
                      placeholder="Dinner"
                      value={day.meals.dinner}
                      onChange={(e) => handleItineraryChange(dayIndex, 'meals', {
                        ...day.meals,
                        dinner: e.target.value
                      })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Accommodation</label>
                  <input
                    type="text"
                    value={day.accommodation}
                    onChange={(e) => handleItineraryChange(dayIndex, 'accommodation', e.target.value)}
                  />
                </div>
              </div>
            ))}
            <button type="button" className="add-btn" onClick={addDay}>
              <FaPlus /> Add Day
            </button>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {pkg ? 'Update Package' : 'Create Package'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageForm; 