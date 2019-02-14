import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const GRAPHQL_ENDPOINT = `https://graphql.contentstack.com/stacks/blt27375ee3faaf9bcb?environment=development&access_token=cs4ea368e22cdf93943a9923dd`;

const apolloClient = () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}
export default apolloClient;
