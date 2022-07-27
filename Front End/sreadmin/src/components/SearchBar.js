import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/SearchBar.css";
const { Search } = Input;

const SearchBar = (props) => {
  const { t } = useTranslation();
  return (
    <div className="searchbar">
      <Search
        placeholder={t("taskSearch")}
        allowClear
        enterButton
        size="middle"
        onSearch={(value) => props.handleSearch(value)}
      />
    </div>
  );
};

export default SearchBar;
