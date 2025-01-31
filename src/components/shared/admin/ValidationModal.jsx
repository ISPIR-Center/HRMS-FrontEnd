import React, { useState } from "react";
import Spinner from "../Spinner";  // Import the Spinner component
import CongratsMessage from "../CongratsMessage";  // Import the CongratsMessage component

const ValidationModal = ({ show, onClose, content }) => {
  const [loading, setLoading] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);  // State to manage the CongratsMessage display

  const handleValidateClick = () => {
    setLoading(true);  // Show the spinner
    setShowCongrats(false);  // Ensure the congrats message is hidden at first
    
    // Step 1: Show the spinner for 3 seconds
    setTimeout(() => {
      setLoading(false);  // Hide the spinner
      setShowCongrats(true);  // Show the congrats message

      // Step 2: After the congrats message is displayed for 3 seconds, close the modal
      setTimeout(() => {
        setShowCongrats(false);  // Hide the congrats message
        onClose();  // Close the modal
      }, 3000);  // 3 seconds after congrats
    }, 3000);  // 3 seconds showing the spinner
  };

  if (!show) return null;  // Do not display the modal if 'show' is false

  return (
    <div>
      {loading && <Spinner />}  {/* Show the spinner while loading */}
      {showCongrats && <CongratsMessage onClose={onClose} />}  {/* Show the congrats message after spinner */}

      {/* Modal itself */}
      {!loading && !showCongrats && (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 font-poppins`}>
          <div className="w-[450px] h-[554px] px-5 pt-5 pb-[15px] bg-white rounded-[10px] flex-col justify-start items-center gap-5 inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-[45px] text-[#00597a] text-2xl font-semibold">
                Validate IPCR
              </div>
              <div className="self-stretch justify-end items-start gap-2.5 flex">
                <button onClick={onClose} className="w-[30px] h-[30px]">
                  <img src="/assets/icon/closebutton.svg" alt="" />
                </button>
              </div>
            </div>
          
            <div className="self-stretch h-[61px] flex-col justify-center items-center flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Office:</div>
              <div className="self-stretch h-10 pr-2.5 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="grow shrink basis-0 text-[#00597a] text-sm font-semibold p-3">{content.office}</div>
              </div>
            </div>

            <div className="self-stretch h-[61px] flex-col justify-center items-center flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Name:</div>
              <div className="self-stretch h-10 pr-2.5 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="grow shrink basis-0 text-[#00597a] text-sm font-semibold p-3">{content.name}</div>
              </div>
            </div>

            <div className="self-stretch h-[61px] flex-col justify-center items-center flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Numerical Rating:</div>
              <div className="self-stretch h-10 pr-2.5 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="grow shrink basis-0 text-[#00597a] text-sm font-semibold p-3">{content.numerical}</div>
              </div>
            </div>

            <div className="self-stretch h-[61px] flex-col justify-center items-center flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">Adjectival Rating:</div>
              <div className="self-stretch h-10 pr-2.5 py-2.5 rounded-[10px] border justify-start items-center gap-2.5 inline-flex overflow-hidden">
                <div className="grow shrink basis-0 text-[#00597a] text-sm font-semibold p-3">{content.adjectival}</div>
              </div>
            </div>

            <div className="self-stretch h-[66px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch text-[#00597a] text-sm font-normal">IPCR Attachment:</div>
              <div className="self-stretch px-2.5 bg-gradient-to-b from-white to-[#eef8ff] rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] border border-[#00597a] justify-end items-center gap-2.5 inline-flex overflow-hidden">
                <div className="w-[30px] h-[30px] justify-center items-center flex">
                  <img className="w-[30px] h-[30px]" src="/assets/img/XLS.png" alt="attachment icon" />
                </div>
                <div className="p-2.5 rounded-[10px] justify-start items-start gap-2.5 flex overflow-hidden">
                  <div className="self-stretch justify-start items-center gap-2.5 flex">
                    <div className="text-[#00597a] text-sm font-medium">{content.attachmentName}</div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-10 p-2.5 rounded-[10px] justify-end items-center gap-2.5 flex overflow-hidden">
                  <div className="grow shrink basis-0 h-[21px] justify-end items-center gap-2.5 flex">
                    <div className="text-right text-[#00597a] text-sm font-medium">{content.attachmentSize}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-[15px] inline-flex">
              <div className="w-[197px] rounded-[10px] border border-[#00597a] flex-col justify-end items-center gap-[5px] inline-flex">
                <button onClick={onClose} className="self-stretch h-11 pl-[15px] pr-5 py-[7px] bg-[#005a7a]/0 rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-[5px] inline-flex overflow-hidden">
                  <div className="text-center text-[#00597a] text-sm font-normal">Cancel</div>
                </button>
              </div>
              <div className="w-[197px] flex-col justify-end items-center gap-[5px] inline-flex">
                <button
                  onClick={handleValidateClick}  // Handle button click
                  className="self-stretch h-11 pl-[15px] pr-5 py-[7px] bg-[#00597a] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-[5px] inline-flex overflow-hidden"
                >
                  <div className="text-center text-white text-sm font-normal">Validate</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidationModal;
