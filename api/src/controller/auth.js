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

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(errorFunction(400, 'Wrong password'));
    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    const { password, isAdmin, ...other } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(200)
      .json({ isAdmin, ...other });
  } catch (error) {
    next(error);
  }
};
