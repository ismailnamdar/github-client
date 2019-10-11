import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const READ_REPO = gql`
   query {
    repository(name:"reactjs") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const {data = {}} = useQuery(READ_REPO);
  return <div>{JSON.stringify(data, 0, 2)}</div>
};

export default Home;
