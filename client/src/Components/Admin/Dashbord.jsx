// components/AdminDashboard/Dashboard.jsx

import React from 'react';
import { FaUserAlt, FaBell, FaCalendarCheck, FaHospital } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaUserAlt className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Enquiries</h3>
            <p className="text-3xl font-bold">40</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaBell className="text-yellow-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Pending Enquiries</h3>
            <p className="text-3xl font-bold">8</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <FaCalendarCheck className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Visits Scheduled</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Status Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            {/* <p className="text-sm">Contacted</p> */}
            {/* <p className="text-xl font-bold">10</p> */}
          </div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">
            {/* <p className="text-sm">Visit Scheduled</p>
            <p className="text-xl font-bold">5</p> */}
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            {/* <p className="text-sm">Admitted</p>
            <p className="text-xl font-bold">3</p> */}
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            {/* <p className="text-sm">Treatment Done</p>
            <p className="text-xl font-bold">15</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            {/* <p className="text-sm">Discharged</p>
            <p className="text-xl font-bold">7</p> */}
          </div>
        </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Enquiries</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Patient</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Rahul Sharma</td>
                <td className="px-4 py-2">Cardiology</td>
                <td className="px-4 py-2">Contacted</td>
                <td className="px-4 py-2">2023-06-20</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Priya Patel</td>
                <td className="px-4 py-2">Pediatrics</td>
                <td className="px-4 py-2">Visit Scheduled</td>
                <td className="px-4 py-2">2023-06-21</td>
              </tr>
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Amit Singh</td>
                <td className="px-4 py-2">Orthopedics</td>
                <td className="px-4 py-2">Admitted</td>
                <td className="px-4 py-2">2023-06-22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
