import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {GRAPHQL_API_BASE_URL} from "../configs/constants";

const httpLink = createHttpLink({
  uri: GRAPHQL_API_BASE_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token') || process.env.REACT_APP_AUTH_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  // uri: GRAPHQL_API_BASE_URL,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const GraphqlProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default GraphqlProvider;

