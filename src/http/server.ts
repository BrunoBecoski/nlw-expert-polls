import fastify from 'fastify';

import { createPoll } from './rotes/create-poll';
import { getPoll } from './rotes/get-poll';

const app = fastify();

app.register(createPoll);
app.register(getPoll);

app.listen({ port: 3333}).then(() => {
  console.log('🚀 HTTP server running');
});

