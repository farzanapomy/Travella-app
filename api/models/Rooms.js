import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  roomPrice: {
    type: Number,
    require: true,
  },
  maxPeople: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  roomNumbers: {
    type: [{}],
    require: true,
  },
});
export default mongoose.model('Room', RoomSchema);
