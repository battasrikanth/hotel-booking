
import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWifi, FaParking, FaSwimmingPool, FaCoffee, FaBed, FaStar } from 'react-icons/fa';
import { Carousel, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { defaultData } from './data';
function Room() {
  const userId = 6739;  // Assuming this is the user ID
  const { roomId } = useParams();
  const navigate = useNavigate(); // useNavigate hook for navigation

  const [showPopup, setShowPopup] = useState(false);
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [numPersons, setNumPersons] = useState(1);

  const [room,setRoom]=useState([])
    async function fetchRooms(){
      try{
        const response =await fetch(`http://localhost:8086/rooms/${roomId}`)
        const data=await response.json()
        setRoom(data || [])
      }
      catch(error){
        console.log("failed to connect to server, default room details are being shown")
        const selectedRoom= defaultData.filter((item)=>item.id==roomId)
        setRoom(selectedRoom[0])
      
      }
  
    }
    useEffect(()=>{fetchRooms()},[])

  if (!room) return <p>Room not found</p>;

  const isAvailable = room.status === 'available';

  const reviews = room.reviews || [];
  const nearby = room.nearby || [];

  const calculateTotalPrice = () => {
    if (arrivalDate && departureDate) {
      const start = new Date(arrivalDate);
      const end = new Date(departureDate);
      const days = (end - start) / (1000 * 3600 * 24); // Calculate days between two dates
      return room.price * days * numPersons;
    }
    return 0;
  };

  const handleBookNowClick = () => {
    if (isAvailable) {
      setShowPopup(true); // Show booking popup only if the room is available
    }
  };

  const handleConfirmBooking = () => {
    const totalAmount = calculateTotalPrice();
    if (totalAmount > 0) {
      // Pass all booking details to the payment page
      navigate(`/payment/${totalAmount}`, {
        state: {
          userId,
          roomId,
          arrivalDate,
          departureDate,
          numPersons,
          bookingTime: new Date().toISOString(),
          totalAmount,
        },
      });
    }
  };

  return (
    <Container style={{ backgroundColor: "white" }}>
      <Row className="mt-4">
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                src={room.image || "https://images.jdmagicbox.com/comp/thanjavur/f5/9999p4362.4362.171210121517.i9f5/catalogue/vijayam-ladies-hostel-rajah-serfoji-government-college-thanjavur-hostels-for-women-8zpws.jpg"}
                alt={room.name || "--"}
                style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
            {room.moreImages && room.moreImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={'https://images.jdmagicbox.com/comp/thanjavur/f5/9999p4362.4362.171210121517.i9f5/catalogue/vijayam-ladies-hostel-rajah-serfoji-government-college-thanjavur-hostels-for-women-8zpws.jpg' || "--"}
                  alt={`Room image ${index + 1}`}
                  style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h1>{room.name || "--"}</h1>
          <p>{room.description || "--"}</p>
          <p><strong>Price: </strong>₹{room.price || "--"} per day</p>
          <p><strong>Location: </strong>{room.address_line || "--"}, {room.city || "--"}, {room.state || "--"}, {room.zip || "--"} <a href={room.maps_link} target='_blank'>↗️</a></p>
          <p><strong>Offer: </strong>{room.offer || "--"}</p>
          <p><strong>Sharing: </strong>{room.sharing || "--"}</p>
          <p><strong>Status: </strong>{room.status || "--"}</p>

          <h5>Amenities:</h5>
          <div className="d-flex flex-wrap">
            {room.amenities && room.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item me-4 mb-3">
                {amenity === 'Wifi' && <FaWifi />}
                {amenity === 'Parking' && <FaParking />}
                {amenity === 'Breakfast' && <FaCoffee />}
                {amenity === 'Pool' && <FaSwimmingPool />}
                {amenity === 'Gym' && <FaBed />}
                <span className="ms-2">{amenity}</span>
              </div>
            ))}
          </div>

          <h5>Nearby Attractions:</h5>
          <ul>
            {nearby.length > 0 ? (
              nearby.map((place, index) => (
                <li key={index}>{place.place} - {place.distance} km</li>
              ))
            ) : (
              <li>No nearby attractions available.</li>
            )}
          </ul>

          <p><strong>Rating: </strong>{room.rating || "--"} <FaStar /> ({room.reviewCount || 0} reviews)</p>

          <Button
            variant="primary"
            onClick={handleBookNowClick}
            disabled={!isAvailable}
            className={`mt-3 ${!isAvailable ? 'disabled-button' : ''}`}
          >
            {isAvailable ? "Book Now" : "Room Unavailable"}
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
      <h4>Customer Reviews:</h4>
        {
        reviews.length ? (
          reviews.map((review, index) => (
            <Col md={4} key={index}>
              <div className="review-card p-3 border hover-effect">
                <h6>{review.username}</h6>
                <p>Rating: {review.rating} <FaStar /></p>
                <p>{review.review}</p>
              </div>
            </Col>
          ))
        ) : (
          <Col md={12}>No reviews available.</Col>
        )}
      </Row>

      {showPopup && (
        <div className="booking-popup">
          <div className="popup-overlay" onClick={() => setShowPopup(false)}></div>
          <div className="popup-content">
            <h3>Booking Details</h3>
            <Form>
              <Form.Group controlId="arrivalDate">
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setArrivalDate(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="departureDate">
                <Form.Label>Departure Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setDepartureDate(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="numPersons">
                <Form.Label>Number of Persons</Form.Label>
                <Form.Control type="number" min="1" value={numPersons} onChange={(e) => setNumPersons(e.target.value)} />
              </Form.Group>
              <p><strong>Total Amount: </strong>₹{calculateTotalPrice()}</p>
              <Button variant="success" className="mt-3" onClick={handleConfirmBooking}>Confirm Booking</Button>
            </Form>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Room;
