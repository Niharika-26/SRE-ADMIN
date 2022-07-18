import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Button } from "antd";
import { HistoryOutlined } from "@ant-design/icons";

function TableComponent() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const data = [
    {
      Task_name: "name1",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "naxszcxz2",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name3",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name4",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name5",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name6",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name11",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
    },
    {
      Task_name: "name12",
      Environment_name: "env",
      Request_data: "data",
      Response_data: "data22",
      Due_date: 23,
      Created_date: 24,
      Start_date: 1,
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
      dataIndex: "Task_name",
      key: "Task_name",
      render: (value) => t(value),
    },
    {
      title: t("c3"),
      dataIndex: "Environment_name",
      key: "Environment_name",
      render: (value) => t(value),
    },
    {
      title: t("c4"),
      dataIndex: "Request_data",
      key: "Request_data",
      render: (value) => t(value),
    },
    {
      title: t("c5"),
      dataIndex: "Response_data",
      key: "Response_data",
      render: (value) => t(value),
    },
    {
      title: t("c6"),
      dataIndex: "Due_date",
      key: "Due_date",
      render: (value) => t(value),
    },
    {
      title: t("c7"),
      dataIndex: "Created_date",
      key: "Created_date",
      render: (value) => t(value),
    },
    {
      title: t("c8"),
      dataIndex: "Start_date",
      key: "Start_date",
      render: (value) => t(value),
    },
    {
      title: t("c9"),
      dataIndex: "Task_name",
      key: "Task_name",
      render: (value) => t(value),
    },
    {
      title: t("c10"),
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
      columns={columns}
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
