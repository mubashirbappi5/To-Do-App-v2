import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const user = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out h-screen bg-white border-r w-64 border-gray-200 flex flex-col fixed z-40`}
      >
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Todo App
          </Link>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
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
          {user ? (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors duration-200"
            >
              <i className="fas fa-sign-out-alt w-5"></i>
              <span className="ml-2">Logout</span>
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
