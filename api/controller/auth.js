import User from '../models/User.js';
import { errorFunction } from '../utils/handleError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register = async (req, res, next) => {
  try {
    console.log('object', parseInt(process.env.BCRYPT_SALT));
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).send('User created successfully').json(newUser);
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      return next(errorFunction(404, 'User not found'));
    }
    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      next(errorFunction(400, 'wrong password'));
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: req.body.isAdmin,
      },
      process.env.JWT_SECRET
    );
    const { password, isAdmin, ...other } = user._doc;
    res
      .cookies('access_token', token, {
        httpOnly: true,
      })
      .status(201)
      .send(other)
      .json(other);
  } catch (error) {
    next(error);
  }
};
