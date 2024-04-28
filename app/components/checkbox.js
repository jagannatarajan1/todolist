"use client";

import { useState } from "react";

const CheckBox = (todolist) => {
  const [checked, setChecked] = useState(false);

  const checkBoxHandler = async () => {
    setChecked(true);
    try {
      const res = await fetch(`http://localhost:3000/api/${todolist.id._id}`, {
        method: "PUT", // Assuming you're using PUT method to update task
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: todolist.id.task,
          status: "completed",
        }),
      });
      route.refresh();
      if (res.ok) {
        console.log("Task updated successfully");
      } else {
        throw new Error("Failed to update task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        onChange={checkBoxHandler}
        className="checkbox"
        checked={checked} // Set the checked state of the checkbox
      />
    </label>
  );
};
export default CheckBox;
