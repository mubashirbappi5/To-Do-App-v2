import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
  const categoryRefs = useRef([]);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Initial animations
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "back.out(1.7)",
    });

    categoryRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        delay: 0.5 + index * 0.1,
        ease: "power2.out",
      });
    });
  }, []);

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

      // Animate the new todo
      gsap.from(`[data-todo="${newTodoItem.id}"]`, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
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
    const todoElement = document.querySelector(`[data-todo="${id}"]`);
    gsap.to(todoElement, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setTodos(todos.filter((todo) => todo.id !== id));
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
        >
          My Todo List
        </h1>

        <form
          ref={formRef}
          onSubmit={addTodo}
          className="mb-8 bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl"
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
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Add
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="p-4 text-white font-semibold"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </div>
              <div className="p-4">
                {todos
                  .filter((todo) => todo.category.id === category.id)
                  .map((todo) => (
                    <div
                      key={todo.id}
                      data-todo={todo.id}
                      className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-lg transform transition-all duration-300 hover:shadow-md"
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
                        className="text-red-500 hover:text-red-700 transition-all duration-300 transform hover:scale-110"
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
