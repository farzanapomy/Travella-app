import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
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
  roomInfo: [{ roomNumber: { type: Number }, bookedDates: { type: [Date] } }],
});
export default mongoose.model('Room', RoomSchema);
