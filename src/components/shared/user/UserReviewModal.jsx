import React, { useState } from 'react';
import axios from 'axios';
import CongratsMessage from '../../shared/CongratsMessage';

const FileReview = ({ fileName, fileSize }) => (
  <div className="mb-4">
    <div className="text-[#00597a] text-sm font-normal mb-2">IPCR Attachment:</div>
    <div className="px-3 py-2 bg-gradient-to-b from-white to-[#eef8ff] rounded-[10px] shadow-lg border border-[#00597a] flex justify-between items-center">
      <div className="text-[#00597a] text-sm font-medium">{fileName}</div>
      <div className="text-[#00597a] text-sm font-medium">{fileSize}</div>
    </div>
  </div>
);

const RatingReview = ({ rating }) => (
  <div className="mb-4">
    <div className="text-[#00597a] text-sm font-normal mb-2">Rating:</div>
    <div className="p-4 border rounded-[10px] flex flex-col justify-center items-center gap-2 bg-white">
      <div className="text-[#00597a] text-5xl font-semibold">{rating}</div>
      <div className="text-[#00597a] text-sm font-normal">Very Satisfactory</div>
    </div>
  </div>
);

const SubmitButton = ({ onSubmit }) => (
  <button
    onClick={onSubmit}
    className="w-[200px] h-11 bg-[#00597a] text-white rounded-[10px] shadow-md text-base"
  >
    Submit
  </button>
);

const CancelButton = ({ onCancel }) => (
  <button
    onClick={onCancel}
    className="w-[200px] h-11 bg-white border border-[#00597a] text-[#00597a] rounded-[10px] shadow-md text-base"
  >
    Cancel
  </button>
);

const UserReviewModal = ({ numericalRating, file, onCancel, onNext }) => {
    const [error, setError] = useState('');
    const [showCongrats, setShowCongrats] = useState(false); // Controls CongratsMessage visibility
    const [showModal, setShowModal] = useState(true); // Controls UserReviewModal visibility
  
    const fileName = file ? file.name : 'No file uploaded';
    const fileSize = file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : 'N/A';
  
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('ipcr_period_id', 1); // Replace with actual IPCR period ID
      formData.append('numerical_rating', numericalRating);
      if (file) {
        formData.append('file', file);
      }
  
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          return;
        }
  
        const response = await axios.post('https://hrms-server-dev.bulsutech.com/api/employee-ipcr/submit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (response.data.success) {
          setShowModal(false); // Hide the review modal
          setShowCongrats(true); // Show the CongratsMessage modal
  
          setTimeout(() => {
            setShowCongrats(false); // Hide the CongratsMessage modal after the timeout
          }, 3000); // Adjust time (3 seconds here)
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      }
    };
  
    return (
      <>
        {showCongrats && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
            <CongratsMessage onClose={() => setShowCongrats(false)} />
          </div>
        )}
        {showModal && !showCongrats && ( // Only show the modal if Congrats is not shown
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 font-poppins">
            <div className="bg-white p-8 rounded-[10px] max-w-lg w-full shadow-lg">
              <div className="text-[#00597a] text-2xl font-semibold mb-6 text-start">Review IPCR</div>
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
  
              <FileReview fileName={fileName} fileSize={fileSize} />
              <RatingReview rating={numericalRating} />
  
              <div className="flex justify-between gap-4 mt-6">
                <CancelButton onCancel={onCancel} />
                <SubmitButton onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default UserReviewModal;
  
  
