import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/SearchBar.css";
const { Search } = Input;

const SearchBar = (props) => {
  const onSearch = (value) => props.handleSearch(value);
  const { t } = useTranslation();
  return (
    <div className="searchbar">
      <Search
        placeholder={t("taskSearch")}
        allowClear
        enterButton
        size="middle"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchBar;
