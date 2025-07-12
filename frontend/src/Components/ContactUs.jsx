import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will contact you soon.');
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className=" min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-2 pt-12">
        <h1 className="text-2xl font-bold text-[#161B38] sm:text-3xl">
          Contact <span className="text-[#00A297]">Parul</span> Hospital
        </h1>
  <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
          We're here to help you with all your healthcare needs. Reach out to us anytime
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <a href="tel:07552556620"    className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-[#00A297] bg-opacity-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">24/7 Emergency & Support</p>
            <a href="tel:07552556620" className="text-[#00A297] hover:text-[#007a70] font-medium text-lg">
              0755-2556620, 2556669, <br />
              
            </a>
            <a href="tel:07552556620"   className="text-[#00A297]  hover:text-[#007a70] font-medium text-lg">
              7999732232<br />
              
            </a>
          </a>

          {/* Email Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <a href="mailto:parulhospital123@gmail.com" className="bg-[#00A297] bg-opacity-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaEnvelope className="text-white text-2xl" />
            </a>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">For General Enquiries</p>
            <a href="mailto:parulhospital123@gmail.com" className="text-[#00A297] hover:text-[#007a70] font-medium text-lg">
              parulhospital123@gmail.com
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <a href='https://maps.app.goo.gl/oYqpkrzJcMqR6keP8' className="bg-[#00A297] bg-opacity-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </a >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">Our Hospital Location</p>
            <address className="not-italic text-[#00A297]">
              Parul Hospital, Shivaji Nagar, Bhopal
            </address>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="text-[#00A297] mr-2" /> Leave Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A297]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A297]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A297]"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A297]"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#00A297] hover:bg-[#007a70] text-white font-medium py-3 px-4 rounded-lg transition duration-300 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.716058979678!2d77.4128893154416!3d23.18573498487056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a5e9a735a1%3A0x1d5a6358a1a3e1b4!2sShivaji%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ minHeight: '400px', border: '0' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Parul Hospital Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
     
    </div>
  );
};

export default ContactUs;