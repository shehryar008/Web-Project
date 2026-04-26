// backend/routes/hotels.js

import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Hotel from '../models/Hotel.js';

const router = express.Router();

// ─── Setup __dirname for ES modules ─────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ─── Configure Multer storage (for POST) ────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// ─── GET /api/hotels — list all hotels ───────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find().sort({ createdAt: -1 });
    return res.json(hotels);
  } catch (err) {
    console.error('[hotels] list error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/hotels/user/:userId
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const hotels = await Hotel.find({ uploadedBy: userId }).sort({ createdAt: -1 });
    res.json(hotels);
  } catch (err) {
    console.error('[hotels] get-by-user error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// ─── GET /api/hotels/:id — fetch a single hotel by ID ────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    return res.json(hotel);
  } catch (err) {
    console.error('[hotels] get-by-id error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/hotels/user/:userId — fetch hotels uploaded by specific user
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const hotels = await Hotel.find({ uploadedBy: userId }).sort({ createdAt: -1 });
    return res.json(hotels);
  } catch (err) {
    console.error('[hotels] get-by-user error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});


// ─── POST /api/hotels — create a new hotel with image upload ────────────────
router.post(
  '/',
  upload.fields([
    { name: 'thumbnailImage', maxCount: 1 },
    { name: 'hotelImages',    maxCount: 10 }
  ]),
  async (req, res) => {
    try {
      const { hotelName, location, price, rooms, facilities, uploadedBy, rating } = req.body;
      if (!hotelName || !location || price == null || rooms == null) {
        return res
          .status(400)
          .json({ error: 'hotelName, location, price and rooms are required' });
      }

      const baseURL = `${req.protocol}://${req.get('host')}/uploads/`;

      const thumbnailFile = req.files['thumbnailImage']?.[0];
      const hotelFiles    = req.files['hotelImages'] || [];

      const thumbnailImage = thumbnailFile ? baseURL + thumbnailFile.filename : '';
      const hotelImages    = hotelFiles.map(f => baseURL + f.filename);

      let fac = {};
      if (facilities) {
        try { fac = JSON.parse(facilities); } catch { fac = {}; }
      }

      const newHotel = new Hotel({
        hotelName,
        location,
        price: Number(price),
        rooms: Number(rooms),
        facilities: fac,
        uploadedBy,
        thumbnailImage,
        hotelImages,
        rating: rating != null ? Number(rating) : 0
      });

      const saved = await newHotel.save();
      return res.status(201).json(saved);
    } catch (err) {
      console.error('[hotels] create error:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  }
);

export default router;
