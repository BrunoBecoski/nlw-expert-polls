import fastify from 'fastify';

import { createPoll } from './rotes/create-poll';

const app = fastify();

app.register(createPoll)

app.listen({ port: 3333}).then(() => {
  console.log('🚀 HTTP server running');
});

