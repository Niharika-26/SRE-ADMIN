import { Input } from 'antd';
import React from 'react';
const { Search } = Input;


const onSearch = (value) => console.log(value);

const SearchFilter = () => (
    <Search
      placeholder="Search Task"
      allowClear 
      enterButton
      size="large"
      onSearch={onSearch}
      style={{"width":500}}
    />
); 

export default SearchFilter;