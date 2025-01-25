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
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post('/', async (req: Request, res: Response) => {
  const { content, color, completed } = req.body;
  const tasks = await prisma.task.create({
    data: {
      content,
      color,
      is_complete: completed,
    },
  });
  res.json(tasks);
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content, color, completed } = req.body;

  const tasks = await prisma.task.update({
    where: { id: Number(id) },
    data: {
      content,
      color,
      is_complete: completed,
    },
  });
  res.json(tasks);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const tasks = await prisma.task.delete({
    where: { id: Number(id) },
  });
  res.json(tasks);
});

export default router;
