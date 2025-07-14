import { FiLogOut, FiBell, FiSearch, FiMenu } from "react-icons/fi";

const Header = ({ openMobileSidebar }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={openMobileSidebar}
            className="p-2 rounded-md bg-[#00A297] text-white hover:bg-[#00897b]"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xs hidden sm:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-4 flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FiBell size={20} />
          </button>
          <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
            <FiLogOut className="mr-1" size={16} /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
