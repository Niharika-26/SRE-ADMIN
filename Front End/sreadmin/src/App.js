import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./translations/i18n";
import TableComponent from "./components/Table";
import SearchFilter from "./components/SearchBar";
import ModalComponent from "./components/Modal";
//import Translator from "./components/translator";
//<Translator style={{"display":"inline-block","position":"absolute", "right":10,"marginTop":10}}/>
//<p style={{display:"inline-block","position":"absolute", "right":250,"marginTop":5}}>{t("changelang")}</p>
//dxvc
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather"
  rel="stylesheet"
/>;

function App() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, []);
  const asyncFetch = () => {
    setIsLoading(true);
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((json) => {
        setData(json["tasks"]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <Fragment>
      <div className="tab">
        <img
          style={{
            display: "inline-block",
            marginLeft: 200,
            marginRight: 120,
            marginTop: 10,
            marginBottom: 25,
            left: 200,
            width: 70,
          }}
          src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png"
          alt="Logo"
        />

        <h1 className="project-title">{t("Title")}</h1>
      </div>

      <div className="top">
        <div className="searchbar">
          <SearchFilter />
        </div>
        <div className="modalbtn">
          <ModalComponent addTask />
        </div>
      </div>

      <div className="tablediv">
        <div className="table">
          <TableComponent data={data} isLoading={isLoading} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
