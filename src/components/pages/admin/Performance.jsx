import React, { useState } from 'react';
import Layout from '../../layouts/admin/Layout';
import PerformanceTable from '../../layouts/admin/PerformanceTable';
import PerformanceModal from '../../shared/PerformanceModal';

const Performance = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout title="Performance Review">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mt-10 font-poppins lg:px-32">
        {/* Search Bar */}
        <div className="w-[400px] h-[45px] pl-5 pr-2.5 py-[7px] bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center gap-2.5">
          <input
            type="text"
            placeholder="Search"
            className="text-[#0a3c5d] text-sm font-light bg-transparent grow outline-none"
          />
          <div className="w-6 h-6">
            <img src="assets/icon/search.svg" alt="Search Icon" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Right: Filters and Add Button */}
        <div className="flex items-center gap-5">
          {/* Filter by */}
          <div className="h-11 flex items-center px-2.5">
            <div className="text-center text-[#0a3c5d]/50 text-xs font-normal">
              Filter by: Rating/Office:
            </div>
          </div>

          {/* Filter */}
          <div className="w-[200px] h-[45px] pl-5 pr-2.5 bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
            <div className="text-[#00597a] text-base font-normal">Filter</div>
            <div className="w-6 h-6">
              <img src="assets/icon/ion_filter.svg" alt="Chevron Icon" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-[117px] h-11 inline-flex justify-center items-center">
            <button
              onClick={toggleModal}
              className="flex items-center px-6 py-[10px] bg-[#00597a] rounded-[10px] shadow-md gap-[6px]"
            >
              <div className="w-5 h-5">
                <img src="assets/icon/submit.svg" alt="Submit Icon" className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-base font-normal">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <PerformanceTable />

      {/* Performance Modal - Conditionally Rendered */}
      {isModalVisible && (
        <PerformanceModal closeModal={closeModal} />
      )}
    </Layout>
  );
};

export default Performance;
