import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Button, Tag } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import ModalComponent from "./Modal";

function TableComponent(props) {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const data = [
    {
      taskname: "name1",
      environmentname: "env",

      responsedata: "data22",
      dueat: "2/07/22",
      modifiedat: "1/07/22",
      status: "Pending",
    },
    {
      taskname: "ship",
      environmentname: "env",

      responsedata: "data22",
      dueat: "23/07/22",
      modifiedat: "10/07/22",
      status: "Failed",
    },
    {
      taskname: "name3",
      environmentname: "env",

      responsedata: "data22",
      dueat: "18/07/22",
      modifiedat: "3/07/22",
      status: "Failed",
    },
    {
      taskname: "name4",
      environmentname: "env",

      responsedata: "data22",
      dueat: "15/07/22",
      modifiedat: "10/07/22",
      status: "In-Progress",
    },
    {
      taskname: "name5",
      environmentname: "env",

      responsedata: "data22",
      dueat: "24/08/22",
      modifiedat: "30/07/22",
      status: "Pending",
    },
    {
      taskname: "name6",
      environmentname: "env",

      responsedata: "data22",
      dueat: "18/07/22",
      modifiedat: "13/07/22",
      status: "In-Progress",
    },
    {
      taskname: "name7",
      environmentname: "env",

      responsedata: "data22",
      dueat: "9/07/22",
      modifiedat: "7/07/22",
      status: "Pending",
    },
    {
      taskname: "name7",
      environmentname: "env",

      responsedata: "data22",
      dueat: "18/07/22",
      modifiedat: "13/07/22",
      status: "Pending",
    },
    {
      taskname: "name7",
      environmentname: "env",

      responsedata: "data22",
      dueat: "9/07/22",
      modifiedat: "7/07/22",
      status: "Successful",
    },
    {
      taskname: "name7",
      environmentname: "env",

      responsedata: "data22",
      dueat: "18/07/22",
      modifiedat: "13/07/22",
      status: "Successful",
    },
    {
      taskname: "name11",
      environmentname: "env",

      responsedata: "data22",
      dueat: "9/07/22",
      modifiedat: "7/07/22",
      status: "Pending",
    },
    {
      taskname: "name12",
      environmentname: "env",

      responsedata: "data22",
      dueat: "18/07/22",
      modifiedat: "13/07/22",
      status: "Pending",
    },
  ];

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
    <Table
      dataSource={data}
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
  );
}

export default TableComponent;
