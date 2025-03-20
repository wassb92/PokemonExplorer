import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    headers: {
      "content-type": "application/json",
      accept: "*/*",
    },
    fetchOptions: {
      method: "POST",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
