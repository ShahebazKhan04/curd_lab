import express from 'express';
import { createUser, userDelete } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/userCreate', createUser);
userRouter.delete('/userDelete/:id' , userDelete)

export default userRouter;