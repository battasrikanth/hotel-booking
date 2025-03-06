
import React, { memo, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css';
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const { firstName, lastName, email, userType, userId } = user || {};
  const isLoggedIn = !!firstName;

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const toggleDropdown = useCallback(() => setIsDropdownOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

  const logOut = useCallback(() => {
    logout();
    closeDropdown();
    setTimeout(() => navigate("/"), 0);
  }, [logout, navigate, closeDropdown]);
  

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 relative">
        <Link to="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-black">STAYEASE</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 relative">
          {isLoggedIn && `Hi, ${firstName}`}
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://th.bing.com/th/id/OIP.S_BEyoTYNIwRpRXmQWtKJAHaHa?w=179&h=180&c=7&r=0&o=5&dpr=2.3&pid=1.7"
              alt="user"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-0 p-1 bg-white rounded-lg shadow-sm" style={{zIndex: 9000}}>
              <button onClick={closeDropdown} className="absolute top-2 right-2 text-gray-600">
                ✕
              </button>
              {isLoggedIn ? (
                <>
                  <div className="px-4 py-3">
                    <span className="block text-sm text-black">{`${firstName} ${lastName}`}</span>
                    <span className="block text-sm text-gray-500 truncate">{email}</span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link to="/user-bookings" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={closeDropdown}>
                        Bookings
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={closeDropdown}>
                        Update Profile
                      </Link>
                    </li>
                    {userType === "vender" && (
                      <li>
                        <Link to={`/vendor-form-filling/${userId}`} className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={closeDropdown}>
                          Add a Room
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link to="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={logOut}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <div className="px-4 py-3">
                  <Link to="/Login" className="block text-sm text-black" onClick={closeDropdown}>
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
          <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden">
            <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-white md:space-x-8 md:flex-row md:mt-0">
            <li><Link to="/" className="block py-2 px-3 text-black hover:bg-gray-100" onClick={closeDropdown}>Home</Link></li>
            <li><Link to="#rooms" className="block py-2 px-3 text-black hover:bg-gray-100" onClick={closeDropdown}>Rooms</Link></li>
            <li><Link to="#about" className="block py-2 px-3 text-black hover:bg-gray-100" onClick={closeDropdown}>About</Link></li>
            <li><Link to="#contact" className="block py-2 px-3 text-black hover:bg-gray-100" onClick={closeDropdown}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
