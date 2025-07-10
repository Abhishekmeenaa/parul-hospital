import React, { useState } from 'react';
import logo from "../assets/removelogo.png";
import { 
  FaSearch,
  FaPhone,
  FaGlobe,
  FaBars,
  FaTimes,
  FaUserCircle
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showEmergencyDropdown, setShowEmergencyDropdown] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Doctors', path: '/doctor' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleEmergencyDropdown = () => {
    setShowEmergencyDropdown(!showEmergencyDropdown);
  };

  return (
    <div className="font-sans">
      {/* Main Header */}
      <header  className="bg-[#ffffff18]  shadow-sm py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <img className='md:w-60 w-30' src={logo} alt="logo" />
            </div>
          </Link>

          {/* Emergency Contact - Mobile (always visible) */}
          <div className="md:hidden flex  relative   items-center border-l border-r  p-2">
            <button
              onClick={toggleEmergencyDropdown}
              className="flex items-center   font-medium"
            >
              <FaPhone className="mr-1 " />
              <span>Emergency</span>
            </button>
          </div  >

          {/* Desktop Navigation */}
          <nav className="hidden      md:flex items-center space-x-4">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors
                      ${isActive(item.path) ? 
                        'text-[#00A297] border-b-2 border-[#00A297] pb-1' : 
                        'text-black hover:text-[#00A297]'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-4">
             
              
              {/* Emergency Contact - Desktop with dropdown */}
              <div className="relative ">
                <button 
                  className="flex items-cente transition-colors font-medium"
                  onClick={toggleEmergencyDropdown}
                >
                  <FaPhone className="mr-1" />
                  <span className="text-sm">Emergency</span>
                </button>
                
                {showEmergencyDropdown && (
                  <div className="absolute  right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <div className="p-3">
                      <p className="text-gray-800 font-medium">📞 Emergency Helpline</p>
                      <p className="text-gray-700 mt-1">+91-9876543210</p>
                      <a
                        href="tel:+919876543210"
                        className="block mt-2 bg-red-500 text-white text-center px-3 py-1 rounded hover:bg-red-600 text-sm"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
             
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden   text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Emergency Dropdown for Mobile */}
        {showEmergencyDropdown && (
                  <div className="md:hidden absolute right-10 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <h1></h1>
              <div className="flex p-2 flex-col justify-between items-center">
                <div>
                  <p className="text-red-800 mb-2 flex-nowrap font-medium">Emergency Helpline</p>
                  <p className="text-gray-700 mb-2">+91-9876543210</p>
                </div>
                <a
                  href="tel:+919876543210"
                  className="bg-red-500 mb-1 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col divide-y divide-gray-100">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={`block px-6 py-3 font-medium transition-colors
                      ${isActive(item.path) ? 
                        'text-blue-800 bg-blue-50' : 
                        'text-gray-700 hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          
            </ul>
          </motion.div>
        )}
      </header>
      
      {/* Mobile Navigation Bar - Bottom Fixed */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <Link
          to="/"
          className="flex flex-col items-center text-xs text-[#00A297] hover:text-[#00857a]"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0h2m-2 0H9m6 0h-1m4-6l2 2m-2-2v6a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 15m-2 0l-1.5 4.493a1 1 0 01-.948.684H5a2 2 0 01-2-2v-6z"
            />
          </svg>
          <span className="text-black">Home</span>
        </Link>

        {/* Doctors */}
        <Link
          to="/doctor"
          className="flex flex-col items-center text-xs text-[#00A297] hover:text-[#00857a]"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-black">Doctors</span>
        </Link>

        {/* Book Appointment */}
        <Link
          to="/appointment"
          className="flex flex-col items-center text-xs text-[#00A297] hover:text-[#00857a]"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-black">Book Appt.</span>
        </Link>

        {/* Call Us */}
        <a
          href="tel:7997732332"
          className="flex flex-col items-center text-xs text-[#00A297] hover:text-[#00857a]"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-black">Call Us</span>
        </a>
      </div>
    </div>

    </div>
  );
};

export default Header;