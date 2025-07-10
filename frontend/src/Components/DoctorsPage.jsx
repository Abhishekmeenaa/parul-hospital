import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaUserMd, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaRegCalendarAlt, FaStar } from "react-icons/fa";
import drprakhar from "../assets/doctors/prakhar3.jpg";
import kirti from "../assets/doctors/kirti.jpg";
import meeta from "../assets/doctors/meeta.jpg";
import pankaj from "../assets/doctors/pankaj.jpg"

const DoctorsPage = () => {
  const featuredDoctors = [
    {
      id: 1,
      slug: "dr-prakhar-agarwal",
      name: "Dr. Prakhar Agarwal",
      qualification: "DM Pulmonary, Critical Care & Sleep Medicine",
      specialization: " Allergy Asthma Sleep & Critical Care",
      experience: "Ex. Senior Resident – AIIMS Delhi",
      image: drprakhar,
      timings: [
        { day: "Morning", time: "10:00 AM - 2:00 PM" },
       { day: "Evening", time: "6:00 PM - 8:00 PM" }
        // { day: "Sunday", time: "Emergency Only" }
      ],
      consultationFee: "₹800",
      rating: "4.9"
    },
    {
      id: 2,
      slug: "dr-kirti-kadian",
      name: "Dr. Kirti Kadian",
      qualification: "Pulmonary Rehabilitation, Interstitial Lung Disease, Sleep & Critical Care",
      specialization: "Pulmonary Rehabilitation, Sleep Medicine",
      experience: "Ex.Senior Resident-PGIMER Rohtak",
      image: kirti,
      timings: [
          { day: "Morning", time: "10:00 AM - 2:00 PM" },
       { day: "Evening", time: "6:00 PM - 8:00 PM" }
        // { day: "Sunday", time: "Closed" }
      ],
      // consultationFee: "₹700",
      rating: "4.8"

    },
      {
      id: 3,
      slug: "dr-meeta-agarwal",
      name: "Dr. Meeta Agarwal",
      qualification: "MD Obs. & Gynae.",
      specialization: "Adolescent & Menopausal Health, Preventive Gynecology",
      experience:"45+ years of expertise",
      image: meeta,
      timings: [
     { day: "Morning", time: "11:00 AM - 1:00 PM" },
  { day: "Evening", time: "7:00 PM - 8:00 PM" }

      ],
      rating: "4.7"
    },
    {
      id: 4,
      slug: "dr-pankaj-agarwal",
      name: "Dr. Pankaj Agarwal",
      qualification: "MD Medicine",
      specialization: "Cardiology, Gastroenterology, Diabetology",
       experience:"45+ years of expertise",
      image: pankaj,

      timings: [
  { day: "Morning", time: "11:00 AM - 1:00 PM" },
  { day: "Evening", time: "6:30 PM - 8:30 PM" }
      ],
      rating: "4.6"
    }
  ];

  const otherDoctors = [
  
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
     
      <div className=" mb-4 bg-gradient-to-r from-[#00A297]/10 to-[#00788C]/10  p-8 text-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00A297]/20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#00788C]/20"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black  p-2 py-4 mt-4">
             <h1 className="text-4xl font-bold text-gray-800 ">
              Meet <span className="text-[#00A297]">Our Specialist</span> Doctors
            </h1>
          </h1>
          <p className="text-xl text-gray-600  mb-4">
            Highly qualified specialists providing comprehensive care with flexible timings
          </p>
         
        </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Doctors Section */}
        <div className="mb-20">
         

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Doctor Image with Overlay */}
                  <div className="md:w-2/4 h-64 md:h-auto relative group overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full Md:object-cover   object-center  transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center">
                        {/* <div clabussName="bg-[#00A297] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <FaStar className="mr-1 text-yellow-300" />
                          {doctor.rating}
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="md:w-3/4 p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                      <p className="text-[#00A297] font-medium mb-3">{doctor.qualification}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">Specialization</h4>
                        <p className="text-gray-700">{doctor.specialization}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 mb-1">Experience</h4>
                          <p className="text-gray-700">{doctor.experience}</p>
                        </div>
                       
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center">
                          <FaClock className="mr-2" /> Available Timings
                        </h4>
                        <ul className="space-y-2">
                          {doctor.timings.map((timing, index) => (
                            <li key={index} className="flex">
                              <span className="text-gray-700 font-medium w-20">{timing.day}</span>
                              <span className="text-gray-600 flex-grow">{timing.time}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                     
                      <Link
                        to={`/appointment/${doctor.id}`}
                        className="flex-1 text-center bg-[#00A297] hover:bg-[#008B8B] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        <FaCalendarAlt className="mr-2" />
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Doctors Section */}
        <div className="mb-16">
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-[#00A297]/30">
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <FaUserMd className="text-2xl" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                      <p className="text-[#00A297] font-medium text-sm mb-2">{doctor.qualification}</p>
                      <div className="flex items-center text-sm text-yellow-600 mb-2">
                        <FaStar className="mr-1" />
                        {doctor.rating}
                      </div>
                    </div>
                  </div>
                  
                  <div className="my-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Specialization</h4>
                    <p className="text-gray-600">{doctor.specialization}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center">
                      <FaRegCalendarAlt className="mr-2" /> Available On
                    </h4>
                    <ul className="space-y-2">
                      {doctor.timings.map((timing, index) => (
                        <li key={index} className="flex">
                          <span className="text-gray-700 font-medium w-20">{timing.day}</span>
                          <span className="text-gray-600 flex-grow">{timing.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <Link
                      to={`/doctor/${doctor.slug}`}
                      className="flex-1 text-center bg-white border border-[#00A297] text-[#00A297] hover:bg-[#00A297] hover:text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/appointment"
                      className="flex-1 text-center bg-[#00A297] hover:bg-[#008B8B] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center justify-center"
                    >
                      <FaCalendarAlt className="mr-2" />
                      Book Slot
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-r from-[#00A297] to-[#00788C] p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need an Appointment?</h3>
              <p className="text-white/90 mb-6 text-lg">
                We offer multiple convenient ways to schedule your visit with our specialists.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Online Booking</h4>
                    <p className="text-sm text-white/80">24/7 appointment scheduling</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone Call</h4>
                    <p className="text-sm text-white/80">0755-2556620 , 2556669</p>
                    <p className="text-sm text-white/80" >7999732232</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Walk-in Clinic</h4>
                    <p className="text-sm text-white/80">Parul Hospital, Shivaji Nagar, Bhopal, Madhya Pradesh 462016</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Clinic Hours</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">Emergency Only</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-[#00A297] hover:bg-[#008B8B] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl w-full text-center"
              >
                Get Directions to Clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;