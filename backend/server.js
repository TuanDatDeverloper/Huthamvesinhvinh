// backend/server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Route mẫu kiểm tra server
app.get('/', (req, res) => {
  res.send('Backend server đang chạy!');
});

import servicesRoutes from './routes/services.js';
app.use('/api/services', servicesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
