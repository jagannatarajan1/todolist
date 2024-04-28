import React from "react";
import Completedlist from "../components/completelist";
async function CompletedTask() {
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Fetching the completedTask  was unsuccessful ");
  }

  const fetchdata = await response.json();
  const complete = fetchdata.allTask.filter((data) => {
    return data.status == "completed";
  });
  return <Completedlist data={complete} />;
}

export default CompletedTask;
