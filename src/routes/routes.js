import express from 'express';
import { sum, subtract } from '../utils/math.js';

const router = express.Router();

router.get('/ping', (req, res) => res.send('pong'));
router.get('/sum', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: sum(Number(a), Number(b)) });
});
router.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: subtract(Number(a), Number(b)) });
});

export default router;
