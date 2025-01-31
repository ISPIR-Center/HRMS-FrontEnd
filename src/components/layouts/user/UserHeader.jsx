import { useState } from 'react';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle the logout functionality here
  };

  return (
    <header className="relative flex w-full h-16 p-[13px_16px_13px_22px] items-center gap-4 bg-white shadow-md font-poppins">
      <p className="w-24 shrink-0 text-customBlue text-2xl font-extrabold">HRMS I</p>
      <p className="w-44 shrink-0 text-colorHR text-base font-light">Human Resources Management System</p>
      <button
        className="flex w-40 items-center gap-2 shrink-0 ml-auto relative"
        onClick={handleToggleDropdown}
      >
        <div className="flex justify-center items-center gap-1.5">
          <img src="/assets/img/Doorbell.png" alt="bell icon" />
          <p className="text-colorHR">Account</p>
          <img src="/assets/icon/tabler_chevron-up.svg" alt="drop down icon" />
        </div>
        {/* Dropdown Menu */}
        {dropdownVisible && (
          <div className="absolute right-0 mt-12 w-28 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              <li className="p-2 text-colorHR hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="p-2 text-colorHR hover:bg-gray-100 cursor-pointer">Settings</li>
              <li
                className="p-2 text-colorHR hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </button>
    </header>
  );
}

export default Header;
