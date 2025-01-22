import React from 'react';

const CongratsMessage = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[450px] h-[153px] px-5 pt-[15px] pb-[30px] bg-white rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-center gap-5 inline-flex overflow-hidden">
        <div className="self-stretch h-[108px] flex-col justify-start items-start flex">
          <div className="self-stretch justify-center items-center inline-flex w-full">
            <button className="ml-auto justify-start gap-2.5 flex" onClick={onClose}>
            <div className="w-[30px] h-[30px] relative overflow-hidden">
                <img src="/assets/icon/closebutton.svg" alt="close button" />
              </div>
            </button>
          </div>
          <div className="self-stretch grow shrink basis-0 justify-center items-center gap-[30px] inline-flex">
            <div className="w-[50px] h-[50px] relative overflow-hidden">
              <img src="/assets/icon/party-horn.svg" alt="party-horn" />
            </div>
            <div className="w-[257px] flex-col justify-center items-start inline-flex">
              <div className="text-[#00597a] text-2xl font-semibold font-poppins">Congrats!</div>
              <div className="self-stretch text-[#00597a] text-sm font-normal font-poppins">
                IPCR successfully validated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratsMessage;
