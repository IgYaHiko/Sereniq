import React from 'react'
import { ART, MEDI } from '../assets/Images/im'

const Art = () => {
  return (
    <div className='w-full px-[3vw] py-[4vw] h-screen bg-gradient-to-r from-blue-50 to-purple-200'>
         <h1 className='font-[poppins] text-right text-[5vw] opacity-90'>Art and Painting Therapy</h1>
         <div className='flex mt-5 gap-[3vw] w-full '>
        
        <div className='left w-[50%]' >
        <img className='rounded-4xl' src={ART} alt="" />
        
           
           </div>
       
           <div className='right w-[50%]'>
           <h1 style={{fontFamily: 'monospace'}} className='text-[1.4vw] mt-10 leading-tight'>  

Art and painting therapy is a form of expressive therapy that uses creative activities to promote emotional well-being and mental health. It allows individuals to explore their thoughts, emotions, and experiences through artistic expression, helping to reduce stress, anxiety, and depression. This therapeutic approach is particularly beneficial for individuals facing trauma, PTSD, or cognitive disorders, as it provides a non-verbal way to process feelings.  


   
   </h1>
           </div>
         </div>
       </div>
  )
}

export default Art
