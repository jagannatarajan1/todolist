import React from "react";

function CompletedTask() {
  return (
    <div className="overflow-x-auto   w-screen h- flex justify-center mt-11">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th></th>
            <th>Todolist</th>
          </tr>
        </thead>

        <tbody>
          {/* {props.data.map((todolist) => (
            <tr key={todolist._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"></div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm mr-10 ">
                  {todolist.task}
                </span>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTask;
