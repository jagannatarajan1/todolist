const Completedlist = (props) => {
  return (
    <div className="overflow-x-auto   w-screen h- flex justify-center mt-11">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th className="flex items-center text-red-600">
              Completed Todolist
            </th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((todolist) => (
            <tr key={todolist._id}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Completedlist;
