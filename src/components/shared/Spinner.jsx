import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="w-24 h-24 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
