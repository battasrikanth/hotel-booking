
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation(); // To get the state passed from the previous page
  const { userId, roomId, arrivalDate, departureDate, numPersons, bookingTime, totalAmount } = location.state || {};

  const handlePaymentSuccess = () => {
    // On payment success, show booking success message
    navigate('/booking-success');
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      <div>
        <h4>Booking Details</h4>
        <p><strong>User ID: </strong>{userId}</p>
        <p><strong>Room ID: </strong>{roomId}</p>
        <p><strong>Arrival Date: </strong>{arrivalDate}</p>
        <p><strong>Departure Date: </strong>{departureDate}</p>
        <p><strong>Number of Persons: </strong>{numPersons}</p>
        <p><strong>Booking Time: </strong>{new Date(bookingTime).toLocaleString()}</p>
        <p><strong>Total Amount: </strong>₹{totalAmount}</p>
      </div>

      <div>
        <h4>Choose Payment Method</h4>
        <Button variant="primary" onClick={handlePaymentSuccess}>Pay via Card</Button>
        <Button variant="primary" className="mt-2" onClick={handlePaymentSuccess}>Pay via UPI</Button>
      </div>
    </div>
  );
}

export default Payment;
