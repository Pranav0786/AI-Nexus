import React from 'react';

const Modal = ({ isOpen, toggleModal, title, message }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3 shadow-lg">
          <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>
          <p className="text-gray-600">{message}</p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
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
