import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controller/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
router.get('/checkAuthentication', (req, res) => {
  res.send('Welcome');
});
router.get('/:id', verifyUser, getUser);
router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/', verifyAdmin, getAllUser);

export default router;
