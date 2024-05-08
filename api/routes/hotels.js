import express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from '../controller/hotel.js';

const router = express.Router();

// create
router.post('/create-hotels', createHotel);
// update
router.put('/:id', updateHotel);
// delete
router.delete('/:id', deleteHotel);
// get
router.get('/:id', getHotel);
// get all
router.get('/', getAllHotel);

export default router;
