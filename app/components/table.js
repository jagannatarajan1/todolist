import Link from "next/link";
import Delete from "./delete";
import CheckBox from "./checkbox";
const Table = (props) => {
  return (
    <div className="overflow-x-auto   w-screen h- flex justify-center mt-11">
      <table className="table">
        <thead>
          <tr>
            <th>Check Box</th>
            <th></th>
            <th>Todolist</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((todolist) => (
            <tr key={todolist._id}>
              <th>
                <CheckBox id={todolist} />
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
                <Link href={`/editTopic/${todolist._id}`}>
                  <button className="border p-1 bg-blue-700 text-sm mr-2  rounded px-3">
                    Edit
                  </button>
                </Link>
                <Delete id={todolist._id} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
