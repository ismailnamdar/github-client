import React, { useState } from 'react';
import {useQuery} from "@apollo/react-hooks";
import styled from "styled-components";
import pathOr from "ramda/src/pathOr";
import { READ_OWNER_REPO } from "../data/owner";
import Input from "../components/Input";
import {Column, Row} from "../views/Row";
import ProfileCard from "../views/ProfileCard";
import RepositoryTable from "../views/RepositoryTable";
import Pagination from "../views/Pagination";

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 100%;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: grey;
  padding: 0.4em;
  background-color: #333;
`;

/*

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

const idSafeGet = pathOr(null, ['repositoryOwner', 'id']);
const loginSafeGet = pathOr(null, ['repositoryOwner', 'login']);
const urlSafeGet = pathOr(null, ['repositoryOwner', 'url']);
const avatarUrlSafeGet = pathOr(null, ['repositoryOwner', 'avatarUrl']);
const repositoriesSafeGet = pathOr([], ['repositoryOwner', 'repositories', 'nodes']);
const OwnerContainer = () => {
  const [searchValue, setSearchValue] = useState("reactjs");
  const {data = {}, error, loading} = useQuery(READ_OWNER_REPO, { variables: {login: searchValue}});
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
    }))
  };
  return (
    <>
      <SearchBar>
        <Input initialValue={searchValue} width={"50%"} onChange={setSearchValue}/>
      </SearchBar>
      <Row style={{ flexWrap: 'wrap', width: '100%' }}>
        <Column style={{minWidth: '300px', flex: 1, padding: '1em', alignItems: 'center' }}>
          <ProfileCard url={flatData.url} imageUrl={flatData.avatarUrl} title={flatData.login}/>
        </Column>
        <Column style={{minWidth: '300px', flex: 8, padding: '1em'}}>
          <div style={{ height: '100%', width: '100%' }}>
            <RepositoryTable data={flatData.repositories} />
            <Pagination/>
          </div>
        </Column>
      </Row>
    </>
  );
};

export default OwnerContainer;
