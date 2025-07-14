import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import EnquiriesTable from './EnquiriesTable';
import Dashboard from './Dashbord';
import AppointmentTable from './AppointmentTable';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const openMobileSidebar = () => setIsMobileOpen(true);
  const closeMobileSidebar = () => setIsMobileOpen(false);
  const toggleSidebarCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        closeMobileSidebar={closeMobileSidebar}
        isCollapsed={isCollapsed}
        toggleSidebarCollapse={toggleSidebarCollapse}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header openMobileSidebar={openMobileSidebar} />
        <main className="flex-1 overflow-y-auto py-4 px-4">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'enquiries' && <EnquiriesTable />}
          {activeTab === 'appointment' && <AppointmentTable />}
          
          {/* Future Tabs */}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
