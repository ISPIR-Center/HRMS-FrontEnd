import React, { useState } from 'react';
import Layout from '../../layouts/admin/Layout';
import EmployeeTable from '../../layouts/admin/EmployeeTable';
import AddButton from '../../shared/AddButton';  // Import the AddButton component
import CreateEmployeeModal from '../../shared/admin/CreateEmployeeModal'; // Import the modal component

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for controlling modal visibility

  // Function to open the modal
  const openModal = () => {
    console.log('Modal Opened'); // Debugging line
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log('Modal Closed'); // Debugging line
    setIsModalOpen(false);
  };

  return (
    <Layout title="Employee">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mt-10 font-poppins lg:px-32">
        {/* Left: Search Bar */}
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

        {/* Right: Filters and Add Button */}
        <div className="flex items-center gap-5">
          {/* Filter by */}
          <div className="h-11 flex items-center px-2.5">
            <div className="text-center text-[#0a3c5d]/50 text-xs font-normal">Filter by: Non Academic/Academic:</div>
          </div>

          {/* Filter */}
          <div className="w-[200px] h-[45px] pl-5 pr-2.5 bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
            <div className="text-[#00597a] text-base font-normal">Non-Academic</div>
            <div className="w-6 h-6">
              <img src="/assets/icon/tabler_chevron-up.svg" alt="Chevron Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Pass the openModal function to AddButton as onAddClick */}
          <AddButton onAddClick={openModal} />
        </div>
      </div>

      {/* Employee Table */}
      <EmployeeTable />

      {/* CreateEmployeeModal with isOpen and closeModal passed as props */}
      <CreateEmployeeModal isOpen={isModalOpen} closeModal={closeModal} />
    </Layout>
  );
};

export default Employee;
