import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  hotel:       { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  rooms:       { type: Number, required: true },
  email:       { type: String, required: true },
  cardLast4:   { type: String },           // store last 4 digits only
  createdAt:   { type: Date, default: Date.now },
});

export default mongoose.models.Reservation 
  || mongoose.model('Reservation', ReservationSchema);
