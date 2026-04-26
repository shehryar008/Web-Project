import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const LoginSchema = new mongoose.Schema({
  username:    { type: String, required: true, unique: true },
  email:       { type: String, unique: true, sparse: true },
  password:    { type: String, required: true },
  profilePic:  { type: String },            
  createdAt:   { type: Date, default: Date.now },
});

LoginSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

LoginSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.Login 
  || mongoose.model('Login', LoginSchema);
