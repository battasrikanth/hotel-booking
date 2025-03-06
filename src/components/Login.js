
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import CSS file for styling
import { useUser } from "../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const userData = useUser();

  const [userType, setUserType] = useState("customer"); // Default to customer
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Store error message

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginEndpoint = `http://localhost:8086/${userType}/login`;
  
    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      const data = await response.json();
      const userrData = data.user;
  
     
      userData.login(userrData, rememberMe);

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Something went wrong. Try again.");
    }
  };
  
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <label>Select User Type</label>
        <select 
          id="login-type" 
          value={userType} 
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
          <option value="admin">Admin</option>
        </select>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember Me</span>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}
          <div className="actions">
            <button type="submit" className="login-button">Login</button>
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
