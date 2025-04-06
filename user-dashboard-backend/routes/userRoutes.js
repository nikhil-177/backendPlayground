import express from 'express';
import { signupValidator } from '../validators/authValidator.js';
import {validateRequest} from '../middlewares/signupValidator.js';
import { loginData, signupData } from '../controllers/userControllers.js';
import { authUser } from '../middlewares/authUser.js';
import { checkRole } from '../middlewares/checkRole.js';

const router = express.Router();

router.post('/signup',signupValidator,validateRequest,signupData);

router.post('/login', loginData);

router.get('/getuser', authUser, checkRole, (req, res) => {
  res.send('Get user data');
});

export default router;