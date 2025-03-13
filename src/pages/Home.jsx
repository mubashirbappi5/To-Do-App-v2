import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { gsap } from "gsap";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useGSAP(() => {
    // Animate new todos when they are added
    gsap.from(".todo-item:last-child", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "back.out",
    });
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // Animate the todo when completed
          if (!todo.completed) {
            gsap.to(`#todo-${id}`, {
              backgroundColor: "#4ade80",
              color: "white",
              duration: 0.3,
            });
          } else {
            gsap.to(`#todo-${id}`, {
              backgroundColor: "white",
              color: "black",
              duration: 0.3,
            });
          }
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>

      <form onSubmit={handleAddTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Add a new todo..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            id={`todo-${todo.id}`}
            className={`todo-item p-3 rounded-lg border cursor-pointer transition-colors ${
              todo.completed ? "bg-green-400 text-white" : "bg-white"
            }`}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
