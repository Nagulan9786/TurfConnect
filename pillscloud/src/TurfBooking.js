import React, { useState } from 'react';
import './TurfBooking.css';

const TurfBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedGameType, setSelectedGameType] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleGameTypeChange = (e) => {
    setSelectedGameType(e.target.value);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to handle the booking submission
    console.log('Booking submitted for:', {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      gameType: selectedGameType,
    });
  };
  
  const handleButtonClick = () => {
    if (selectedDate !== '' && selectedGameType !== '' && selectedTimeSlot !== '') {
      alert('Booked Successfully');
    } else {
      alert('Kindly Book the slot');
    }
  };

  return (
    <div className="turf-booking-container">
      <h2>Book a Game in the Turf</h2>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor="date">Select a date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="timeSlot">Select a time slot:</label>
        <select
          id="timeSlot"
          value={selectedTimeSlot}
          onChange={handleTimeSlotChange}
          required
        >
          <option value="">Select</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <label htmlFor="gameType">Select a game type:</label>
        <select
          id="gameType"
          value={selectedGameType}
          onChange={handleGameTypeChange}
          required
        >
          <option value="">Select</option>
          <option value="Football">Football</option>
          <option value="Basketball">Cricket</option>
          <option value="Tennis">Hockey</option>
        </select>

        <button type="submit" onClick={handleButtonClick}>Book</button>
      </form>
    </div>
  );
};

export default TurfBooking;
