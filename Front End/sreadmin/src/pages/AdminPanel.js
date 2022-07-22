import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import TableComponent from "../components/TableComponent";
import { asyncFetch, asyncPost } from "../hooks/use-api";
import Copyright from "../components/copyright";

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
      record.taskname,
      record.environmentname,
      setData,
      setSearchData,
      setIsLoading,
      record
    );
  };

  const handleSearch = (value) => {
    const filteredTask = searchData.filter((tasks) => {
      return tasks.taskname
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
    if (value.length < 1) {
      setData(searchData);
    } else {
      setData(filteredTask);
    }
  };
  return (
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
  );
};

export default AdminPanel;
