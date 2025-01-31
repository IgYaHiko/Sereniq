import React from 'react';
import { COM, CRY, LL } from '../assets/Images/im';

const Community = () => {
  return (
    <div className='w-full py-1 h-[280vh]  bg-gradient-to-r from-blue-50 to-purple-200 text-white flex flex-col items-center'>
      {/* Title at the top */}
      <h1 className='text-[2vw] font-[poppins] bg-black bg-opacity-50 px-6 py-3 rounded-lg mt-8'>
        Join Our safe space:<span className='text-purple-300'>Community with peers share & heal together</span>
      </h1>
      
      {/* Image taking 80% of the screen */}
      <div className='w-full  bg-cover bg-center mt-6' 
        />
      <img src={LL}  alt="" />
      <img src={CRY} className='mt-10' alt="" />
      <img src={COM} className='mt-10' alt="" />
      {/* Description and button */}
      <p className='text-lg mt-4 bg-black bg-opacity-50 px-6 py-3 rounded-lg'>
        Connect, share, and grow together in our vibrant community.
      </p>
      <button className='mt-6 bg-purple-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition duration-300'>
        Get Started
      </button>
    </div>
  );
};

export default Community;
