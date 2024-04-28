"use client";
import { Fragment, useState } from "react";

export default function Form() {
  const [task, setTask] = useState("");
  const [status, setstatus] = useState(""); // Include status state
  const incomplete = "incomplete";

  const addTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (task) {
      setstatus(incomplete);
      console.log("kakak");
    }

    try {
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ task, status }), // Include status in the request body
      });

      if (res.ok) {
        // router.push("/");W
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
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
