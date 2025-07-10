// components/AdminDashboard/Filters.jsx

import { FiDownload } from 'react-icons/fi';

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Patient Enquiries</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            <FiDownload /> PDF
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            <FiDownload /> Excel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Department Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
          <select
            name="department"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={filters.department}
            onChange={onFilterChange}
          >
            <option value="">All Departments</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={filters.status}
            onChange={onFilterChange}
          >
            <option value="">All Statuses</option>
            <option value="Contacted">Contacted</option>
            <option value="Visit Scheduled">Visit Scheduled</option>
            <option value="Treatment Done">Treatment Done</option>
            <option value="Admitted">Admitted</option>
            <option value="Discharged">Discharged</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
          <select
            name="dateRange"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={filters.dateRange}
            onChange={onFilterChange}
          >
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
