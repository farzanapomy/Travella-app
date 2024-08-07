import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  photos: {
    type: [String],
  },
});
export default mongoose.model('Hotel', HotelSchema);
