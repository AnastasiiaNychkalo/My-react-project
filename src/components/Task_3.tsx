import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

type Todo = {
   id: number;
   text: string;
   completed: boolean;
 };

const Task_3: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={"flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"}
          />
          <button
            type="submit"
            className={"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"}
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-md border transition ${
               todo.completed
                 ? "bg-green-100 text-gray-500 line-through"
                 : "bg-gray-50"
             }`}
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className="cursor-pointer"
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className={"text-red-500 hover:text-red-700 transition"}
                title="Delete"
              >
                <MdOutlineDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task_3;
