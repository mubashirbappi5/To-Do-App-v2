import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Todo App</h1>
      <Link to="/todos">Go to Todo List</Link>
    </div>
  );
};

const TodoList = () => {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <Link to="/">Back to Home</Link>
      {/* Todo list content will go here */}
    </div>
  );
};

export default App;
