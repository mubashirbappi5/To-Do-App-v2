import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Work", color: "#FF6B6B" },
  { id: 2, name: "Personal", color: "#4ECDC4" },
  { id: 3, name: "Shopping", color: "#FFD93D" },
  { id: 4, name: "Health", color: "#95E1D3" },
  { id: 5, name: "Study", color: "#A8E6CF" },
];

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        category: selectedCategory,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Todo List
            </h1>
            <nav className="flex flex-wrap gap-2">
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                 Dashboard
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
      <div className="max-w-4xl mx-auto mt-10">
       
        <form
          onSubmit={addTodo}
          className="mb-8 bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex gap-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
            <select
              value={selectedCategory.id}
              onChange={(e) =>
                setSelectedCategory(
                  categories.find((cat) => cat.id === parseInt(e.target.value))
                )
              }
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-md active:scale-95"
            >
              Add
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="p-4 text-white font-semibold"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </div>
              <div className="p-4 min-h-[100px]">
                {todos
                  .filter((todo) => todo.category.id === category.id)
                  .map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="w-5 h-5 cursor-pointer transition-all duration-300"
                      />
                      <span
                        className={`flex-1 transition-all duration-300 ${
                          todo.completed ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 transition-all duration-300 hover:scale-110 active:scale-95"
                      >
                        ×
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
