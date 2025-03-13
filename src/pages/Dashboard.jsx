import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <nav className="flex flex-wrap gap-2">
              <Link
                to="/todos"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Todo List
              </Link>
              <Link
                to="/dashboard/settings"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Stats and Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
                  Total Tasks
                </h3>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                  0
                </p>
                <div className="mt-2 h-1 w-20 bg-blue-600 rounded"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
                  Completed
                </h3>
                <p className="text-3xl sm:text-4xl font-bold text-green-600">
                  0
                </p>
                <div className="mt-2 h-1 w-20 bg-green-600 rounded"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">
                  Pending
                </h3>
                <p className="text-3xl sm:text-4xl font-bold text-yellow-600">
                  0
                </p>
                <div className="mt-2 h-1 w-20 bg-yellow-600 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/"
                  className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
                  className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
          </div>

          {/* Right Side - Recent Activity and Progress */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">
                      New task created
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Project setup and planning
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">
                      Task completed
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Initial research phase
                    </p>
                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Progress Overview
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      This Week's Progress
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-blue-600">
                      65%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">
                      Monthly Target
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-green-600">
                      40%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-600 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3">
                    Priority Tasks
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Design Review
                      </span>
                      <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                        High
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Frontend Development
                      </span>
                      <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
