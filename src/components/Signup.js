import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    const path = e.target.value;
    setSelectedValue(path);
    if (path) {
      navigate(path);  // Navigate programmatically
    }
  };

  return (
    <>
      <div style={{display:'flex',justifyContent:'center', backgroundColor:'white'}}>
      <label htmlFor="signup-type">Select User Type</label>
      <select id="signup-type" value={selectedValue} onChange={handleChange}>
        <option value="/signup/customersignup">Customer</option>
        <option value="/signup/vendorsignup">Vendor</option>
        <option value="/signup/adminsignup">Admin</option>
      </select></div>
      <Outlet/>
    </>
  );
}

export default Signup;
