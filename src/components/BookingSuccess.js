import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

function BookingSuccess() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleGoHome = () => {
    navigate('/'); // use navigate instead of history.push
  };

  const handleShowBookings = () => {
    navigate('/user-bookings'); // use navigate instead of history.push
  };

  return (
    <div className="booking-success">
      <h1>Booking Successful!</h1>
      <Button variant="success" onClick={handleGoHome}>Go to Home</Button>
      <Button variant="info" className="mt-2" onClick={handleShowBookings}>Show your Bookings</Button>
    </div>
  );
}

export default BookingSuccess;

