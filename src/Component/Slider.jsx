import React, { useState } from 'react';
import { DOC1, DOC2, DOC3 } from '../assets/Images/im';
import '../../src/index.css';  // Import the CSS with the font-face rule

// Sample doctor data
const doctors = [
  {
    name: 'Dr. Sourav Das',
    specialty: 'Psychiatrist,Addiction Psychiatrist',
    description: 'Dr. Sourav Das, MBBS, MD, DNB, CCAM, IBSM is a dynamic and experienced Consultant Psychiatrist with special interest.',
    image: DOC1,
  },
  {
    name: 'Dr. Abir Mukhopadhyay',
    specialty: 'Psychiatrist',
    description: 'Dr. Abir Mukhopadhyay is a Psychiatrist in Mukundapur, Kolkata and has an experience of 31 years in this field. Dr. Abir Mukhopadhyay practices at Manipal Hospitals',
    image: DOC2,
  },
  {
    name: 'Dr.Rajashree Ray',
    specialty: 'Psychiatrist',
    description: 'Dr. Rajashree Ray practices at Vedanta Centre for Healing Minds in Salt Lake, Kolkata and Techno India Dama Healthcare & Medical Centre in Beliaghata, Kolkata.',
    image: DOC3,
  },

];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupDoctor, setPopupDoctor] = useState(null);

  // Function to go to the next doctor
  const nextDoctor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  // Function to go to the previous doctor
  const prevDoctor = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  const doctor = doctors[currentIndex];

  // Open popup with doctor's full details
  const openPopup = (doctor) => {
    setPopupDoctor(doctor);
    setIsPopupOpen(true);
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupDoctor(null);
  };

  return (
    <div className="slider-container px-10 h-screen bg-gradient-to-r from-blue-50 to-purple-200 flex items-center justify-center">
      {/* Left Side: Company Details */}
      <div className="left-section w-full md:w-1/2 p-10">
        <h2 className="text-[4vw]  font-bold text-black font-[poppins] leading-[4vw]">The Ultimate Wellness Destination</h2>
        <p className="text-xl text-gray-700 mt-4">
        Sereriq is a safe heaven for mental wellness, where expert care meets community support. Enjoy free first-time therapy seesions with a 7-day follow-up,engage in inspiring blogs,and connect with others on a healing journey. Explore recreational wellness like Yoga and art therapy because your mind deserves peace,balance, and care. Your journey starts here.
        </p>
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            onClick={() => console.log('Learn more clicked')}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side: Doctor Slider */}
      <div className="right-section w-full md:w-1/2 h-full flex flex-col items-center justify-center p-10 relative">
        <div className="doctor-card-container w-full flex justify-center items-center">
        <div className="doctor-card p-8 bg-white w-[700px] h-[600px] rounded-lg shadow-lg transform transition-all hover:scale-105 flex flex-col items-center">
  <div className="doctor-image-container w-full h-4/5 flex justify-center items-center mb-6">
    <img
      src={doctor.image}
      alt={doctor.name}
      className="doctor-image w-[50%] rounded-full object-cover   cursor-pointer"
      onClick={() => openPopup(doctor)} // Click to open popup
    />
  </div>
  <div className="doctor-details w-full h-1/5 flex flex-col items-center">
    <h2 className="doctor-name text-3xl font-semibold text-center">{doctor.name}</h2>
    <h3 className="doctor-specialty text-lg text-gray-600 text-center">{doctor.specialty}</h3>
    <p className="doctor-description text-center text-gray-500 mt-4">{doctor.description}</p>
  </div>
</div>


          {/* Slider Controls */}
          <div className="slider-controls absolute top-1/2 left-0 right-0 flex justify-between px-8 transform -translate-y-1/2">
            <button
              onClick={prevDoctor}
              className="prev-btn bg-gray-800 text-white px-4 py-2 rounded-full"
            >
              Prev
            </button>
            <button
              onClick={nextDoctor}
              className="next-btn bg-gray-800 text-white px-4 py-2 rounded-full"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Popup for Doctor's Details */}
      {isPopupOpen && popupDoctor && (
        <div className="popup-overlay fixed inset-0 bg-gradient-to-r from-blue-50 to-purple-200 bg-opacity-50 flex justify-center items-center">
          <div className="popup-content bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-3xl font-semibold">{popupDoctor.name}</h2>
            <h3 className="text-lg text-gray-600">{popupDoctor.specialty}</h3>
            <p className="text-gray-500 mt-4">{popupDoctor.description}</p>
            <button
              className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
