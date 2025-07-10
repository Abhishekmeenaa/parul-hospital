import React from 'react'
import nabh from "../assets/nabh.png"
import {
  FaAward,
  FaUserMd,
  FaLeaf,
  FaHospital,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaHeartbeat,
  FaProcedures,
  FaUserNurse,
  FaHandsHelping,
} from "react-icons/fa";
  const achievements = [
    {
      icon: <FaAward />,
      title: "NABH Certified",
      description: "First in Bhopal with full accreditation since 2018",
    },
    {
      icon: <FaUserMd />,
      title: "Government Award",
      description: "Recognized for PMSMA service excellence",
    },
    {
      icon: <FaLeaf />,
      title: "Eco Initiative",
      description: "Pioneered compost unit under Swachh Bharat",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Impact",
      description: "Serving 1,00,000+ patients with trust and care",
    },
  ];

  const stats = [
    { value: "22+", label: "Years Experience", icon: <FaHospital /> },
    { value: "50+", label: "Specialists", icon: <FaUserMd /> },
    { value: "10K+", label: "Patients Yearly", icon: <FaProcedures /> },
    { value: "24/7", label: "Emergency", icon: <FaUserNurse /> }
  ];


const OurMilestone = () => {
  return (
    <div>
           {/* Achievements Section */}
     <section className="py-3 bg-gray-50">
  <div className="container mx-auto md:px-0 px-4 max-w-7xl">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
        Our <span className="text-[#00A297]">Milestones</span>
      </h2>
  <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />   
     <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-xl ">
        Celebrating excellence in healthcare through significant achievements
      </p>
      
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((item, index) => (
        <div
          key={index}
          className="group transition-all duration-300 hover:-translate-y-1"
        >
          <div className="bg-white text-center p-5 flex flex-col justify-center items-center text-c rounded-lg shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12  bg-[#00A297] text-white bg-opacity-10 rounded-full flex items-center justify-center text-2xl  mb-3">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 ">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> 

      {/* NABH Section */}
       <section className="py-4  bg-white">
        <div className="container mx-auto md:px-0 px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <img
                src={nabh}
                  alt="NABH Certified"
                  className="h-40 w-96 object-contain mx-auto"
                />
                <div className="text-center mt-4">
                  <span className="bg-[#00A297] border text-white text-xs px-3 py-1 rounded-full">
                    Since 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative pb-2">
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#00A297]"></span>
                <span className="text-[#00A297]">NABH</span> Accreditation
              </h2>
              <p className="text-gray-600 mb-4">
                As Bhopal's premier NABH accredited hospital, we adhere to
                India's highest standards for patient safety and quality care.
              </p>
              <p className="text-gray-600 mb-6">
                The National Accreditation Board for Hospitals sets rigorous
                benchmarks that we proudly meet and exceed in our daily
                operations.
              </p>
              <div className="bg-[#00A297] bg-opacity-10 border-l-4 border-[#00A297] p-4 rounded-r-lg">
                <p className="text-white italic">
                  "NABH accreditation reflects our unwavering commitment to
                  excellence in healthcare delivery."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurMilestone