import React from 'react';

const Modal = ({ isOpen, onClose, onNext }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      {/* Backdrop */}
      <div className="w-full h-full bg-black bg-opacity-50 absolute inset-0"></div> {/* Background dimming effect */}
      
      {/* Modal */}
      <div className="w-[450px] h-[220px] px-5 pt-5 pb-[15px] bg-white rounded-[10px] fixed inset-0 m-auto overflow-hidden z-60">
        <div className="self-stretch justify-between items-center flex">
          <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">Add Employee</div>
          <button onClick={onClose} className="w-[30px] h-[30px] relative overflow-hidden">
            <img src="/assets/icon/closebutton.svg" alt="icon" />
          </button>
        </div>
      
        {/* Modal Content */}
        <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
          <div className="self-stretch text-[#00597a] text-sm font-normal">Employment Type:</div>
          <div className="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-[#00597a] text-sm font-semibold">Non-Academic</div>
            <div className="w-[30px] h-[30px] relative origin-top-left -rotate-180 overflow-hidden"></div>
          </div>
        </div>
        
        {/* Buttons Section */}
        <div className="justify-start items-start gap-[15px] inline-flex mt-5">
          {/* Cancel Button */}
          <button onClick={onClose} className="w-[197px] flex-col justify-end items-center gap-[5px] inline-flex">
            <div className="self-stretch h-11 pl-[15px] pr-5 py-[7px] bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-[5px] inline-flex overflow-hidden">
              <div className="text-center text-[#00597a] text-sm font-normal">Cancel</div>
            </div>
          </button>

          {/* Next Button */}
          <button onClick={onNext} className="w-[197px] flex-col justify-end items-center gap-[5px] inline-flex">
            <div className="self-stretch h-11 pl-[15px] pr-5 py-[7px] bg-[#00597a] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-[5px] inline-flex overflow-hidden">
              <div className="text-center text-white text-sm font-normal">Next</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
