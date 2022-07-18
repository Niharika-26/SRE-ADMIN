import "./App.css";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./translations/i18n";
import TableComponent from "./components/Table";
import SearchFilter from "./components/SearchBar";
import ModalComponent from "./components/Modal";
import Translator from "./components/translator";
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
      
      <div style={{"margin-top":10}}>
      <p style={{display:"inline-block","position":"absolute", "right":250,"margin-top":5}}>{t("changelang")}</p>
          <Translator style={{"display":"inline-block","position":"absolute", "right":10,"margin-top":10}}/>

          <img
            style={{
              display: "inline-block",
              "margin-left":200,
              "margin-right":75,
              "margin-top":30,
              left: 200,
              width: 100,
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
