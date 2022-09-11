import { GraphQLServer } from "graphql-yoga";

let todos = [
  {
    id: "1",
    text: "GraphQLServer + Yoga",
    done: false,
  },
];

//Schema formatting
const typeDefs = `
  type Todo {
    id: ID!
    text: String!
    done: Boolean!
  }
  type Query {
    getTodos: [Todo]!
  }`;

  //Resolvers function that are going off and get that data from the server
  const resolvers = {
    Query: {
      getTodos: () => {
        return todos;
      },
    },
  };

  const server = new GraphQLServer({ typeDefs, resolvers });

  server.start(() => console.log("Server is running on http://localhost:4000"));
  