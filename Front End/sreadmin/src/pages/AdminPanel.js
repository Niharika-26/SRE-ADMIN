import {Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import TableComponent from "../components/TableComponent";
import { asyncFetch, asyncPost } from "../hooks/use-api";
import Copyright from "../components/copyright";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [jobs, setJobs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    asyncFetch(setIsLoading, setData, setSearchData, setJobs);
  }, []);

  const scheduleHandler = (record) => {
    asyncPost(
      record.jobid,
      record.environmentid,
      setData,
      setSearchData,
      setIsLoading
    );
  };

  const handleSearch = (value) => {
    const filteredTask = data.filter((tasks) => {
      return tasks.taskname
        .toLowerCase()
        .startsWith(value.toLowerCase().trim());
    });
    if (value.length < 1) {
      setSearchData(data);
    } else {
      setSearchData(filteredTask);
    }
  };
  return (
<<<<<<< HEAD
    <div className="container">
      <Fragment>
        <Header
          jobs={jobs}
          setData={setData}
          setSearchData={setSearchData}
          setIsLoading={setIsLoading}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />
        <TableComponent
          data={data}
          isLoading={isLoading}
          scheduleHandler={scheduleHandler}
        />
        <Copyright />
      </Fragment>
    </div>
=======
    <Fragment>
      <Header
        jobs={jobs}
        setData={setData}
        setSearchData={setSearchData}
        setIsLoading={setIsLoading}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      <TableComponent
        data={searchData}
        isLoading={isLoading}
        scheduleHandler={scheduleHandler}
      />
      <Copyright />
    </Fragment>
>>>>>>> f7c4c3f79bb310b69adb3f93fc50e4698547e349
  );
};

export default AdminPanel;
