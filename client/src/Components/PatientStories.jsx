import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PatientStories = () => {
  const testimonials = [
  {
    id: 1,
    name: "Khan Mazher Saeed Khan",
    title: "Clean & Hygienic",
    quote: "I recently visited Parul Hospital and was impressed by its clean and hygienic environment. The facilities were well-maintained, and the staff followed strict hygiene protocols. However, I also noticed some areas that were unclean and unhygienic, which was concerning. Overall, my experience with Parul Hospital was positive due to its cleanliness and hygiene standards, but there is room for improvement in certain areas.",
    date: "9 Aug 2024",
    department: "General"
    
  },
  {
    id: 2,
    name: "Shiv Prasad Pathak (Jyotish Dham)",
    title: "Excellent Doctors",
    quote: "Best hospital with the direction of Dr. Pankaj Agarwal and Dr. Neeta Agarwal. They take care personally and staff of hospital are very cooperative. In mid city, very economic hospital for one.",
    date: "16 Aug 2017",
    department: "General"
  },
  {
    id: 3,
    name: "Minesh",
    title: "Amazing Facilities",
    quote: "Its facilities are amazing and caring is fabulous. Every time doctors are available and nurses are very much careful.",
    date: "6 Feb 2019",
    department: "General"
  },
  {
    id: 4,
    name: "Mayuri",
    title: "Best Services",
    quote: "Best hospital with best services. Very very supportive staff and very experienced doctor.",
    date: "24 Mar 2022",
    department: "General"
  },
  {
    id: 5,
    name: "Rohit Shah",
    title: "Expert Doctors",
    quote: "Very good hospital with all facilities and expert doctors.",
    date: "20 Oct 2020",
    department: "General"
  },
  {
    id: 6,
    name: "Neeraj",
    title: "Well Equipped",
    quote: "Excellent doctors, cooperative staff and well equipped and maintained.",
    date: "20 Oct 2020",
    department: "General"

  },
   {
    id: 7,
    name: "Ojaswini Panse",
    title: "Well Equipped",
    quote: "My father was admitted in Parul Hospital due to Covid-19 with lung involvement of 100%. And he was discharged with recovery of almost 75% after 25 days and for this recovery. I want to Thank Dr. Pankaj Agarwal Sir, Dr. Prakhar Agarwal Sir, Nursing Staff, Physiotherapists, Reception Staff and Duty Doctors for motivating my father to go through this fight of covid and for taking intense care of my father and for giving us the ray of hope. ",
    date: "20 Oct 2021",
    department: "General"
  },
   {
    id: 8,
    name: "rishab aggarwal",
    title: "Well Equipped",
    quote: "The hospital handled my father in law’s critical surgery in the best way possible. Totally satisfied and content with the treatment and care provided. Special mention to the caring staff and the super helpful HR department. Would completely recommend this hospital.",
    date: "feb 2025",
    department: "General"
  },
  
  
 {
    id: 9,
    name: "Kamlesh Kumar",
    title: "Well Equipped",
    quote: "Best services with satisfaction. Star health claim settlement is also satisfied with Mr Deepak Roy (HR) special Thanks. Nurse Mrs. Ruksana work is excellent.Many many thanks to all hospital Doctors and all staffs for valuable services with response.",
    date: " Jan 2025",
    department: "General"
  }
];


  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[activeIndex]];
    }
    return [
      testimonials[activeIndex],
      testimonials[(activeIndex + 1) % testimonials.length],
      testimonials[(activeIndex + 2) % testimonials.length]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length, isMobile]);

  const handleNavigation = (direction) => {
    clearInterval(intervalRef.current);
    if (direction === 'next') {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    } else {
      setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section className="py-8 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-[#161B38]">
            Patient <span className="text-[#00A297]">Success </span>
            Stories
          </h2>
          <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who found healing at Parul Hospital
          </p>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          {/* Navigation buttons - grouped on left side */}
          <div className="hidden md:flex absolute left-6  -top-14  gap-2 z-10">
            <button 
              onClick={() => handleNavigation('prev')}
              className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-[#161B38]"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button 
              onClick={() => handleNavigation('next')}
              className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-[#161B38]"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Testimonials grid */}
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all h-full"
              >
                <FaQuoteLeft className="text-[#00A297] text-2xl mb-4" />
                <p className="text-gray-700 mb-4 italic font-medium">"{testimonial.quote}"</p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-[#161B38]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#00A297] text-sm font-medium mb-1">{testimonial.title}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{testimonial.department}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  clearInterval(intervalRef.current);
                  setActiveIndex(index);
                  intervalRef.current = setInterval(() => {
                    setActiveIndex(prev => (prev + 1) % testimonials.length);
                  }, 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#00A297] w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientStories;