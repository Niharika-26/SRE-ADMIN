export const asyncFetch = (setIsLoading, setData, setSearchedData, setJobs) => {
  setIsLoading(true);
  fetch(`${process.env.REACT_APP_BASE_URL}/data`)
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
  setIsLoading
) => {
  setIsLoading(true);
  const body = JSON.stringify({
    job_id,
    environment_id,
  });
  fetch(`${process.env.REACT_APP_BASE_URL}/data`, {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      setTableData(json.tasks);
      setSearchedData(json.tasks);
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
  fetch(`${process.env.REACT_APP_BASE_URL}/data/${jobName}/environments`)
    .then((response) => response.json())
    .then((json) => {
      setEnvironments(json.environments);
      setIsError(false);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};
