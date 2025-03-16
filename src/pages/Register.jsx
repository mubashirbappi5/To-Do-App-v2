import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaExclamationCircle,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration data:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Join us to manage your tasks effectively
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <div className="relative">
                <div className="flex items-center space-x-2 border-b-2 border-gray-300/30 pb-2 group focus-within:border-blue-500 transition-colors">
                  <FaUser className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
                {errors.username && (
                  <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
                    <FaExclamationCircle size={12} />
                    <span>{errors.username}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="flex items-center space-x-2 border-b-2 border-gray-300/30 pb-2 group focus-within:border-blue-500 transition-colors">
                  <FaEnvelope className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
                    <FaExclamationCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="flex items-center space-x-2 border-b-2 border-gray-300/30 pb-2 group focus-within:border-blue-500 transition-colors">
                  <FaLock className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
                {errors.password && (
                  <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
                    <FaExclamationCircle size={12} />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="flex items-center space-x-2 border-b-2 border-gray-300/30 pb-2 group focus-within:border-blue-500 transition-colors">
                  <FaLock className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
                    <FaExclamationCircle size={12} />
                    <span>{errors.confirmPassword}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-150 hover:scale-[1.02]"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-6">
          <div className="text-sm">
            <p className="text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300/30 pt-6">
          <p className="text-xs text-gray-400 text-center">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
