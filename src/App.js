import React from 'react';
import LoginPage from './components/pages/Login';
import Performance from './components/pages/admin/Performance';
import Employee from './components/pages/admin/Employee';
import Dashboard from './components/pages/admin/Dashboard';
import Payroll from './components/pages/admin/Payroll';
import Reports from './components/pages/admin/Reports';
import Settings from './components/pages/admin/Settings';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* The LoginPage does not have the Layout */}
        <Route path="/" element={<LoginPage />} />

        {/* Wrapping the Dashboard and Employee pages in the Layout, passing the unique title */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />


      </Routes>
    </Router>
  );
}

export default App;