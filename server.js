import cors from 'cors';
import express from 'express';
import { authMiddleware, handleLogin } from './auth.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware} from '@apollo/server/express4';
import { readFile } from 'node:fs/promises';
import { resolvers } from './resolver.js';

const PORT = 9000;

const app = express();
// cors is to add response headers to allow cross origin request
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

// read schema.graphql and get string
const typeDefs = await readFile('./schema.graphql', 'utf8');

// create a apollo server instance
const apolloServer = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});
// integrate apollo server with express
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
