import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import Dropdown from "./Dropdown";
import "./styles/ModalComponent.css";
import { asyncPost, asyncFetchEnvironments } from "../hooks/use-api";

const ModalComponent = (props) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [environments, setEnvironments] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (selectedJob !== "" && selectedJob !== undefined) {
      asyncFetchEnvironments(selectedJob, setEnvironments, setIsError);
    }
    if (selectedJob !== "" || selectedJob === undefined) {
      setEnvironments([]);
      setSelectedEnvironment("");
    }
  }, [selectedJob]);

  const handleOk = () => {
    if (selectedEnvironment !== "" && selectedJob !== "") {
      setIsModalVisible(false);
      asyncPost(
        selectedJob,
        selectedEnvironment,
        props.setData,
        props.setSearchData,
        props.setIsLoading
      );
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (props.addTask) {
    return (
      <div className="modalbtn">
        <Button
          disabled={props.isLoading}
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
              disabled={environments.length === 0}
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
          {isError && <p>Please select Environment</p>}
          <div style={{ textAlign: "left", marginTop: 20 }}>
            <p style={{ display: "inline-block", marginTop: 5 }}>
              {t("phJob")}
            </p>
            <Dropdown
              name="Job"
              options={props.jobs}
              setSelectedOption={setSelectedJob}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ display: "inline-block", marginTop: 5 }}>
              {" "}
              {t("phEnvironment")}
            </p>
            <Dropdown
              name="Environment"
              default={selectedEnvironment}
              disabled={environments.length === 0}
              options={environments}
              setSelectedOption={setSelectedEnvironment}
            />
          </div>
        </Modal>
      </div>
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
