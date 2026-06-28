import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.controllers.js';

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:id')
    .put(updateTask)
    .delete(deleteTask);

export default router;