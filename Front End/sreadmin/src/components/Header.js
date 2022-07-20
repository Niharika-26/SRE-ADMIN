import SearchFilter from "./SearchBar";
import ModalComponent from "./Modal";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { t } = useTranslation();
  return (
    <div className="tab">
      <img
        style={{
          display: "inline-block",
          marginLeft: 10,
          marginTop: 7.5,
          width: 50,
        }}
        src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png"
        alt="Logo"
      />

      <h1 className="project-title">{t("Title")}</h1>

      <div className="searchbar">
        <SearchFilter />
      </div>
      <div className="modalbtn">
        <ModalComponent addTask data={props.data} />
      </div>
    </div>
  );
};

export default Header;
