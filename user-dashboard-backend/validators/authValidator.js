import { body } from 'express-validator';

export const signupValidator = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters'),

  body('email').isEmail().withMessage('Enter a valid email').normalizeEmail(),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('isAdmin').optional().isBoolean().withMessage('isAdmin must be a boolean'),
];
