import React, { useState, useEffect } from "react";
import Header from "./Header";
import { DOCTOR } from "../assets/Images/im";

const words = ["Doctors.", "Experts.", "Specialists."];

const Main = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="h-screen w-full  bg-gradient-to-r from-blue-50 to-purple-200 relative overflow-hidden">
      <Header />

      

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center  h-full px-8 md:px-16 lg:px-32 text-center md:text-left">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="bg-green-200 text-green-700 px-6 py-2 rounded-full text-lg font-semibold">
            Health Care Services
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5vw] font-extrabold ">
            Treatment With a Best <br />
            <span className="text-blue-600">{text}</span>
            <span className="text-blue-600 animate-blink">|</span>
          </h1>
          <p className="mt-15 text-xl md:text-2xl text-gray-600">
            For a better today & tomorrow, stay with us.
          </p>

          {/* Quotation Form */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <input
              type="email"
              placeholder="Email address"
              className="px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-lg"
            />
            <input
              type="date"
              className="px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-lg"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full  max-w-10xl mt-10 md:mt-0">
  <img
    src={DOCTOR} // Ensure this path is correct!
    alt="Healthcare Illustration"
    className="w-[120%] object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default Main;
