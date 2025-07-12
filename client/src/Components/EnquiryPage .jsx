// import React, { useState } from 'react';
// import {
//   FaHeart,
//   FaBrain,
//   FaBone,
//   FaChild,
//   FaEye,
//   FaAllergies,
//   FaLungs,
//   FaTooth,
//   FaFemale,
//   FaProcedures,
//   FaCalendarAlt,
//   FaUser,
//   FaPhone,
//   FaEnvelope,
//   FaCommentMedical
// } from 'react-icons/fa';

// const EnquiryPage = () => {
//   // Form state with two-way binding
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     department: '',
//     enquiryType: 'question',
//     message: '',
//     preferredDate: '',
//     preferredTime: ''
//   });

//   // Departments data
//   const departments = [
//     { id: 'cardiology', name: 'Cardiology', icon: <FaHeart /> },
//     { id: 'neurology', name: 'Neurology', icon: <FaBrain /> },
//     { id: 'orthopedics', name: 'Orthopedics', icon: <FaBone /> },
//     { id: 'pediatrics', name: 'Pediatrics', icon: <FaChild /> },
//     { id: 'ophthalmology', name: 'Ophthalmology', icon: <FaEye /> },
//     { id: 'dermatology', name: 'Dermatology', icon: <FaAllergies /> },
//     { id: 'pulmonology', name: 'Pulmonology', icon: <FaLungs /> },
//     { id: 'dentistry', name: 'Dentistry', icon: <FaTooth /> },
//     { id: 'gynecology', name: 'Gynecology', icon: <FaFemale /> },
//     { id: 'general-surgery', name: 'General Surgery', icon: <FaProcedures /> }
//   ];

//   // Handle input changes (two-way binding)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to your backend
//     alert('Your enquiry has been submitted successfully!');
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       department: '',
//       enquiryType: 'question',
//       message: '',
//       preferredDate: '',
//       preferredTime: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="md:flex">
//           {/* Left Side - Image */}
//           <div className="md:w-1/2 bg-[#00A297] flex items-center justify-center p-8">
//             <div className="text-center text-white">
//               <img 
//                 src="https://images.unsplash.com/photo-1659353888922-7c7b1ad21650?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Medical Illustration"
//                 className="w-full h-auto rounded-lg mb-6"
//               />
//               <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
//               <p className="mb-6">Our team of medical professionals is ready to assist you with your healthcare needs.</p>
//               <div className="flex justify-center space-x-4">
//                 <div className="bg-white p-3 rounded-full">
//                   <FaPhone className="text-blue-950 text-xl" />
//                 </div>
//                 <div className="bg-white p-3 rounded-full">
//                   <FaEnvelope className="text-blue-950 text-xl" />
//                 </div>
//                 <div className="bg-white p-3 rounded-full">
//                   <FaCalendarAlt className="text-blue-950 text-xl" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form */}
//           <div className="md:w-1/2 p-8">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">Patient Enquiry Form</h1>
//               <p className="text-gray-600">Have questions or need an appointment? Send us your enquiry.</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Personal Information */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaUser className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaEnvelope className="text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaPhone className="text-gray-400" />
//                     </div>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                       placeholder="+91 9876543210"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
//                     Department <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="department"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     required
//                     className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                   >
//                     <option value="">Select Department</option>
//                     {departments.map((dept) => (
//                       <option key={dept.id} value={dept.id}>
//                         {dept.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Enquiry Type */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-3">
//                   Enquiry Type <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex space-x-6">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       name="enquiryType"
//                       value="question"
//                       checked={formData.enquiryType === 'question'}
//                       onChange={handleChange}
//                       className="h-4 w-4 text-[#00A297] focus:ring-blue-950"
//                     />
//                     <span className="ml-2 text-gray-700">General Question</span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     {/* <input */}
//                       type="radio"
//                       name="enquiryType"
//                       value="appointment"
//                       checked={formData.enquiryType === 'appointment'}
//                       onChange={handleChange}
//                       className="h-4 w-4 text-[#00A297] focus:ring-blue-950"
//                     />
//                     <span className="ml-2 text-gray-700">Appointment Request</span>
//                   </label>
//                 </div>
//               </div>

//               {/* Appointment Details (conditionally shown) */}
//               {formData.enquiryType === 'appointment' && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="relative">
//                     <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
//                       Preferred Date <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaCalendarAlt className="text-gray-400" />
//                       </div>
//                       <input
//                         type="date"
//                         id="preferredDate"
//                         name="preferredDate"
//                         value={formData.preferredDate}
//                         onChange={handleChange}
//                         required
//                         min={new Date().toISOString().split('T')[0]}
//                         className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                       />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
//                       Preferred Time <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       id="preferredTime"
//                       name="preferredTime"
//                       value={formData.preferredTime}
//                       onChange={handleChange}
//                       required
//                       className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                     >
//                       <option value="">Select Time Slot</option>
//                       <option value="09:00-11:00">Morning (9:00 AM - 11:00 AM)</option>
//                       <option value="11:00-13:00">Late Morning (11:00 AM - 1:00 PM)</option>
//                       <option value="14:00-16:00">Afternoon (2:00 PM - 4:00 PM)</option>
//                       <option value="16:00-18:00">Evening (4:00 PM - 6:00 PM)</option>
//                     </select>
//                   </div>
//                 </div>
//               )}

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   {formData.enquiryType === 'question' ? 'Your Question' : 'Additional Notes'} <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
//                     <FaCommentMedical className="text-gray-400" />
//                   </div>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950"
//                     placeholder={formData.enquiryType === 'question' ? 'Type your question here...' : 'Any additional information about your appointment...'}
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-950 hover:bg-blue-960 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                   Submit Enquiry
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnquiryPage;


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
            <div className="text-center text-white">
              <div className="mb-8">
                {/* Replace with your actual image */}
                <div className="mx-auto w-40 h-40 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center mb-6">
                  <svg 
                    className="w-20 h-20 text-[#F7A582]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    
{/* <MdMedicalServices size={24} /> */}
<FaUserDoctor  size={24}/>
                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> */}
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">We Care About Your Health</h2>
              <p className="text-lg mb-6">
                Our team of specialists is ready to assist you with any questions or concerns.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
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