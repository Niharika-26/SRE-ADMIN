import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Button, Tag } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import ModalComponent from "./ModalComponent";
import "./styles/Table.css";

function TableComponent(props) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const columns = [
    {
      title: t("c1"),
      dataIndex: "key",
      key: "key",
      render: (value, item, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: t("c2"),
      dataIndex: "taskname",
      key: "taskname",
    },
    {
      title: t("c3"),
      dataIndex: "environmentname",
      key: "environmentname",
    },

    {
      title: t("c4"),
      dataIndex: "responsedata",
      key: "responsedata",
      render: (value) => <ModalComponent responseData={value} />,
    },
    {
      title: t("c5"),
      dataIndex: "dueat",
      key: "dueat",
    },

    {
      title: t("c6"),
      dataIndex: "modifiedat",
      key: "modifiedat",
    },
    {
      title: t("c7"),
      dataIndex: "status",
      key: "status",
      render: (val) => {
        let color = "blue";
        val = val.toLowerCase();

        if (val === "pending") {
          color = "yellow";
        } else if (val === "in progress") {
          color = "blue";
        } else if (val === "failed") {
          color = "red";
        } else {
          color = "green";
        }

        return (
          <Tag
            style={{ width: 100, textAlign: "center" }}
            color={color}
            key={val}
          >
            {val.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: t("c8"),
      data: "",
      key: "key",
      render: (text, record) => (
        <Button style={{ width: 100 }} onClick={() => console.log(record)}>
          <HistoryOutlined />
        </Button>
      ),
    },
  ];

  return (
    <div className="tablediv">
      <div className="table">
        <Table
          dataSource={props.data}
          loading={props.isLoading}
          columns={columns}
          size="small"
          bordered
          pagination={{
            onChange(current) {
              setPage(current);
            },
          }}
        ></Table>
      </div>
    </div>
  );
}

export default TableComponent;
