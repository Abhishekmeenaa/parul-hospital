import React, { useEffect, useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments, deleteAppointment, updateAppointment } from '../../Redux/appointment/appointmentThunks';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const AppointmentTable = () => {
  const dispatch = useDispatch();
  const { list: appointments, loading, error } = useSelector((state) => state.appointment);

  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  // Filter appointments based on search term
  useEffect(() => {
    if (appointments && appointments.length > 0) {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = appointments.filter(item => 
        item.name.toLowerCase().includes(lowercasedSearch) ||
        item.phone.toLowerCase().includes(lowercasedSearch) ||
        item.doctor.toLowerCase().includes(lowercasedSearch) ||
        item.department.toLowerCase().includes(lowercasedSearch) ||
        (item.message && item.message.toLowerCase().includes(lowercasedSearch))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(appointments);
    }
  }, [searchTerm, appointments]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      dispatch(deleteAppointment(id));
    }
  };

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setFormData(appointment);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAppointment({ id: selectedAppointment._id, updatedData: formData }));
    setShowModal(false);
  };

  const columns = [
    {
      name: 'Patient Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Time',
      selector: row => row.time,
    },
    {
      name: 'Doctor',
      selector: row => row.doctor,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
    },
    {
      name: 'Message',
      selector: row => row.message || '—',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditClick(row)}
            className="p-2 text-yellow-500 hover:text-yellow-600"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="p-2 text-red-500 hover:text-red-600"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {/* Search Input */}
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search appointments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        progressPending={loading}
        pagination
        highlightOnHover
        striped
        responsive
        pointerOnHover
        noHeader
      />

      {/* Tailwind Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur  bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <h3 className="text-lg font-semibold">Edit Appointment</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium">Patient Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleFormChange}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Doctor</label>
                <input
                  type="text"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentTable;