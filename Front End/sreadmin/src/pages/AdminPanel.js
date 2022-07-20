import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import TableComponent from "../components/TableComponent";
import { asyncFetch } from "../hooks/use-api";

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [lookUp,setLookUp] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    asyncFetch(setIsLoading, setData,setLookUp);
  }, []);
  return (
    <Fragment>
      <Header data={lookUp} setData={setData} setIsLoading={setIsLoading}/>
      <TableComponent data={data} isLoading={isLoading} />
    </Fragment>
  );
};

export default AdminPanel;
