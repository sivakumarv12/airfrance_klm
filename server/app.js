const { ApolloServer,graphqlHTTP,makeExecutableSchema} = require("apollo-server-express");

const express = require("express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const GetDatasource = require("./data-source");
const app = express();

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        getDatasource: new GetDatasource(),
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();


app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);

// const executableSchema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// })

// // app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // Entrypoint
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: executableSchema,
//     context: data,
//     graphiql: true,
//   })
// )

// app.listen(port, () => {
//   console.log(`Running a server at http://localhost:${port}`)
// })