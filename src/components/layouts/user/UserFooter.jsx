import React from 'react';
import Header from '../admin/Header';
import Footer from '../admin/Footer';
import Sidebar from '../admin/Sidebar';

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-2">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-1">
          {/* Customizable Header */}
          <div className="w-full justify-start h-28 pl-7 pt-10 pb-10 bg-[#f4f4f4] flex items-center shadow">
            <div className="text-[#00597a] text-2xl font-extrabold font-poppins uppercase">{title}</div>
          </div>
          {/* Main Children */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
