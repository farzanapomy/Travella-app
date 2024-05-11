import Room from '../models/Room.js';

export const createRoom = async (req, res, next) => {
  const Room = new Room(req.body);
  try {
    const createRoom = await Room.save();
    res.status(200).json(createRoom);
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
  try {
    await Room.findByIdAndDelete(req.params.id);
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
