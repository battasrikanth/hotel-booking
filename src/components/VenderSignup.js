import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [licenceNumber, setLicenceNumber] = useState("");
  const [adhaarNumber, setAdhaarNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      age,
      gender,
      address,
      businessName,
      licenceNumber,
      adhaarNumber,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8086/vendor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log("Vendor signup successful:", data);
      alert("Signup successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 100);
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className="sform" onSubmit={handleSubmit}>
        <p className="title">Vendor Registration</p>
        <p className="message">Signup now and start managing your listings.</p>

        <div className="flex">
          <label>
            <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <span>First Name</span>
          </label>

          <label>
            <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input type="number" className="input" value={age} onChange={(e) => setAge(e.target.value)} required />
          <span>Age</span>
        </label>

        <label>
          <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} required />
          <span>Gender</span>
        </label>

        <label>
          <input type="text" className="input" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <span>Address</span>
        </label>

        <label>
          <input type="text" className="input" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required />
          <span>Business Name</span>
        </label>

        <label>
          <input type="number" className="input" value={licenceNumber} onChange={(e) => setLicenceNumber(e.target.value)} required />
          <span>Licence Number</span>
        </label>

        <label>
          <input type="number" className="input" value={adhaarNumber} onChange={(e) => setAdhaarNumber(e.target.value)} required />
          <span>Aadhaar Number</span>
        </label>

        <label>
          <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <span>Email</span>
        </label>

        <label>
          <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <span>Password</span>
        </label>

        <label>
          <input type="password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <span>Confirm Password</span>
        </label>

        <button type="submit" className="submit">Submit</button>

        <p className="signin">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default VendorSignup;
