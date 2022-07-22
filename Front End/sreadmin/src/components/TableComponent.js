import React, { Fragment, useState } from "react";
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
      width: 70,
      align: "center",
      render: (value, item, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: t("c2"),
      dataIndex: "taskname",
      key: "taskname",
      align: "center",
    },
    {
      title: t("c3"),
      dataIndex: "environmentname",
      key: "environmentname",
      align: "center",
      // width: 140,
    },

    {
      title: t("c4"),
      dataIndex: "responsedata",
      key: "responsedata",
      align: "center",
      width: 100,
      render: (value) => <ModalComponent responseData={value} />,
    },
    {
      title: t("c5"),
      width: 200,
      dataIndex: "dueat",
      key: "dueat",
      align: "center",
    },

    {
      title: t("c6"),
      dataIndex: "modifiedat",
      key: "modifiedat",
      align: "center",
      width: 200,
    },
    {
      title: t("c7"),
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 115,
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
      align: "center",
      width: 115,
      render: (text, record) => (
        <Button
          style={{ width: 100 }}
          onClick={() => props.scheduleHandler(record)}
        >
          <HistoryOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default TableComponent;
