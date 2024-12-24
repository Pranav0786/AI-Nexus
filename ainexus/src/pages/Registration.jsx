import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import single from "../assests/single2.png";
import double from "../assests/double2.png";
import regImage from "../assests/qq3.png"

export const Registration = () => {
  const [addUser2, setAddUser2] = useState(false);
  const [formData, setFormData] = useState({
    user1: {
      name: '',
      email: '',
      college: '',
      phone: '',
      image: null,
    },
    user2: {
      name: '',
      email: '',
      college: '',
      phone: '',
      image: null,
    },
    transactionId: '',
    paymentScreenshot: null,
  });

  const handleInputChange = (e, user = null, field) => {
    const value = field === 'image' || field === 'paymentScreenshot' ? e.target.files[0] : e.target.value;

    if (user) {
      setFormData((prev) => ({
        ...prev,
        [user]: {
          ...prev[user],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append('user1', JSON.stringify(formData.user1));
    formDataToSend.append('user1Image', formData.user1.image);

    if (addUser2) {
      formDataToSend.append('user2', JSON.stringify(formData.user2));
      formDataToSend.append('user2Image', formData.user2.image);
    }

    formDataToSend.append('transactionId', formData.transactionId);
    formDataToSend.append('paymentScreenshot', formData.paymentScreenshot);

    try {
      const response = await fetch('http://localhost:5000/api/v1/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message || 'Registration successful!');
        setFormData({
          user1: { name: '', email: '', college: '', phone: '', image: null },
          user2: { name: '', email: '', college: '', phone: '', image: null },
          transactionId: '',
          paymentScreenshot: null,
        });
        setAddUser2(false);
      } else {
        toast.error(result.message || 'Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div id='register' className="bg-[rgb(132,153,165)] min-h-screen w-full flex flex-col mx-auto items-center justify-center">
      <div className='flex flex-col-reverse lg:flex-row items-center lg:w-11/12'>
        <div className="relative m-10 bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-md shadow-2xl border 
        border-gray-300  w-11/12 md:w-8/12 lg:w-6/12">
          <h1 className="text-3xl md:text-5xl font-bold text-red-800 mb-4">Get Registered</h1>
          <ToastContainer />
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* User 1 */}
            <div>
              <h2 className="text-gray-700 font-semibold mb-3">User 1 Details</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                value={formData.user1.name}
                onChange={(e) => handleInputChange(e, 'user1', 'name')}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                value={formData.user1.email}
                onChange={(e) => handleInputChange(e, 'user1', 'email')}
                required
              />
              <input
                type="text"
                placeholder="College"
                className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                value={formData.user1.college}
                onChange={(e) => handleInputChange(e, 'user1', 'college')}
                required
              />
              <input
                type="number"
                placeholder="Phone"
                className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                value={formData.user1.phone}
                onChange={(e) => handleInputChange(e, 'user1', 'phone')}
                required
              />
              <input  
                type="file"
                accept="image/*"
                className="w-full p-1 mb-3 rounded border  border-gray-300 bg-white cursor-pointer"
                onChange={(e) => handleInputChange(e, 'user1', 'image')}
                required
              />
            </div>

            {/* User 2 */}
            <div>
              <button
                type="button"
                className="bg-gradient-to-r from-red-600 via-red-800 to-black text-white px-6 py-2 rounded"
                onClick={() => setAddUser2(!addUser2)}
              >
                {addUser2 ? 'Remove User 2' : 'Add User 2'}
              </button>
              {addUser2 && (
                <div className="mt-6">
                  <h2 className="text-gray-700 font-semibold mb-3">User 2 Details</h2>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                    value={formData.user2.name}
                    onChange={(e) => handleInputChange(e, 'user2', 'name')}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                    value={formData.user2.email}
                    onChange={(e) => handleInputChange(e, 'user2', 'email')}
                    required
                  />
                  <input
                    type="text"
                    placeholder="College"
                    className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                    value={formData.user2.college}
                    onChange={(e) => handleInputChange(e, 'user2', 'college')}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                    value={formData.user2.phone}
                    onChange={(e) => handleInputChange(e, 'user2', 'phone')}
                    required
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-1 mb-3 rounded border border-gray-300 bg-white cursor-pointer"
                    onChange={(e) => handleInputChange(e, 'user2', 'image')}
                    required
                  />
                </div>
              )}
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-gray-700 font-semibold mb-3">Payment Details</h2>
              <img
                src={addUser2 ? double : single}
                alt="Payment Illustration"
                className="w-80 h-80  border-2 object-cover rounded-lg shadow-lg border-gray-300 mb-4"
              />
              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full p-3 mb-3 rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
                value={formData.transactionId}
                onChange={(e) => handleInputChange(e, null, 'transactionId')}
                required
              />
              <input
                type="file"
                accept="image/*"
                className="w-full p-1 mb-3 rounded border border-gray-300 bg-white cursor-pointer"
                onChange={(e) => handleInputChange(e, null, 'paymentScreenshot')}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-red-800 to-black text-white py-3 rounded font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
            
        {/* image */}
        <div className='lg:w-1/2  flex items-center justify-center '>
          <img
            src={regImage}
            alt="Payment Illustration"
            className="h-full w-3/5 object-cover rounded-lg  border-gray-300 mb-4"
          />
        </div>
      </div>
    </div>
  );
};
