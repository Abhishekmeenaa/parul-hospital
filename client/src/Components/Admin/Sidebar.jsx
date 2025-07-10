import { useState } from 'react';
import { FiHome, FiUsers, FiCalendar, FiSettings, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: 'dashboard', label: 'Dashboard', icon: <FiHome size={20} /> },
    { name: 'enquiries', label: 'Enquiries', icon: <FiUsers size={20} /> },
    { name: 'patients', label: 'Patients', icon: <FiUsers size={20} /> },
    { name: 'appointments', label: 'Appointments', icon: <FiCalendar size={20} /> },
    { name: 'settings', label: 'Settings', icon: <FiSettings size={20} /> },
  ];

  return (
    <div className={`hidden md:flex md:flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-48'}`}>
      <div className="flex flex-col bg-[#00A297] text-white h-full">
        <div className="flex justify-end p-2">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-blue-700"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </button>
        </div>
        <div className="h-0 flex-1 flex flex-col pt-2 pb-4 overflow-y-auto">
          {!isCollapsed && (
            <div className="flex items-center flex-shrink-0 px-4 mb-6">
              <h1 className="text-xl font-bold">Hospital Admin</h1>
            </div>
          )}
          <nav className="mt-2 flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center px-2 py-3 text-sm font-medium rounded-md w-full ${
                  activeTab === item.name ? 'bg-blue-900 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`}
                title={item.label}
              >
                <div className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`}>{item.icon}</div>
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;