# Fullstack GraphQL Workshop

Welcome to the server portion of the workshop! For the morning session, we will be building a GraphQL server based on the [Movie DB REST API](https://developers.themoviedb.org/3/getting-started/introduction).

### File Structure (in order of importance):

- `server.js`: Where all the magic happens to set up Apollo Server
- `schema.js`: Your GraphQL schema goes here
- `resolvers/`: Write your resolvers for each type in this folder
- `data-sources/`: Your data sources separate out the data fetching logic from your resolvers

### Running on CodeSandbox

[![Edit graphql-server-workshop](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/00-start/?fontsize=14)

1. Click the button above to navigate to the CodeSandbox. Fork it to your account by clicking Fork in the top menu.
2. That's it! CodeSandbox features HMR, a console, and a test runner. It's pretty awesome. 😍 If you see an error message, don't worry - it's because we haven't built our server yet.

### Branches

If you get stuck at any time, click the sandbox for the exercise you want and fork it.

- [`00-start`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/00-start): Your starting point
- [`01-apollo-server`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/01-apollo-server): Setting up Apollo Server
- [`02-schema`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/02-schema): Writing your schema
- [`03-data-sources`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/03-data-sources): Building data sources
- [`04-authentication`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/04-authentication): Implementing authentication
- [`05-final`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server): Hooking everything up to resolvers

### Helpful links

- [Apollo platform docs](https://www.apollographql.com/docs/)
- [Writing a schema](https://www.apollographql.com/docs/apollo-server/essentials/schema.html)
- [Learn about resolvers here](https://www.apollographql.com/docs/graphql-tools/resolvers.html)
- [Data sources docs](https://www.apollographql.com/docs/apollo-server/features/data-sources.html)

## Running locally

1. Clone the repo: `git clone https://github.com/apollographql/fullstack-workshop-server`
2. Then, make a `.env` file with an `ENGINE_API_KEY` environment variable. You can get one [here](https://engine.apollographql.com/) by creating your own Engine service.
3. Install the dependencies: `npm i`
4. Start the server: `npm start`. Your server will be running on port 3000. Your GraphQL server is available at `localhost:3000/graphql` and your GraphQL Playground is available at `localhost:3000/graphql`.
