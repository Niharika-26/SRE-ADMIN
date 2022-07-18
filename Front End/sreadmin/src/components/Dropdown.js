import { Cascader } from "antd";
import { Fragment } from "react";

const Dropdown = (props) => {
  const pHolder = `Select ${props.name}`;
  return (
    <Fragment>
      <Cascader
        defaultValue={props.default}
        options={props.options}
        placeholder={pHolder}
        style={{"width":300, "display":"inline-block", "position":"absolute","right":20}}
      />
    </Fragment>
  );
};

export default Dropdown;
