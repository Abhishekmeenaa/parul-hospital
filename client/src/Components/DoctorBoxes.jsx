import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPhoneAlt, FaStar, FaUserMd } from "react-icons/fa";
import drprakhar from "../assets/doctors/prakhar.jpg";
import kirti from "../assets/doctors/kirti.jpg";
// import pankaj from "../assets/doctors/passpankaj.jpg"
import pankaj from "../assets/doctors/passpankaj.jpg"
import meeta from "../assets/doctors/passmeeta.jpg"
// import meeta from  "../assets/doctors/passmeeta.jpg"

const DoctorBoxes = () => {
  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Prakhar Agarwal",
      specialization: "DM Pulmonary, Critical Care & Sleep Medicine",
      image: drprakhar,
      timing: "Morning: 10AM-2PM\nEvening: 6PM-8PM",
      fee: "₹800",
    },
    {
      id: 2,
      name: "Dr. Kirti Kadian",
      specialization: "Pulmonary Rehabilitation Sleep Medicine",
      image: kirti,
      timing: "Morning: 10AM-2PM\nEvening: 6PM-8PM",
    },
     {
      id: 4,
      name: "Dr. Pankaj Agarwal",
      specialization: "MD Medicine",
      image: pankaj,
      timing: "Morning 11:00 AM - 1:00 PM\nEvening 6:30 PM - 8:30 PM",
      fee: "₹700",
    },
    {
      id: 3,
      name: "Dr. Meeta Agarwal",
      specialization: "Obstetrics & Gynaecology ",
      image: meeta,
      timing: "Morning 11:00 AM - 1:00 PM\nEvening 7:00 PM - 8:00 PM",
      fee: "₹800",
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
     <section className="relative bg-text-white py-5 px-4">
        <div className="text-center ">
          <h2 className="text-3xl md:text-3xl text-[#192131] font-bold mb-2">
            Our <span className="text-[#00A297]">Medical</span> Experts
          </h2>
          {/* <h1>Our medical experts</h1> */}
        </div>
      </section>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


    {featuredDoctors.map((doctor) => (
      <div
        key={doctor.id}
        className="group bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      >
        {/* Doctor Info */}
        <div className="p-5">
          <div className="flex items-start space-x-4">
            {/* Image */}
            <div className="relative flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-  border-2 border-[#00A297] group-hover:border-[#008B8B] transition-colors shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full flex items-center border border-white shadow">
                <FaStar className="mr-1" size={10} /> {doctor.rating}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 group-hover:text-[#00A297] transition-colors">
                {doctor.name}
              </h3>
              <p className="text-[#00A297] text-sm mt-1">{doctor.specialization}</p>
              <p className="text-gray-500 text-xs mt-2 whitespace-pre-line">
                <span className="block font-semibold text-[11px] text-gray-600">
                  Available Timings
                </span>
                {doctor.timing}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-5 pb-5 mt-auto">
          <div className="flex flex-col space-y-3">
            <Link
              to={`/appointment/${doctor.id}`}
              className="flex items-center justify-center w-full bg-[#00A297] hover:bg-[#008B8B] text-white py-2 px-4 rounded-lg text-sm font-medium transition"
            >
              <FaCalendarAlt className="mr-2" size={14} />
              Book Appointment
            </Link>
            {/* <a
              href={`tel:${doctor.phone || '+919876543210'}`}
              className="flex items-center justify-center w-full border border-[#00A297] text-[#00A297] hover:bg-[#00A297]/5 py-2 px-4 rounded-lg text-sm font-medium transition"
            >
              <FaPhoneAlt className="mr-2" size={14} />
              Call Now
            </a> */}
            <Link to="/doctor" className="flex items-center justify-center w-full border border-[#00A297] text-[#00A297] hover:bg-[#00A297]/5 py-2 px-4 rounded-lg text-sm font-medium transition">
              View
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default DoctorBoxes;