import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isPerformanceActive, setIsPerformanceActive] = useState(false);
  const [isNonAcademicActive, setIsNonAcademicActive] = useState(true);

  // Toggle the visibility of Non-Academic and Academic options
  const togglePerformanceReview = () => {
    setIsPerformanceActive(prevState => !prevState); // Toggle visibility
  };

  // Set Non-Academic as the active option
  const setNonAcademicActive = () => {
    setIsNonAcademicActive(true);
  };

  // Set Academic as the active option
  const setAcademicActive = () => {
    setIsNonAcademicActive(false);
  };

  // Reusable sidebar item with image change on hover and click
  const SidebarItem = ({ to, imageSrc, imageHoverSrc, imageActiveSrc, label, onClick = () => {} }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Handle hover state
    const handleHover = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    return (
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `self-stretch p-2.5 justify-start items-center gap-2.5 inline-flex ${isActive ? 'bg-customBlue text-white rounded-xl' : 'text-black hover:bg-customBlue hover:text-white rounded-xl'}` 
        }
        onClick={onClick} // Handle click event to toggle active state
      >
        <div className="w-6 h-6 relative overflow-hidden">
          <img 
            // Image source based on hover, active, or default state
            src={isHovered || window.location.pathname === to ? imageHoverSrc : (window.location.pathname === to ? imageActiveSrc : imageSrc)} 
            alt={`${label} icon`} 
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="transition-all" 
          />
        </div>
        <div className="text-base font-normal">{label}</div>
      </NavLink>
    );
  };

  return (
    <div className="w-[296px] h-[950px] px-5 pt-[50px] pb-5 bg-white shadow-[4px_0px_4px_-1px_rgba(0,0,0,0.18)] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
      <div className="w-[250px] grow shrink basis-0 flex-col justify-start items-start gap-5 flex">
        
        {/* Reusing SidebarItem for Dashboard */}
        <SidebarItem 
          to="/user/dashboard" 
          imageSrc="/assets/icon/dashboard.svg" // Default black image
          imageHoverSrc="/assets/icon/dashboardwhite.svg" // White image on hover
          imageActiveSrc="/assets/icon/dashboardwhite.svg" // Active image (white)
          label="Dashboard" 
        />

        {/* Reusing SidebarItem for Employee */}
        <SidebarItem 
          to="/user/employee" 
          imageSrc="/assets/icon/user.svg" // Default black image
          imageHoverSrc="/assets/icon/userwhite.svg" // White image on hover
          imageActiveSrc="/assets/icon/userwhite.svg" // Active image (white)
          label="Employee" 
        />

        {/* Performance Review Item */}
        <SidebarItem 
          to="/user/performance" 
          imageSrc="/assets/icon/performancereview.svg" // Default black image
          imageHoverSrc="/assets/icon/performance-active.svg" // White image on hover
          imageActiveSrc="/assets/icon/performance-active.svg" // Active image (white)
          label="Performance Review"
          onClick={togglePerformanceReview} // Toggle on click
        />

        {/* Conditional rendering of Non-Academic and Academic */}
        {isPerformanceActive && (
          <div className="pl-5">
            {/* Non-Academic Item */}
            <div 
              className={`p-3 mb-2 cursor-pointer ${
                isNonAcademicActive ? 'bg-customBlue text-white rounded-xl' : 'text-black hover:bg-customBlue hover:text-white rounded-xl'
              }`}
              onClick={setNonAcademicActive}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={isNonAcademicActive 
                    ? "/assets/icon/performance-active.svg"  // Active white icon 
                    : "/assets/icon/performancereview.svg"        // Default black icon 
                  } 
                  alt="Non-Academic" 
                  className="w-5 h-5" 
                />
                <span>Non-Academic</span>
              </div>
            </div>

            {/* Academic Item */}
            <div 
              className={`p-3 cursor-pointer ${
                !isNonAcademicActive ? 'bg-customBlue text-white rounded-xl' : 'text-black hover:bg-customBlue hover:text-white rounded-xl'
              }`}
              onClick={setAcademicActive}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={!isNonAcademicActive 
                    ? "/assets/icon/performance-active.svg"      // Active white icon 
                    : "/assets/icon/performancereview.svg"            // Default black icon
                  } 
                  alt="Academic" 
                  className="w-5 h-5" 
                />
                <span>Academic</span>
              </div>
            </div>
          </div>
        )}

        {/* Payroll Item */}
        <SidebarItem 
          to="/user/payroll" 
          imageSrc="/assets/icon/payroll.svg" // Default black image
          imageHoverSrc="/assets/icon/payrollwhite.svg" // White image on hover
          imageActiveSrc="/assets/icon/payrollwhite.svg" // Active image
          label="Payroll" 
        />

        {/* Reports Item */}
        <SidebarItem 
          to="/user/reports" 
          imageSrc="/assets/icon/reports.svg" // Default black image
          imageHoverSrc="/assets/icon/reportwhite.svg" // White image on hover
          imageActiveSrc="/assets/icon/reportwhite.svg" // Active image (white)
          label="Reports" 
        />

        {/* Settings Item */}
        <SidebarItem 
          to="/user/settings" 
          imageSrc="/assets/icon/settings.svg" // Default black image
          imageHoverSrc="/assets/icon/settingswhite.svg" // White image on hover
          imageActiveSrc="/assets/icon/settingswhite.svg" // Active image
          label="Settings" 
        />
      </div>
    </div>
  );
};

export default Sidebar;
