

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createAppointment } from "../Redux/appointment/appointmentThunks";
import {
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaStethoscope,
  FaMoneyBillWave,
} from "react-icons/fa";
import { toast } from "react-toastify";



const featuredDoctors = [
  {
    id: 1,
    slug: "dr-prakhar-agarwal",
    name: "Dr. Prakhar Agarwal",
    qualification: "DM Pulmonary, Critical Care & Sleep Medicine",
    specialization: "Allergy Asthma Sleep & Critical Care",
    experience: "Ex. Senior Resident – AIIMS Delhi",
    timings: [
      { day: "Morning", time: "10:00 AM - 2:00 PM" },
      { day: "Evening", time: "6:00 PM - 8:00 PM" },
    ],
    consultationFee: "₹800",
    rating: "4.9",
  },
  {
    id: 2,
    slug: "dr-kirti-kadian",
    name: "Dr. Kirti Kadian",
    qualification:
      "Pulmonary Rehabilitation, Interstitial Lung Disease, Sleep & Critical Care",
    specialization: "Pulmonary Rehabilitation, Sleep Medicine",
    experience: "Ex.Senior Resident-PGIMER Rohtak",
    timings: [
      { day: "Morning", time: "10:00 AM - 2:00 PM" },
      { day: "Evening", time: "6:00 PM - 8:00 PM" },
    ],
    consultationFee: "₹700",
    rating: "4.8",
  },
  {
    id: 3,
    slug: "dr-meeta-agarwal",
    name: "Dr. Meeta Agarwal",
    qualification: "MD Obs. & Gynae.",
    specialization: "Adolescent & Menopausal Health, Preventive Gynecology",
    experience: "45+ years of expertise",
    timings: [
      { day: "Morning", time: "11:00 AM - 1:00 PM" },
      { day: "Evening", time: "7:00 PM - 8:00 PM" },
    ],
    consultationFee: "₹900",
    rating: "4.7",
  },
  {
    id: 4,
    slug: "dr-pankaj-agarwal",
    name: "Dr. Pankaj Agarwal",
    qualification: "MD Medicine",
    specialization: "Cardiology, Gastroenterology, Diabetology",
    experience: "45+ years of expertise",
    timings: [
      { day: "Morning", time: "11:00 AM - 1:00 PM" },
      { day: "Evening", time: "6:30 PM - 8:30 PM" },
    ],
    consultationFee: "₹1000",
    rating: "4.6",
  },
];

const AppointmentPage = () => {

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.appointment);

  const { doctorId } = useParams();
  const [selectedDoctor, setSelectedDoctor] = useState(
    doctorId
      ? featuredDoctors.find((doc) => doc.id === parseInt(doctorId))
      : null
  );

  const [availableSlots, setAvailableSlots] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    doctor: selectedDoctor ? selectedDoctor.name : "",
    department: selectedDoctor ? selectedDoctor.specialization : "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: selectedDoctor.name,
        department: selectedDoctor.specialization,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        doctor: "",
        department: "",
      }));
    }
  }, [selectedDoctor]);



  useEffect(() => {
    if (formData.date && selectedDoctor) {
      generateTimeSlots();
    } else {
      setAvailableSlots([]);
    }
  }, [formData.date, selectedDoctor]);

  const generateTimeSlots = () => {
    if (!selectedDoctor || !formData.date) return;

    let allSlots = [];

    selectedDoctor.timings.forEach((timing) => {
      const [startTime, endTime] = timing.time.split(" - ");

      const parseTime = (timeStr) => {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (modifier === "PM" && hours < 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        return { hours, minutes };
      };

      const start = parseTime(startTime);
      const end = parseTime(endTime);

      let currentHour = start.hours;
      let currentMinute = start.minutes;

      while (
        currentHour < end.hours ||
        (currentHour === end.hours && currentMinute < end.minutes)
      ) {
        const period = currentHour >= 12 ? "PM" : "AM";
        const displayHour =
          currentHour > 12
            ? currentHour - 12
            : currentHour === 0
              ? 12
              : currentHour;

        allSlots.push({
          value: `${currentHour.toString().padStart(2, "0")}:${currentMinute
            .toString()
            .padStart(2, "0")}`,
          label: `${displayHour}:${currentMinute
            .toString()
            .padStart(2, "0")} ${period} (${timing.day})`,
        });

        currentMinute += 30;
        if (currentMinute >= 60) {
          currentMinute -= 60;
          currentHour += 1;
        }
      }
    });

    setAvailableSlots(allSlots);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDoctor) {
      alert("Please select a doctor first.");
      return;
    }

    const appointmentData = {
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      doctor: selectedDoctor.name, // ya doctor.id agar API ko ID chahiye
      department: selectedDoctor.specialization,
    };

    dispatch(createAppointment(appointmentData))
      .unwrap()
      .then((res) => {
         toast.success(`Appointment booked successfully with ${res.doctor}`);
        setFormData({
          name: "",
          phone: "",
          date: "",
          time: "",
          message: "",
          doctor: "",
          department: "",
        });
        setSelectedDoctor(null);
      })
      .catch((err) => {
         toast.success(`Failed to book appointment: ${err}`);
      });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='max-w-4xl mx-auto p-4 md:p-6'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-[#00A297] text-white p-4 md:p-6'>
         {selectedDoctor ? (
  <h2 className='text-2xl md:text-3xl font-bold'>
    Book an Appointment {selectedDoctor.name}
  </h2>
) : (
  <h2 className='text-2xl md:text-3xl font-bold'>
    Book an Appointment
  </h2>
)}

          {selectedDoctor && (
            <p className='opacity-90'>{selectedDoctor.specialization}</p>
          )}
        </div>

        <div
          className={`grid ${selectedDoctor ? "md:grid-cols-2" : "md:grid-cols-1"
            } gap-8 p-4 md:p-6`}
        >
          {selectedDoctor && (
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-[#E8F5F4] p-3 rounded-full mr-4'>
                  <FaStethoscope className='text-[#00A297] text-xl' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>Specialization</h3>
                  <p>{selectedDoctor.specialization}</p>
                  <p className='text-sm text-gray-600 mt-1'>
                    {selectedDoctor.qualification}
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-[#E8F5F4] p-3 rounded-full mr-4'>
                  <FaClock className='text-[#00A297] text-xl' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>Availability</h3>
                  {selectedDoctor.timings.map((timing, index) => (
                    <p key={index}>
                      <span className='font-medium'>{timing.day}:</span>{" "}
                      {timing.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div>
            <form onSubmit={handleSubmit}>
              <div className='space-y-4'>
                {!doctorId && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Select Doctor*
                    </label>
                    <select
                      name='doctor'
                      required
                      className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent'
                      value={selectedDoctor ? selectedDoctor.id : ""}
                      onChange={(e) => {
                        const selected = featuredDoctors.find(
                          (doc) => doc.id === parseInt(e.target.value)
                        );
                        setSelectedDoctor(selected);
                      }}
                    >
                      <option value=''>Choose a doctor</option>
                      {featuredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedDoctor && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Department
                    </label>
                    <input
                      type='text'
                      name='department'
                      readOnly
                      className='mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed'
                      value={formData.department}
                    />
                  </div>
                )}

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Full Name*
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter your full name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Phone Number*
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    required
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Enter 10-digit mobile number'
                    pattern='[0-9]{10}'
                    maxLength='10'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Date*
                    </label>
                    <input
                      type='date'
                      name='date'
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent'
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Time*
                    </label>
                    {selectedDoctor ? (
                      <select
                        name='time'
                        required
                        disabled={!formData.date || availableSlots.length === 0}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent disabled:opacity-50'
                        value={formData.time}
                        onChange={handleInputChange}
                      >
                        <option value=''>
                          {!formData.date
                            ? "Select date first"
                            : availableSlots.length === 0
                              ? "No slots available"
                              : "Select time"}
                        </option>
                        {availableSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type='time'
                        name='time'
                        required
                        disabled
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed'
                        value={formData.time}
                        placeholder='Select doctor first'
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Message (Optional)
                  </label>
                  <textarea
                    name='message'
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#00A297] focus:border-transparent'
                    rows='3'
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='Any specific health concerns or notes'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full bg-[#00A297] hover:bg-[#008B8B] text-white py-3 px-4 rounded-md font-medium transition-colors flex justify-center items-center ${isSubmitting ? "opacity-75" : ""
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Confirm Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
