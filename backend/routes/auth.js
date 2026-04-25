// backend/routes/auth.js

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Login from '../models/Login.js';

const router = express.Router();

// ─── Setup __dirname for ES modules ─────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ─── Multer storage for profile pictures ────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `user-${req.params.id}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });


// ↪ POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    if (await Login.findOne({ username })) {
      return res.status(400).json({ error: 'Username already taken' });
    }
    if (email && await Login.findOne({ email })) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const user = new Login({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
      const userId = req.body.userId;
      const imagePath = `/uploads/${req.file.filename}`;

      const user = await User.findByIdAndUpdate(userId, { image: imagePath }, { new: true });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      return res.json(user); // Send updated user with new image
  } catch (err) {
      console.error('[users] upload-image error:', err);
      return res.status(500).json({ error: 'Server error' });
  }
});

// ↪ POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }

    const user = await Login.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Logged in successfully',
      token,
      userId: user._id
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// ↪ GET /api/auth/user/:id
router.get('/user/:id', async (req, res) => {
  try {
    const user = await Login.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('Get user error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// ↪ PUT /api/auth/update/:id
router.put(
  '/update/:id',
  upload.single('profilePic'),
  async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const updates = {};

      if (username) updates.username = username;
      if (email)    updates.email = email;
      if (password) updates.password = password; // will be hashed by your pre-save hook

      if (req.file) {
        const baseURL = `${req.protocol}://${req.get('host')}/uploads/`;
        updates.profilePic = baseURL + req.file.filename;
      }

      const user = await Login.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      Object.assign(user, updates);
      await user.save();

      res.json({ message: 'Profile updated', user });
    } catch (err) {
      console.error('Profile update error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

export default router;
