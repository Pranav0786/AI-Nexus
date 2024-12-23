import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="bg-red-300 min-h-screen w-full flex mx-auto items-center justify-center">
      <div className="bg-gray-700 w-11/12 md:w-8/12 lg:w-6/12 p-6 rounded-md shadow-lg">
        <ToastContainer />
        <h1 className="text-white text-2xl font-bold mb-4">Get Registered</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <h2 className="text-white font-semibold mb-2">User 1 Details</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-2 rounded"
              value={formData.user1.name}
              onChange={(e) => handleInputChange(e, 'user1', 'name')}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 rounded"
              value={formData.user1.email}
              onChange={(e) => handleInputChange(e, 'user1', 'email')}
              required
            />
            <input
              type="text"
              placeholder="College"
              className="w-full p-2 mb-2 rounded"
              value={formData.user1.college}
              onChange={(e) => handleInputChange(e, 'user1', 'college')}
              required
            />
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-2 mb-2 rounded"
              value={formData.user1.phone}
              onChange={(e) => handleInputChange(e, 'user1', 'phone')}
              required
            />
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 mb-2 rounded bg-white"
              onChange={(e) => handleInputChange(e, 'user1', 'image')}
              required
            />
          </div>

          <div>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setAddUser2(!addUser2)}
            >
              {addUser2 ? 'Remove User 2' : 'Add User 2'}
            </button>
            {addUser2 && (
              <div className="mt-4">
                <h2 className="text-white font-semibold mb-2">User 2 Details</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 mb-2 rounded"
                  value={formData.user2.name}
                  onChange={(e) => handleInputChange(e, 'user2', 'name')}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-2 rounded"
                  value={formData.user2.email}
                  onChange={(e) => handleInputChange(e, 'user2', 'email')}
                  required
                />
                <input
                  type="text"
                  placeholder="College"
                  className="w-full p-2 mb-2 rounded"
                  value={formData.user2.college}
                  onChange={(e) => handleInputChange(e, 'user2', 'college')}
                  required
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full p-2 mb-2 rounded"
                  value={formData.user2.phone}
                  onChange={(e) => handleInputChange(e, 'user2', 'phone')}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 mb-2 rounded bg-white"
                  onChange={(e) => handleInputChange(e, 'user2', 'image')}
                  required
                />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-white font-semibold mb-2">Payment Details</h2>
            <input
              type="text"
              placeholder="Transaction ID"
              className="w-full p-2 mb-2 rounded"
              value={formData.transactionId}
              onChange={(e) => handleInputChange(e, null, 'transactionId')}
              required
            />
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 mb-2 rounded bg-white"
              onChange={(e) => handleInputChange(e, null, 'paymentScreenshot')}
              required
            />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};
