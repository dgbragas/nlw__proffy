import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello' });
});

app.listen(3333);
