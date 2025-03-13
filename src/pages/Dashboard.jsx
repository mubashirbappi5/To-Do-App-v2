import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <nav className="flex space-x-4">
              <Link
                to="/todos"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Todo List
              </Link>
              <Link
                to="/settings"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Total Tasks
            </h3>
            <p className="text-4xl font-bold text-blue-600">0</p>
            <div className="mt-2 h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Completed
            </h3>
            <p className="text-4xl font-bold text-green-600">0</p>
            <div className="mt-2 h-1 w-20 bg-green-600 rounded"></div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Pending</h3>
            <p className="text-4xl font-bold text-yellow-600">0</p>
            <div className="mt-2 h-1 w-20 bg-yellow-600 rounded"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/todos"
              className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Create New Task
            </Link>

            <Link
              to="/todos"
              className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
              View All Tasks
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
