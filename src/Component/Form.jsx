import React  from 'react'
import '../../src/index.css'; 
import { ArrowBigRight, Send, Smile, SmileIcon } from 'lucide-react';

const Form = () => {
  return (
    <div className='w-full px-[3vw] py-[4vw] h-screen bg-gradient-to-r from-blue-50 to-purple-200'>
      <div className='leading-[4vw]'>
        <h1 className='font-[poppins] text-[4vw]'>Have a <span className='text-purple-300'>Question ?</span></h1>
        <h1 className='font-[poppins] text-[5vw]'>Ready to<span className='text-blue-600 text-[6vw] opacity-70'> Start ?</span></h1>
        <div className='leading-[0.5vw] mt-[2vw]'>
        <p style={{fontFamily: "monospace"}} className='font-[700] cursor-pointer opacity-70 hover:opacity-100 mt-2 text-[1.1vw]'>let's start a conversation! Fill out our contact form,</p>
        <p style={{fontFamily: "monospace"}} className='font-[700] cursor-pointer opacity-70 hover:opacity-100 mt-2 text-[1.1vw]'> and we'll get back to you as soon as possible</p>
        </div>
        <div className='form mt-5'>
            <div className='flex item-center gap-3'>
            <h1 style={{fontFamily: 'monospace'}} className='text-[3vw] flex  font-[500]' >Hello  </h1>
            <Smile size={65}   />
            </div>
            <div>
            <div className="flex gap-15">
           <h1 className="text-[4vw] opacity-70 font-[100]" style={{fontFamily:'monospace'}}>
          My name is
         </h1>
         <input 
           type="text" 
           style={{fontFamily : 'monospace'}}
           placeholder="Enter your name" 
           className="border-0 border-b-2  w-[60%] border-gray-400  text-[1vw]  focus:border-blue-500 focus:outline-none"
       />
      </div>

      <div className="flex gap-16 mt-7">
           <h1 className="text-[4vw] font-[100] opacity-70" style={{fontFamily:'monospace'}}>
          I'm from
         </h1>
         <input 
           type="text" 
           style={{fontFamily : 'monospace'}}
           placeholder="Address" 
           className="border-0 border-b-2 border-gray-400  w-[60%]  text-[1vw]  focus:border-blue-500 focus:outline-none"
       />
      </div>

      <div className="flex gap-10 mt-7">
           <h1 className="text-[4vw] opacity-70 font-[100]" style={{fontFamily:'monospace'}}>
          Here is  my email
         </h1>
         <input 
           type="email" 
           style={{fontFamily : 'monospace'}}
           placeholder="Enter your Email" 
           className="border-0 border-b-2 border-gray-400 w-[50%]  text-[1vw]  focus:border-blue-500 focus:outline-none"
       />
      </div>
      <div className="flex gap-10 mt-8">
           <h1 className="text-[4vw] opacity-70 font-[100]" style={{fontFamily:'monospace'}}>
          Add a message
         </h1>
         <input 
           type="text" 
           style={{fontFamily : 'monospace'}}
           placeholder="Message" 
           className="border-0 border-b-2 border-gray-400 w-[50%]  text-[1vw]  focus:border-blue-500 focus:outline-none"
       />
      </div>
      
    </div>
     <button style={{fontFamily: 'monospace'}} className='bg-blue-500  opacity-80 text-white  mt-4 pl-[2vw] flex items-center relative  font-[500] pr-[20vw] text-[2vw] rounded-full '>Sumbit
     <Send className='absolute right-10  ' size={40}  />
     </button>
        </div>
      </div>
    </div>
  )
}

export default Form
