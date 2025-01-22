import React, { useState } from 'react';
import ValidationModal from '../../shared/ValidationModal'; // Import the Validation Modal

const dummyData = [
    {
      name: "John Paulo Agustin",
      office: "DIO",
      period: "Jan - March, 2024",
      numerical: "4.53",
      adjectival: "Very Satisfactory",
      status: "Pending",
      statusColor: "text-[#f6b935]",
    },
    {
      name: "John Wendell Mercado",
      office: "DIO",
      period: "Jan - June, 2024",
      numerical: "4.62",
      adjectival: "Very Satisfactory",
      status: "Pending",
      statusColor: "text-[#f6b935]",
    },
    {
      name: "Alejandro Burgos Jr.",
      office: "DIO",
      period: "Jan - June, 2024",
      numerical: "4.88",
      adjectival: "Very Satisfactory",
      status: "Pending",
      statusColor: "text-[#f6b935]",
    },
    {
      name: "Mark Gil Sendin",
      office: "DIO",
      period: "Jan - March, 2024",
      numerical: "4.64",
      adjectival: "Very Satisfactory",
      status: "Submitted",
      statusColor: "text-[#167b09]",
    },
  ];
  
  const PerformanceTable = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
  
    const handleRowClick = (row) => {
      setModalContent({
        office: row.office,
        name: row.name,
        numerical: row.numerical,
        adjectival: row.adjectival,
      });
      setModalOpen(true); // Open modal
    };
  
    return (
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-[1330px] h-auto rounded-[10px] bg-white overflow-hidden font-poppins mt-10">
          <div className="w-full flex h-[45px] items-center bg-white border-b-2 border-[#0a3c5d] p-2">
            <div className="flex-[2] text-[#0a3c5d] text-base font-semibold">Name</div>
            <div className="flex-[1] text-[#0a3c5d] text-base font-semibold">Office</div>
            <div className="flex-[2] text-[#0a3c5d] text-base font-semibold">Period</div>
            <div className="flex-[1.5] text-[#0a3c5d] text-base font-semibold">Numerical</div>
            <div className="flex-[2] text-[#0a3c5d] text-base font-semibold">Adjectival</div>
            <div className="flex-[1.2] text-[#0a3c5d] text-base font-semibold">Status</div>
          </div>
  
          {dummyData.map((row, index) => (
            <div
              key={index}
              className="w-full flex h-[45px] items-center bg-white border-b-2 border-[#0a3c5d]/10 p-2 cursor-pointer"
              onClick={() => handleRowClick(row)}
            >
              <div className="flex-[2] text-[#0a3c5d] text-sm font-normal">{row.name}</div>
              <div className="flex-[1] text-[#0a3c5d] text-sm font-normal">{row.office}</div>
              <div className="flex-[2] text-[#0a3c5d] text-sm font-normal">{row.period}</div>
              <div className="flex-[1.5] text-[#0a3c5d] text-sm font-normal">{row.numerical}</div>
              <div className="flex-[2] text-[#0a3c5d] text-sm font-normal">{row.adjectival}</div>
              <div className={`flex-[1.2] ${row.statusColor} text-sm font-bold`}>{row.status}</div>
            </div>
          ))}
        </div>
  
        {/* Validation Modal */}
        <ValidationModal
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          content={modalContent}
        />
      </div>
    );
  };
  
  export default PerformanceTable;
  