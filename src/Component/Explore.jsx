import React from 'react'
import { MEDI, XXX } from '../assets/Images/im'

const Explore = () => {
  return (
    <div className='w-full px-[3vw] py-[4vw] h-screen bg-gradient-to-r from-blue-50 to-purple-200'>
      <h1 className='font-[poppins] text-[5vw] opacity-90'>Explore What we Offer.</h1>
      <div className='flex justify-between w-full '>
     
     <div className='left w-[49%]' style={{fontFamily: 'monospace'}}>
      <h1 className='text-[1.4vw] mt-10 leading-tight'>Medication Therapy: A Cornerstone of Modern Healthcare
Medication therapy plays a fundamental role in modern healthcare by helping to prevent, manage, and treat a wide range of medical conditions. It encompasses the careful selection, dosing, and ongoing monitoring of pharmaceutical drugs to maximize their effectiveness while minimizing potential side effects. This approach is crucial for improving patient outcomes and enhancing quality of life, particularly for individuals with chronic conditions such as diabetes, hypertension, cardiovascular diseases, and mental health disorders.

</h1>
        
        </div>
    
        <div className='right w-[50%]'>
        <img className='rounded-4xl w-[70%]' src={XXX} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Explore
