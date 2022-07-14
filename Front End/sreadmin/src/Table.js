import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Table, Button}  from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";

// const DataTable = () => {
//   const [gridData , setGridData]= useState([]);
  //const [loading, setLoading]=;

//   useEffect(()=>{
//     loadData();

//   }, [])
//   const loadData = async()=>{

//   }

function DataTable(){

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

  <div className='App'>
    
    <header className='App-header'>
    <Table 
        dataSource={data}
        columns={columns}
        bordered
        expandable={{
          expandedRowrender :(record)=>(
            <p style={{margin: 0}}>{record.info}</p>
          ),
          rowExpandable:(record)=> record.info !=="Not Expandable",

        }}
        >

    </Table>

    </header>
    
  </div>

  );
  
};

export default DataTable;