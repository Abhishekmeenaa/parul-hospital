import React, { useState } from 'react';
import {
  FaHeart as HeartIcon,
  FaBrain as BrainIcon,
  FaBone as BoneIcon,
  FaChild as ChildIcon,
  FaEye as EyeIcon,
  FaAllergies as SkinIcon,
  FaLungs as LungIcon,
  FaTooth as DentalIcon,
  FaProcedures as SurgeryIcon,
  FaFemale as GyneIcon
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Departments() {
  const [activeDept, setActiveDept] = useState('cardiology');

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: <HeartIcon className="w-5 h-5" />,
      description: 'Comprehensive heart care services',
      services: [
        'Echocardiography',
        'Angioplasty',
        'Pacemaker Implantation',
        'Cardiac Rehabilitation',
        'Stress Tests',
        'Holter Monitoring'
      ],
      doctors: ['Dr. Sharma', 'Dr. Patel', 'Dr. Khan', 'Dr. Kapoor']
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: <BrainIcon className="w-5 h-5" />,
      description: 'Specialized brain and nervous system care',
      services: [
        'EEG Testing',
        'Neurological Rehabilitation',
        'Epilepsy Treatment',
        'Stroke Management',
        'EMG/NCS Studies',
        'Botulinum Toxin Therapy'
      ],
      doctors: ['Dr. Gupta', 'Dr. Reddy', 'Dr. Iyer']
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: <BoneIcon className="w-5 h-5" />,
      description: 'Bone and joint care specialists',
      services: [
        'Joint Replacement',
        'Arthroscopy',
        'Fracture Treatment',
        'Spinal Surgery',
        'Sports Injury Management',
        'Pediatric Orthopedics'
      ],
      doctors: ['Dr. Singh', 'Dr. Joshi', 'Dr. Malhotra']
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: <ChildIcon className="w-5 h-5" />,
      description: 'Specialized care for infants and children',
      services: [
        'Well-baby Checkups',
        'Vaccinations',
        'Childhood Illness Management',
        'Developmental Assessments',
        'Adolescent Medicine',
        'Neonatal Care'
      ],
      doctors: ['Dr. Mehta', 'Dr. Nair', 'Dr. Choudhary', 'Dr. Banerjee']
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      icon: <EyeIcon className="w-5 h-5" />,
      description: 'Eye care and vision services',
      services: [
        'Cataract Surgery',
        'LASIK Surgery',
        'Glaucoma Treatment',
        'Retinal Procedures',
        'Pediatric Ophthalmology',
        'Corneal Transplants'
      ],
      doctors: ['Dr. Agarwal', 'Dr. Desai', 'Dr. Rao']
    },
    {
      id: 'dermatology',
      name: 'Dermatology',
      icon: <SkinIcon className="w-5 h-5" />,
      description: 'Skin, hair and nail care specialists',
      services: [
        'Acne Treatment',
        'Psoriasis Management',
        'Skin Cancer Screening',
        'Cosmetic Dermatology',
        'Hair Disorder Treatment',
        'Laser Therapy'
      ],
      doctors: ['Dr. Kapoor', 'Dr. Menon', 'Dr. Bhatia']
    },
    {
      id: 'pulmonology',
      name: 'Pulmonology',
      icon: <LungIcon className="w-5 h-5" />,
      description: 'Respiratory system and lung care',
      services: [
        'Asthma Management',
        'COPD Treatment',
        'Sleep Studies',
        'Bronchoscopy',
        'Pulmonary Rehabilitation',
        'Interstitial Lung Disease Care'
      ],
      doctors: ['Dr. Khan', 'Dr. Trivedi', 'Dr. Srinivasan']
    },
    {
      id: 'dentistry',
      name: 'Dentistry',
      icon: <DentalIcon className="w-5 h-5" />,
      description: 'Complete oral health services',
      services: [
        'Root Canal Treatment',
        'Dental Implants',
        'Orthodontics',
        'Oral Surgery',
        'Pediatric Dentistry',
        'Teeth Whitening'
      ],
      doctors: ['Dr. Jain', 'Dr. Roy', 'Dr. Mathur', 'Dr. Khanna']
    },
    {
      id: 'gynecology',
      name: 'Gynecology',
      icon: <GyneIcon className="w-5 h-5" />,
      description: 'Women\'s health and wellness',
      services: [
        'Annual Exams',
        'Family Planning',
        'Menopause Management',
        'Minimally Invasive Surgery',
        'Fertility Evaluation',
        'Urogynecology'
      ],
      doctors: ['Dr. Sharma', 'Dr. Das', 'Dr. Mukherjee', 'Dr. Chawla']
    },
    {
      id: 'general-surgery',
      name: 'General Surgery',
      icon: <SurgeryIcon className="w-5 h-5" />,
      description: 'Comprehensive surgical services',
      services: [
        'Appendectomy',
        'Hernia Repair',
        'Gallbladder Surgery',
        'Colon Surgery',
        'Breast Surgery',
        'Minimally Invasive Procedures'
      ],
      doctors: ['Dr. Verma', 'Dr. Chatterjee', 'Dr. Biswas']
    }
  ];
  

  return (
    <section className="py-12 bg-gray-50">
         {/* <div className=" mb-12 bg-gradient-to-r from-[#00A297]/10 to-[#00788C]/10  p-8a text-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00A297]/20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#00788C]/20"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Our <span className="text-[#00A297]">Departments</span>
          </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals
          </p>
           <div className="container text-start mx-auto px-2 py-4 text-sm ">
                  <Link to="/" className="text-gray-600">Home</Link> &gt; <span>Our Departments</span>
                </div>
          
         
           
          </div>
        </div> */}
      <div className="container mx-auto px-4">
      

        {/* Mobile View - Tabs on Top */}
        <div className="block md:hidden mb-8">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`flex-shrink-0 flex items-center px-4 py-2 rounded-full text-sm ${
                  activeDept === dept.id
                    ? 'bg-[#00A297] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{dept.icon}</span>
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop View - Tabs on Left Side */}
          <div className="hidden md:block w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6 border border-gray-100">
              <ul className="divide-y divide-gray-100">
                {departments.map((dept) => (
                  <li key={dept.id}>
                    <button
                      onClick={() => setActiveDept(dept.id)}
                      className={`w-full px-6 py-4 text-left flex items-center transition-all ${
                        activeDept === dept.id
                          ? 'bg-[#00A297] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3">{dept.icon}</span>
                      <span className="font-medium">{dept.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content - Bottom on Mobile, Right on Desktop */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            {departments
              .filter((dept) => dept.id === activeDept)
              .map((dept) => (
                <div key={dept.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="p-3 bg-[#00A297] bg-opacity-10 rounded-full mr-4">
                        {React.cloneElement(dept.icon, { className: "w-6 h-6 text-white " })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#161B38]">{dept.name}</h3>
                        <p className="text-gray-600">{dept.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00A297]">Services</h4>
                        <ul className="space-y-2">
                          {dept.services.map((service, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-[#00A297] rounded-full mr-2"></span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#00A297]">Our Specialists</h4>
                        <ul className="space-y-2">
                          {dept.doctors.map((doctor, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-[#00A297] rounded-full mr-2"></span>
                              {doctor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}