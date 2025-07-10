import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hospital from "../assets/Hospital.jpg";
import { FaStar, FaGoogle } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: "Level 1 Sleep Lab",
    highlight: "Sleep Wellness",
    description: "Comprehensive sleep studies with advanced monitoring equipment to diagnose and treat sleep disorders effectively.",
    bgImage: Hospital,
    cta: "Book Sleep Test",
    // bgImage: hospital,
    emergency: "Helpdesk: (555) 111-2222",
    features: [
      { icon: "🛏️", text: "Overnight Monitoring" },
      { icon: "🧠", text: "Brain Wave Analysis" },
      { icon: "😴", text: "Sleep Apnea Treatment" },
    ],
    stats: [
      { value: "95%", label: "Accurate Diagnosis" },
      { value: "24/7", label: "Patient Support" },
    ],
  },
  {
    id: 2,
    title: "SAAS Clinic",
    highlight: "Specialty Care",
    description: "Comprehensive outpatient services offering advanced diagnostics, preventive care, and specialty consultations.",
    bgImage: Hospital,
    cta: "Consult Now",
    emergency: "Clinic Helpline: (555) 333-4444",
    features: [
      { icon: "🔬", text: "Advanced Diagnostics" },
      { icon: "👩‍⚕️", text: "Specialist Consultations" },
      { icon: "💊", text: "Preventive Care" },
    ],
    stats: [
      { value: "30+", label: "Specialists Available" },
      { value: "15+", label: "Medical Departments" },
    ],
  },
  {
    id: 3,
    title: "24x7 Emergency",
    highlight: "Rapid Response",
    description: "Round-the-clock emergency services with fully equipped ambulances, critical care units, and trained professionals.",
    bgImage: Hospital,
    cta: "Call Emergency Now",
    emergency: "Emergency: (555) 555-6666",
    features: [
      { icon: "🚑", text: "Ambulance Service" },
      { icon: "⚕️", text: "Critical Care Unit" },
      { icon: "🆘", text: "Trauma Center" },
    ],
    stats: [
      { value: "24/7", label: "Emergency Support" },
      { value: "5 min", label: "Response Time" },
    ],
  },
  {
    id: 4,
    title: "Advanced Critical Care Services",
    highlight: "Life-Saving Services",
    description: "Cutting-edge ICU facilities with advanced life support systems, experienced intensivists, and continuous monitoring.",
    bgImage: Hospital,
    cta: "Know More",
    emergency: "ICU Helpline: (555) 777-8888",
    features: [
      { icon: "🏥", text: "Advanced ICU" },
      { icon: "🩺", text: "24x7 Monitoring" },
      { icon: "🫀", text: "Ventilator Support" },
    ],
    stats: [
      { value: "20+", label: "ICU Beds" },
      { value: "99%", label: "Recovery Rate" },
    ],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const current = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

   
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[380px] lg:h-[550px] overflow-hidden">
        {/* Background Image with multiple overlays */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.bgImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        
        {/* Content with improved contrast */}
        <div className="relative h-full flex items-center z-10 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white max-w-2xl"
              >
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm mb-3 border border-white/20">
                  {current.highlight}
                </div>
                
                <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
                  {current.title}
                </h1>
                
                <p className="text-sm md:text-xl mb-4 leading-relaxed max-w-lg">
                  {current.description}
                </p>
                
                {/* Google Reviews Badge */}
                <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm p-3 rounded-lg w-fit">
                  <div className="flex items-center">
                    <FaGoogle className="text-white mr-2" />

                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">200+ Reviews</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-4 md:bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/60 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Call for Appointment Bar */}
      <div className="px-2 md:px-72 mt-2 relative z-20">
        <div className="flex md:flex-row items-center justify-between bg-[#00A297] text-white rounded-lg p-2 shadow-lg">
          <div className="flex items-center md:mb-0">
            <span className="text-[14px] md:text-xl  font-medium">Call for Appointment</span>
          </div>
          <a 
            href="tel:+1234567890" 
            className="bg-white text-[#00A297] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center"
          >
            Call Now
          </a>
        </div>
      </div>

  
    </>
  );
};

export default Hero;