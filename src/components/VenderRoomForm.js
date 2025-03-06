import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VendorRoomForm = () => {
    const { vendorId } = useParams();  // Get vendorId from the URL

    const [roomName, setRoomName] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [offer, setOffer] = useState('');
    const [sharing, setSharing] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [mapsLink, setMapsLink] = useState('');
    const [amenities, setAmenities] = useState([]);

    // Handle image upload
    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        if (selectedImages.length + images.length <= 4) {
            setImages((prevImages) => [...prevImages, ...selectedImages]);
        } else {
            alert("You can only upload a maximum of 4 images.");
        }
    };

    // Remove image from the preview list
    const handleImageRemove = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Form data can be submitted here
        console.log({
            vendorId,  // Include vendorId as part of the data
            roomName,
            images,
            description,
            category,
            offer,
            sharing,
            price,
            address,
            city,
            state,
            zip,
            mapsLink,
            amenities,
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-5">Add Room Details</h2>
            <form onSubmit={handleFormSubmit}>
                {/* Vendor ID (Unchangeable) */}
                <div className="mb-4">
                    <label htmlFor="vendorId" className="block text-sm font-semibold">Vendor ID</label>
                    <input 
                        type="text" 
                        id="vendorId" 
                        name="vendorId" 
                        value={vendorId} 
                        disabled 
                        className="input-field" 
                    />
                </div>

                {/* Room Name */}
                <div className="mb-4">
                    <label htmlFor="roomName" className="block text-sm font-semibold">Room Name</label>
                    <input 
                        type="text" 
                        id="roomName" 
                        name="roomName" 
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter room name" 
                        required 
                    />
                </div>

           

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea-field"
                        placeholder="Room description"
                        required
                    ></textarea>
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter room category" 
                        required 
                    />
                </div>

                {/* Offer */}
                <div className="mb-4">
                    <label htmlFor="offer" className="block text-sm font-semibold">Offer</label>
                    <input 
                        type="text" 
                        id="offer" 
                        name="offer" 
                        value={offer}
                        onChange={(e) => setOffer(e.target.value)} 
                        className="input-field" 
                        placeholder="Offer (e.g., 20% off)" 
                    />
                </div>

                {/* Sharing */}
                <div className="mb-4">
                    <label htmlFor="sharing" className="block text-sm font-semibold">Sharing</label>
                    <input 
                        type="text" 
                        id="sharing" 
                        name="sharing" 
                        value={sharing}
                        onChange={(e) => setSharing(e.target.value)} 
                        className="input-field" 
                        placeholder="Sharing info (e.g., Two share)" 
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-semibold">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter room price" 
                        required
                    />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-semibold">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter address" 
                        required 
                    />
                </div>

                {/* City */}
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-semibold">City</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter city" 
                        required 
                    />
                </div>

                {/* State */}
                <div className="mb-4">
                    <label htmlFor="state" className="block text-sm font-semibold">State</label>
                    <input 
                        type="text" 
                        id="state" 
                        name="state" 
                        value={state}
                        onChange={(e) => setState(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter state" 
                        required 
                    />
                </div>

                {/* Zip */}
                <div className="mb-4">
                    <label htmlFor="zip" className="block text-sm font-semibold">Zip Code</label>
                    <input 
                        type="text" 
                        id="zip" 
                        name="zip" 
                        value={zip}
                        onChange={(e) => setZip(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter zip code" 
                        required 
                    />
                </div>

                {/* Google Maps Link */}
                <div className="mb-4">
                    <label htmlFor="mapsLink" className="block text-sm font-semibold">Google Maps Link</label>
                    <input 
                        type="text" 
                        id="mapsLink" 
                        name="mapsLink" 
                        value={mapsLink}
                        onChange={(e) => setMapsLink(e.target.value)} 
                        className="input-field" 
                        placeholder="Enter Google Maps URL" 
                    />
                </div>

                {/* Amenities */}
                <div className="mb-4">
                    <label htmlFor="amenities" className="block text-sm font-semibold">Amenities (comma separated)</label>
                    <input 
                        type="text" 
                        id="amenities" 
                        name="amenities" 
                        value={amenities}
                        onChange={(e) => setAmenities(e.target.value.split(','))}
                        className="input-field" 
                        placeholder="Enter amenities" 
                    />
                </div>
                     {/* Room Images */}
                     <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-semibold">Room Images</label>
                    <input 
                        type="file" 
                        id="images" 
                        name="images" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        multiple 
                        className="input-field"
                    />
                    <div className="flex mt-2">
                        {images.length > 0 && images.map((image, index) => (
                            <div key={index} className="relative mr-2">
                                <img 
                                    src={URL.createObjectURL(image)} 
                                    alt={`preview-${index}`} 
                                    className="image-preview"
                                />
                                <button 
                                    type="button" 
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                    onClick={() => handleImageRemove(index)}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button 
                        type="submit" 
                        className="btn btn-primary px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VendorRoomForm;
