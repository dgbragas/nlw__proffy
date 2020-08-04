import { Router } from 'express';

const classesRouter = Router();

classesRouter.get('/', (request, response) => {
  return response.json({ message: 'Hi' });
});

classesRouter.post('/', (request, response) => {
  const data = request.body;
  console.log(data);
  return response.send();
});

export default classesRouter;
