import express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getByCity,
  getHotel,
  updateHotel,
} from '../controller/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create
router.post('/create-hotels', verifyAdmin, createHotel);
// update
router.put('/:id', verifyAdmin, updateHotel);
// delete
router.delete('/:id', verifyAdmin, deleteHotel);
// get
router.get('/find/:id', getHotel);
// get all
router.get('/', getAllHotel);
router.get('/getByCity', getByCity);
router.get('/getByType', getAllHotel);

export default router;
