import jwt from 'jsonwebtoken';
import { errorFunction } from './handleError.js';

export const verifyToken = async (req, res, next) => {
  const token = req?.cookies?.access_token;
  if (!token) {
    console.log(token);
    return next(errorFunction(401, 'You are not authenticated'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorFunction(401, 'Token is not valid'));
    }
    req.user = user;
    next();
  });
};
// verify user
export const verifyUser = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(errorFunction(401, 'You are not authorized '));
    }
  });
};
// verify admin
export const verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req?.user?.isAdmin) {
      next();
    } else {
      return next(errorFunction(401, 'You are not authorized '));
    }
  });
};
