import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/todos">Todo List</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Tasks</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Pending</h3>
            <p className="stat-number">0</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/todos" className="action-btn">
              Create New Task
            </Link>
            <Link to="/todos" className="action-btn">
              View All Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
