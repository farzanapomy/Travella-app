import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 200,
    statusbar: 'success',
    message: 'This route is auth endpoint',
  });
});

export default router;
