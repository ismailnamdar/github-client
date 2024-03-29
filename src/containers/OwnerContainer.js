import React, { useState, useCallback } from 'react';
import {useQuery} from "@apollo/react-hooks";
import pathOr from "ramda/src/pathOr";
import { READ_OWNER_REPO } from "../data/owner";
import Input from "../components/Input";
import {Column, Row} from "../views/Row";
import ProfileCard from "../views/ProfileCard";
import RepositoryTable from "../components/RepositoryTable";
import Pagination from "../views/Pagination";
import Spin from "../views/Spin";
import NavBar from "../views/NavBar";
import {DEFAULT_ONE_PAGE_ELEMENT_SIZE, getOwner, setOwner} from "../configs/constants";

const idSafeGet = pathOr(null, ['repositoryOwner', 'id']);
const loginSafeGet = pathOr(null, ['repositoryOwner', 'login']);
const urlSafeGet = pathOr(null, ['repositoryOwner', 'url']);
const avatarUrlSafeGet = pathOr(null, ['repositoryOwner', 'avatarUrl']);
const repositoriesSafeGet = pathOr([], ['repositoryOwner', 'repositories', 'nodes']);
const pageInfoSafeGet = pathOr({}, ['repositoryOwner', 'repositories', 'pageInfo']);

const OwnerContainer = () => {
  const [searchValue, setSearchValue] = useState(getOwner());
  const [cursor, setCursor] = useState({first: DEFAULT_ONE_PAGE_ELEMENT_SIZE});
  const {data = {}, error, loading} = useQuery(READ_OWNER_REPO, { variables: {login: searchValue, ...cursor}});
  const flatData = {
    id: idSafeGet(data),
    login: loginSafeGet(data),
    url: urlSafeGet(data),
    avatarUrl: avatarUrlSafeGet(data),
    repositories: repositoriesSafeGet(data).map(d => ({
      id: d.id,
      name: d.name,
      description: d.description,
      forkCount: d.forkCount
    })),
    pageInfo: pageInfoSafeGet(data)
  };

  const handleSearchValueChange = useCallback((newValue) => {
    setSearchValue(newValue);
    setOwner(newValue);
  }, [setSearchValue]);

  const handlePrevClick = useCallback(() => {
    setCursor({
      before: flatData.pageInfo.startCursor,
      last: DEFAULT_ONE_PAGE_ELEMENT_SIZE
    });
  }, [setCursor, flatData]);
  const handleNextClick = useCallback(() => {
    setCursor({
      after: flatData.pageInfo.endCursor,
      first: DEFAULT_ONE_PAGE_ELEMENT_SIZE
    });
  }, [setCursor, flatData]);
  return (
    <>
      <NavBar>
        <Input initialValue={searchValue} width={"50%"} onChange={handleSearchValueChange}/>
      </NavBar>
      <Row style={styles.rowStyle}>
        <Column style={styles.leftColumn}>
          <ProfileCard url={flatData.url} imageUrl={flatData.avatarUrl} title={flatData.login}/>
        </Column>
        <Column style={styles.rightColumn}>
          <div style={styles.tableContainer}>
            <Spin spinning={loading}>
              <>
                <RepositoryTable error={error} data={flatData.repositories} owner={searchValue}/>
                <Pagination
                  style={styles.pagination}
                  hasNextPage={flatData.pageInfo.hasNextPage}
                  hasPreviousPage={flatData.pageInfo.hasPreviousPage}
                  onPrevClick={handlePrevClick}
                  onNextClick={handleNextClick}/>
              </>
            </Spin>
          </div>
        </Column>
      </Row>
    </>
  );
};

const styles = {
  rowStyle: { flexWrap: 'wrap', width: '100%' },
  leftColumn: {minWidth: '300px', flex: 1, padding: '1em', alignItems: 'center' },
  rightColumn: {minWidth: '300px', flex: 8, padding: '1em' },
  tableContainer: { height: '100%', width: '100%' },
  pagination: { marginTop: "0.5em" }
}

export default OwnerContainer;

/*
Example data
{
  "data": {
    "repositoryOwner": {
      "id": "MDEyOk9yZ2FuaXphdGlvbjY0MTIwMzg=",
      "login": "reactjs",
      "avatarUrl": "https://avatars3.githubusercontent.com/u/6412038?v=4",
      "url": "https://github.com/reactjs",
      "repositories": {
        "totalDiskUsage": 3531457,
        "pageInfo": {
          "endCursor": "Y3Vyc29yOnYyOpHOARdfAA==",
          "startCursor": "Y3Vyc29yOnYyOpHOAQ_JOw=="
        },
        "totalCount": 75,
        "nodes": [
          {
            "id": "MDEwOlJlcG9zaXRvcnkxODMwODg2NA==",
            "forkCount": 231,
            "name": "express-react-views",
            "description": "This is an Express view engine which renders React components on server. It renders static markup and *does not* support mounting those views on the client.",
            "pullRequests": {
              "totalCount": 52
            },
            "issues": {
              "totalCount": 94
            }
          },
        ]
      }
    }
  }
}
 */
