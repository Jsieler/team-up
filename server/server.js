const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');

const path = require('path');

// IMPORTING OUR TYPEDEFS AND RESOLVERS
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// CREATING A NEW APOLLO SERVER
const startServer = async () => {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  // STARTING APOLLO SERVER
  await server.start();

  // INTEGRATE OUR APOLLO SERVER WITH EXPRESS APPLICATION, AS MIDDLEWARE
  server.applyMiddleware({ app });

  // GRAPHQL LOG
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// CALLING SERVER START FUNCTION
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SERVING STATIC FILES
if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  app.use(express.static(path.join(__dirname, '../client/build')));

  // WILDCARD ROUTE
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
