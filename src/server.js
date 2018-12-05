require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const isEmail = require('isemail');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  // resolvers,
});

// Start our server
server.listen().then(({ url }) => console.log(`🚀 app running at ${url}`));
