import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String , required: true}
});

const User = mongoose.models.Co2User || mongoose.model('Co2User', userSchema);

export default User;