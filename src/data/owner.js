import {gql} from "apollo-boost";

export const READ_OWNER_REPO = gql`
    query read($login: String!, $first: Int, $last: Int, $after: String, $before: String) { 
      repositoryOwner(login: $login) {
          id
          login
          avatarUrl
          url
          repositories(first: $first, last: $last, after: $after, before: $before) {
            totalDiskUsage
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
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
