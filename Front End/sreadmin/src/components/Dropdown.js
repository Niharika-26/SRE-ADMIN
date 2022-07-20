import { Cascader } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Dropdown = (props) => {
  const changeHandler=(value)=>{ props.setSelectedOption(value[0])}
  const { t } = useTranslation();

  return (
    <Fragment>
      <Cascader
      onChange={changeHandler}
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
