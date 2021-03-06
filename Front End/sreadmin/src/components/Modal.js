import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
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

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ height: 45, width: 150, textAlign: "center" }}
      >
        {t("buttonText")}
      </Button>
      <Modal
        footer={[
          <Button
            style={{ width: "100%", height: 50, fontSize: 20, marginTop: -10 }}
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
          <Dropdown name="Environment" />
        </div>
        <div style={{ textAlign: "left", marginTop: 20 }}>
          <p style={{ display: "inline-block", marginTop: 5 }}>{t("phJob")}</p>
          <Dropdown name="Job" />
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
