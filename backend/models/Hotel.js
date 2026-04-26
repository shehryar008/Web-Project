import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    facilities: {
        wifi: { type: Boolean, default: false },
        spa: { type: Boolean, default: false },
        food: { type: Boolean, default: false },
        telephone: { type: Boolean, default: false },
        gym: { type: Boolean, default: false },
        kitchen: { type: Boolean, default: false }
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    thumbnailImage: { type: String },
    hotelImages: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Hotel
    || mongoose.model('Hotel', HotelSchema);
