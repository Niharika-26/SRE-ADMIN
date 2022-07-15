import React from 'react';

import {Table, Button}  from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";



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
          key:'1'
      
        },
        {
    
        
    
        Task_name: 'name3',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'1'
    
      },{
    
        
    
        Task_name: 'name4',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'1'
    
      },{
    
        
    
        Task_name: 'name5',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'1'
    
      },{
    
        
    
        Task_name: 'name6',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'1'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'2'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'3'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'4'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'5'
    
      },{
    
        
    
        Task_name: 'name7',
        Environment_name : 'env',
        Request_data:'data',
        Response_data :'data22',
        Due_date:23,
        Created_date:24,
        Start_date: 1,
        key:'6'
    
      },
      ]
    const columns = [
        {
            title:'Sr. No.',
            dataIndex:'srno',
            key:'key',
            render: (_,record,index) => <p>{index+1}</p>,

        },
      {
        title:'Task name ',
        dataIndex:'Task_name',
        key:'key'
      },
      {
        title:' Environment name ',
        dataIndex:'Environment_name',
        key:'key'
      },
      {
        title:'Request data ',
        dataIndex:'Request_data',
        key:'key'
      },
      {
        title:'Response data ',
        dataIndex:'Response_data',
        key:'key'
      },
      {
        title:'Due date ',
        dataIndex:'Due_date',
        key:'key'
      },
      {
        title:'Created date ',
        dataIndex:'Created_date',
        key:'key'
      },
      {
        title:'Start date ',
        dataIndex:'Start_date',
        key:'key'
      },
      {
        title:'Status ',
        dataIndex:'Task_name',
        key:'key'
      },
      {
        title:'Reschedule',
        data:'',
        key:'key',
      //render: (_,record,index) => <button>{index+1}</button>,
      render: (text, record) => (
        <Button onClick={()=> console.log(record)}>
         <PlusCircleOutlined />
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