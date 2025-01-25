/* GET home page. */
import { Request, Response, Router } from 'express';
import { prisma } from '../src/prisma';

const router = Router();
/* 
   GET /tasks
   POST /tasks
   PUT /tasks/:id
   DELETE /tasks/:id

*/

router.get('/', async (req: Request, res: Response) => {
  const tasks = await prisma.color.findMany();
  res.json(tasks);
});

export default router;
