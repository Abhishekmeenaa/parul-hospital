import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Filters from './Filters';

const EnquiriesTable = () => {
  const [filters, setFilters] = useState({
    department: '',
    status: '',
    dateRange: '',
  });

  const [data, setData] = useState([
    {
      id: 1,
      patientName: 'Rahul Sharma',
      contact: '9876543210',
      department: 'Cardiology',
      enquiryDate: '2023-06-26',
      status: 'Contacted',
      notes: 'Patient called for appointment',
    },
    {
      id: 2,
      patientName: 'Priya Patel',
      contact: '8765432109',
      department: 'Pediatrics',
      enquiryDate: '2023-06-25',
      status: 'Visit Scheduled',
      notes: 'Appointment on 28th June',
    },
    {
      id: 3,
      patientName: 'Amit Singh',
      contact: '7654321098',
      department: 'Orthopedics',
      enquiryDate: '2023-06-20',
      status: 'Admitted',
      notes: 'Patient admitted on 20th June',
    },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const departmentMatch =
        filters.department === '' || item.department === filters.department;
      const statusMatch = filters.status === '' || item.status === filters.status;

      const dateMatch = (() => {
        if (filters.dateRange === '') return true;
        const enquiryDate = new Date(item.enquiryDate);
        const today = new Date();
        if (filters.dateRange === 'today') {
          return enquiryDate.toDateString() === today.toDateString();
        }
        if (filters.dateRange === 'week') {
          const weekAgo = new Date();
          weekAgo.setDate(today.getDate() - 7);
          return enquiryDate >= weekAgo && enquiryDate <= today;
        }
        if (filters.dateRange === 'month') {
          const monthAgo = new Date();
          monthAgo.setMonth(today.getMonth() - 1);
          return enquiryDate >= monthAgo && enquiryDate <= today;
        }
        return true;
      })();

      return departmentMatch && statusMatch && dateMatch;
    });
  }, [filters, data]);

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Patient Name',
      selector: (row) => row.patientName,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: (row) => row.contact,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Enquiry Date',
      selector: (row) => row.enquiryDate,
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
            ${
              row.status === 'Contacted'
                ? 'bg-blue-100 text-blue-800'
                : row.status === 'Visit Scheduled'
                ? 'bg-purple-100 text-purple-800'
                : row.status === 'Treatment Done'
                ? 'bg-green-100 text-green-800'
                : row.status === 'Admitted'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Notes',
      selector: (row) => row.notes,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <select
          className="border border-gray-300 rounded-md py-1 px-2"
          value={row.status}
          onChange={(e) => handleStatusChange(row.id, e.target.value)}
        >
          <option value="Contacted">Contacted</option>
          <option value="Visit Scheduled">Visit Scheduled</option>
          <option value="Treatment Done">Treatment Done</option>
          <option value="Admitted">Admitted</option>
          <option value="Discharged">Discharged</option>
        </select>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <DataTable
        title="Enquiries Table"
        columns={columns}
        data={filteredData}
        pagination
        selectableRows
        fixedHeader
        highlightOnHover
        striped
      />
    </div>
  );
};

export default EnquiriesTable;
