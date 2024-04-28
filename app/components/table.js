const Table = (props) => {
  console.log("tableeeeeeeeeeeeeeeeeeeeeeeeeeeee" + props.data);
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
        {props.data.map((todolist) => (
          <tbody>
            <tr>
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
              <th>
                <button className="border p-1 bg-blue-700 text-sm mr-2  rounded px-3">
                  Edit
                </button>
                <button className="border p-1 bg-red-700 text-sm rounded px-3">
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default Table;
