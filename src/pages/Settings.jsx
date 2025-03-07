import { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
        <Link to="/dashboard" className="back-link">
          Back to Dashboard
        </Link>
      </header>

      <div className="settings-content">
        <section className="settings-section">
          <h2>Preferences</h2>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Notifications</h3>
              <p>Receive notifications for task updates</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle("notifications")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Dark Mode</h3>
              <p>Switch between light and dark theme</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle("darkMode")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Email Updates</h3>
              <p>Receive email notifications</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.emailUpdates}
                onChange={() => handleToggle("emailUpdates")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h2>Account</h2>
          <button className="danger-btn">Delete Account</button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
