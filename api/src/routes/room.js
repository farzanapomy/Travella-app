import express from 'express';
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getHotelRooms,
  getRoom,
  updateRoom,
  updateRoomIsBooked,
} from '../controller/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create
router.post('/create-rooms/:hotelId', verifyAdmin, createRoom);
// update
router.put('/:id', verifyAdmin, updateRoom);
router.put('/isBooked/:id', updateRoomIsBooked);
// delete
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);
// get
router.get('/:id', getRoom);
// get all
router.get('/', getAllRoom);
// get hotel rooms
router.get('/getHotelRoom/:hotelId', getHotelRooms);

export default router;
