import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Attempting to connect to MongoDB...');
console.log(`Connection string available: ${MONGODB_URI ? 'Yes' : 'No'}`);

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

testConnection();
// test