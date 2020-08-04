import express from 'express';

import routes from './routes';

const app = express();

app.get('/users', (request, response) => {
  return response.json({ ok: true });
});

app.listen(3333);
