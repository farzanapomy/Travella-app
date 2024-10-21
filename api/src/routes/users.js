import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
// router.get('/checkAuthentication', verifyToken, (req, res) => {
//   res.send('Welcome,You are logged in successfully');
// });
// router.get('/checkUser/:id', verifyUser, (req, res) => {
//   res.send('Welcome,You are logged in successfully');
// });
router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyUser, getUser);
router.get('/', verifyAdmin, getAllUser);

export default router;
