import { useGSAP } from "@gsap/react";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// Register GSAP plugins
gsap.registerEffect({
  name: "fadeInUp",
  effect: (targets, config) => {
    return gsap.from(targets, {
      duration: config.duration || 1,
      y: 50,
      opacity: 0,
      stagger: config.stagger || 0.2,
      ease: "power2.out",
    });
  },
  defaults: { duration: 1 },
});

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "pending",
    date: new Date().toISOString().split("T")[0],
  });

  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRefs = useRef({});
  const todoListRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline for initial animations
      const tl = gsap.timeline();

      // Animate header on load
      tl.from("h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      })
        .from(formRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from("form > div > *", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });

      // Setup hover animations for form elements
      const formElements = formRef.current.querySelectorAll(
        "input, textarea, select"
      );

      const enterAnimation = (element) => {
        gsap.to(element, {
          borderColor: "rgb(216, 180, 254)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const leaveAnimation = (element) => {
        if (!element.matches(":focus")) {
          gsap.to(element, {
            borderColor: "rgba(229, 231, 235, 1)",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      formElements.forEach((element) => {
        element.addEventListener("mouseenter", () => enterAnimation(element));
        element.addEventListener("mouseleave", () => leaveAnimation(element));
      });

      // Setup button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Cleanup function
      return () => {
        formElements.forEach((element) => {
          element.removeEventListener("mouseenter", () =>
            enterAnimation(element)
          );
          element.removeEventListener("mouseleave", () =>
            leaveAnimation(element)
          );
        });
        if (buttonRef.current) {
          buttonRef.current.removeEventListener("mouseenter", () => {});
          buttonRef.current.removeEventListener("mouseleave", () => {});
        }
      };
    });

    // Cleanup context
    return () => ctx.revert();
  }, []);

  // Animation for new todos
  useGSAP(() => {
    if (todos.length > 0) {
      gsap.from(".todo-item:last-child", {
        opacity: 0,
        x: -100,
        rotation: -5,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all", // Clear properties after animation
      });
    }
  }, [todos]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          name: formData.name,
          description: formData.description,
          status: formData.status,
          date: formData.date,
          completed: false,
        },
      ]);
      setFormData({
        name: "",
        description: "",
        status: "pending",
        date: new Date().toISOString().split("T")[0],
      });

      // Animate the form submission with context
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.1,
        })
          .to(buttonRef.current, {
            scale: 1,
            duration: 0.1,
          })
          .to(formRef.current, {
            y: -5,
            duration: 0.2,
            ease: "power2.out",
          })
          .to(formRef.current, {
            y: 0,
            duration: 0.2,
            ease: "bounce.out",
          });
      }, formRef);

      // Cleanup context
      return () => ctx.revert();
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const element = document.querySelector(`#todo-${id}`);
          const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            if (!todo.completed) {
              tl.to(element, {
                backgroundColor: "#4ade80",
                color: "white",
                scale: 1.02,
                rotation: 1,
                duration: 0.3,
                ease: "power2.out",
              }).to(
                element.querySelector(".status-badge"),
                {
                  backgroundColor: "#bbf7d0",
                  color: "#166534",
                  duration: 0.3,
                  ease: "power2.out",
                },
                "<"
              );
            } else {
              tl.to(element, {
                backgroundColor: "white",
                color: "black",
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out",
              }).to(
                element.querySelector(".status-badge"),
                {
                  backgroundColor: getStatusBgColor(todo.status),
                  color: getStatusTextColor(todo.status),
                  duration: 0.3,
                  ease: "power2.out",
                },
                "<"
              );
            }
          });

          // Cleanup context
          setTimeout(() => ctx.revert(), 1000);
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case "pending":
        return "#fef9c3";
      case "in-progress":
        return "#dbeafe";
      case "completed":
        return "#dcfce7";
      default:
        return "#f3f4f6";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "pending":
        return "#854d0e";
      case "in-progress":
        return "#1e40af";
      case "completed":
        return "#166534";
      default:
        return "#374151";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-8 ">
      <header className="bg-white shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Create Todo 
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
          ref={formRef}
          onSubmit={handleAddTodo}
          className="mb-8 bg-white rounded-xl shadow-lg p-6 space-y-4"
        >
          <div className="flex flex-col gap-4">
            <div className="group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                ref={(el) => (inputRefs.current.name = el)}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                placeholder="Todo name..."
              />
            </div>
            <div className="group">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                ref={(el) => (inputRefs.current.description = el)}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none"
                placeholder="Todo description..."
                rows="3"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                ref={(el) => (inputRefs.current.status = el)}
                className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                ref={(el) => (inputRefs.current.date = el)}
                className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none"
              />
            </div>
            <button
              ref={buttonRef}
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            >
              Add Todo
            </button>
          </div>
        </form>

        <div ref={todoListRef} className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              id={`todo-${todo.id}`}
              className="todo-item p-5 rounded-xl border-2 cursor-pointer bg-white border-gray-200"
              onClick={() => handleToggleTodo(todo.id)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{todo.name}</h3>
                  <p className="text-sm mt-2 opacity-90">{todo.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`status-badge inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      todo.status
                    )}`}
                  >
                    {todo.status}
                  </span>
                  <p className="text-sm opacity-75">{todo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
