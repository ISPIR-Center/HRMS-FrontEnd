import React, { useState } from 'react';
// import axios from 'axios';
import axiosInstance from '../../../utils/axiosInstance';

const CreateEmployeeModal = ({ isOpen, closeModal }) => {
  // Always call useState hooks at the top, without conditions
  const [formData, setFormData] = useState({
    employment_type_id: '',
    classification_id: '',
    office_id: '',
    employee_no: '',  // Added employee_no field
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    email_address: '',
    mobile_no: '',
    birthdate: '',
    gender: '',
    google_scholar_link: '',
    designation: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Make sure you return null early for non-rendered cases
  if (!isOpen) return null; // Don't conditionally call the hook inside render

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post('/profile/create', formData);
  
      if (response.data.success) {
        setSuccessMessage('Employee created successfully!');
        setErrorMessage('');
        closeModal();  // Close the modal upon success
      }
    } catch (error) {
      if (error.response) {
        const validationErrors = error.response.data.errors || {}; // Extract errors from the response
        const formattedErrors = Object.values(validationErrors).flat(); // Flatten the error messages into an array
        setErrorMessage(formattedErrors); // Set the formatted errors in state
        setSuccessMessage('');
      }
    }
  };
  
  
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 font-poppins"
      onClick={closeModal} // Close the modal when clicking outside the modal
    >
      <div
        className="w-[459px] max-w-full h-auto bg-white rounded-[10px] flex flex-col p-6 overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#00597a] text-2xl font-semibold">Add Employee</h2>
          <button
            onClick={closeModal} // Close modal on click
            className="w-[30px] h-[30px] rounded-full flex justify-center items-center"
          >
            <img
              src="/assets/icon/closebutton.svg"
              alt="Close"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* Error/Success Message */}
        {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 mt-2">{successMessage}</div>}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="employee_no" className="text-[#00597a] text-sm font-normal">
              Employee No
            </label>
            <input
              id="employee_no"
              name="employee_no"   // The name field must match the name in the state
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="text"
              placeholder="Enter Employee No"
              value={formData.employee_no}  // Set initial value from state
              onChange={handleInputChange}  // Handle input changes
            />
          </div>

          <div>
            <label htmlFor="first_name" className="text-[#00597a] text-sm font-normal">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="text"
              placeholder="Enter First Name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="middle_name" className="text-[#00597a] text-sm font-normal">
              Middle Name
            </label>
            <input
              id="middle_name"
              name="middle_name"
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="text"
              placeholder="Enter Middle Name"
              value={formData.middle_name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="last_name" className="text-[#00597a] text-sm font-normal">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="text"
              placeholder="Enter Last Name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email_address" className="text-[#00597a] text-sm font-normal">
              Email Address
            </label>
            <input
              id="email_address"
              name="email_address"
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email_address}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="designation" className="text-[#00597a] text-sm font-normal">
              Designation
            </label>
            <input
              id="designation"
              name="designation"
              className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              type="text"
              placeholder="Enter Designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="office_id" className="text-[#00597a] text-sm font-normal">
              Office
            </label>
            <select
              id="office_id"
              name="office_id"
              className="w-full h-10 p-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              value={formData.office_id}
              onChange={handleInputChange}
            >
              <option value="">Select Office</option>
              <option value="1">DIO</option>
              <option value="2">RMO</option>
            </select>
          </div>

          <div>
            <label htmlFor="employment_type_id" className="text-[#00597a] text-sm font-normal">
              Employment Type
            </label>
            <select
              id="employment_type_id"
              name="employment_type_id"
              className="w-full h-10 p-1 rounded-[10px] border border-[#00597a] outline-none focus:border-[#00597a] transition duration-200"
              value={formData.employment_type_id}
              onChange={handleInputChange}
            >
              <option value="">Select Employment Type</option>
              <option value="1">ACADEMIC</option>
              <option value="1">NON-ACADEMIC</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-11 mt-6 bg-[#00597a] rounded-[10px] text-white text-base font-medium hover:bg-[#004a5d] transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeModal;
