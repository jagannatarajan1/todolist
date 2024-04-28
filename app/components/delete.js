"use client";
import { useRouter } from "next/navigation";

const Delete = ({ id }) => {
  const route = useRouter();
  const deleteList = async () => {
    const confirmed = confirm("Are You Sure");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        route.refresh();
      }
    }
  };
  return (
    <button
      className="border p-1 bg-red-700 text-sm rounded px-3"
      onClick={deleteList}
    >
      Delete
    </button>
  );
};
export default Delete;
