import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchFilter = (props) => {
  const { t } = useTranslation();
  return (
    <Search
      placeholder={t("taskSearch")}
      allowClear
      enterButton
      size="middle"
      onSearch={onSearch}
    />
  );
};

export default SearchFilter;
