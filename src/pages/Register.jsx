import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-md p-8 shadow-xl rounded-lg bg-black text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-gray-500 pb-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>
          <div className="flex items-center space-x-2 border-b border-gray-500 pb-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>
          <div className="flex items-center space-x-2 border-b border-gray-500 pb-2">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>
          <div className="flex items-center space-x-2 border-b border-gray-500 pb-2">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-white text-black font-bold rounded-lg hover:bg-gray-300"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-400">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
