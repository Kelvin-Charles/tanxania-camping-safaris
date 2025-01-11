import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt, FaUsers, FaClock } from 'react-icons/fa';

const BookingCalendar = ({ parkName, activities }) => {
  const [date, setDate] = useState(new Date());
  const [selectedActivity, setSelectedActivity] = useState('');
  const [groupSize, setGroupSize] = useState(1);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      date,
      activity: selectedActivity,
      groupSize,
      parkName
    });
  };

  return (
    <section className="booking-calendar">
      <div className="container">
        <h2><FaCalendarAlt /> Book Your Visit</h2>
        <div className="calendar-container">
          <div className="booking-grid">
            <div className="calendar-wrapper">
              <Calendar
                onChange={handleDateChange}
                value={date}
                minDate={new Date()}
                className="custom-calendar"
              />
            </div>
            <div className="booking-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Select Activity</label>
                  <select
                    value={selectedActivity}
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    required
                  >
                    <option value="">Choose an activity...</option>
                    {activities.map((activity, index) => (
                      <option key={index} value={activity.name}>
                        {activity.name} - {activity.duration}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Group Size</label>
                  <div className="number-input">
                    <button type="button" onClick={() => setGroupSize(prev => Math.max(1, prev - 1))}>-</button>
                    <input
                      type="number"
                      value={groupSize}
                      onChange={(e) => setGroupSize(parseInt(e.target.value))}
                      min="1"
                      max="10"
                    />
                    <button type="button" onClick={() => setGroupSize(prev => Math.min(10, prev + 1))}>+</button>
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar; 