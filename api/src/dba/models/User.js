// userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: { type: String, unique: true },
  age: Number,
  userType: String,
  // Add other necessary fields
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
