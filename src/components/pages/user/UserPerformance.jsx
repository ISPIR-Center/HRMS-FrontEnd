import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserLayout from '../../layouts/user/UserLayout';
import UserSubmitModal from '../../shared/user/UserSubmitModal';  // Import the modal component

const UserPerformance = () => {
  const [ipcrs, setIpcrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false); // State to show/hide the modal

  // Fetch IPCR data from the backend
  useEffect(() => {
    const fetchIpcrData = async () => {
      try {
        const token = localStorage.getItem('auth_token'); // Adjust based on where you store the token
        const response = await axios.get('https://hrms-server-dev.bulsutech.com/api/ipcr-list/view', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIpcrs(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchIpcrData();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <UserLayout title="Performance Review">
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </UserLayout>
    );
  }

  // Render error state
  if (error) {
    return (
      <UserLayout title="Performance Review">
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </UserLayout>
    );
  }

  // Handle Submit Button Click
  const handleSubmitButtonClick = () => {
    setShowSubmitModal(true); // Show the modal when the submit button is clicked
  };

  // Handle Modal Cancel
  const handleCancel = () => {
    setShowSubmitModal(false); // Hide the modal when cancel is clicked
  };

  // Handle Modal Submit
  const handleSubmit = () => {
    setShowSubmitModal(false); // Hide the modal after submission
    // You can perform further actions here (like saving the data) after submission
  };

  return (
    <UserLayout title="Performance Review">
      <div className="flex flex-col justify-between items-center mt-10 font-poppins lg:px-32">
        {/* Search Bar and Buttons */}
        <div className="flex justify-between items-center w-full mb-10">
          {/* Search Bar */}
          <div className="w-[400px] h-[45px] pl-5 pr-2.5 py-[7px] bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center gap-2.5">
            <input
              type="text"
              placeholder="Search"
              className="text-[#0a3c5d] text-sm font-light bg-transparent grow outline-none"
            />
            <div className="w-6 h-6">
              <img src="/assets/icon/search.svg" alt="Search Icon" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right: Filters and Submit Button */}
          <div className="flex items-center gap-5">
            {/* Filter */}
            <div className="w-[200px] h-[45px] pl-5 pr-2.5 bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
              <div className="text-[#00597a] text-base font-normal">Filter</div>
              <div className="w-6 h-6">
                <img src="/assets/icon/ion_filter.svg" alt="Filter Icon" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-[117px] h-11 inline-flex justify-center items-center">
              <button
                onClick={handleSubmitButtonClick} // Trigger modal visibility
                className="flex items-center px-6 py-[10px] bg-[#00597a] rounded-[10px] shadow-md gap-[6px]"
              >
                <div className="w-5 h-5">
                  <img src="/assets/icon/submit.svg" alt="Submit Icon" className="w-full h-full object-contain" />
                </div>
                <span className="text-white text-base font-normal">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full font-poppins">
          <div className="w-full flex-col justify-start items-start gap-[15px] inline-flex">
            {/* Table Header */}
            <div className="self-stretch px-[30px] py-[15px] bg-neutral-100 rounded-[15px] justify-start items-start gap-[15px] inline-flex font-semibold">
              <div className="grow shrink basis-0 text-black text-base">Period</div>
              <div className="w-[120px] text-black text-base">Numerical</div>
              <div className="grow shrink basis-0 text-black text-base">Adjectival</div>
              <div className="grow shrink basis-0 text-black text-base">Remarks</div>
              <div className="w-[150px] text-black text-base">Status</div>
            </div>

            {/* Table Rows */}
            {ipcrs.map((ipcr) => (
              <div
                key={ipcr.id}
                className="self-stretch px-[30px] py-[15px] border-b border-[#e1e1e1] justify-start items-center gap-[15px] inline-flex"
              >
                <div className="grow shrink basis-0 text-black text-base font-normal underline">
                  {ipcr.ipcr_period.period}
                </div>
                <div className="w-[120px] text-black text-base font-normal">
                  {ipcr.numerical_rating}
                </div>
                <div className="grow shrink basis-0 text-black text-base font-normal">
                  {ipcr.adjectival_rating}
                </div>
                <div className="grow shrink basis-0 text-black text-base font-normal">
                  {ipcr.remarks || 'N/A'} {/* Add remarks if available */}
                </div>
                <div className="w-[150px] text-[#167b09] text-base font-bold">
                  {ipcr.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show Submit Modal when showSubmitModal is true */}
        {showSubmitModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <UserSubmitModal onCancel={handleCancel} onSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default UserPerformance;
