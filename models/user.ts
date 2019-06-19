import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema({
  user: {
    unique: true,
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
    select: false,
  }
}));