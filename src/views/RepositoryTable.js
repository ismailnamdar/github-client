import React from "react";
import Table from "./Table";

const RepositoryTable = ({data, columnKeys}) => {
  return (
    <Table data={data} columnKeys={['id', 'name', 'description']}/>
  )
};

export default RepositoryTable;
