// components/DoctorProfile.js
import { Link, useParams } from 'react-router-dom';
import { FaUserMd, FaStethoscope, FaPhone, FaMapMarkerAlt, FaClinicMedical } from "react-icons/fa";
import drprakhar from "../assets/doctors/prakhar.jpg"
import kirti  from "../assets/doctors/kirti.jpg"

const doctorsData = {
  // "dr-pankaj-agarwal": {
  //   id: 2,
  //   name: "Dr. Pankaj Agarwal",
  //   qualification: "MBBS, MD Medicine",
  //   specialization: "Special interest in Cardiology, Gastroenterology, Diabetology, Critical care",
  //   experience: "20+ years",
  //   about: "Senior consultant with extensive experience in internal medicine and critical care.",
  //   image: ""
  // },

  // "dr-prakhar-agarwal":{
  //    id: 1,
  //     slug: "dr-prakhar-agarwal",
  //     name: "Dr. Prakhar Agarwal",
  //     qualification: "MBBS, MD Pulmonary medicine",
  //     specialization: "Specialist in Asthma & Allergy, Critical Care, TB, Sleep disorders & Pulmonary Rehabilitation",
  //     image: "/"

  // },

  "dr-prakhar-agarwal":{ 
    id: 1,
    slug: "",
    name: "Dr. Prakhar Agarwal",
    qualification: "DM in Pulmonary, Critical Care & Sleep Medicine, MD (Chandigarh), DNB, MNAMS, DAA (CMC Vellore) – Allergy Specialist",
    specialization: "Specialist in Asthma, Allergy, Critical Care, TB, Sleep Disorders & Pulmonary Rehabilitation",
    experience: "Ex. Senior Resident – AIIMS Delhi",
    image: drprakhar,
  },
  
 "dr-kirti-kadian": { 
     id: 3,
    // slug: "",
    name: "Dr. Kirti Kadian",
    qualification: "MD, DM Pulmonary, Critical Care & Sleep Medicine",
    specialization: "Pulmonary Rehabilitation Expert",
    experience: "Ex. Senior Resident – PGIMER Rohtak",
    // registration: "REG MP: 43079",
    image: kirti, // Replace with actual import e.g. import drkirti from "../assets/..."
  },
    

  // ... other doctors data
};

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = doctorsData[slug];

  if (!doctor) {
    return <div className="text-center py-12">Doctor not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            {/* Doctor Image */}
            <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              {doctor.image ? (
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="rounded-lg "
                />
              ) : (
                <FaUserMd className="text-gray-400 text-8xl" />
              )}
            </div>
            
            {/* Doctor Details */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
              <p className="text-blue-400 text-xl font-medium mb-4">{doctor.qualification}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                  <FaClinicMedical className="mr-2" /> About Doctor
                </h2>
                <p className="text-gray-600">{doctor.about}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {doctor.specialization && (
                  <div className="flex items-start">
                    <FaStethoscope className="text-gray-500 mr-2 mt-1" />
                    <div>
                      <h3 className="font-semibold">Specialization</h3>
                      <p className="text-gray-600">{doctor.specialization}</p>
                    </div>
                  </div>
                )}
                
                {doctor.experience && (
                  <div className="flex items-center">
                    <span className="font-semibold">Experience:</span>
                    <span className="ml-2 text-gray-600">{doctor.experience}</span>
                  </div>
                )}
              </div>
              
              <Link className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}