import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createHttpLink = () => {
  return new HttpLink({
     uri: "http://localhost:4000/graphql",
     headers: {
       Authorization: localStorage.getItem("token") || "",
     },
  });
 }

export const client = new ApolloClient({
  link: createHttpLink(),
  cache: new InMemoryCache(),
});

export const updateClientToken = () => {
  client.setLink(createHttpLink());
}