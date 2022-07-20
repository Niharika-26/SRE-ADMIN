export const asyncFetch = (
  setIsLoading,
  setData,
  setSearchedData,
  setLookUp
) => {
  setIsLoading(true);
  fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((json) => {
      setData(json.tasks);
      setSearchedData(json.tasks);
      setLookUp({ envirnoments: json.envirnoments, jobs: json.jobs });
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};

export const asyncPost = (
  taskname,
  environmentname,
  setTableData,
  setSearchedData,
  setIsLoading,
  currenttask
) => {
  setIsLoading(true);
  const body = JSON.stringify({
    taskname,
    environmentname,
    currenttask,
  });
  fetch("http://localhost:8000/data", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      setTableData(json);
      setSearchedData(json);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};
