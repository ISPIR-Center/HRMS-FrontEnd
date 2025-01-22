import React from 'react';

const EmployeeTable = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="w-full max-w-[1330px] h-auto bg-white flex-col justify-start items-start inline-flex font-poppins mt-10">
                {/* Table Header */}
                <div className="w-full h-[54px] py-[15px] bg-white border-b border-black flex justify-between">
                    <div className="flex-1 text-[#0a3c5d] text-base font-semibold text-left">Employee ID #</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-semibold text-left">Full Name</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-semibold text-left">Employee Type</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-semibold text-left">Office</div>
                    <div className="flex-[0.5] text-center text-[#0a3c5d] text-base font-semibold">Action</div>
                </div>
                {/* Table Rows */}
                <div className="w-full py-[15px] border-b border-[#e1e1e1] flex justify-between items-center">
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">2024-046</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">Alice Williamson</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">Non-Academic</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">DIO</div>
                    <div className="flex-[0.5] flex justify-center items-center gap-2.5">
                        <button className="w-[25px] h-[25px] relative overflow-hidden">
                        <img src="assets/icon/edit.svg" alt="Edit" />
                        </button>
                        <button className="w-[25px] h-[25px] relative overflow-hidden">
                        <img src="assets/icon/delete.svg" alt="Delete" />
                        </button>
                    </div>
                </div>
                <div className="w-full py-[15px] border-b border-[#e1e1e1] flex justify-between items-center">
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">2024-046</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">Alice Williamson</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">Non-Academic</div>
                    <div className="flex-1 text-[#0a3c5d] text-base font-normal text-left">DIO</div>
                    <div className="flex-[0.5] flex justify-center items-center gap-2.5">
                        <button className="w-[25px] h-[25px] relative overflow-hidden">
                        <img src="assets/icon/edit.svg" alt="Edit" />
                        </button>
                        <button className="w-[25px] h-[25px] relative overflow-hidden">
                        <img src="assets/icon/delete.svg" alt="Delete" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeTable;