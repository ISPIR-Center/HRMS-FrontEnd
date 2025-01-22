import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const handleLogin = () => {
    setLoading(true);
    // Replace with your login logic
    setTimeout(() => {
      setLoading(false);
      if (email === "valid@bulsu.edu.ph" && password === "password") {
        setSuccessMessage("Login successful");
        // Navigate to the Dashboard page on successful login
        navigate('/dashboard');
      } else {
        setErrorMessage("Invalid email or password");
      }
    }, 1000);
  };

  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden font-poppins">
      {/* Background Image */}
      <img src="assets/img/imgbulsu.jpg" alt="bulsu" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay background */}
      <div className="absolute inset-0 bg-customBlue opacity-50"></div>

      {/* Logo and Text */}
      <div className="absolute flex flex-col items-center mt-48 ml-14">
        <img src="/assets/img/logo.png" className="w-48 h-48" alt="Logo" />
      </div>

      <div className="absolute flex flex-col items-start mt-96">
        <p className="text-white text-2xl font-semibold mt-4 ml-20">Bulacan State University</p>
        <p className="text-white text-4xl font-semibold ml-20">Human Resources Management System “HRMS”</p>
      </div>

      <div className="relative h-screen">
        <div className="absolute top-1/2 right-16 h-[650px] w-[650px] bg-white shadow-lg rounded-3xl p-6 translate-y-[-50%]">
          <h2 className="text-4xl uppercase font-bold text-center text-loginBlue mt-11">Login</h2>
          <p className="text-loginBlue mx-24 mt-7 text-light">Enter your registered BulSU email address and password to access the Human Resources Management System.</p>

          {/* Error/Success Message */}
          {errorMessage && (
            <div className="text-red-500 mt-4 text-center">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 mt-4 text-center">
              {successMessage}
            </div>
          )}

          {/* Email Input */}
          <div className="flex flex-col justify-center flex-start gap-2 shrink-0 mt-8 mx-24">
            <h1 className="font-normal text-base">Email Address</h1>
            <div className="flex w-[428px] py-2 px-5 items-center gap-2 flex-1 border rounded-md border-[#BBB] bg-white">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 bg-transparent outline-none text-sm"
                placeholder="Enter Your BulSU Email"
                autoFocus
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col justify-center flex-start gap-2 shrink-0 mt-6 mx-24">
            <h1 className="font-normal text-base">Password</h1>
            <div className="flex w-[428px] py-2 px-5 items-center gap-2 flex-1 border rounded-md border-[#BBB] bg-white">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 bg-transparent outline-none text-sm font-normal"
                placeholder="Enter Your Password"
              />
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex flex-col justify-center shrink-0 mt-8 mx-24">
            <a href="" className="text-forgotpass font-light text-base">Forgot your password?</a>
          </div>

          {/* Submit Button */}
          <div className="mt-10 mx-24">
            <button
              onClick={handleLogin}
              className="w-[420.736px] h-[49.405px] flex-shrink-0 rounded-[10px] bg-[#005A7A] text-white text-lg border-0 cursor-pointer uppercase"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="text-white italic absolute right-7 bottom-7">
        <p>Developed by: ISIPIR Center (c) 2024</p>
      </footer>
    </div>
  );
};

export default UserLogin;
