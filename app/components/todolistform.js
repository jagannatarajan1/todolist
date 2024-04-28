"use client";
import { Fragment, useState } from "react";

export default function Form() {
  const [task, setTask] = useState("");

  const addTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const todoData = {
      task: task,
    };

    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ todoData }),
      "content-type": "application/json",
    });
    if (res.ok) {
      console.log("posted successfully");
      setTask("");
    } else {
      console.log("error while posting");
    }
  };

  return (
    <Fragment>
      <div className="w-screen h-screen flex justify-center mt-10">
        <form className="border border-white-600 p-6 w-140 h-20 rounded flex">
          <label htmlFor="addTask" className="mt-1">
            Enter the Task
          </label>
          <input
            type="text"
            required
            id="addTask"
            className="ml-3 rounded-md text-black p-4 w-96"
            onChange={addTaskHandler}
            value={task}
          />
          <button
            className="border border-white-600 bg-red-500 rounded ml-4 p-1"
            onClick={formHandler}
          >
            Add Task
          </button>
        </form>
      </div>
    </Fragment>
  );
}
