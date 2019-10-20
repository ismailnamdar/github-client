import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Table from "./Table";
import {useTranslation} from "react-i18next";

const RepositoryTable = ({owner, error, data}) => {
  let history = useHistory();
  const { t } = useTranslation("translations");
  const handleRowClick = useCallback((record) => {
    history.push({ pathname: '/repository/' + owner + "/" + record.name });
  }, [owner, history]);
  const columnConfigs = [
    {key: 'name', title: t("repoName")},
    {key: 'description', style: {wordBreak: "break-all"}, title: t("description")},
    {key: 'forkCount', style: {}, title: t("forkCount")}
  ];
  return (
    <Table error={error} data={data} onRowClick={handleRowClick} columnConfigs={columnConfigs}/>
  )
};

export default RepositoryTable;
