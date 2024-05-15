import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log('Connected to Mongoose');
  } catch (error) {
    throw error;
  }
};

export const handleConnection = () => {
  mongoose.connection.on('disconnected', () => {
    console.log('mongoose connection disconnected');
  });
  mongoose.connection.on('connected', () => {
    console.log('mongoose connection connected');
  });
};
