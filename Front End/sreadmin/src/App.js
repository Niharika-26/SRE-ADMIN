import "./App.css";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./translations/i18n";
import TableComponent from "./components/Table";
import SearchFilter from "./components/SearchBar";
import ModalComponent from "./components/Modal";
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather"
  rel="stylesheet"
/>;

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, []);
  return (
    <Fragment>
      <div>
        <div style={{ position: "relative" }}>
          <img
            style={{
              display: "inline-block",
              position: "absolute",
              left: 200,
              width: 100,
            }}
            src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png"
            alt="Logo"
          />
        </div>
        <div style={{ position: "relative" }}>
          <h1 className="project-title">{t("Title")}</h1>
        </div>
      </div>

      <div className="top">
        <div className="searchbar">
          <SearchFilter />
        </div>
        <div className="modalbtn">
          <ModalComponent />
        </div>
      </div>

      <div className="App">
        <TableComponent />
      </div>
    </Fragment>
  );
}

export default App;
