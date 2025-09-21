// backend/routes/services.js
import express from 'express';
const router = express.Router();
import pool from '../config/db.js';

// Lấy danh sách dịch vụ
router.get('/', (req, res) => {
  pool.query('SELECT * FROM services', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi truy vấn database' });
    }
    res.json(results);
  });
});

export default router;
