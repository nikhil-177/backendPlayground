import express from 'express';
import { body } from 'express-validator';
import { addTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/routes.controller.js';

const router = express.Router();

router.post('/',[
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('completed').isBoolean().withMessage('Completed must be a boolean value')
], addTodo);
router.get('/', getAllTodos);
router.patch('/', updateTodo);
router.delete('/', deleteTodo);


export default router;