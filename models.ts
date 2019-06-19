import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
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

export {
  User,
}