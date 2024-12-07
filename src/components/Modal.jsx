import React from 'react';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        {children}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default Modal;
