import { Router } from 'express';

const connectionsRouter = Router();

connectionsRouter.use('/', (request, response) => {
  return response.json({ message: true });
});

connectionsRouter.post('/', (request, response) => {
  return response.json({ message: true });
});

export default connectionsRouter;
