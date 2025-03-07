import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen bg-white border-r border-gray-200 flex flex-col fixed">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Todo App</h2>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                isActive("/dashboard")
                  ? "bg-gray-100 border-r-4 border-blue-500 text-blue-600"
                  : ""
              }`}
            >
              <i className="fas fa-home w-5"></i>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/todos"
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                isActive("/todos")
                  ? "bg-gray-100 border-r-4 border-blue-500 text-blue-600"
                  : ""
              }`}
            >
              <i className="fas fa-tasks w-5"></i>
              <span className="ml-3">Todo List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                isActive("/settings")
                  ? "bg-gray-100 border-r-4 border-blue-500 text-blue-600"
                  : ""
              }`}
            >
              <i className="fas fa-cog w-5"></i>
              <span className="ml-3">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-200">
        <button className="w-full flex items-center justify-center px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors duration-200">
          <i className="fas fa-sign-out-alt w-5"></i>
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
