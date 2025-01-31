import React, { useState } from 'react';
import { A } from '../assets/Images/im';

const Art = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='w-full px-[3vw] py-[4vw] h-screen bg-gradient-to-r from-blue-50 to-purple-200'>
      <h1 className='font-[poppins] text-right text-[5vw] opacity-90'>Art and Painting Therapy</h1>
      <div className='flex mt-5 gap-[3vw] w-full'>
        <div className='left w-[50%]'>
          <img className='rounded-4xl w-[50%]' src={A} alt="Art Therapy" />
        </div>
        <div className='right w-[50%]'>
          <h1 style={{ fontFamily: 'monospace' }} className='text-[1.4vw] mt-10 leading-tight'>
            Art and painting therapy is a form of expressive therapy that uses creative activities to promote emotional well-being and mental health.
            It allows individuals to explore their thoughts, emotions, and experiences through artistic expression, helping to reduce stress, anxiety, and depression.
            This therapeutic approach is particularly beneficial for individuals facing trauma, PTSD, or cognitive disorders, as it provides a non-verbal way to process feelings.
          </h1>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className='mt-10 flex justify-center'>
        <button
          className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700'
          onClick={handleOpenPopup}
        >
          Subscribe Now
        </button>
      </div>

      {/* Popup for Subscription Plans */}
      {popupVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gradient-to-r from-blue-50 to-purple-200 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-[60vw] relative'>
            <button className='absolute top-2 right-2' onClick={handleClosePopup}>
              <span className='text-black'>X</span>
            </button>

            <h2 className='text-2xl font-bold text-center mb-6'>Subscription Plans</h2>
            <div className='flex justify-between gap-6'>
              {/* Monthly Plan */}
              <div className='w-[45%] bg-purple-100 p-4 rounded-xl shadow-lg'>
                <h3 className='text-xl font-semibold text-center'>Monthly Plan</h3>
                <p className='mt-2'>8 day per month</p>
                <p className='mt-2'>Weekdays: Monday - Friday</p>
                <p className='mt-2'>Evening: 6:00pm - 7:30pm</p>
                <p className='mt-2'>Weekend: Saturday,Sunday</p>
                <p className='mt-2'>Morning: 6:00am - 7:30am</p>
                <p className='mt-2'>Fees: 500rs</p>
                <button className='mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg w-full'>
                  Subscribe Monthly
                </button>
              </div>

              {/* Annually Plan */}
              <div className='w-[45%] bg-green-100 p-4 rounded-xl shadow-lg'>
                <h3 className='text-xl font-semibold text-center'>Annual Plan</h3>
                <p className='mt-2'>96 day per year</p>
                <p className='mt-2'>Weekdays: Monday - Friday</p>
                <p className='mt-2'>Evening: 6:00pm - 7:30pm</p>
                <p className='mt-2'>Weekend: Saturday,Sunday</p>
                <p className='mt-2'>Morning: 6:00am - 7:30am</p>
                <p className='mt-2'>Fees: 3000rs</p>
                <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg w-full'>
                  Subscribe Annually
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
