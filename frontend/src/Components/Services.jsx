import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('services');

  // Services Data
  const services = [
    "OPD Services",
    "IPD Services",
    "Modular Operation Theatre",
    "Fully Equipped ICU & Modern Ventilator Support (Multipara Monitor)",
    "Pathology Lab - Fully Automated & 24x7 Emergency Services",
    "Pharmacy (On Premises)",
    "Insurance Cashless Facility from All Major Insurance Providers",
  ];

  // Facilities Data
  const facilities = [
       "Central Oxygen & Suction Facility",
    "Ultrasonography (USG)",
    "X-Ray (Digital Facility)",
     "ECG, Echocardiography & TMT",
     "Leval 1 sleep lab",
     "FOT & Spirometry  ",
     "Bronchoscopy & Pleuroscopy",


    // "General Ward, Private Room, Deluxe Room Available",
    // "Best Healthcare Treatment",
    // "Insurance Reimbursement from All Major Insurance Providers",
    // "24/7 Emergency Services",
    // "Advanced Diagnostic Facilities",
    // "Specialist Consultations",
    // "Critical Care Unit",
    // "Ambulance Services",
    // "Trauma Center",
    // "Dietary Services",
    // "Physiotherapy Center"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-2">
          Our <span className='text-[#00A297]'>Facilities &</span> Services
        </h1>
        <div className="w-20 h-1 bg-[#00A297] mx-auto mb-2"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive healthcare services with modern facilities and expert care.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-2">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
              activeTab === 'services'
                ? 'bg-[#00A297] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
              activeTab === 'facilities'
                ? 'bg-[#00A297] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Facilities
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'services' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((item, index) => (
              <div 
                key={`service-${index}`}
                className="flex items-start p-2 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center justify-center bg-[#00A297] text-white rounded-full w-6 h-6 flex-shrink-0 mr-3 mt-1">
                  {index + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {facilities.map((item, index) => (
              <div 
                key={`facility-${index}`}
                className="flex items-start p-2 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
              <span className="inline-flex items-center justify-center bg-[#00A297] text-white rounded-full w-6 h-6 flex-shrink-0 mr-3 mt-1">
                  {index + 8}
                </span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional Information */}
   
    </div>
  );
};

export default Services;