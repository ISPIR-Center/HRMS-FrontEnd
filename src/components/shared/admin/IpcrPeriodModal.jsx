import React, { useState } from 'react';
import axios from 'axios';

const IpcrPeriodModal = ({ isOpen, onClose }) => {
    const [periodType, setPeriodType] = useState('');
    const [ipcrType, setIpcrType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async () => {
        setError('');
        setSuccess('');
        setLoading(true);
    
        try {
            const token = localStorage.getItem('auth_token'); // Retrieve the token
            const response = await axios.post(
                'https://hrms-server-dev.bulsutech.com/api/ipcr-periods/create',
                {
                    start_month_year: startDate,
                    end_month_year: endDate,
                    ipcr_period_type: periodType,
                    ipcr_type: ipcrType,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include token in headers
                    },
                }
            );
    
            if (response.data.success) {
                setSuccess(response.data.message);
                onClose(); // Close modal after success
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 font-poppins">
            <div className="w-[450px] h-[507px] px-4 py-[30px] bg-white rounded-[10px] flex-col justify-start items-start gap-[16px] inline-flex">
                
                {/* Modal Header */}
                <div className="justify-between items-center gap-2.5 inline-flex w-full">
                    <div className="text-[#00597a] text-2xl font-semibold">Add IPCR Period</div>
                    <button
                        onClick={onClose}
                        className="w-[27.50px] h-[27.50px] flex justify-center items-center relative"
                    >
                        <img
                            src="/assets/icon/closebutton.svg"
                            alt="Close"
                            className="w-full h-full object-contain"
                        />
                    </button>
                </div>

                {/* Error and Success Messages */}
                {error && <div className="text-red-500 text-sm w-full">{error}</div>}
                {success && <div className="text-green-500 text-sm w-full">{success}</div>}

                {/* IPCR Period Type */}
                <div className="w-full text-[#00597a] text-base font-normal">
                    IPCR Period Type
                    <select
                        value={periodType}
                        onChange={(e) => setPeriodType(e.target.value)}
                        className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] bg-white text-customBlue text-sm"
                    >
                        <option value="">Select IPCR Period Type</option>
                        <option value="Probation">Probation</option>
                        <option value="Regular">Regular</option>
                    </select>
                </div>

                {/* IPCR Type */}
                <div className="w-full text-[#00597a] text-base font-normal">
                    IPCR Type
                    <select
                        value={ipcrType}
                        onChange={(e) => setIpcrType(e.target.value)}
                        className="w-full h-10 p-2.5 mt-1 rounded-[10px] border border-[#00597a] bg-white text-customBlue text-sm"
                    >
                        <option value="">Select IPCR Type</option>
                        <option value="Accomplished">Accomplished</option>
                        <option value="Target">Target</option>
                    </select>
                </div>

                {/* Start Date */}
                <div className="w-full text-[#00597a] text-base font-normal">
                    Start Date
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full h-11 mt-1 px-5 py-2.5 bg-white rounded-[10px] border border-[#00597a] text-customBlue text-base"
                    />
                </div>

                {/* End Date */}
                <div className="w-full text-[#00597a] text-base font-normal">
                    End Date
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full h-11 mt-1 px-5 py-2.5 bg-white rounded-[10px] border border-[#00597a] text-customBlue text-base"
                    />
                </div>

                {/* Save Button */}
                <div className="w-full h-11 flex justify-center items-center mt-6">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full px-5 py-2.5 rounded-[10px] ${
                            loading ? 'bg-gray-400' : 'bg-[#00597a]'
                        } text-white flex justify-center items-center`}
                    >
                        {loading ? 'Saving...' : 'SAVE'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IpcrPeriodModal;
