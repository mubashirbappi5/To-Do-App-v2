import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Todo list enthusiast",
    avatar: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the profile
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          {isEditing && (
            <button className="text-blue-500 hover:text-blue-600 mb-4">
              Change Photo
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-900">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-900">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-900">{profile.bio}</p>
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
