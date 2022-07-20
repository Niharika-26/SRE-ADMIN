import SearchBar from "./SearchBar";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";
import "./styles/Header.css";

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

      <SearchBar />
      <ModalComponent addTask data={props.data} />
    </div>
  );
};

export default Header;
