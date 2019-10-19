import {gql} from "apollo-boost";

export const READ_REPO = gql`
  query read($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      descriptionHTML
      shortDescriptionHTML
      issues(first: 10) {
        totalCount
        nodes {
          id
          number
          title
        }
      }
      pullRequests(first:10) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
    }
  }
`;

export const READ_PULL_REQUESTS = gql`
  query read($owner: String!, $name: String!, $after: String, $before: String) { 
    repository(owner: $owner, name: $name) {
      id
      name
      url
      description
      descriptionHTML
      shortDescriptionHTML
      pullRequests(first: 10, after: $after, before: $before) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          number
          title
          closed
        }
      }
    }
  }
`;

export const READ_ISSUES = gql`
  query read($owner: String!, $name: String!, $after: String, $before: String) { 
    repository(owner: $owner, name: $name) {
      id
      name
      url
      description
      descriptionHTML
      shortDescriptionHTML
      issues(first: 10, after: $after, before: $before) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          number
          title
          closed
        }
      }
    }
  }
`;
