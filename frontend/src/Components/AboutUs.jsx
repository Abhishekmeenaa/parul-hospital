import React from "react";
import hospital from "../assets/Hospital.jpg"
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

const AboutUs = () => {

  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative bg-text-white py-5 px-4">
        <div className="text-center ">
          <h2 className="text-3xl md:text-3xl text-[#192131] font-bold mb-2">
            About <span className="text-[#00A297]">Parul</span> Hospital
          </h2>
  
  <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />  
          <p className="text-sm md:text-xl text-gray-500 max-w-xl mx-auto">
            "Because we respect... life" - Providing compassionate healthcare
            since 2001
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="md:py-2 px-4 md:mb-2 container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 hidden md:flex relative">
            <img
              src={hospital}
              alt="Hospital Team"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#00A297] text-white p-6 rounded-xl shadow-lg hidden md:block">
              <span className="text-2xl font-bold block">2001</span>
              <span className="text-sm">Established</span>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* <h2 className="text-3xl font-bold text-center md:text-start text-gray-800 mb-4 relative pb-2">
              <span className="absolute bottom-0 left-35 md:left-0 t w-16 h-1 rounded-sm bg-[#00A297]"></span>
              Our <span className="text-[#00A297] ">Journey</span>
            </h2> */}
            <p className="text-black mb-6 text-lg italic border-l-4 border-[#00A297] pl-4">
              "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2001 by Dr. Pankaj Agarwal & Dr. Meeta Agarwal, Parul
              Hospital has grown from a modest clinic to a NABH-accredited
              healthcare institution.
            </p>
            <p className=" mb-4 text-gray-600">
              We combine cutting-edge medical technology with compassionate care
              to serve our community with affordable, high-quality healthcare
              services.
            </p>
            <div className="hidden md:flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                <div className="bg-[#00A297] bg-opacity-20 p-2 rounded-full mr-3">
                  <FaHospital className="text-lg text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">150+ Beds</h4>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                <div className="bg-[#00A297] bg-opacity-20 p-2 rounded-full mr-3">
                  <FaUserMd className="text-lg text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    50+ Specialists
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default AboutUs;
