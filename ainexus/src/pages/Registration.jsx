import React, { useState } from 'react';
import Modal from '../components/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import single from "../assests/single2.png";
import double from "../assests/double2.png";
import regImage from "../assests/robo.png";

const InputField = ({ label, type, placeholder, value, onChange, required }) => (
  <div className="mb-3">
    <label className="block text-gray-700 font-semibold mb-1 ml-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 font-semibold md:font-bold rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const FileUpload = ({ label, onChange, required }) => (
  <div className="mb-3">
    <label className="block text-gray-700 font-semibold mb-1 ml-1">{label}</label>
    <input
      type="file"
      accept="image/*"
      className="w-full p-2 font-bold rounded border border-gray-300 bg-gray-50 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
      required={required}
    />
  </div>
);

export const R2 = () => {
  const [addUser2, setAddUser2] = useState(false);
  const [track, setTrack] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    track: '',
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

  const handleTrackChange = (e) => {
    setTrack(e.target.value);
    setFormData((prev) => ({
      ...prev,
      track: e.target.value,
    }));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const message = `First-year students should choose the Novice track, while students in the second, third, or fourth year should select the Expert track. Please note that if you are participating in a team, both teammates must be in the same track.`;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append('user1', JSON.stringify(formData.user1));
    formDataToSend.append('user1Image', formData.user1.image);

    if (addUser2) {
      formDataToSend.append('user2', JSON.stringify(formData.user2));
      formDataToSend.append('user2Image', formData.user2.image);
    }
    formDataToSend.append('track', formData.track);
    formDataToSend.append('transactionId', formData.transactionId);
    formDataToSend.append('paymentScreenshot', formData.paymentScreenshot);

    try {
      const response = await fetch('http://localhost:5000/api/v1/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        toast.success( 'Registration successful!');
        setFormData({
          user1: { name: '', email: '', college: '', phone: '', image: null },
          user2: { name: '', email: '', college: '', phone: '', image: null },
          track: '',
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
    <div id='register' className="min-h-screen w-full flex flex-col items-center">
      <div className='flex flex-col-reverse lg:flex-row items-center lg:w-11/12'>
        <div className="relative m-10 bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-md shadow-2xl border border-gray-300 w-11/12 md:w-8/12 lg:w-6/12">
          <h1 className="text-3xl md:text-4xl font-extrabold font-[Roboto] drop-shadow-lg text-red-800 mb-4 uppercase">Secure your spot</h1>
          <ToastContainer />
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* User 1 */}
            <div>
              <h2 className="text-gray-700 font-bold mb-3">Personal Details</h2>
              <InputField
                label="Name"
                type="text"
                placeholder="Enter full name"
                value={formData.user1.name}
                onChange={(e) => handleInputChange(e, 'user1', 'name')}
                required
              />
              <InputField
                label="Email"
                type="email"
                placeholder="Enter email ID"
                value={formData.user1.email}
                onChange={(e) => handleInputChange(e, 'user1', 'email')}
                required
              />
              <InputField
                label="College"
                type="text"
                placeholder="Enter college name"
                value={formData.user1.college}
                onChange={(e) => handleInputChange(e, 'user1', 'college')}
                required
              />
              <InputField
                label="Phone"
                type="number"
                placeholder="Enter phone no."
                value={formData.user1.phone}
                onChange={(e) => handleInputChange(e, 'user1', 'phone')}
                required
              />
              <FileUpload
                label="Upload College Id"
                onChange={(e) => handleInputChange(e, 'user1', 'image')}
                required
              />
            </div>

            {/* User 2 */}
            <div>
              <button
                type="button"
                className="bg-gradient-to-r from-red-600 via-red-800 to-black text-white px-6 py-2 rounded font-bold"
                onClick={() => setAddUser2(!addUser2)}
              >
                {addUser2 ? 'Remove Crew Member' : 'Add Crew Member'}
              </button>
              {addUser2 && (
                <div className="mt-6">
                  <h2 className="text-gray-700 mb-3 font-bold">Crew Member Details</h2>
                  <InputField
                    label="Name"
                    type="text"
                    placeholder="Enter full name"
                    value={formData.user2.name}
                    onChange={(e) => handleInputChange(e, 'user2', 'name')}
                    required
                  />
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter email ID"
                    value={formData.user2.email}
                    onChange={(e) => handleInputChange(e, 'user2', 'email')}
                    required
                  />
                  <InputField
                    label="College"
                    type="text"
                    placeholder="Enter college name"
                    value={formData.user2.college}
                    onChange={(e) => handleInputChange(e, 'user2', 'college')}
                    required
                  />
                  <InputField
                    label="Phone"
                    type="number"
                    placeholder="Enter phone no."
                    value={formData.user2.phone}
                    onChange={(e) => handleInputChange(e, 'user2', 'phone')}
                    required
                  />
                  <FileUpload
                    label="Upload College ID"
                    onChange={(e) => handleInputChange(e, 'user2', 'image')}
                    required
                  />
                </div>
              )}
            </div>
            
            {/* Track Selection */}
            <div>
              <label htmlFor="track" className="block text-gray-700 font-semibold mb-1 ml-1">
                Track
              </label>
              <select
                id="track"
                name="track"
                value={track}
                onChange={handleTrackChange}
                required
                className="w-full p-3 font-semibold rounded border border-gray-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
              >
                <option value="">Select Track</option>
                <option value="Novice">Novice</option>
                <option value="Expert">Expert</option>
              </select>

              <div className="mt-2">
                <button
                  type="button"
                  className="text-blue-500 hover:underline focus:outline-none"
                  onClick={toggleModal}
                >
                  Note: Track Information
                </button>
              </div>
            </div>

            {/* Modal for displaying message */}
            <Modal
              isOpen={isModalOpen}
              toggleModal={toggleModal}
              title="Track Selection Information"
              message={message}
            />

            {/* Payment */}
            <div>
              <h2 className="text-gray-700 font-bold mb-3">Payment Details</h2>
              <img
                src={addUser2 ? double : single}
                alt="Payment Illustration"
                className="w-80 h-80 border-2 object-cover rounded-lg shadow-lg border-gray-300 mb-4"
              />
              <InputField
                label="Transaction ID"
                type="text"
                placeholder="Enter Transaction ID"
                value={formData.transactionId}
                onChange={(e) => handleInputChange(e, null, 'transactionId')}
                required
              />
              <FileUpload
                label="Upload Payment Screenshot"
                onChange={(e) => handleInputChange(e, null, 'paymentScreenshot')}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-red-800 to-black text-white px-6 py-3 rounded font-extrabold text-xl shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Register Now
            </button>
          </form>
        </div>

        {/* Side Image */}
        <div className='lg:w-1/2  flex justify-center '>
          <img
            src={regImage}
            alt="Payment Illustration"
            className="h-full w-4/5 lg:scale-110 text- object-cover rounded-lg  border-gray-300 mb-4"
          />
        </div>
      </div>
    </div>
  );
};
