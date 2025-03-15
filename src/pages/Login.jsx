import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 via-black
     to-gray-600 p-4">
      <div className="bg-white backdrop-blur-sm text-black p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] w-96 transform transition-all hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 pl-10"
                placeholder="Enter your email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 pl-10"
                placeholder="Enter your password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold hover:text-gray-700 transition-colors duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
