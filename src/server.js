import express from "express";
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'; 
import db from './db/data'
import Forum from './graphql/resolvers/Forum'
import User from './graphql/resolvers/User'
import Message from './graphql/resolvers/Message'
import Query from './graphql/resolvers/Query'
import Mutation from './graphql/resolvers/Mutation'
 
// Provide resolver functions for your schema fields
const resolvers = {
    Forum,
    User,
    Message,
    Query,
    Mutation,
};
 
const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        context: {
            db
        } 
    });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);