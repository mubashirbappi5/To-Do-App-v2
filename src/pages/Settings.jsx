import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
    language: "English",
    timezone: "UTC",
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <IoChevronBackOutline className="w-5 h-5" />
              <span className="ml-1">Back</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Settings
            </h1>
          </div>
        </header>

        <div className="space-y-6">
          {/* Preferences Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Preferences
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-medium">Notifications</h3>
                    <p className="text-gray-500 text-sm">
                      Receive notifications for task updates
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={() => handleToggle("notifications")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-medium">Dark Mode</h3>
                    <p className="text-gray-500 text-sm">
                      Switch between light and dark theme
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={() => handleToggle("darkMode")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-medium">Email Updates</h3>
                    <p className="text-gray-500 text-sm">
                      Receive email notifications
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={() => handleToggle("emailUpdates")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                {/* Language Selection */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-medium">Language</h3>
                    <p className="text-gray-500 text-sm">
                      Choose your preferred language
                    </p>
                  </div>
                  <select
                    className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={settings.language}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        language: e.target.value,
                      }))
                    }
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                {/* Timezone Selection */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 font-medium">Timezone</h3>
                    <p className="text-gray-500 text-sm">
                      Set your local timezone
                    </p>
                  </div>
                  <select
                    className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={settings.timezone}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        timezone: e.target.value,
                      }))
                    }
                  >
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                    <option>GMT</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Account Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Account
              </h2>

              <div className="space-y-4">
                <button className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
