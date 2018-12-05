require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const isEmail = require('isemail');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const MovieDataSource = require('./data-sources/movie');
const LikesDataSource = require('./data-sources/likes');

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // simple auth check on every request
    const auth = (req.headers && req.headers.authorization) || '';
    const email = new Buffer(auth, 'base64').toString('ascii');

    return { user: isEmail.validate(email) ? email : null };
  },
  dataSources: () => ({
    moviesAPI: new MovieDataSource(),
    likesAPI: new LikesDataSource(),
  }),
});

// Start our server
server.listen().then(({ url }) => console.log(`🚀 app running at ${url}`));
