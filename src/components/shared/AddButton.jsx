import React from "react";

const AddButton = ({ onAddClick }) => {
  return (
    <button
      className="h-[45px] pl-[15px] pr-5 py-[7px] bg-[#00597a] rounded-[10px] flex items-center gap-[10px]"
      onClick={onAddClick} // Trigger onAddClick (openModal function)
    >
      <div className="w-[25px] h-[25px]">
        <img
          src="/assets/icon/symbol-add.svg"
          alt="Add Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-white text-base font-normal">Add</div>
    </button>
  );
};

export default AddButton;
