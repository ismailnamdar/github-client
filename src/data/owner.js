import {gql} from "apollo-boost";

export const READ_OWNER_REPO = gql`
    query read($login: String!, $after: String) { 
      repositoryOwner(login: $login) {
          id
          login
          avatarUrl
          url
          repositories(first: 10, after: $after) {
            totalDiskUsage
            pageInfo {
              endCursor
              startCursor
            }
            totalCount
            nodes {
              id
              forkCount
              name
              description
              pullRequests {
                totalCount
              }
              issues {
                totalCount
              }
            }
          }
        }
    }
`;
