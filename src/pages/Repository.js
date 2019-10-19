import React from "react";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import pathOr from "ramda/src/pathOr";
import {READ_REPO} from "../data/repository";
import NavBar from "../views/NavBar";
import {Column, Row} from "../views/Row";
import octocat from "../assets/Octocat.png";
import RepositoryCard from "../views/RepositoryCard";
import PullRequestTable from "../components/PullRequestTable";
import IssueTable from "../components/IssueTable";

const idSafeGet = pathOr(null, ['repository', 'id']);
const nameSafeGet = pathOr(null, ['repository', 'name']);
const descriptionSafeGet = pathOr(null, ['repository', 'description']);
const urlSafeGet = pathOr(null, ['repository', 'url']);
const Repository = () => {
  let { owner, reponame } = useParams();
  const { data = {}, error, loading } = useQuery(READ_REPO, {variables: {owner, name: reponame}});
  const flatData = {
    id: idSafeGet(data),
    name: nameSafeGet(data),
    description: descriptionSafeGet(data),
    url: urlSafeGet(data)
  };
  return (
    <>
      <NavBar>
        <Link to={"/"}>
            <img height={48} src={octocat} alt={"github logo"}/>
        </Link>
      </NavBar>
      <Row style={{ flexWrap: 'wrap', width: '100%' }}>
        <Column style={{minWidth: '300px', flex: 1, padding: '1em', alignItems: 'center' }}>
          <RepositoryCard
            url={flatData.url}
            name={flatData.name}
            description={flatData.description}
          />
        </Column>
        <Column style={{minWidth: '300px', flex: 4, padding: '1em'}}>
          <div style={{ height: '100%', width: '100%' }}>
            <IssueTable owner={owner} reponame={reponame}/>
          </div>
        </Column>
        <Column style={{minWidth: '300px', flex: 4, padding: '1em'}}>
          <div style={{ height: '100%', width: '100%' }}>
            <PullRequestTable owner={owner} reponame={reponame}/>
          </div>
        </Column>
      </Row>
    </>
  );
};

export default Repository;
