import React, { useState } from 'react';
import { FaHeart, FaBrain, FaBone, FaClinicMedical } from 'react-icons/fa';

export default function DepartmentsWithTabs() {
  const [activeDept, setActiveDept] = useState(null);
  const [activeTab, setActiveTab] = useState('services');

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <FaHeart className="w-5 h " />,
      description: 'Comprehensive heart care services',
      tabs: {
        services: {
          title: 'Services',
          content: [
            'Echocardiography',
            'Angioplasty',
            'Pacemaker Implantation',
            'Cardiac Rehabilitation'
          ]
        },
        doctors: {
          title: 'Doctors',
          content: ['Dr. Sharma', 'Dr. Patel', 'Dr. Khan']
        },
        facilities: {
          title: 'Facilities',
          content: [
            '24/7 Cardiac Emergency',
            'Cath Lab',
            'Non-invasive Cardiology Unit'
          ]
        }
      }
    },
    // Add other departments similarly
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Departments</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Department Selection */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => {
                  setActiveDept(dept.id);
                  setActiveTab('services');
                }}
                className={`px-6 py-3 rounded-full whitespace-nowrap flex items-center ${
                  activeDept === dept.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-md transition-colors`}
              >
                <span className="mr-2 text-w">{dept.icon}</span>
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Department Details with Tabs */}
        {activeDept && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {departments
              .filter((dept) => dept.id === activeDept)
              .map((dept) => (
                <div key={dept.id}>
                  {/* Department Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center">
                      <div className="p-3 bg-black bg-opacity-10 rounded-full mr-4">
                        {React.cloneElement(dept.icon, { className: "w-8 h-8 text-black" })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{dept.name}</h3>
                        <p className="text-gray-600">{dept.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tabs Navigation */}
                  <div className="border-b border-gray-200">
                    <nav className="flex">
                      {Object.keys(dept.tabs).map((tabId) => (
                        <button
                          key={tabId}
                          onClick={() => setActiveTab(tabId)}
                          className={`px-6 py-4 font-medium text-sm ${
                            activeTab === tabId
                              ? 'border-b-2 border-primary text-primary'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {dept.tabs[tabId].title}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {dept.tabs[activeTab].content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}