import React, { useState } from 'react';
import Spinner from '../Spinner';
import CongratsMessage from '../CongratsMessage';

const PerformanceModal = ({ closeModal }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isSpinnerVisible, setSpinnerVisible] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

  const handleNext = () => {
    setShowSecondModal(true);
  };

  const handleSecondModalSubmit = () => {
    // Hide the second modal and show the spinner
    setShowSecondModal(false);
    setSpinnerVisible(true);

    // After 3 seconds, show the congrats modal
    setTimeout(() => {
      setSpinnerVisible(false);
      setShowCongratsModal(true);

      // Hide the congrats modal after another 3 seconds and close everything
      setTimeout(() => {
        setShowCongratsModal(false);
        closeModal();
      }, 3000);
    }, 3000);
  };

  return (
    <>
      {isSpinnerVisible && <Spinner />}
      {!showSecondModal && !isSpinnerVisible && !showCongratsModal && (
        <div className="fixed inset-0 flex justify-center items-center font-poppins">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 h-[578px] px-5 pt-5 pb-[15px] bg-white rounded-[10px] flex-col justify-start items-center gap-5 inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">
                Submit IPCR
              </div>
              <button className="w-[30px] h-[30px]" onClick={closeModal}>
                <img src="/assets/icon/closebutton.svg" alt="Close Icon" />
              </button>
            </div>
            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
                <div class="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden relative">
                    <select class="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10 italic">
                        <option value="" disabled selected class="text-[#00597a]">Select Office</option>
                        <option value="office1" class="p-5">RMO</option>
                        <option value="office2" class="p-5">DIO</option>
                        <option value="office3" class="p-5">MSI</option>
                        <option value="office4" class="p-5">NAPA</option>
                    </select>
                </div>
            </div>
        

            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Name:</div>
                <div class="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                    <select class="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10 italic">
                        <option value="" disabled selected class="text-[#00597a] opacity-50">Select Personel</option>
                        <option value="office1" class="p-5">Gene Philip Dela Cuesta</option>
                        <option value="office2" class="p-5">yhahhasdjahsdajdaldada</option>
                        <option value="office3" class="p-5">asdkahdsahdakdasdw</option>
                        <option value="office4" class="p-5">askdjadkahdkads</option>
                    </select>
                </div>
            </div>


            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Type:</div>
                <div class="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                    <select class="grow shrink basis-0 text-[#00597a] text-sm bg-transparent border-none focus:outline-none pr-10 italic">
                        <option value="" disabled selected class="text-[#00597a] opacity-50">Select Type</option>
                        <option value="office1" class="p-5">Accomplished</option>
                        <option value="office2" class="p-5">Rating</option>
                    </select>
                </div>
            </div>

            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Rating:</div>
                <div class="self-stretch h-10 p-2.5 rounded-[10px] border border-[#00597a] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                    <input type="text" step="any" class="w-full h-full bg-transparent border-none focus:outline-none text-[#00597a] text-sm font-normal placeholder:text-[#00597a] placeholder:italic" placeholder="Input Numerical Rating"/>
                </div>
            </div>
    
            <div class="self-stretch h-[70px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
                <div class="self-stretch h-11 px-2.5 bg-gradient-to-b from-white to-[#e9f5fd] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] justify-center items-center gap-2.5 inline-flex overflow-hidden">
                    <div class="grow shrink basis-0 h-10 p-2.5 rounded-[10px] justify-center items-center gap-2.5 flex overflow-hidden">
                        <div class="grow shrink basis-0 self-stretch justify-center items-center gap-2.5 flex">
                            <input type="file" class="hidden" id="fileInput" />
                            <label for="fileInput" class="cursor-pointer">
                                <div class="text-[#00597a] text-sm font-medium">Upload File</div>
                            </label>
                        </div>
                    </div>
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
            <div className="self-stretch justify-between items-center flex">
              <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">
                Submit IPCR
              </div>
              <button
                className="w-[30px] h-[30px] relative overflow-hidden"
                onClick={closeModal}
              >
                <img src="/assets/icon/closebutton.svg" alt="Close Icon" />
              </button>
            </div>

            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Name:</div>
                <div class="self-stretch h-10 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                    <div class="text-[#00597a] text-sm font-semibold p-2">Gene Philip Dela Cuesta</div>
                </div>
            </div>

            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
                <div class="self-stretch h-10 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                    <div class="text-[#00597a] text-sm font-semibold p-2">DIO</div>
                </div>
            </div>

            <div class="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
                <div class="self-stretch px-2.5 bg-gradient-to-b from-white to-[#eef8ff] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] justify-end items-center gap-2.5 inline-flex overflow-hidden">
                    <div class="w-6 h-6 relative overflow-hidden"></div>
                    <div class="p-2.5 rounded-[10px] justify-start items-start gap-2.5 flex overflow-hidden">
                        <div class="self-stretch justify-start items-center gap-2.5 flex">
                            <img src="assets/icon/pdf-outline.svg" alt=""/>
                            <div class="text-[#00597a] text-sm font-medium">IPCR.pdf</div>
                        </div>
                    </div>
                    <div class="grow shrink basis-0 h-10 p-2.5 rounded-[10px] justify-end items-center gap-2.5 flex overflow-hidden">
                        <div class="grow shrink basis-0 h-[21px] justify-end items-center gap-2.5 flex">
                            <div class="text-right text-[#00597a] text-sm font-medium">5MB</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="self-stretch h-[118px] flex-col justify-center items-center gap-[5px] flex">
                <div class="self-stretch text-[#00597a] text-sm font-normal">Rating:</div>
                <div class="self-stretch p-2.5 rounded-[10px] border justify-center items-center gap-2.5 inline-flex overflow-hidden">
                    <div class="text-[#00597a] text-5xl font-semibold">4.5</div>
                    <div class="text-[#00597a] text-sm font-normal">Very Satisfactory</div>
                </div>
            </div>

            <button
              onClick={handleSecondModalSubmit}
              className="self-stretch h-11 flex justify-center items-center bg-[#00597a] text-white text-base font-normal rounded-[10px]"
            >
              <img src="assets/img/submitdocument.png" alt="" className="mr-2" />
              Submit
            </button>
          </div>
        </div>
      )}
      {showCongratsModal && <CongratsMessage />}
    </>
  );
};

export default PerformanceModal;
