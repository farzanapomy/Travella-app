import jwt from 'jsonwebtoken';
import { errorFunction } from './error.js';

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorFunction(401, 'You are not allowed to login'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorFunction(401, 'Token is not valid'));
    }
    req.user = user;
    next();
  });
};
export const verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        
    }
  });
};
