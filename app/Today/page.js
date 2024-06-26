import Table from "../components/table";
const Today = async () => {
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Fetching the data was unsuccessful ");
  }
  const fetchdata = await response.json();

  const incomplete = fetchdata.allTask.filter((data) => {
    return data.status == "incomplete";
  });

  return <Table data={incomplete} />;
};
export default Today;
