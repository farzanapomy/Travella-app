import express from 'express';
import dotenv from 'dotenv';
import { connection, handleConnection } from './config/index.js';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/room.js';
import cookieParser from 'cookie-parser';
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors());
handleConnection();

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/hotels', hotelsRoute);
app.use('/api/v1/rooms', roomsRoute);
// error handlers
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res
    .status(errorStatus)
    .json({ success: false, message: errorMessage, stack: err.stack });
});

app.listen(8800, () => {
  connection();
  console.log('Server listening on', 8800);
});
