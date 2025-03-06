import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    suggestion: "",
    complaint: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="bg-gray-900 text-white shadow-md rounded-lg mt-10 flex flex-wrap flex-row  ">
      
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">write your feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300">Suggestions</label>
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-300">Complaints</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
      
      <div className="w-full md:w-1/2 p-4">
        <div className="p-6 bg-gray-800 rounded-md text-yellow-400 flex flex-col justify-space-around">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p><strong>Email:</strong> <a href="mailto:support@stayease.com" className="text-yellow-500">support@stayease.com</a></p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Office Location:</strong> 1234 Grand Avenue, Suite 567, New York, NY 10001, USA</p>
          <p><strong>Google Maps:</strong> <a href="https://www.google.com/maps?q=New+York" className="text-yellow-500">View on Maps</a></p>
          <h3 className="text-xl font-semibold mt-4">Follow Us</h3>
          <p><strong>Website:</strong> <a href="https://www.bedfind.com" className="text-yellow-500">www.bedfind.com</a></p>
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com" className="text-yellow-500">BedFind Official</a></p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com" className="text-yellow-500">@bedfind_hotels</a></p>
          <p><strong>Twitter:</strong> <a href="https://www.twitter.com" className="text-yellow-500">@bedfind</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
