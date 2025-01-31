import React, { useState } from 'react';
import UserReviewModal from '../../shared/user/UserReviewModal';

const UserSubmitModal = ({ onCancel, onSubmit }) => {
  const [numericalRating, setNumericalRating] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isReview, setIsReview] = useState(false); // controls review modal visibility
  const [isSubmitted, setIsSubmitted] = useState(false); // controls whether the form has been submitted
  const [showCongrats, setShowCongrats] = useState(false); // controls showing the congrats message

  // Handle "Next" button click to show review modal
  const handleNext = (e) => {
    e.preventDefault();
    if (!numericalRating) {
      setError('Please provide a numerical rating.');
      return;
    }
    setIsReview(true); // Show the review modal when user is ready
  };

  // Handle "Submit" button click to finalize submission and close the modal
  const handleSubmit = () => {
    setIsSubmitted(true); // Set to true after submission
    setIsReview(false); // Hide the review modal
    setShowCongrats(true); // Show the success message
    onCancel(); // Close the parent modal
  };

  if (isSubmitted) {
    return null; // Return null to hide the UserSubmitModal after submission
  }

  return (
    <div className="h-[353px] px-5 pt-5 pb-[15px] bg-white rounded-[10px] flex-col justify-start items-center gap-[15px] inline-flex overflow-hidden">
      {/* Header */}
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">Submit IPCR</div>
      </div>

      {/* Show Congrats message when submission is successful */}
      {showCongrats ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#00597a] text-2xl font-semibold">Congratulations!</h2>
          <p className="text-sm text-gray-500">Your IPCR has been successfully submitted.</p>
        </div>
      ) : (
        <>
          {/* Only show form if not in review state */}
          {!isReview && (
            <form onSubmit={handleNext} className="w-full">
              {/* Rating Section */}
              <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-[#00597a] text-sm font-normal">Rating:</div>
                <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] flex justify-start items-center">
                  <input
                    type="text"
                    placeholder="Input Numerical Rating"
                    className="text-[#00597a] text-sm w-full outline-none"
                    value={numericalRating}
                    onChange={(e) => setNumericalRating(e.target.value)}
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="self-stretch h-[70px] flex-col justify-center items-center gap-[5px] flex mt-5">
                <div className="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
                <div className="self-stretch h-11 px-2.5 bg-gradient-to-b from-white to-[#eef8ff] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] flex justify-center items-center">
                  <label className="cursor-pointer text-[#00597a] text-sm font-medium">
                    Upload File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>

              {/* Error Message */}
              {error && <div className="text-red-500 text-sm">{error}</div>}

              {/* Submit Button */}
              <div className="flex gap-5 mt-10">
                <button
                  type="button"
                  onClick={onCancel}
                  className="w-[197px] h-11 bg-white border border-[#00597a] text-[#00597a] rounded-[10px] shadow-md text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-[197px] h-11 bg-[#00597a] text-white rounded-[10px] shadow-md text-sm"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Show UserReviewModal when isReview is true */}
          {isReview && !isSubmitted && (
            <UserReviewModal
              numericalRating={numericalRating}
              file={file}
              onCancel={onCancel}
              onSubmit={handleSubmit} // Pass handleSubmit as onSubmit
            />
          )}
        </>
      )}
    </div>
  );
};

export default UserSubmitModal;
