import { HomeIcon, LucideHome, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { DOC1, DOC2, DOC3 } from '../assets/Images/im';

const Consultancy = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. Sourav Das",
      specialization: "Psychiatrist",
      experience: "16+ years of experience",
      location: "Kolkata",
      bio: "Dr. Sourav Das, MBBS, MD, DNB, CCAM, IBSM is a dynamic and experienced Consultant Psychiatrist with special interest.",
      image: DOC1
    },
    {
      name: "Dr. Abir Mukhopadhay",
      specialization: "Psychiatrist",
      experience: "31+ years of experience",
      location: "Kolkata",
      bio: "Dr. Abir Mukhopadhyay is a Psychiatrist in Mukundapur, Kolkata and has an experience of 31 years in this field. Dr. Abir Mukhopadhyay practices at Manipal Hospitals",
      image: DOC2
    },
    {
      name: "Dr. Rajashree Ray",
      specialization: "Psychiatrist",
      experience: "27+ years of experience",
      location: "Salt Lake, Kolkata",
      bio: "Dr. Rajashree Ray practices at Vedanta Centre for Healing Minds in Salt Lake, Kolkata and Techno India Dama Healthcare & Medical Centre in Beliaghata, Kolkata.",
      image: DOC3
    }
  ];

  const handleOpenPopup = (consultationType) => {
    setSelectedConsultation(consultationType);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedConsultation(null);
  };

  const handleNextDoctor = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const handlePrevDoctor = () => {
    setCurrentDoctorIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  return (
    <div className='w-full px-[3vw] py-[4vw] h-screen bg-gradient-to-r from-blue-50 to-purple-200'>
      <h1 className='text-[3vw] leading-[4vw] capitalize font-[poppins]'>
        <span className='text-blue-500 text-[5vw] opacity-80'>How</span> Would you consult your psychiatrist?
      </h1>
      <div className='box w-full mt-[2vw] flex justify-between'>
        <div
          className='left px-[3vw] flex justify-start py-[4vw] bg-blue-300 rounded-xl h-[60vh] w-[45%] cursor-pointer'
          onClick={() => handleOpenPopup("In-clinic Appointment")}
        >
          <div>
            <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center'>
              <LucideHome size={40} />
            </div>
            <h1 className='font-[poppins] mt-4 text-[2vw]'>Book In-clinic Appointment</h1>
            <p className='text-[1vw] font-mono'>
              Schedule an appointment with your psychiatrist in Kolkata at your earliest convenience...
            </p>
          </div>
        </div>
        <div
          className='left px-[3vw] flex justify-start py-[4vw] bg-purple-300 rounded-xl h-[60vh] w-[45%] cursor-pointer'
          onClick={() => handleOpenPopup("Video Consultancy")}
        >
          <div>
            <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center'>
              <Video size={40} />
            </div>
            <h1 className='font-[poppins] mt-4 text-[2vw]'>Book Your Video Consultancy</h1>
            <p className='text-[1vw] font-mono'>
              Schedule your video consultation at your convenience...
            </p>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-200 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-[30vw] relative flex flex-col items-center'>
            <button className='absolute top-2 right-2' onClick={handleClosePopup}>
              <X size={24} />
            </button>
            <div className='flex items-center space-x-4'>
              <button onClick={handlePrevDoctor} className='p-2 bg-gray-300 rounded-full'>
                <ChevronLeft size={24} />
              </button>
              <img src={doctors[currentDoctorIndex].image} alt='Doctor' className='w-24 h-24 rounded-full mb-4' />
              <button onClick={handleNextDoctor} className='p-2 bg-gray-300 rounded-full'>
                <ChevronRight size={24} />
              </button>
            </div>
            <h2 className='text-2xl font-bold text-center mb-4'>{selectedConsultation}</h2>
            <p><strong>Doctor:</strong> {doctors[currentDoctorIndex].name}</p>
            <p><strong>Specialization:</strong> {doctors[currentDoctorIndex].specialization}</p>
            <p><strong>Experience:</strong> {doctors[currentDoctorIndex].experience}</p>
            <p><strong>Bio:</strong> {doctors[currentDoctorIndex].bio}</p>
            <p><strong>Location:</strong> {doctors[currentDoctorIndex].location}</p>
            <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultancy;
