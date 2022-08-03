import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Button, Tag } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import ModalComponent from "./ModalComponent";
import "./styles/Table.css";

// Function to format date
const dateFormat = (val) => {
  val = new Date(val);
  val =
    ("0" + val.getDate()).slice(-2) +
    "/" +
    ("0" + (val.getMonth() + 1)).slice(-2) +
    "/" +
    val.getFullYear() +
    " " +
    ("0" + val.getHours()).slice(-2) +
    ":" +
    ("0" + val.getMinutes()).slice(-2) +
    ":" +
    ("0" + val.getSeconds()).slice(-2);
  return val;
};

const TableComponent = (props) => {
  //For Globalization
  const { t } = useTranslation();
  //For Pagination
  const [page, setPage] = useState(1);
  //Defining columns of Table
  const columns = [
    {
      title: t("c1"),
      dataIndex: "key",
      key: "key",
      width: "4vw",
      align: "center",
      // To render Serial number
      render: (value, item, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: t("c2"),
      dataIndex: "taskname",
      key: "taskname",
      align: "left",
      width: "20vw",
      sorter: (a, b) => {
        return a.taskname.localeCompare(b.taskname);
      },
    },
    {
      title: t("c3"),
      dataIndex: "environmentname",
      key: "environmentname",
      align: "center",
      width: "10vw",
      sorter: (a, b) => {
        return a.environmentname.localeCompare(b.environmentname);
      },
    },

    {
      title: t("c4"),
      dataIndex: "responsedata",
      key: "responsedata",
      align: "center",
      width: "5vw",
      //To render eye buttoned modal to show response data
      render: (value) => <ModalComponent responseData={value} />,
    },
    {
      title: t("c5"),
      width: "8vw",
      dataIndex: "dueat",
      key: "dueat",
      align: "center",
      sorter: (a, b) => {
        return a.dueat.localeCompare(b.dueat);
      },
      render: (val) => {
        return dateFormat(val);
      },
    },

    {
      title: t("c6"),
      dataIndex: "modifiedat",
      key: "modifiedat",
      align: "center",
      width: "8vw",
      sorter: (a, b) => {
        return a.modifiedat.localeCompare(b.modifiedat);
      },
      render: (val) => {
        return dateFormat(val);
      },
    },
    {
      title: t("c7"),
      dataIndex: "status",
      key: "status",
      align: "center",
      width: "7vw",
      //To represent status in tags
      render: (val) => {
        let color = "blue";
        val = val.toLowerCase();

        if (val.trim() === "p") {
          color = "yellow";
          val = "pending";
        } else if (val === "i") {
          color = "blue";
          val = "in progress";
        } else if (val === "f") {
          color = "red";
          val = "failed";
        } else {
          color = "green";
          val = "success";
        }

        return (
          <Tag
            style={{ width: "100%", textAlign: "center", fontSize: "1vw" }}
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
      align: "center",
      width: "6vw",
      //To render reschedule button
      render: (text, record) => (
        <Button
          align="center"
          style={{ width: "100%" }}
          onClick={() => props.scheduleHandler(record)}
        >
          <HistoryOutlined />
        </Button>
      ),
    },
  ];

  return (
    <div className="tableout">
      <div className="tablein">
        <Table
          scroll={{ y: 500 }}
          dataSource={props.data}
          loading={props.isLoading}
          columns={columns}
          showSizeChanger="false"
          size="small"
          bordered
          pagination={{
            total: props.data.length,
            showSizeChanger: false,
            size: "default",
            onChange(current) {
              setPage(current);
            },
          }}
        ></Table>
      </div>
    </div>
  );
};

export default TableComponent;
