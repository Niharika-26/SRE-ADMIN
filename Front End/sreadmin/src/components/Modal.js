import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Dropdown from "./Dropdown";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('ok');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{"height":45,"width":150, "text-align":"center"}}>
        ADD TASK
      </Button>
      <Modal title="ADD TASK" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{"text-align":"center"}}>
          <div style={{"text-align":"left"}}>
            <p style={{"display":"inline-block", "margin-top":5}}> Please Select Environment</p>
            <Dropdown name="Environment"/>
          </div>
          <div style={{"text-align":"left", "margin-top":20}}>
            <p style={{"display":"inline-block","margin-top":5}}>Please Select Job</p>
            <Dropdown name="Job"/>
          </div>
      </Modal>
    </>
  );
};

export default App;