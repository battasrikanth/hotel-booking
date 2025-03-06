import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adhaarNumber, setAdhaarNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

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
      gender,
      age,
      phoneNumber,
      adhaarNumber,
      role,
      password,
      email,
    };

    try {
      const response = await fetch("http://localhost:8086/admin/signup", {
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

      console.log("Signup successful:", data);
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
        <p className="title">Admin Register</p>
        <p className="message">Signup now and get full access to admin panel.</p>

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
          <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} required />
          <span>Gender</span>
        </label>

        <label>
          <input type="number" className="input" value={age} onChange={(e) => setAge(e.target.value)} required />
          <span>Age</span>
        </label>

        <label>
          <input type="number" className="input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          <span>Phone Number</span>
        </label>

        <label>
          <input type="number" className="input" value={adhaarNumber} onChange={(e) => setAdhaarNumber(e.target.value)} required />
          <span>Aadhaar Number</span>
        </label>

        <label>
          <input type="text" className="input" value={role} onChange={(e) => setRole(e.target.value)} required />
          <span>Role</span>
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
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default AdminSignup;
