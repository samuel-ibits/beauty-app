// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service", // Assuming you have a Service model
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  customization: {
    type: String,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
