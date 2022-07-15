import { Cascader } from "antd";
import { Fragment } from "react";

const Dropdown = (props) => {
  const pHolder = `Please Select ${props.name}`;
  return (
    <Fragment>
      <Cascader
        defaultValue={props.default}
        options={props.options}
        placeholder={pHolder}
        style={{ padding: 5, "width":300}}
      />
    </Fragment>
  );
};

export default Dropdown;