import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import _ from "lodash";
import Home from './view'
import listResolver from "./resolvers/list";

const cache = new InMemoryCache({ dataIdFromObject: o => o.id });
const stateLink = withClientState({
  cache,
  ..._.merge(listResolver)
});
const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink
  ]),
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
