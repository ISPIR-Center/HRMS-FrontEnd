// UserLayout.jsx
import React from 'react';
import UserHeader from './UserHeader'; // Adjust path if necessary
import UserSidebar from './UserSidebar'; // Adjust path if necessary
import UserFooter from './UserFooter'; // Adjust path if necessary

const UserLayout = ({ children, title }) => {  // Destructure `title` prop
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <UserHeader />
      <div className="flex flex-2">
        {/* Sidebar */}
        <UserSidebar />
        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-1">
          {/* Customizable Header */}
          <div className="w-full justify-start h-28 pl-7 pt-10 pb-10 bg-[#f4f4f4] flex items-center shadow">
            <div className="text-[#00597a] text-2xl font-extrabold font-poppins uppercase">{title}</div> {/* Display title here */}
          </div>
          {/* Main Children */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
