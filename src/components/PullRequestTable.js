import React, { useCallback, useState } from "react";
import {useQuery} from "@apollo/react-hooks";
import pathOr from "ramda/src/pathOr";
import Table from "../views/Table";
import {READ_PULL_REQUESTS} from "../data/repository";
import Pagination from "../views/Pagination";
import {useTranslation} from "react-i18next";

const pullRequestsSafeGet = pathOr([], ['repository', 'pullRequests', 'nodes']);
const pageInfoSafeGet = pathOr({}, ['repository', 'pullRequests', 'pageInfo']);

const PullRequestTable = ({ owner, reponame }) => {
  const { t } = useTranslation("translations");
  const [cursor, setCursor] = useState({});
  const { data = {}, loading, error} = useQuery(READ_PULL_REQUESTS, { variables: { owner, name: reponame, ...cursor}});
  const flatData = {
    pullRequests: pullRequestsSafeGet(data),
    pageInfo: pageInfoSafeGet(data)
  };

  const handlePrevClick = useCallback(() => {
    setCursor({before: flatData.pageInfo.startCursor});
  }, [setCursor, flatData]);
  const handleNextClick = useCallback(() => {
    setCursor({after: flatData.pageInfo.endCursor});
  }, [setCursor, flatData]);

  const columnConfigs = [
    {key: 'number'},
    {key: 'title', title: t("title")},
    {key: 'closed'},
    {key: ''}
  ];
  return (
    <>
      <Table
        error={error}
        loading={loading}
        data={flatData.pullRequests}
        columnConfigs={columnConfigs}/>
      <Pagination
        style={{ marginTop: "0.5em"}}
        hasNextPage={flatData.pageInfo.hasNextPage}
        hasPreviousPage={flatData.pageInfo.hasPreviousPage}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}/>
    </>
  );
};

export default PullRequestTable;
