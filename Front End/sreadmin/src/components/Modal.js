import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import Dropdown from "./Dropdown";

const ModalComponent = (props) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("ok");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (props.addTask) {
    return (
      <>
        <Button
          type="primary"
          onClick={showModal}
          size="middle"
          style={{ textAlign: "center" }}
        >
          {t("buttonText")}
        </Button>
        <Modal
          footer={[
            <Button
              style={{
                width: "100%",
                height: 50,
                fontSize: 20,
                marginTop: -10,
              }}
              key="submit"
              type="primary"
              onClick={handleOk}
            >
              {t("schedule")}
            </Button>,
          ]}
          title={t("buttonText")}
          visible={isModalVisible}
          onCancel={handleCancel}
          style={{ textAlign: "center" }}
        >
          <div style={{ textAlign: "left" }}>
            <p style={{ display: "inline-block", marginTop: 5 }}>
              {" "}
              {t("phEnvironment")}
            </p>
            <Dropdown name="Environment" options={props.data.envirnoments} />
          </div>
          <div style={{ textAlign: "left", marginTop: 20 }}>
            <p style={{ display: "inline-block", marginTop: 5 }}>
              {t("phJob")}
            </p>
            <Dropdown name="Job" options={props.data.jobs} />
          </div>
        </Modal>
      </>
    );
  }
  return (
    <>
      <EyeOutlined onClick={showModal} />
      <Modal
        footer={[]}
        title={t("c4")}
        visible={isModalVisible}
        onCancel={handleCancel}
        style={{ textAlign: "center" }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ display: "inline-block", marginTop: 5 }}>
            {props.responseData}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
