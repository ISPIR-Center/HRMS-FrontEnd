import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance'; // Adjust the import path
import Spinner from '../Spinner';
import CongratsMessage from '../CongratsMessage';

const PerformanceModal = ({ closeModal }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  // State variables for dropdowns
  const [offices, setOffices] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [ipcrPeriods, setIpcrPeriods] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedType, setSelectedType] = useState(''); // For "Type" dropdown
  const [rating, setRating] = useState(''); // State for rating input

  // State for file upload
  const [fileName, setFileName] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded

  // Data to pass to the second modal
  const [modalData, setModalData] = useState({
    office: '',
    employee: '',
    type: '',
    rating: '',
    fileName: ''
  });
  

  // Fetching offices on component mount
  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const response = await axiosInstance.get('/offices/dropdown');
        setOffices(response.data.data);
      } catch (error) {
        console.error('Error fetching offices:', error);
      }
    };
    fetchOffices();
  }, []);

  // Fetch employees when the office changes
  useEffect(() => {
    if (selectedOffice) {
      const fetchEmployees = async () => {
        try {
          const response = await axiosInstance.get(`/offices/employees/${selectedOffice}`);
          setEmployees(response.data.data);
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      };
      fetchEmployees();
    }
  }, [selectedOffice]);

  // Fetch IPCR periods on component mount
  useEffect(() => {
    const fetchIpcrPeriods = async () => {
      try {
        const response = await axiosInstance.get('/ipcr-periods/active-flags/dropdown');
        setIpcrPeriods(response.data.data);
      } catch (error) {
        console.error('Error fetching IPCR periods:', error);
      }
    };
    fetchIpcrPeriods();
  }, []);

  const handleNext = () => {
    console.log("Selected Office ID:", selectedOffice);
    console.log("Selected Employee ID:", selectedEmployee);
    console.log("Available Offices:", offices);
    console.log("Available Employees:", employees);
  
    // Ensure selectedOffice and selectedEmployee are correctly set
    if (!selectedOffice || !selectedEmployee) {
      alert("Please select an office and employee before proceeding.");
      return;
    }
  
    // Find office name (ensure data types match)
    const officeObj = offices.find(office => String(office.id) === String(selectedOffice));
    const officeName = officeObj ? officeObj.office_name : 'Office Not Found';
  
    // Find employee name (ensure data types match)
    const employeeObj = employees.find(employee => String(employee.id) === String(selectedEmployee));
    const employeeName = employeeObj ? `${employeeObj.first_name} ${employeeObj.last_name}` : 'Employee Not Found';
  
    console.log("Office Name Found:", officeName);
    console.log("Employee Name Found:", employeeName);
  
    // Set data for the second modal
    setModalData({
      office: officeName,
      employee: employeeName,
      type: selectedType,
      rating: rating,
      fileName: fileName,
      fileSize: modalData.fileSize // Pass the fileSize here
    });
  
    setShowSecondModal(true);
  };
  
  
  const handleSecondModalSubmit = async () => {
    setShowSecondModal(false);
    setSpinnerVisible(true);
  
    // Prepare the form data
    const formData = new FormData();
    formData.append('employee_no', selectedEmployee);
    formData.append('ipcr_period_id', selectedType); // Assuming `selectedType` holds the correct period ID
    formData.append('numerical_rating', rating);
  
    // Add file to form data if uploaded
    if (fileUploaded) {
      const fileInput = document.getElementById('fileInput');
      if (fileInput && fileInput.files[0]) {
        formData.append('file', fileInput.files[0]);
      }
    }
  
    // Get the auth_token (e.g., from localStorage or state)
    const authToken = localStorage.getItem('auth_token'); // Make sure to replace this with your actual method of getting the token
  
    // Submit the form data using axios
    try {
      const response = await axiosInstance.post('/admin-ipcr/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authToken}`, // Include the auth_token in the headers
        },
      });
  
      // On success
      setSpinnerVisible(false);
      setShowCongratsModal(true);
  
      setTimeout(() => {
        setShowCongratsModal(false);
        closeModal();
      }, 3000);
    } catch (error) {
      // On error
      setSpinnerVisible(false);
      
      // Log the error response for more information
      console.error('Error submitting IPCR:', error);
      
      if (error.response) {
        console.error('Response Error Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        
        // Log the specific validation errors
        if (error.response.data.errors) {
          console.error('Validation Errors:', error.response.data.errors);
        }
      } else if (error.request) {
        console.error('Request Error:', error.request);
      } else {
        console.error('General Error:', error.message);
      }
      
      alert('An error occurred while submitting the IPCR.');
    }
  };

  // Function to handle the rating input change and validate the input
  const handleRatingChange = (e) => {
    const value = e.target.value;
    // Regular expression to allow only valid numbers, including decimals
    if (/^\d*\.?\d*$/.test(value)) {
      setRating(value); // Update state if the value is valid
    }
  };

  // Handle file input change and update file name
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name in state
      setModalData((prevData) => ({
        ...prevData,
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(2) + " KB", // Set the file size in KB
      }));
      setFileUploaded(true); // Mark that a file has been uploaded
    }
  };
  
  return (
    <>
      {isSpinnerVisible && <Spinner />}
      {!showSecondModal && !isSpinnerVisible && !showCongratsModal && (
        <div className="fixed inset-0 flex justify-center items-center font-poppins">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
          <div
            className="relative z-20 px-5 pt-5 pb-[15px] bg-white rounded-[10px] flex-col justify-start items-center gap-5 inline-flex overflow-hidden transition-all duration-300 ease-in-out h-auto"
          >
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">
                Submit IPCR
              </div>
              <button className="w-[30px] h-[30px]" onClick={closeModal}>
                <img src="/assets/icon/closebutton.svg" alt="Close Icon" />
              </button>
            </div>

            {/* Office Dropdown */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
              <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden relative">
                <select
                  className="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10"
                  value={selectedOffice}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                >
                  <option value="" disabled selected className="text-[#00597a]">Select Office</option>
                  {offices.map((office) => (
                    <option key={office.id} value={office.id}>
                      {office.office_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Name Dropdown */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Name:</div>
              <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden relative">
                <select
                  className="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  disabled={!selectedOffice} // Disable if no office selected
                >
                  <option value="" disabled selected className="text-[#00597a] opacity-50">
                    Select Personnel
                  </option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.first_name} {employee.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type Dropdown */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Type:</div>
              <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden relative">
                <select
                  className="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="" disabled selected className="text-[#00597a] opacity-50">Select Type</option>
                  {ipcrPeriods.map((period) => (
                    <option key={period.id} value={period.ipcr_type}>
                      {period.ipcr_type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Conditionally render Rating Input */}
            {selectedType === 'Accomplished' && (
              <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-[#00597a] text-sm font-normal">Rating:</div>
                <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                  <input
                    type="text"
                    value={rating}
                    onChange={handleRatingChange} // Handle change
                    className="w-full h-full bg-transparent border-none focus:outline-none text-[#00597a] text-sm font-normal placeholder:text-[#00597a]"
                    placeholder="Input Numerical Rating"
                  />
                </div>
              </div>
            )}

            {/* File Upload */}
            <div className="self-stretch h-[70px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
              <div className="self-stretch h-11 px-2.5 bg-gradient-to-b from-white to-[#e9f5fd] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] justify-center items-center gap-2.5 inline-flex overflow-hidden">
                {fileUploaded ? (
                  <div className="text-[#00597a] text-sm font-medium">{fileName}</div> // Display file name after upload
                ) : (
                  <div className="grow shrink basis-0 h-10 p-2.5 rounded-[10px] justify-center items-center gap-2.5 flex overflow-hidden">
                    <div className="grow shrink basis-0 self-stretch justify-center items-center gap-2.5 flex">
                      <input
                        type="file"
                        className="hidden"
                        id="fileInput"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <div className="text-[#00597a] text-sm font-medium">Upload File</div>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="justify-start items-start gap-[15px] inline-flex">
              <button
                onClick={closeModal}
                className="w-[197px] rounded-[10px] border border-[#00597a] px-[15px] py-[7px] bg-white text-[#00597a] text-sm font-normal"
              >
                Cancel
              </button>
              <button
                onClick={handleNext}
                className="w-[197px] rounded-[10px] bg-[#00597a] px-[15px] py-[7px] text-white text-sm font-normal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {showSecondModal && !isSpinnerVisible && (
        <div className="fixed inset-0 flex justify-center items-center font-poppins">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 w-[450px] h-[515px] px-5 pt-5 pb-[15px] bg-white rounded-[10px] flex-col justify-start items-center gap-[15px] inline-flex overflow-hidden">
            {/* Second Modal Content */}
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">
                Submit IPCR
              </div>
              <div className="self-stretch justify-end items-start gap-2.5 flex">
                <div className="w-[30px] h-[30px] relative overflow-hidden"></div>
              </div>
            </div>

            {/* Name Display */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Name:</div>
              <div className="self-stretch h-10 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="text-[#00597a] text-sm font-semibold p-2">
                  {modalData.employee} {/* Dynamic employee */}
                </div>
              </div>
            </div>

            {/* Office Display */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
              <div className="self-stretch h-10 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="text-[#00597a] text-sm font-semibold p-2">
                  {modalData.office} {/* Dynamic office */}
                </div>
              </div>
            </div>

            {/* IPCR Attachment Display in Second Modal */}
            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
              <div className={`self-stretch h-10 px-2.5 bg-gradient-to-b from-white to-[#eef8ff] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden ${!selectedType ? 'cursor-not-allowed opacity-50' : ''}`}>
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src="../assets/icon/pdf-outline.svg" alt="Attachment Icon" />
                </div>
                <div className="flex w-full justify-between items-center px-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="text-[#00597a] text-sm font-semibold">{modalData.fileName}</div>
                  </div>
                  {/* Display the file size here */}
                  <span className="text-[#00597a] text-xs font-normal">{modalData.fileSize}</span>
                </div>
              </div>
            </div>

            {/* Rating Display (Stretch) */}
            <div className="self-stretch h-[118px] flex-col justify-center items-center gap-[5px] inline-flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Rating:</div>
              <div className="self-stretch p-2.5 rounded-[10px] border justify-center items-center gap-2.5 inline-flex overflow-hidden">
                <div className="text-[#00597a] text-5xl font-semibold">{modalData.rating || 'N/A'}</div>
                <div className="text-[#00597a] text-sm font-normal">
                  {/* Apply the logic for rating descriptions only if a valid rating is set */}
                  {modalData.rating && modalData.rating >= 4.5 && 'Outstanding'}
                  {modalData.rating && modalData.rating >= 3.5 && modalData.rating < 4.5 && 'Very Satisfactory'}
                  {modalData.rating && modalData.rating >= 2.5 && modalData.rating < 3.5 && 'Satisfactory'}
                  {modalData.rating && modalData.rating >= 1.5 && modalData.rating < 2.5 && 'Unsatisfactory'}
                  {modalData.rating && modalData.rating < 1.5 && 'Poor'}
                  {!modalData.rating && 'No Rating Given'} {/* For cases with no rating */}
                </div>
              </div>
            </div>

            {/* Submit Button (Stretch) */}
            <div className="self-stretch justify-start items-start gap-[15px] inline-flex">
              <button
                className="w-full rounded-[10px] bg-[#00597a] px-[15px] py-[7px] text-white text-sm font-normal"
                onClick={handleSecondModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {showCongratsModal && <CongratsMessage />}
    </>
  );
};

export default PerformanceModal;
