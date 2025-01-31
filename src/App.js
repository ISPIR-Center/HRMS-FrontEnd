import React from 'react';
import LoginPage from './components/pages/Login';
import Performance from './components/pages/admin/Performance';
import Employee from './components/pages/admin/Employee';
import Dashboard from './components/pages/admin/Dashboard';
import Payroll from './components/pages/admin/Payroll';
import Reports from './components/pages/admin/Reports';
import Settings from './components/pages/admin/Settings';

import UserDashboard from './components/pages/user/UserDashboard';
import UserEmployee from './components/pages/user/UserEmployee';
import UserPerformance from './components/pages/user/UserPerformance';
import UserPayroll from './components/pages/user/UserPayroll';
import UserReports from './components/pages/user/UserReports';
import UserSettings from './components/pages/user/UserSettings';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* The LoginPage does not have the Layout */}
        <Route path="/login" element={<LoginPage />} />

        {/* Wrapping the Dashboard and Employee pages in the Layout, passing the unique title */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/employee" element={<Employee />} />
        <Route path="/admin/performance" element={<Performance />} />
        <Route path="/admin/payroll" element={<Payroll />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/employee" element={<UserEmployee />} />
        <Route path="/user/performance" element={<UserPerformance />} />
        <Route path="/user/payroll" element={<UserPayroll />} />
        <Route path="/user/reports" element={<UserReports />} />
        <Route path="/user/settings" element={<UserSettings />} />
      </Routes>

    </Router>
  );
}

export default App;
