import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ isOpen, toggleModal, title, message }) => {
  return (
    isOpen && (
      <div 
        data-aos="zoom-in-down"
        className="fixed inset-0 flex justify-center items-center z-50 overflow-hidden 
          bg-transparent bg-opacity-80 motion-safe:animate-fadeIn backdrop-blur-sm">
        <div
          className="relative border border-blue-500 p-6 rounded-lg w-10/12 md:w-3/5 
            transform transition-all duration-300 scale-105
            motion-safe:animate-slideIn
            hover:border-blue-700/50"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #e0f7ff, #add8e6, #87ceeb)',
            boxShadow: '0 25px 50px rgba(135, 206, 235, 0.3), 0 0 100px rgba(135, 206, 235, 0.2)',
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
              text-white p-2 rounded-full shadow-md 
              transform transition-all duration-300 
              hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20
              active:scale-95"
            onClick={toggleModal}
          >
            <AiFillCloseCircle size={24} />
          </button>

          {/* Modal Content */}
          <div className="text-left mt-6 space-y-4">
            <h2 className="text-2xl font-bold text-blue-900 motion-safe:animate-slideInFromTop">
              {title}
            </h2>
            <p className="text-blue-700 text-lg leading-relaxed motion-safe:animate-fadeIn motion-safe:animate-delay-200">
              {message}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
