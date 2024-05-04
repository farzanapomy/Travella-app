import User from '../models/User.js';

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    console.log('updatedUser', updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been Delete ');
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    console.log('User', user);
    if (!user) {
      res.status(200).json({
        message: "Couldn't find",
      });
    }
    res.status(200).json(User);
  } catch (error) {
    next(error);
  }
};
export const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    console.log('updatedUser', user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
