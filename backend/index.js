// index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import connectToMongo from './db.js';
import authRoutes  from './routes/auth.js';
import hotelRoutes from './routes/hotels.js';
import reservationRoutes from './routes/reservations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const port = process.env.PORT || 5000;

connectToMongo();

app.use(cors());                  
app.use(express.json());           

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth',  authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/reservations', reservationRoutes);
app.get('/', (req, res) => {
  res.send('✅ Express is up on port ' + port);
});





app.listen(port, () => {
  console.log(`Express API listening on port ${port}`);
});
