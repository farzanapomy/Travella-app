import express from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controller/user.js';

const router = express.Router();
router.get('/checkAuthentication', (req, res) => {
  res.send('Welcome');
});
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.get('/', getAllUser);
router.delete('/:id', deleteUser);

export default router;
