export const asyncFetch = (setIsLoading, setData, setSearchedData, setJobs) => {
  setIsLoading(true);
  fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((json) => {
      setData(json.tasks);
      setSearchedData(json.tasks);
      setJobs(json.jobs);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};

export const asyncPost = (
  job_id,
  environment_id,
  setTableData,
  setSearchedData,
  setIsLoading,
  currenttask
) => {
  setIsLoading(true);
  const body = JSON.stringify({
    job_id,
    environment_id,
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

export const asyncFetchEnvironments = (
  jobName,
  setEnvironments,
  setIsError,
  setIsLoading
) => {
  setIsLoading(true);
  fetch(`http://localhost:8000/data/${jobName}/environments`)
    .then((response) => response.json())
    .then((json) => {
      setEnvironments(json);
      setIsError(false);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};
