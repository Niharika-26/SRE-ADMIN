import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Button, Tag } from "antd";
import { HistoryOutlined } from "@ant-design/icons";


function TableComponent() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
 
  const data = [
    {
      Task_name: "name1",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '2/07/22',
      Modified_at: '1/07/22',
      Status: "Pending"
     
    },
    {
      Task_name: "ship",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '23/07/22',
      Modified_at: '10/07/22',
      Status: "Failed"
    },
    {
      Task_name: "name3",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '18/07/22',
      Modified_at: '3/07/22',
      Status: "Failed"
    },
    {
      Task_name: "name4",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '15/07/22',
      Modified_at: '10/07/22',
      Status: "In-Progress"
    },
    {
      Task_name: "name5",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '24/08/22',
      Modified_at: '30/07/22',
      Status: "Pending"
    },
    {
      Task_name: "name6",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '18/07/22',
      Modified_at: '13/07/22',
      Status: "In-Progress"
    },
    {
      Task_name: "name7",
      Environment_name: "env",
     
      Response_data: "data22",
      Due_at: '9/07/22',
      Modified_at: '7/07/22',
      Status: "Pending"
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '18/07/22',
      Modified_at: '13/07/22',
      Status: "Pending"
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '9/07/22',
      Modified_at: '7/07/22',
      Status: "Successful"
    },
    {
      Task_name: "name7",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '18/07/22',
      Modified_at: '13/07/22',
      Status: "Successful"
    },
    {
      Task_name: "name11",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '9/07/22',
      Modified_at: '7/07/22',
      Status: "Pending"
    },
    {
      Task_name: "name12",
      Environment_name: "env",
      
      Response_data: "data22",
      Due_at: '18/07/22',
      Modified_at: '13/07/22',
      Status: "Pending"
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
      dataIndex: "Response_data",
      key: "Response_data",
      render: (value) => t(value),
    },
    {
      title: t("c5"),
      dataIndex: "Due_at",
      key: "Due_at",
      render: (value) => t(value),
    },
    
    {
      title: t("c6"),
      dataIndex: "Modified_at",
      key: "Modified_at",
      render: (value) => t(value),
    },
    {
      title: t("c7"),
      dataIndex: "Status",
      key: "Status",
      // render: (value) => t(value),
      render: (value) => {
        let color = "blue";

        if (value === 'Pending') {
          color = 'blue';
        }
        else if(value === 'In-Progress') {
          color = 'yellow'
        }
        else if(value === 'Failed') {
          color = 'red'
        }
        else {color = 'green'}

        return (
          <Tag style={{"width":100, "text-align":"center"}} color={color} key={value}>
            {value.toUpperCase()}
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
