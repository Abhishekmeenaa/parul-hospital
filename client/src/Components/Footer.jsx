import React from "react";
import { 

  FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, 
  FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
  FaHospital, FaUserMd, FaProcedures, FaHeartbeat
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Hospital Info */}
          <div className="space-y-5">
            <div className="flex items-center">
              <FaHospital className="text-3xl text-[#00A297] mr-2" />
              <h3 className="text-2xl font-bold">
                <span className="text-white">Parul</span>
                <span className="text-[#00A297]">Hospital</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing compassionate and comprehensive healthcare services with state-of-the-art facilities and expert medical professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00A297] flex items-center justify-center transition-all">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00A297] flex items-center justify-center transition-all">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00A297] flex items-center justify-center transition-all">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00A297] flex items-center justify-center transition-all">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden  md:block">
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-[#00A297] inline-block">Quick Links</h4>
            
<ul className="space-y-3">
  {[
    { name: 'Home', path: '/', icon: <FaHospital className="text-[#00A297] mr-2" /> },
    { name: 'About Us', path: '/about', icon: <FaUserMd className="text-[#00A297] mr-2" /> },
    { name: 'Services', path: '/services', icon: <FaProcedures className="text-[#00A297] mr-2" /> },
    { name: 'Doctors', path: '/doctor', icon: <FaUserMd className="text-[#00A297] mr-2" /> },
    { name: 'Appointments', path: '/appointment', icon: <FaHeartbeat className="text-[#00A297] mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <FaPhone className="text-[#00A297] mr-2" /> }
  ].map((item) => (
    <li key={item.name}>
      <Link
        to={item.path}
        className="flex items-center hover:text-[#00A297] transition-colors"
      >
        {item.icon} {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Departments */}
          <div className="hidden  md:block">
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-[#00A297] inline-block">Departments</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Emergency', 'Cardiology', 'Neurology', 'Pediatrics',
                'Orthopedics', 'Maternity', 'Surgery', 'Physiotherapy'
              ].map((dept) => (
                <a 
                  key={dept} 
                  href="#" 
                  className="text-gray-300 hover:text-[#00A297] transition-colors text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#00A297] rounded-full mr-2"></span>
                  {dept}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-[#00A297] inline-block">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#00A297] mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Parul Hospital, Shivaji Nagar, Bhopal, Madhya Pradesh 462016</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#00A297] mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300  whitespace-nowrap ">Contact No: 0755-2556620, 2556669</p>
                  <a href="tel:7997732332" className="text-gray-300 text-sm">Mobile No:  7997732332</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#00A297] mr-3 flex-shrink-0" />
                <p className="text-gray-300">parulhospital123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-8 md:mb-0">
              &copy; {new Date().getFullYear()} Parul Hospital. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#00A297] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00A297] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00A297] text-sm transition-colors">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-[#00A297] text-sm transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}