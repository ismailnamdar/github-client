import React from "react";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import pathOr from "ramda/src/pathOr";
import {READ_REPO} from "../data/repository";
import NavBar from "../views/NavBar";
import {Column, Row} from "../views/Row";
import octocat from "../assets/Octocat.png";
import RepositoryCard from "../views/RepositoryCard";
import PullRequestTable from "../containers/PullRequestTable";
import IssueTable from "../containers/IssueTable";
import {useTranslation} from "react-i18next";
import Spin from "../views/Spin";
import ErrorComponent from "../views/Error";

const idSafeGet = pathOr(null, ['repository', 'id']);
const nameSafeGet = pathOr(null, ['repository', 'name']);
const descriptionSafeGet = pathOr(null, ['repository', 'description']);
const urlSafeGet = pathOr(null, ['repository', 'url']);

const Repository = () => {
  const { t } = useTranslation("translations");
  let { owner, reponame } = useParams();
  const { data = {}, error, loading } = useQuery(READ_REPO, {variables: {owner, name: reponame}});
  const flatData = {
    id: idSafeGet(data),
    name: nameSafeGet(data),
    description: descriptionSafeGet(data),
    url: urlSafeGet(data)
  };
  if(error) {
    return <ErrorComponent error={error}/>;
  }
  return (
    <div className="transition-item list-page">
      <NavBar>
        <Link to={"/"}>
            <img height={48} src={octocat} alt={"github logo"}/>
        </Link>
      </NavBar>
      <Row style={styles.row}>
        <Column style={styles.leftColumn}>
          <Spin spinning={loading}>
            <RepositoryCard
              url={flatData.url}
              name={flatData.name}
              description={flatData.description}
            />
          </Spin>
        </Column>
        <Column style={styles.middleColumn}>
          <div style={styles.container}>
            <h1>{t('issues')}</h1>
            <IssueTable owner={owner} reponame={reponame}/>
          </div>
        </Column>
        <Column style={styles.rightColumn}>
          <div style={styles.container}>
            <h1>{t('pullRequests')}</h1>
            <PullRequestTable owner={owner} reponame={reponame}/>
          </div>
        </Column>
      </Row>
    </div>
  );
};

const styles = {
  row: { flexWrap: 'wrap', width: '100%' },
  leftColumn: {minWidth: '300px', flex: 1, padding: '1em', alignItems: 'center' },
  middleColumn: {minWidth: '300px', flex: 4, padding: '1em'},
  rightColumn: {minWidth: '300px', flex: 4, padding: '1em'},
  container: { height: '100%', width: '100%' },
};

export default Repository;
