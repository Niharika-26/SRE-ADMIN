import React from 'react';

import {Table, Button}  from "antd";
import {HistoryOutlined} from "@ant-design/icons";


function TableComponent(){

    const data =[
        {
    
          Task_name: 'name1',
          Environment_name : 'env',
          Request_data:'data',
          Response_data :'data22',
          Due_date:23,
          Created_date:24,
          Start_date: 1,
          key:'1'
    
        },
        {
    
        
    
          Task_name: 'naxszcxz2',
          Environment_name : 'env',
          Request_data:'data',
          Response_data :'data22',
          Due_date:23,
          Created_date:24,
          Start_date: 1,
          key:'2'
      
        },
        {
    
        
    
        Task_name: 'name3',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'3'
    
      },{
    
        
    
        Task_name: 'name4',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'4'
    
      },{
    
        
    
        Task_name: 'name5',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'5'
    
      },{
    
        
    
        Task_name: 'name6',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'6'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'7'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'8'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'9'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'10'
    
      },{
    
        
    
        Task_name: 'name11',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'11'
    
      },
      {
    
        
    
        Task_name: 'name12',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'12'
    
      },
      ]
      
    const columns = [
        {
            title:'Sr. No.',
            dataIndex:'key',
            key:'key'
        },
      {
        title:'Task name ',
        dataIndex:'Task_name',
        key:'Task_name'
      },
      {
        title:'Environment name ',
        dataIndex:'Environment_name',
        key:'Environment_name'
      },
      {
        title:'Request data ',
        dataIndex:'Request_data',
        key:'Request_data'
      },
      {
        title:'Response data ',
        dataIndex:'Response_data',
        key:'Response_data'
      },
      {
        title:'Due date ',
        dataIndex:'Due_date',
        key:'Due_date'
      },
      {
        title:'Created date ',
        dataIndex:'Created_date',
        key:'Created_date'
      },
      {
        title:'Start date ',
        dataIndex:'Start_date',
        key:'Start_date'
      },
      {
        title:'Status ',
        dataIndex:'Task_name',
        key:'Task_name'
      },
      {
        title:'Reschedule',
        data:'',
        key:'key',
           render: (text, record) => (
        <Button style={{"width":100}} onClick={()=> console.log(record)}>
      <HistoryOutlined />
        </Button>
       ),
      }
      
    ]
    

   
  return (

    <Table 
        dataSource={data}
        columns={columns}
        
        bordered
        >

    </Table>


  );
  
};

export default TableComponent;