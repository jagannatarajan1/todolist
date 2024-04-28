"use client";
import { useRouter } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

const EditTopic = ({ params }) => {
  const [task, setTask] = useState("");
  const [status, setstatus] = useState("");
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/${params.edit}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topic");
        }

        const data = await res.json();

        if (res.ok) {
          console.log(data);
          setTask(data.todolist.task);
          setstatus(data.todolist.status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.edit]);

  const addTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/${params.edit}`, {
        method: "PUT", // Assuming you're using PUT method to update task
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task, status }), // Send updated task data
      });

      if (res.ok) {
        console.log("Task updated successfully");
        route.refresh();
        route.push("/Today");
      } else {
        throw new Error("Failed to update task");
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
            Update Task
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default EditTopic;
