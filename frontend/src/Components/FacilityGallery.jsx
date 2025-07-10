// import React, { useState } from 'react';
// import { FaSearch, FaHospital, FaFlask, FaBed, FaStar, FaArrowRight } from 'react-icons/fa';
// import allergy from "../assets/allergy.jpg"
// import gyencology from "../assets/gyencology.jpg"
// import pulmonary from "../assets/pulmonary.jpg"

// import surgery from "../assets/surgery.jpg"

// import sleep from "../assets/sleep.jpg"
// import critical from "../assets/critical.jpg"



// const FacilityGallery = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const facilities = [
//     {
//       id: 1,
//       name: 'General Medicine & Cardiology',
//       description: 'Providing comprehensive care for general health and heart-related conditions.',
//       image: 'https://st.depositphotos.com/1000423/3080/i/450/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg',
//       type: 'facilities',
//       features: ['Medicine OPD', 'Diabetes & Hypertension Consult', '(Cardiology)']
//     },
//     {
//   id: 2,
//   name: 'Respiratory Clinic',
//   description: 'Offering comprehensive care for respiratory diseases with advanced diagnostic and treatment facilities.',
//   image: 'https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   type: 'facilities',
//   features: [
//     'Superspecialty Pulmonary OPD',
//     'Bronchoscopy & Thoracoscopy',
//     'Advance Lung Function Testing (Spirometry)',
//     'Forced Oscillometry (FOT)'
//   ]

// },
// {
//   id: 3,
//   name: 'Allergy Clinic',
//   description: 'Comprehensive diagnosis and treatment for various allergies through testing and immunotherapy.',
//   image: allergy,
//   type: 'facilities',
//   features: [
//     'Comprehensive Allergy Workup',
//     'Allergy Testing',
//     'Allergy Immunotherapy'
//   ]
// },
// {
//   id: 4,
//   name: 'Sleep Clinic',
//   description: 'Advanced diagnostics and treatment for sleep disorders including sleep studies and therapy.',
//   image:sleep,
//   type: 'facilities',
//   features: [
//     'Level 1 Sleep Test',
//     'Most Advanced Test for Sleep Analysis',
//     'Split Night Study',
//     'Multiple Sleep Latency Test (MSLT)',
//     'Maintenance of Wakefulness Test (MWT)',
//     'Manual CPAP Titration'
//   ]
// },
// {
//   id: 5,
//   name: 'Pulmonary Rehabilitation Center',
//   description: 'Comprehensive management of respiratory illnesses with diet plans and personalized physiotherapy.',
//   image:  pulmonary,
//   type: 'facilities',
//   features: [
//     'Comprehensive Management of Respiratory Illness',
//     'Diet Planning',
//     'Personalized Physiotherapy'
//   ]
// },
//    {
//   id: 6,
//   name: 'Obstetrics & Gynaecology',
//   description: 'Comprehensive care for women including diagnostics and treatments like colposcopy, TVS, and pap smear.',
//   image: "https://t4.ftcdn.net/jpg/01/38/95/23/360_F_138952310_GeanM2r3TSrpWysRUY86A6QFcVMQd6bj.jpg",
//     type: 'facilities',
//   features: [
//     'Colposcopy',
//     'TVS (Transvaginal Sonography)',
//     'Pap Smear',
//     'pre & Post natal Care',
//     'Normal and Cesarean Deliveries',
//     'Menopausal Clinic',
//     'Cervical Cancer Prevetion and Deagnosis',


//   ]
// },
// {
//   id: 7,
//   name: 'Critical Care',
//   description: '24x7 emergency services with modern ICU facilities to handle critical health conditions efficiently.',
//   image: critical,
//   type: 'facilities',
//   features: [
//     'Modern ICU',
//     '24x7 Emergency Services',
//     'Renal Dailysis And Pacemaker Facility',
//     'Expert Team Of Intensivists',
//     'All Emergency Services under one roof'
//   ]
// },
// {
//   id: 8,
//   name: 'General Surgery & Orthopaedics',
//   description: 'Advanced surgical care including orthopaedic procedures, laparoscopic surgery, and minimal invasive surgery.',
//   image: surgery, 
//   type: 'facilities',
//   features: [
//     'Surgery & Orthopaedic OPD',
//     'Laparoscopy',
//     'Minimal Invasive Surgery',
//     'Modular Operation Theatre',
//     'C-Arm Facility'
//   ]
// }





//   ];

//   const diagnostics = [
//     // {
//     //   id: 1,
//     //   name: 'Pathology Lab',
//     //   description: 'NABL accredited diagnostic center',
//     //   image: 'https://images.unsplash.com/photo-1618053448701-5220304dc9ae?q=80&w=2080&auto=format&fit=crop',
//     //   type: 'diagnostics',
//     //   features: ['200+ Tests', 'Same Day Reports', 'Home Collection']
//     // },
//     // {
//     //   id: 2,
//     //   name: 'Imaging Center',
//     //   description: 'Comprehensive radiology services',
//     //   image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop',
//     //   type: 'diagnostics',
//     //   features: ['CT Scan', 'Ultrasound', 'X-Ray']
//     // },
 




//   ];

//   const rooms = [
//     // {
//     //   id: 1,
//     //   name: 'Luxury Suites',
//     //   description: 'VIP patient rooms with amenities',
//     //   image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1174&auto=format&fit=crop',
//     //   type: 'rooms',
//     //   features: ['Private Attendant', 'Smart TV', 'Premium Meals']
//     // },
//     // {
//     //   id: 2,
//     //   name: 'Deluxe Rooms',
//     //   description: 'Comfortable private accommodations',
//     //   image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=2070&auto=format&fit=crop',
//     //   type: 'rooms',
//     //   features: ['AC Rooms', '24/7 Nursing', 'WiFi']
//     // }
//   ];

//   const allItems = [...facilities, ...diagnostics, ...rooms];

//   const filteredItems = activeTab === 'all' 
//     ? allItems.filter(item => 
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : allItems.filter(item => 
//         item.type === activeTab && (
//           item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.description.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );

//   const getTabIcon = (tab) => {
//     switch(tab) {
//       case 'facilities': return <FaHospital className="mr-2" />;
//       case 'diagnostics': return <FaFlask className="mr-2" />;
//       case 'rooms': return <FaBed className="mr-2" />;
//       default: return null;
//     }
//   };

//   return (
//  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-7xl mx-auto">
//     {/* Header */}
//     <div className="text-center mb-12">
//       <h1 className="text-2xl font-bold text-[#161B38] sm:text-3xl">
// Departments and <span className="text-[#00A297]">Clinics</span>
//       </h1>
//       <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
//       <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
//         Experience healthcare excellence with our cutting-edge infrastructure
//       </p>
//     </div>

//     {/* Search and Filter */}
//     <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
//       <div className="relative w-full md:w-96">
//         <input
//           type="text"
//           placeholder="Search facilities..."
//           className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7A582] focus:border-transparent"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//       </div>
      
//       <div className="flex flex-wrap justify-center gap-2">
//         {['all', 'facilities', 'diagnostics', 'rooms'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               activeTab === tab
//                 ? 'bg-[#00A297] text-white shadow-md'
//                 : 'bg-white text-[#161B38] hover:bg-gray-100 shadow-sm'
//             }`}
//           >
//             {getTabIcon(tab)}
//             {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>
//     </div>

//     {/* Gallery Grid */}
//     {filteredItems.length > 0 ? (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredItems.map((item) => (
//           <div 
//             key={`${item.type}-${item.id}`}
//             className="group flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
//           >
//             <div className="relative h-60 overflow-hidden">
//               <img
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 src={item.image}
//                 alt={item.name}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               <div className="absolute bottom-0 left-0 p-6 w-full">
//                 <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
//                 <p className="text-white font-medium">{item.description}</p>
//               </div>
//               <div className="absolute top-4 right-4 bg-[#00A297] text-white text-xs font-bold px-2 py-1 rounded-full">
//                 {item.type === 'facilities' ? 'Facility' : 
//                  item.type === 'diagnostics' ? 'Diagnostic' : 'Room'}
//               </div>
//             </div>
            
//             <div className="flex flex-col flex-grow p-6">
//               <div className="flex-grow">
//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-gray-600 mb-2">KEY FEATURES</h4>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, index) => (
//                       <li key={index} className="flex items-center">
//                         <FaStar className="text-[#00A297] text-xs mr-2" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               {/* <button className="mt-auto w-full flex items-center justify-between gap-2 bg-transparent border border-[#00A297] hover:bg-[#00A297] text-[#00A297] hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
//                 View Details <FaArrowRight />
//               </button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     ) : (
//       <div className="text-center py-12">
//         <h3 className="text-xl text-gray-500">No facilities found matching your search</h3>
//       </div>
//     )}
//   </div>
// </div>
//   );
// };

// export default FacilityGallery;


import React, { useState } from 'react';
import { FaSearch, FaHospital, FaFlask, FaBed, FaStar } from 'react-icons/fa';
import allergy from "../assets/allergy.jpg";
import gyencology from "../assets/gyencology.jpg";
import pulmonary from "../assets/pulmonary.jpg";
import surgery from "../assets/surgery.jpg";
import sleep from "../assets/sleep.jpg";
import critical from "../assets/critical.jpg";

const FacilityGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const facilities = [
    {
      id: 1,
      name: 'General Medicine & Cardiology',
      description: 'Providing comprehensive care for general health and heart-related conditions.',
      image: 'https://st.depositphotos.com/1000423/3080/i/450/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg',
      type: 'facilities',
      features: ['Medicine OPD', 'Diabetes & Hypertension Consult', '(Cardiology)']
    },
    {
      id: 2,
      name: 'Respiratory Clinic',
      description: 'Offering comprehensive care for respiratory diseases with advanced diagnostic and treatment facilities.',
      image: 'https://images.unsplash.com/photo-1743767587847-08c42b31cdec?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'facilities',
      features: [
        'Superspecialty Pulmonary OPD',
        'Bronchoscopy & Thoracoscopy',
        'Advance Lung Function Testing (Spirometry)',
        'Forced Oscillometry (FOT)'
      ]
    },
    {
      id: 3,
      name: 'Allergy Clinic',
      description: 'Comprehensive diagnosis and treatment for various allergies through testing and immunotherapy.',
      image: allergy,
      type: 'facilities',
      features: [
        'Comprehensive Allergy Workup',
        'Allergy Testing',
        'Allergy Immunotherapy'
      ]
    },
    {
      id: 4,
      name: 'Sleep Clinic',
      description: 'Advanced diagnostics and treatment for sleep disorders including sleep studies and therapy.',
      image: sleep,
      type: 'facilities',
      features: [
        'Level 1 Sleep Test',
        'Most Advanced Test for Sleep Analysis',
        'Split Night Study',
        'Multiple Sleep Latency Test (MSLT)',
        'Maintenance of Wakefulness Test (MWT)',
        'Manual CPAP Titration'
      ]
    },
    {
      id: 5,
      name: 'Pulmonary Rehabilitation Center',
      description: 'Comprehensive management of respiratory illnesses with diet plans and personalized physiotherapy.',
      image: pulmonary,
      type: 'facilities',
      features: [
        'Comprehensive Management of Respiratory Illness',
        'Diet Planning',
        'Personalized Physiotherapy'
      ]
    },
    {
      id: 6,
      name: 'Obstetrics & Gynaecology',
      description: 'Comprehensive care for women including diagnostics and treatments like colposcopy, TVS, and pap smear.',
      image: "https://t4.ftcdn.net/jpg/01/38/95/23/360_F_138952310_GeanM2r3TSrpWysRUY86A6QFcVMQd6bj.jpg",
      type: 'facilities',
      features: [
        'Colposcopy',
        'TVS (Transvaginal Sonography)',
        'Pap Smear',
        'Pre & Post natal Care',
        'Normal and Cesarean Deliveries',
        'Menopausal Clinic',
        'Cervical Cancer Prevention and Diagnosis',
      ]
    },
    {
      id: 7,
      name: 'Critical Care',
      description: '24x7 emergency services with modern ICU facilities to handle critical health conditions efficiently.',
      image: critical,
      type: 'facilities',
      features: [
        'Modern ICU',
        '24x7 Emergency Services',
        'Renal Dialysis And Pacemaker Facility',
        'Expert Team Of Intensivists',
        'All Emergency Services under one roof'
      ]
    },
    {
      id: 8,
      name: 'General Surgery & Orthopaedics',
      description: 'Advanced surgical care including orthopaedic procedures, laparoscopic surgery, and minimal invasive surgery.',
      image: surgery,
      type: 'facilities',
      features: [
        'Surgery & Orthopaedic OPD',
        'Laparoscopy',
        'Minimal Invasive Surgery',
        'Modular Operation Theatre',
        'C-Arm Facility'
      ]
    }
  ];

  const filteredItems = facilities.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-[#161B38] sm:text-3xl">
            Departments and <span className="text-[#00A297]">Clinics</span>
          </h1>
          <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Experience healthcare excellence with our cutting-edge infrastructure
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-96 mx-auto mb-12">
          <input
            type="text"
            placeholder="Search facilities..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7A582] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-white font-medium">{item.description}</p>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">KEY FEATURES</h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <FaStar className="text-[#00A297] text-xs mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No facilities found matching your search</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityGallery;
