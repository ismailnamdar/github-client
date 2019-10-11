import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {GRAPHQL_API_BASE_URL} from "../configs/constants";

const client = new ApolloClient({
  uri: GRAPHQL_API_BASE_URL
});

const GraphqlProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default GraphqlProvider;

