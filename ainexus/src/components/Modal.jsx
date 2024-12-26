import React from 'react';

const Modal = ({ isOpen, toggleModal, title, message }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div
          className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700 p-6 rounded-lg w-10/12 md:w-3/5 shadow-2xl transform transition-transform duration-300 scale-105"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #000000, #000000, #7f1d1d)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{message}</p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg font-bold shadow-md transform hover:scale-110 hover:shadow-lg transition duration-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
