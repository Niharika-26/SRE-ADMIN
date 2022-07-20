import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import TableComponent from "../components/Table";
import { asyncFetch } from "../hooks/use-api";

const AdminPanel = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    asyncFetch(setIsLoading, setData);
  }, []);
  return (
    <Fragment>
      <Header data={data} />
      <TableComponent data={data.tasks} isLoading={isLoading} />
    </Fragment>
  );
};

export default AdminPanel;
