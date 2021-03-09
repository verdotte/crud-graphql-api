import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import app from './app';
import { MovieResolver } from './resolvers/movie';
import initializeDB from './database/index';

async function main() {
  const schema = await buildSchema({
    resolvers: [MovieResolver],
    container: Container,
    emitSchemaFile: true,
  });
  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`),
      initializeDB();
  });
}

main();
