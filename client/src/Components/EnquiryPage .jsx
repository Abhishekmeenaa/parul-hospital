


 import { useState } from 'react';

//  import { MdMedicalServices } from "react-icons/md";
 import { FaUserDoctor } from "react-icons/fa6";

export default function CenteredEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'question',
    department: '',
    message: ''
  });

  const departments = [
    'General Medicine',
    'Paediatrics',
    'Eye Care',
    'Orthopedics',
    'Cardiology'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'question',
      department: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Centered Container */}
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Side (Left) - Centered Content */}
          <div className="hidden md:flex md:w-1/2 bg-[#00A297]  items-center justify-center p-8 md:p-12">
          
          </div>

          {/* Form Side (Right) - Centered Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Patient Enquiry</h2>
                <p className="text-gray-600 mt-2">Fill out the form to get in touch</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type*</label>
                  <div className="flex justify-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="enquiryType"
                        value="question"
                        checked={formData.enquiryType === 'question'}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#00A297] focus:ring-blue-500"
                      />
                      <span className="ml-2">Question</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="enquiryType"
                        value="callback"
                        checked={formData.enquiryType === 'callback'}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#00A297] focus:ring-blue-500"
                      />
                      <span className="ml-2">Callback</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-950 focus:border-blue-500"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                {formData.enquiryType === 'question' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-950 focus:border-blue-500"
                    ></textarea>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#00A297] text-white py-2 px-4 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 transition"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}