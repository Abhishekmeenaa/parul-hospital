import React, { useState } from 'react';

const faqData = [
  {
    question: "What should I bring for my first appointment?",
    answer:
      "Please bring your previous medical reports, prescriptions, ID proof, and insurance details (if applicable).",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website or call our reception at +91-9999999999.",
  },
  {
    question: "What are your consultation timings?",
    answer: "Monday to Saturday: 9 AM – 6 PM. Sunday closed.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, we offer video consultations. Please schedule it via our telemedicine portal or mobile app.",
  },
  {
    question: "How can I get a prescription refill?",
    answer:
      "Contact our clinic or request a refill through your patient portal account.",
  },
];

const DoctorFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="max-w-7xl mx-auto p-2">
      <h2 className="text-2xl font-bold mb-2 text-center">  </h2>
       <div className="text-center mb-2 pt-12">
        <h1 className="text-2xl font-bold text-[#161B38] sm:text-3xl">
          Common <span className="text-[#00A297]">Questions</span> Patients Ask
        </h1>
  <div className="w-20 h-1 bg-[#00A297] mx-auto mt-3 mb-4 rounded-full" />        

      </div>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200"
            >
              {item.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorFAQ;
