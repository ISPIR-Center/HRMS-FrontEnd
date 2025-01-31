import React, { useState } from 'react';
import Layout from '../../layouts/admin/Layout';
import IpcrPeriodModal from '../../shared/admin/IpcrPeriodModal'; // Correct path

const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const handleAddButtonClick = () => {
        setIsModalOpen(true); // Open the modal when Add button is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal when the close button is clicked
    };

    return (
        <div>
            <Layout title="settings">
                <div className="flex justify-between items-center mt-10 mb-2 font-poppins lg:px-32">
                    {/* Search Bar */}
                    <div className="w-[400px] h-[45px] pl-5 pr-2.5 py-[7px] bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center gap-2.5">
                        <input
                            type="text"
                            placeholder="Search"
                            className="text-[#0a3c5d] text-sm font-light bg-transparent grow outline-none"
                        />
                        <div className="w-6 h-6">
                            <img src="/assets/icon/search.svg" alt="Search Icon" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Right: Filters and Add Button */}
                    <div className="flex items-center gap-5">
                        {/* Filter */}
                        <div className="w-[200px] h-[45px] pl-5 pr-2.5 bg-[#f0f2f5] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
                            <div className="text-[#00597a] text-base font-normal">Filter</div>
                            <div className="w-6 h-6">
                                <img src="/assets/icon/ion_filter.svg" alt="Filter Icon" className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* Add Button */}
                        <div className="w-[117px] h-11 inline-flex justify-center items-center">
                            <button
                                className="flex items-center px-6 py-[10px] bg-[#00597a] rounded-[10px] shadow-md gap-[6px]"
                                onClick={handleAddButtonClick}
                            >
                                <div className="w-4 h-4">
                                    <img src="/assets/icon/addplus.svg" alt="Submit Icon" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-white text-base font-normal">
                                    Add
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal Component with the `isOpen` prop passed */}
                <IpcrPeriodModal isOpen={isModalOpen} onClose={handleCloseModal} />

                <div className="flex justify-center items-start h-screen">
                    <div className="w-[1119px] px-4 py-10 bg-white flex-col justify-start items-start gap-2.5">
                        <div className="w-full pb-2 flex justify-start items-center gap-[60px] bg-[#f4f4f4] border-b-2 border-[#0a3c5d]">
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">Start Month Year</div>
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">End-Month Year</div>
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">IPCR Period Type</div>
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">IPCR Type</div>
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">Status</div>
                            <div className="flex-1 text-[#0a3c5d] text-base font-semibold">Actions</div>
                        </div>

                        <div className="space-y-2.5 bg-white py-3 rounded-[5px] overflow-hidden">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="flex justify-start items-center gap-4 py-2.5 border-b-2 border-[#0a3c5d]/10">
                                    <div className="flex-1 text-[#0a3c5d] text-sm">June 2024</div>
                                    <div className="flex-1 text-[#0a3c5d] text-sm">December 2024</div>
                                    <div className="flex-1 text-[#00597a] text-sm">Probation</div>
                                    <div className="flex-1 text-[#00597a] text-sm">Accomplished</div>
                                    <div className="w-[40px] flex justify-center items-center">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="toggle1" className="hidden toggle" />
                                            <div className="w-10 h-5 bg-white border-2 border-gray-300 rounded-full flex items-center px-1 transition-all duration-300">
                                                <div className="w-3 h-3 bg-gray-300 border-2 border-gray-300 rounded-full transition-transform duration-300 transform"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="w-[30px] flex justify-center items-center">
                                        <img src="../assets/icon/delete.svg" alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Settings;
