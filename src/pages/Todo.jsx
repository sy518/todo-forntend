import React, { useState, useEffect } from 'react'
import Navbar from '../componenet/Navbar';
import axios from 'axios';
import { TbHttpDelete } from "react-icons/tb";
import { GrEdit } from "react-icons/gr";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // const [update, setUpdate] = useState(false);
  const fetchTodos = () => {
  axios
    .get("todo-backend-production-a956.up.railway.app/api/task/todo")

    .then((res) => setTodos(res.data))

    .catch((err) => console.error(err));
  console.log("Fetched todos:", todos);

  }

useEffect(() => {
  fetchTodos(); // runs once on mount
}, [])

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/task/todo")
  //     .then((res) => {
  //       if (Array.isArray(res.data)) {
  //         setTodos(res.data);
  //       } else {
  //         console.error("Invalid data format:", res.data);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching todos:", err));
  // }, []);

  const addTodo = () => {
    axios
      .post("http://localhost:5000/api/task/todo", { task: input })
      .then((res) => {

        console.log(res.data);
        setTodos([...todos, res.data]);
        // setUpdate((prevState) => !prevState);
        setInput("");
        // fetchTodos()
      })
      .catch((err) => console.error(err));
  };
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/api/task/todo/${id}`)
      .then((res) => {
        console.log(res.data);
        // fetchTodos()
        // setUpdate((prev) => !prev);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="transition-transform duration-500 hover:-rotate-x-3 hover:-rotate-y-3 hover:scale-95 
          bg-white shadow-xl p-10 rounded-2xl w-96"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Todo App
          </h2>
          <div className="flex gap-3 mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Add a new task"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></input>
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {todos.length > 0 ? (
              todos.map((task) => (
                <div
                  key={task._id}
                  className="flex items-center justify-between bg-gray-200 p-2 rounded"
                >
                  <p>
                    {/* {JSON.stringify(task.task)} */}
                    {task.task}
                  </p>
                  <div className="flex gap-2">
                    <GrEdit className="cursor-pointer text-blue-500" />
                    <TbHttpDelete
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteTodo(task._id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No tasks yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
