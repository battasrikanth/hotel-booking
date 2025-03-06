import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
function UserBookings() {
  const data = [
    {
      roomid: 1,
      roomName: 'something',
      bookeddate: '06/02/2025',
      arrivaldate: '10/02/2025',
      departuredate: '12/02/2025',
      amountpaid: 800,
      noofpersons: 4,
      status: 'pending',
    },
    {
      roomid: 3,
      roomName: 'otherthing',
      bookeddate: '01/02/2025',
      arrivaldate: '07/02/2025',
      departuredate: '08/02/2025',
      amountpaid: 300,
      noofpersons: 3,
      status: 'cancelled',
    },
    {
      roomid: 6,
      roomName: 'something',
      bookeddate: '22/01/2025',
      arrivaldate: '23/01/2025',
      departuredate: '24/01/2025',
      amountpaid: 300,
      noofpersons: 3,
      status: 'completed',
    },
  ];

  // Helper function to calculate days left or days ago
  const calculateDays = (status, date) => {
    const currentDate = new Date();
    const bookingDate = new Date(date);
    const timeDiff = currentDate - bookingDate;
    const daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (status === 'pending') {
      // Calculate days left for pending booking
      const arrivalDate = new Date(date);
      const daysLeft = Math.ceil((arrivalDate - currentDate) / (1000 * 3600 * 24));
      return daysLeft > 0 ? daysLeft : 0; // Ensure it's not negative
    } else if (status === 'completed') {
      // Calculate how many days ago the stay was completed
      const departureDate = new Date(date);
      const daysAgo = Math.ceil((currentDate - departureDate) / (1000 * 3600 * 24));
      return daysAgo > 0 ? daysAgo : 0; // Ensure it's not negative
    }
    return 0;
  };

  return (
    <div className="user-bookings-container">
      <h3 className="text-center mb-4">Your Bookings</h3>
      <Row>
        {data.map((booking) => {
          const { roomid, roomName, bookeddate, arrivaldate, departuredate, amountpaid, noofpersons, status } = booking;
          const daysLeft = calculateDays(status, arrivaldate);
          const daysAgo = status === 'completed' ? calculateDays(status, departuredate) : null;

          return (
            <Col md={4} key={roomid} className="mb-4">
              <Card className="booking-card">
                <Card.Body>
                  <Card.Title className="room-title">{roomName}</Card.Title>
                  <Card.Text className="details">
                    <strong>Booked on:</strong> {bookeddate}
                    <br />
                    <strong>Arrival:</strong> {arrivaldate}
                    <br />
                    <strong>Departure:</strong> {departuredate}
                    <br />
                    <strong>Amount Paid:</strong> ₹{amountpaid}
                    <br />
                    <strong>No of Persons:</strong> {noofpersons}
                    <br />
                    <strong>Status:</strong> {status}
                    <br />
                  </Card.Text>
                  {status === 'pending' && (
                    <Button variant="danger" className="view-details-button">
                      Cancel Booking
                    </Button>
                  )}
                  {status === 'cancelled' && (
                    <Button  className="view-details-button text-yellow">
                      Book other room
                    </Button>
                  )}
                  {status === 'completed' && (
                    <Button variant="primary" className="view-details-button">
                      Rate Your Stay
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default UserBookings;
