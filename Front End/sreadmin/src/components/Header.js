import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";
import "./styles/Header.css";
const Header = (props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="tab">
        <img
          className="logoimg"
          src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png"
          alt="Logo"
        />

        <h1 className="project-title">{t("Title")}</h1>

        <SearchBar handleSearch={props.handleSearch} />
        <ModalComponent
          addTask
          isLoading={props.isLoading}
          jobs={props.jobs}
          setData={props.setData}
          setSearchData={props.setSearchData}
          setIsLoading={props.setIsLoading}
        />
      </div>
      <div style={{ "background-color": "#0474cc", height: 5 }}></div>
    </Fragment>
  );
};

export default Header;
