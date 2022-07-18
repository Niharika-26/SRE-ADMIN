import { Cascader } from "antd";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Dropdown = (props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Cascader
        defaultValue={props.default}
        options={props.options}
        placeholder={t("phHolder")}
        style={{
          width: 300,
          display: "inline-block",
          position: "absolute",
          right: 20,
        }}
      />
    </Fragment>
  );
};

export default Dropdown;
