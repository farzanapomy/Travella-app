import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';
import { errorFunction } from '../utils/handleError.js';

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    console.log('updatedRoom', updatedRoom);
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json('Room has been Delete ');
  } catch (error) {
    next(error);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    console.log('Room', room);
    if (!room) {
      res.status(200).json({
        message: "Couldn't find",
      });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
export const getAllRoom = async (req, res, next) => {
  try {
    const room = await Room.find();
    console.log('updatedRoom', room);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelId);
    const rooms = await Promise.all(
      hotel.rooms.map((id) => {
        return Room.findById(id);
      })
    );
    const validRooms = rooms.filter((room) => room !== null);
    return res.status(200).json(validRooms);
  } catch (error) {
    next(error);
  }
};
