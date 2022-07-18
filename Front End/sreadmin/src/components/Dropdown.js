import { Cascader } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../translations/i18n";

const languageHandler=(value)=>{i18n.changeLanguage(value[0])}

const Dropdown = (props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Cascader
      onChange={languageHandler}
        defaultValue={props.default}
        options={props.options}
        placeholder={props.placeholder || t("phHolder")}
        style={{
          width: props.width || 300,
          display: "inline-block",
          position: "absolute",
          right: 20,
        }}
      />
    </Fragment>
  );
};

export default Dropdown;
