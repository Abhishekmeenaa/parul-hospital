import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

const Sidebar = ({
  activeTab,
  setActiveTab,
  isMobileOpen,
  closeMobileSidebar,
  isCollapsed,
  toggleSidebarCollapse,
}) => {
  const navItems = [
    { name: "dashboard", label: "Dashboard", icon: <FiHome size={20} /> },
    { name: "enquiries", label: "Enquiries", icon: <FiUsers size={20} /> },
    { name: "patients", label: "Patients", icon: <FiUsers size={20} /> },
    { name: "appointment", label: "Appointment", icon: <FiCalendar size={20} /> },
    { name: "settings", label: "Settings", icon: <FiSettings size={20} /> },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-[#00A297] text-white transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Hospital Admin</h1>
          <button
            onClick={closeMobileSidebar}
            className="p-2 rounded-full hover:bg-blue-700"
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="mt-2 px-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                closeMobileSidebar(); // Close on selection
              }}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                activeTab === item.name
                  ? "bg-blue-900 text-white"
                  : "text-blue-100 hover:bg-blue-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileSidebar}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex md:flex-shrink-0 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-62"
        }`}
      >
        <div className="flex flex-col bg-[#00A297] text-white w-60 h-full">
          <div className="flex justify-end p-2">
            <button
              onClick={toggleSidebarCollapse}
              className="p-2 rounded-full hover:bg-blue-700"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
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
                    activeTab === item.name
                      ? "bg-blue-900 text-white"
                      : "text-blue-100 hover:bg-blue-700"
                  }`}
                  title={item.label}
                >
                  <div className={`${isCollapsed ? "mx-auto" : "mr-3"}`}>
                    {item.icon}
                  </div>
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
