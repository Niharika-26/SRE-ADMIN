import { Button, Modal, Spin } from "antd";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import Dropdown from "./Dropdown";
import "./styles/ModalComponent.css";
import { asyncPost, asyncFetchEnvironments } from "../hooks/use-api";

const ModalComponent = (props) => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isError, setIsError] = useState({});
  const [selectedEnvironment, setSelectedEnvironment] = useState(undefined);
  const [selectedJob, setSelectedJob] = useState(undefined);
  const [environments, setEnvironments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (selectedJob !== undefined && selectedJob.value !== "") {
      asyncFetchEnvironments(
        selectedJob.key,
        setEnvironments,
        setIsError,
        setIsLoading
      );
    }
    if (selectedJob === undefined || selectedJob.value !== "") {
      setEnvironments([]);
      setSelectedEnvironment("");
    }
  }, [selectedJob]);

  const handleOk = () => {
    if (
      selectedJob !== undefined &&
      selectedEnvironment !== undefined &&
      selectedEnvironment !== "" &&
      selectedJob.value !== "" &&
      selectedEnvironment.value !== ""
    ) {
      setIsModalVisible(false);
      asyncPost(
        selectedJob.key,
        selectedEnvironment.key,
        props.setData,
        props.setSearchData,
        props.setIsLoading
      );
      setIsError({});
    } else {
      if (
        selectedEnvironment === undefined ||
        selectedEnvironment === "" ||
        selectedEnvironment.value === ""
      ) {
        setIsError({ environment: true });
      }
      if (selectedJob === undefined || selectedJob.value === "") {
        setIsError({ job: true });
      }
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
          loading="true"
          footer={[
            <Button
              style={{
                width: "30%",
                height: 35,
                fontSize: 15,
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
          <div style={{ textAlign: "left", marginBottom: 20 }}>
            <p
              style={{
                display: "inline-block",
                marginBottom: 5,
              }}
            >
              {t("phJob")}
            </p>
            <Dropdown
              setIsError={setIsError}
              isError={isError.job}
              name="Job"
              options={props.jobs}
              setSelectedOption={setSelectedJob}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ display: "inline-block", marginBottom: 5 }}>
              {" "}
              {t("phEnvironment")}
            </p>
            {isLoading ? (
              <Spin
                style={{
                  display: "inline-block",
                  marginTop: 5,
                  marginLeft: 190,
                }}
                size="small"
              />
            ) : (
              <Dropdown
                setIsError={setIsError}
                isError={isError.environment}
                name="Environment"
                value={
                  selectedEnvironment === undefined
                    ? ""
                    : selectedEnvironment.value
                }
                disabled={environments.length === 0}
                options={environments}
                setSelectedOption={setSelectedEnvironment}
              />
            )}
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
