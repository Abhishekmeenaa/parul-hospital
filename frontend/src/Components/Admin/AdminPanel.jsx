// // AdminPanel.jsx
// import { useState } from 'react';
// import { FiFilter, FiDownload, FiSearch, FiLogOut } from 'react-icons/fi';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('enquiries');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     department: '',
//     status: '',
//     dateRange: ''
//   });

//   // Mock data - will be replaced with API data later
//   const mockEnquiries = [
//     {
//       id: 1,
//       patientName: 'Rahul Sharma',
//       contact: '9876543210',
//       department: 'Cardiology',
//       enquiryDate: '2023-05-15',
//       status: 'Contacted',
//       notes: 'Patient called for appointment'
//     },
//     {
//       id: 2,
//       patientName: 'Priya Patel',
//       contact: '8765432109',
//       department: 'Pediatrics',
//       enquiryDate: '2023-05-16',
//       status: 'Visit Scheduled',
//       notes: 'Appointment on 20th May'
//     },
//     {
//       id: 3,
//       patientName: 'Amit Singh',
//       contact: '7654321098',
//       department: 'Orthopedics',
//       enquiryDate: '2023-05-17',
//       status: 'Admitted',
//       notes: 'Patient admitted on 17th May'
//     }
//   ];

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
//   };

//   const handleStatusUpdate = (id, newStatus) => {
//     // Will be replaced with API call later
//     console.log(`Updating status for enquiry ${id} to ${newStatus}`);
//   };

//   const handleDownloadReport = (format) => {
//     // Will be replaced with API call later
//     console.log(`Downloading report in ${format} format`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-700 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Hospital Admin Panel</h1>
//           <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded">
//             <FiLogOut /> Logout
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4">
//         {/* Tabs */}
//         <div className="flex border-b border-gray-200 mb-6">
//           <button
//             className={`px-4 py-2 font-medium ${activeTab === 'enquiries' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
//             onClick={() => setActiveTab('enquiries')}
//           >
//             Enquiries
//           </button>
//           {/* Add more tabs here if needed */}
//         </div>

//         {/* Filters and Search */}
//         <div className="bg-white p-4 rounded-lg shadow mb-6">
//           <div className="flex flex-col md:flex-row gap-4 mb-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiSearch className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Search by patient name or contact"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//               <select
//                 name="department"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={filters.department}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Departments</option>
//                 <option value="Cardiology">Cardiology</option>
//                 <option value="Pediatrics">Pediatrics</option>
//                 <option value="Orthopedics">Orthopedics</option>
//                 <option value="Neurology">Neurology</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 name="status"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={filters.status}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Statuses</option>
//                 <option value="Contacted">Contacted</option>
//                 <option value="Visit Scheduled">Visit Scheduled</option>
//                 <option value="Treatment Done">Treatment Done</option>
//                 <option value="Admitted">Admitted</option>
//                 <option value="Discharged">Discharged</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
//               <select
//                 name="dateRange"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={filters.dateRange}
//                 onChange={handleFilterChange}
//               >
//                 <option value="">All Dates</option>
//                 <option value="today">Today</option>
//                 <option value="week">This Week</option>
//                 <option value="month">This Month</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Enquiries Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-lg font-semibold">Patient Enquiries</h2>
//             <div className="flex gap-2">
//               <button 
//                 onClick={() => handleDownloadReport('PDF')}
//                 className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//               >
//                 <FiDownload /> PDF
//               </button>
//               <button 
//                 onClick={() => handleDownloadReport('Excel')}
//                 className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//               >
//                 <FiDownload /> Excel
//               </button>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiry Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {mockEnquiries.map((enquiry) => (
//                   <tr key={enquiry.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{enquiry.patientName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.contact}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.department}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{enquiry.enquiryDate}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                         ${enquiry.status === 'Contacted' ? 'bg-blue-100 text-blue-800' : 
//                           enquiry.status === 'Visit Scheduled' ? 'bg-purple-100 text-purple-800' :
//                           enquiry.status === 'Treatment Done' ? 'bg-green-100 text-green-800' :
//                           enquiry.status === 'Admitted' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-gray-100 text-gray-800'}`}>
//                         {enquiry.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{enquiry.notes}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <select
//                         className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                         value={enquiry.status}
//                         onChange={(e) => handleStatusUpdate(enquiry.id, e.target.value)}
//                       >
//                         <option value="Contacted">Contacted</option>
//                         <option value="Visit Scheduled">Visit Scheduled</option>
//                         <option value="Treatment Done">Treatment Done</option>
//                         <option value="Admitted">Admitted</option>
//                         <option value="Discharged">Discharged</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination - Will be connected to API later */}
//           <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm text-gray-700">
//                   Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
//                   <span className="font-medium">3</span> results
//                 </p>
//               </div>
//               <div>
//                 <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                   >
//                     <span className="sr-only">Previous</span>
//                     &larr;
//                   </a>
//                   <a
//                     href="#"
//                     aria-current="page"
//                     className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//                   >
//                     1
//                   </a>
//                   <a
//                     href="#"
//                     className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
//                   >
//                     2
//                   </a>
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                   >
//                     <span className="sr-only">Next</span>
//                     &rarr;
//                   </a>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminPanel;

// components/AdminDashboard/AdminDashboard.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import EnquiriesTable from './EnquiriesTable';
import Dashboard from './Dashbord';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto py-4 px-4">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'enquiries' && <EnquiriesTable />}
          {/* Future Tabs */}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;