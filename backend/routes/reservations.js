// import express from 'express';
// import Reservation from '../models/Reservation.js';

// const router = express.Router();

// // POST /api/reservations — create a new reservation
// router.post('/', async (req, res) => {
//   try {
//     const { hotelId, rooms, email, cardNumber } = req.body;

//     if (!hotelId || !rooms || !email || !cardNumber) {
//       return res.status(400).json({ error: 'hotelId, rooms, email and cardNumber are required' });
//     }

//     const last4 = cardNumber.slice(-4);

//     const reservation = new Reservation({
//       hotel:     hotelId,
//       rooms:     Number(rooms),
//       email,
//       cardLast4: last4
//     });

//     const saved = await reservation.save();
//     return res.status(201).json(saved);
//   } catch (err) {
//     console.error('[reservations] create error:', err);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// export default router;
import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// POST: Create a new reservation
router.post('/', async (req, res) => {
  try {
    const { hotelId, rooms, email, cardNumber } = req.body;

    if (!hotelId || !rooms || !email || !cardNumber) {
      return res.status(400).json({ error: 'hotelId, rooms, email and cardNumber are required' });
    }

    const last4 = cardNumber.slice(-4);

    const reservation = new Reservation({
      hotel: hotelId,
      rooms: Number(rooms),
      email,
      cardLast4: last4
    });

    const saved = await reservation.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error('[reservations] create error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// ✅ GET: Fetch reservations by email
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const reservations = await Reservation.find({ email });
    return res.status(200).json(reservations);
  } catch (err) {
    console.error('[reservations] fetch error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;
