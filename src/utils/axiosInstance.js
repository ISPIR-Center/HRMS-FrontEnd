// src/api/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://hrms-server-dev.bulsutech.com/api', // Base URL for your API
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can also add interceptors here if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
