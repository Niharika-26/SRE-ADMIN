import { Cascader } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Dropdown.css";

const Dropdown = (props) => {
  const changeHandler = (value, label) => {
    if (value === undefined) {
      props.setSelectedOption(undefined);
    } else {
      props.setSelectedOption(label[0]);

      props.setIsError({});
    }
  };
  const { t } = useTranslation();

  return (
    <Fragment>
      <Cascader
        status={props.isError ? "error" : ""}
        allowClear="false"
        disabled={props.disabled ? props.disabled : false}
        onChange={changeHandler}
        value={props.value}
        options={props.options}
        dropdownClassName={props.options.length > 6 ? "bigDropdown" : ""}
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
