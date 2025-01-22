import React from 'react';

const SecondModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return null if modal is not open

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div> {/* Add background blur */}
      
      {/* Modal */}
      <div className="w-[430px] h-[650px] px-6 pt-6 pb-6 bg-white rounded-[10px] overflow-hidden fixed inset-0 m-auto z-50">
        {/* Modal Header */}
        <div className="self-stretch justify-between items-center flex">
          <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">Add Employee</div>
          <button onClick={onClose} className="w-[30px] h-[30px] relative overflow-hidden">
            <img src="assets/icon/closebutton.svg" alt="Close" />
          </button>
        </div>

        {/* Modal Content */}
        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">First Name:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <input type="text" class="grow shrink basis-0 text-[#00597a] text-sm p-2" placeholder="Enter First Name"/>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Middle Name:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <input type="text" class="grow shrink basis-0 text-[#00597a] text-sm p-2" placeholder="Enter Middle Name"/>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Last Name:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <input type="text" class="grow shrink basis-0 text-[#00597a] text-sm p-2" placeholder="Enter Last Name"/>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Email Address:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <input type="email" class="grow shrink basis-0 text-[#00597a] text-sm p-2" placeholder="Enter Email Address"/>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Designation:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <input type="text" class="grow shrink basis-0 text-[#00597a] text-sm p-2" placeholder="Enter Designation"/>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div class="grow shrink basis-0 text-[#00597a] text-sm">Select Office</div>
                <div class="w-[30px] h-[30px] relative origin-top-left -rotate-180 overflow-hidden"></div>
            </div>
        </div>

        <div class="self-stretch h-[60px] flex-col justify-center items-center gap-[5px] flex mb-2">
            <div class="self-stretch text-[#00597a] text-sm font-normal">Employment Type:</div>
            <div class="self-stretch h-10 p-1.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div class="grow shrink basis-0 text-[#00597a] text-sm font-semibold">Non-Academic</div>
                <div class="w-[30px] h-[30px] relative origin-top-left -rotate-180  overflow-hidden"></div>
            </div>
        </div>
        
        {/* Save Button */}
        <div className="w-full h-11 pr-5 py-[7px] bg-[#00597a] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-[5px] inline-flex overflow-hidden mt-[15px]">
          <button onClick={onClose} className="self-stretch justify-center items-center gap-2.5 flex">
            <img src="assets/icon/save.svg" alt="Save" />
            <div className="text-center text-white text-base font-normal">Save</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondModal;
