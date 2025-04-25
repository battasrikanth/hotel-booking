import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Rooms.css';
import { defaultData } from './data';
import { useUser } from '../context/UserContext';

// Extract unique categories, cities, and offers


function Rooms() {
  const [roomsData,setRoomsData]=useState([])
  async function fetchRooms(){
    try{
      const response =await fetch('http://localhost:8086/rooms')
      const data=await response.json()
      setRoomsData(data || defaultData )
    }
   catch(err){
    console.log("failed to connect to server, default rooms are being shown")
     setRoomsData(defaultData )
   }   

  }
  let hasRun = false;
  useEffect(()=>{fetchRooms()},[])
  const uniqueCategories = [...new Set(roomsData.map((room) => room.category))];
const uniqueCities = [...new Set(roomsData.map((room) => room.city))];
const uniqueOffers = [...new Set(roomsData.map((room) => room.offer))];
  const userData=useUser();
  const isLoggedIn = userData.user.isLoggedIn;
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sharing, setSharing] = useState('');
  const [offer, setOffer] = useState('');

  const filteredRooms = roomsData
    .filter((room) => room.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((room) => (category ? room.category === category : true))
    .filter((room) => (city ? room.city === city : true))
    .filter((room) => (minPrice ? room.price >= minPrice : true))
    .filter((room) => (maxPrice ? room.price <= maxPrice : true))
    .filter((room) => (sharing ? room.sharing === sharing : true))
    .filter((room) => (offer ? room.offer === offer : true)); // Filter by offer
  return (
    <>
      <h1 className="text-center">Rooms</h1>
      <div className="text-center pb-4">
        <input
          id="namanyay-search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="40"
          type="text"
          placeholder="Search rooms"
        />
        <input id="namanyay-search-btn" value="Go" type="submit" />
      </div>

      {/* Filter Options */}
      <div className="filters-container text-center pb-4">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Select Category</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">Select City</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select onChange={(e) => setMinPrice(e.target.value)} value={minPrice}>
          <option value="">Min Price</option>
          <option value="50">₹50</option>
          <option value="100">₹100</option>
          <option value="200">₹200</option>
        </select>

        <select onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice}>
          <option value="">Max Price</option>
          <option value="500">₹500</option>
          <option value="1000">₹1000</option>
          <option value="2000">₹2000</option>
        </select>

        <select onChange={(e) => setSharing(e.target.value)} value={sharing}>
          <option value="">No. of Sharing</option>
          <option value="Single">Single</option>
          <option value="Two share">Two share</option>
        </select>

        <select onChange={(e) => setOffer(e.target.value)} value={offer}>
          <option value="">Select Offer</option>
          {uniqueOffers.map((offer) => (
            <option key={offer} value={offer}>
              {offer}
            </option>
          ))}
        </select>
      </div>
      
      <div className="rooms-container">
        {
filteredRooms.length === 0 && (<h1 className='text-center'>No rooms found</h1>)}

        
        {
        filteredRooms.map((room) => (
          
          <div key={room.id} className="room-card" style={{ padding: '0', backgroundColor: 'white' }}>
            <div className="room-image">
              <div className="room-thumbnail">
                {/* <img src={room.image} alt={room.name} /> */}
                <img src='https://images.jdmagicbox.com/comp/thanjavur/f5/9999p4362.4362.171210121517.i9f5/catalogue/vijayam-ladies-hostel-rajah-serfoji-government-college-thanjavur-hostels-for-women-8zpws.jpg' alt={room.name}></img>
                {room.offer&& <div className="room-offer bold-text">{room.offer}</div>}
              </div>
              <div className="room-details-container p-2">
                <div className="room-details flex flex-row justify-between">
                  <p className="room-name">{room.name}</p>
                  <p className="room-price text-black">{`₹${room.price} /day`}</p>
                </div>
                <div className="room-description flex flex-row justify-between">
                  <p className="room-desc" style={{ flexBasis: '70%' }}>{room.description}</p>
                  <p className="room-rating">
                    <i className="bi bi-star-fill"></i>
                    {room.rating} ({room.reviewCount} reviews)
                  </p>
                </div>
                <div className="room-address flex flex-row justify-between">
                  <p className="room-city">
                    <i className="bi bi-geo-alt"></i>
                    {room.city}
                  </p>
                  <Link to={`/room/${room.id}`}>
  <button className="dbutton">
    <span className="dtext">Discover</span>
    <span className="dsvg"></span>
  </button>
</Link>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rooms;
