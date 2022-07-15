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
      <Button type="primary" onClick={showModal} style={{"height":50,"width":150, "text-align":"center"}}>
        ADD TASK
      </Button>
      <Modal title="ADD TASK" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{"text-align":"center"}}>
        <div style={{"text-align":"center"}}>
          <p>Select Environment</p>
          <Dropdown name="Environment"/>
        </div>
        <div style={{"text-align":"center","margin-top":50}}>
          <p>Select Job</p>
          <Dropdown name="Job"/>
        </div>
      </Modal>
    </>
  );
};

export default App;